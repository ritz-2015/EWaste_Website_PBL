import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import {useContext, useEffect, useState } from 'react';
import UserContext from '../utils/UserContext';
import SignInPage from '../registration/SignInPage';
import { addUser } from '../utils/userSlice';
import {useDispatch} from 'react-redux';
import img1 from '../data/img-1.jpg'
export const HomePage = () => {
  
  const dispatch =useDispatch();
  useEffect( ()=> {
    axios.get('http://localhost:3001/api/v1/isAuthenticated')
    .then(
      res => {
        if(res.data.success){
          dispatch(addUser({name:res.data.data.name, id:res.data.data.id,email:res.data.data.email,points:0}))
          console.log("User Added sucessfull");
        }
        else{
          console.log("EXCECUTING PASSWORD FAILED");
        }
      }
    )
    .catch(err => {
      console.error('Error fetching authentication status:', err);
    });
  },[])
  
  return (
    <>
        <div className='bg-[#FEFEFE] h-[92%] text-[#FEFEFF] flex  '>
           <img src= {img1} alt="image" className='ml-1 '/>
          <div className='flex flex-col justify-around'>
            <h1 className='text-7xl ml-20 pt-20 text-black font-bold'>
                REDUCE
            </h1>
            <h1 className='text-9xl ml-20 pt-2 text-black font-bold reduce-text animate-bounce'>
                RECYCLE
            </h1>
            <h1 className='text-7xl ml-20 pt-2 text-black font-bold'>
                REUSE
            </h1>
            <h1 className='text-4xl ml-20 pt-4 text-[#248619]'>
                Often when you think you're at the end of something, 
            </h1>
            <h1 className='text-4xl ml-20  text-[#248619]'>
               You are at the beginning of something else. 
            </h1>
            <div className='pl-10 py-4 ml-20'>
            <Link to={'/map'} >
              <button
                        type="submit"
                        className="bg-[#] py-2 px-8 m-4 rounded-3xl  outline-none w-fit text-[#248619] font-bold shadow-md shadow-primary border-3 border-[#248619] hover:bg-[#248619] hover:text-white active:bg-[#FEFEFE] active:text-[#248619] mb-2 ">
                        {"Find Center"}
              </button>
            </Link>
            <Link to={'/booking'}>
              <button
                        type="submit"
                        className="bg-[#] py-2 m-4 px-8 rounded-3xl  outline-none w-fit text-[#248619] font-bold shadow-md shadow-primary border-3 border-[#248619] hover:bg-[#248619] hover:text-white active:bg-[#FEFEFE] active:text-[#248619] mb-2 ">
                        {"Booked"}
              </button>
            </Link>
            
            </div>
            </div>
           
            
        </div>
    </>
  )
}
