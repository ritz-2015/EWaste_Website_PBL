import React, { useState, useEffect, useRef,useContext } from "react";
import mapboxgl , {Map, Popup} from "mapbox-gl";
import { facility } from "../data/facility";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { calculateDistance } from "../utils/calculateLocation";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import {Link } from "react-router-dom"
import Navbar from "../components/navBar"
import UserContext from "../utils/UserContext"
import { useDispatch } from "react-redux";
import { addUserLocation } from "../utils/userSlice";
const Facility = {
  address: "",
  distance: 0,
  name: "",
  capacity: 0,
  lon: 0,
  lat: 0,
  contact: "",
  time: "",
  verified: false,
};


const getLocation = async () => {
  mapboxgl.accessToken = 'pk.eyJ1Ijoic2h1ZW5jZSIsImEiOiJjbG9wcmt3czMwYnZsMmtvNnpmNTRqdnl6In0.vLBhYMBZBl2kaOh1Fh44Bw';

  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      };

      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          const coordinates = [lon, lat];
          fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${lon},${lat}.json?access_token=${mapboxgl.accessToken}`)
            .then((response) => response.json())
            .then((data) => {
              const address = data.features[0]?.place_name || null;
              // console.log("Coordinates ",coordinates ,"Address", address)
              resolve({ coordinates, address });
            })
            .catch((error) => {
              console.error('Error fetching address:', error);
              resolve({ coordinates: null, address: null });
            });
        },
        (error) => {
          console.error(error);
          resolve({ coordinates: null, address: null });
        },
        options
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
      resolve({ coordinates: null, address: null });
    }
  });
};



const Efacilty = () => {
  const [facilityData, setFacilityData] = useState([]);
  const [clientLocation, setClientLocation] = useState({coordinates : null, address: null});
  const markersRef= useRef([]);
  const mapRef = useRef(Map | null);
  const userMarkersRef= useRef(mapboxgl.Marker | null);
  const [selectedFacility, setSelectedFacility] =useState(-1);
  const cardContainerRef = useRef(null)

  useEffect(() => {
    const fetchLocation = async () => {
      mapboxgl.accessToken ="pk.eyJ1Ijoic2h1ZW5jZSIsImEiOiJjbG9wcmt3czMwYnZsMmtvNnpmNTRqdnl6In0.vLBhYMBZBl2kaOh1Fh44Bw";
      const result = await getLocation();
      console.log(result);
      setClientLocation(result.coordinates);
      console.log(clientLocation)
    };

    fetchLocation();
  }, []);


  // useEffect(() => {
  //   // Initialize map when component mounts
  //   mapboxgl.accessToken =
  //     "pk.eyJ1Ijoic2h1ZW5jZSIsImEiOiJjbG9wcmt3czMwYnZsMmtvNnpmNTRqdnl6In0.vLBhYMBZBl2kaOh1Fh44Bw";
      
  //   setClientLocation([75.7139, 19.7515]);
  //   console.log(" Client Location ",clientLocation);
  // }, []);

  useEffect(()=>{
    console.log("Client Location ",clientLocation)
  },[clientLocation]);
  useEffect ( () => {
    if (clientLocation.length > 0) {
      const sortedFacilities = facility
        .map((facility) => ({
          ...facility,
          distance: calculateDistance(
            clientLocation[1],
            clientLocation[0],
            facility.lat,
            facility.lon
          ),
        }))
        .sort((a, b) => a.distance - b.distance);
  
      setFacilityData(sortedFacilities);
      console.log("Facility DATA: ", facilityData);
      console.log("Sorted List: ", sortedFacilities)
  
      // Initialize map once clientLocation is available
      const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: clientLocation,
        zoom: 10,
      });

      mapRef.current =map;
      
      const geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
      });
  
      map.addControl(geocoder);
  
      geocoder.on("result", function(event) {
        const { geometry, place_name } = event.result;
      
        if (geometry && geometry.coordinates) {
          const center = geometry.coordinates;
      
          const selectedLocationMarker = new mapboxgl.Marker()
            .setLngLat(center)
            .addTo(map);
      
          const popup = new mapboxgl.Popup().setHTML(
            `<h3 class="font-bold text-emerald-600 text-2xl">Selected Location</h3>
            <p>Address: ${place_name || "Address not available"}</p>`
          );
      
          selectedLocationMarker.setPopup(popup);
      
          // Find the nearest facility
          let nearestFacility = facility[0];
          let nearestDistance = calculateDistance(
            center[1],
            center[0],
            facility[0].lat,
            facility[0].lon
          );
      
          facility.forEach(facility => {
            const distance = calculateDistance(
              center[1],
              center[0],
              facility.lat,
              facility.lon
            );
      
            if (distance < nearestDistance) {
              nearestFacility = facility;
              nearestDistance = distance;
            }
          });
          getDirections(center, [nearestFacility.lon, nearestFacility.lat]);
        }
      }
      );
      map.addControl(new mapboxgl.NavigationControl(), "bottom-right")

      const userMarker = new mapboxgl.Marker({ color: "#256dd9" })
        .setLngLat(clientLocation)
        .addTo(map);

        userMarkersRef.current = userMarker;

      sortedFacilities.forEach((facility,index)=>{
        const popup1= new Popup().setHTML(
          `<h3 class="font-bold text-emerald-600 text-2xl">${facility.name}</h3>
              <p>Capacity: ${facility.capacity}</p>
              <p>Address: ${facility.address}</p>
              <p class="text-gray-600">Contact: ${facility.contact}</p>
              <p class="text-gray-600">Time: ${facility.time}</p>
              <p class="text-gray-600 ">Distance: ${facility.distance.toFixed(
                2
              )} km away</p>`
        );

        const marker = new mapboxgl.Marker({
          color: selectedFacility === index? "#02703f" : "#22b371",
        })
          .setLngLat([facility.lon,facility.lat])
          .setPopup(popup1)
     
        markersRef.current.push(marker);

        marker.addTo(map);

        marker.getElement().addEventListener("click", () => {
          const marker = markersRef.current[index];
          const popup1 = marker.getPopup();
          if (popup1) {
            if (popup1.isOpen()) {
              console.log('ROM TOM')
              popup1.remove();
            } else {
              if (mapRef.current) {
                popup1.addTo(mapRef.current);  
              }
            }
          }
          setSelectedFacility(index);
        });
        const directionsBtn = document.getElementById(`directionsBtn${index}`);
        if (directionsBtn) {
          directionsBtn.addEventListener("click", () => {
            if(clientLocation){
              getDirections(clientLocation, [facility.lon, facility.lat]);
            }
          });
        }
        
        popup1.on("close", () => {
          setSelectedFacility(null);
        });

      });

      return () => {
        map.remove();
      };

    }
  }, [clientLocation,selectedFacility]); // Add clientLocation as a dependency

  const getDirections = async (origin, destination) => {
    try {
      const response = await fetch(
        `https://api.mapbox.com/directions/v5/mapbox/walking/${origin[0]},${origin[1]};${destination[0]},${destination[1]}?alternatives=true&continue_straight=true&geometries=geojson&language=en&overview=full&steps=true&access_token=${mapboxgl.accessToken}`
      );
  
      const data = await response.json();
  
      if (data.code === "Ok" && mapRef.current) {
        const distanceInKm = data.routes[0].distance / 1000;
  
        const directionsLayerId = "directions";
        if (mapRef.current.getLayer(directionsLayerId)) {
          mapRef.current.removeLayer(directionsLayerId);
          mapRef.current.removeSource(directionsLayerId);
        }
  
        mapRef.current.addSource(directionsLayerId, {
          type: "geojson",
          data: {
            type: "Feature",
            properties: {},
            geometry: data.routes[0].geometry,
          },
        });
  
        mapRef.current.addLayer({
          id: directionsLayerId,
          type: "line",
          source: directionsLayerId,
          layout: {
            "line-join": "round",
            "line-cap": "round",
          },
          paint: {
            "line-color": "#3887be",
            "line-width": 5,
            "line-opacity": 0.75,
          },
        });
  
        const bounds = new mapboxgl.LngLatBounds();
        data.routes[0].geometry.coordinates.forEach(coord =>
          bounds.extend(coord)
        );
        mapRef.current.fitBounds(bounds, { padding: 20 });
  
        const routePopup = new mapboxgl.Popup({
          closeButton: false,
          closeOnClick: false,
          offset: 25,
          className: "h-8",
        })
          .setLngLat(data.routes[0].geometry.coordinates[0])
          .setHTML(
            `<p class="text-lg">Distance to Nearest Facility: ${distanceInKm.toFixed(
              2
            )} km</p>`
          )
          .addTo(mapRef.current);
      }
    } catch (error) {
      console.error("Error fetching directions:", error);
    }
  };
  
  
  useEffect(() => {
    if (
      selectedFacility !== null &&
      cardContainerRef.current &&
      mapRef.current
    ) {
      cardContainerRef.current.scrollTo({
        top: selectedFacility * 120,
        behavior: "smooth",
      });
    }
  }, [selectedFacility]);

  useEffect(() => {
    if (selectedFacility !== null && mapRef.current && markersRef.current) {
      const selectedMarker = markersRef.current[selectedFacility];
      const selectedMarkerLngLat = selectedMarker.getLngLat();

      mapRef.current.flyTo({
        center: selectedMarkerLngLat,
        essential: true,
      });

      markersRef.current.forEach((marker, index) => {
        marker.getElement().addEventListener("click", () => {
          setSelectedFacility(index);
        });
      });
      

      selectedMarker.getElement().click();
    }
  }, [selectedFacility])
  
  
  const {user,setUser} = useContext(UserContext);
  const dispatch =useDispatch();
  return(
    <div className="h-screen">
    <Navbar/>
    <div className="flex  h-[90%] overflow-hidden "> 
      <>
      <div
            ref={cardContainerRef}
            className="flex flex-col h-screen md:w-1/3 m-4 shadow-lg max-h-200 overflow-y-auto overflow-hidden"
          >
            {facilityData.map((info, index) => (
             
              <div
                key={index}
                className={`p-4 bg-white rounded-md border border-gray-300 cursor-pointer mb-4 
          ${selectedFacility === index ? "bg-green-200" : ""}`}
                onClick={() => {
                  setSelectedFacility(index);
                }}
              >
                <div className="flex justify-between items-center mb-2 ">
                  <h2 className="text-xl font-semibold">{info.name}</h2>
                  {info.verified ? (
                    <FaCheckCircle className="text-green-500 w-8 h-8 text-lg" />
                  ) : (
                    <FaTimesCircle className="text-red-500 w-8 h-8 text-lg" />
                  )}
                </div>
                <p className="text-gray-600">Capacity: {info.capacity}</p>
                <p className="text-gray-600">{info.address}</p>
                <div className="my-2">
                  <p className="text-lg text-gray-600">
                    Contact: {info.contact}
                  </p>
                  <p className="text-lg text-gray-600">Time: {info.time}</p>
                  <p className="text-lg pb-2 text-gray-600">
                    Distance: {info.distance.toFixed(2)} Km away
                  </p>
                  <div className="flex space-x-6 ">
                    <button
                      className="btn-md btn-primary bg-green-700 p-4 text-white rounded-md"
                      id={`directionsBtn${index}`}
                    >
                      Get Directions
                    </button>

                    <Link to="/booking" onClick={()=>{dispatch(addUserLocation({coordinates: [info.lon,info.lat],address: info.address}))}}  className=" btn-primary bg-green-700 p-4 text-center text-white rounded-md">
                      Book Recycling
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          </>
      <div id="map" className=" w-[70%] h-[700px] overflow-y-hidden"></div>
    </div>
    </div>
  )
      
      

  };
export default Efacilty;
