import { calculateDistance } from "../utils/calculateLocation";

const sortFacilitiesByDistance = (
  clientLocation,
  facilities
) => {
  if (!clientLocation) {
    return facilities;
  }

  return facilities
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
};

export default sortFacilitiesByDistance;
