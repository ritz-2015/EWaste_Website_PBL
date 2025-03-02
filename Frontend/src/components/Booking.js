import React, { useState, useContext,useEffect } from 'react';
import Navbar from './navBar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Booking = () => {
  const navigate =  useNavigate();
    
  const user =useSelector((store)=> store.user);    
 console.log("User: ",user);
  useEffect(()=>{
    if(user.user === null){
      console.log("Hello");
      navigate('/');
    }
    
  },[user]);
  
  var [wasteName,setWastname] =useState("")

  var [values, setValues] = useState({
    userId: user?user?.user?.id:null,
    factoryId: 0,
    status: "booked",
    wasteName: "",
    location: user?.userLocation?.address? user.userLocation?.address:"",
    phoneNo: "",
    modelName: "",
    name: user?.user? user.user.name:""
  });
  console.log("Set Values: ",values.location);
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:3001/api/v1/booking', values);
    console.log("Response ", response);
    navigate('/success')
  }

  return (
    <div className='bg-gradient-to-b from-emerald-300 to-emerald-100 h-screen'>
      <Navbar />
    <form onSubmit={handleSubmit} className="max-w-md mx-auto m-16 p-4 bg-green-100 rounded-lg shadow-md">
      <div className="relative z-0 w-full mb-5 group">
        <input type='text' id='wasteName' value={values.wasteName}
          onChange={(e) => {setValues({ ...values, wasteName: e.target.value });
                            setWastname(e.target.value);
                            console.log("VALUSE: ",values.wasteName);
                            console.log("WASTE NAME ",wasteName);
                          }}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-green-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
        <label htmlFor="wasteName" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">E-Waste Name</label>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input id='modelName' type="text"
          onChange={(e) => setValues({ ...values, modelName: e.target.value })}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-green-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
        <label htmlFor="modelName" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Model Name</label>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input id='location' type="text" value={values.location}
          onChange={(e) => setValues({ ...values, location: e.target.value })}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-green-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
        <label htmlFor="location" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Location</label>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input id='name' type="text" value={values.name}
          onChange={(e) => setValues({ ...values, name: e.target.value })}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-green-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
        <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input type="tel" pattern="[0-9]{10}" 
          onChange={(e) => setValues({ ...values, phone: e.target.value })}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-green-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
        <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
      </div>
      <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Submit</button>
    </form>

    </div>
  );
}

export default Booking;
