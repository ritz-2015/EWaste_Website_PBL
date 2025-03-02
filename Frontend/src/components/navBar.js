import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { removeUser } from '../utils/userSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate =useNavigate();
  const handleSignOut = (e)=>{
    e.preventDefault();
    dispatch(removeUser());
    navigate("/");
  }
  return (
    <nav className="bg-white border-gray-20 bg-gradient-to-b from-[#95E485] to-[#DAFEA2] z-10">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a  className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://t3.ftcdn.net/jpg/04/58/11/48/360_F_458114856_jo4H4mRD64DpZA5ym1GYNXU8c6vKvC0Q.jpg" className="h-8" alt="Flowbite Logo" />
        <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">EcoJugaad</span>
    </a>
    <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
      <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border bg-opacity-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 text-xl text-white">
        <li>
          <Link to={'/signIn/home'}  className="block py-1 px-1  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:bg-transparent hover:text-green-800" aria-current="page">Home </Link>
        </li>
        <li>
          <Link to={'/map'} className="block py-1 px-1  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:bg-transparent hover:text-green-800">Search For Factories</Link>
        </li>
        <li>
          <Link to={'/booking'}  className="block py-1 px-1  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:bg-transparent hover:text-green-800">Booking</Link>
        </li>
        <li>
          <Link to={'/contact'} className="block py-1 px-1  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:bg-transparent hover:text-green-800">Contact Us</Link>
        </li>
        <li>
          <Link to={'/profile'}  className="block py-1 px-1 rounded hover:bg-gray-100 md:hover:bg-transparent  hover:text-green-800">Profile</Link>
        </li>
        <li>
          <Link to={'/about'}  className="block py-1 px-1  rounded hover:bg-gray-100 md:hover:bg-transparent   hover:text-green-800">About Us</Link>
        </li>
        <li>
          <button onClick={handleSignOut} className='text-white hover:text-green-800 p-1 '>Sign Out</button>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar;