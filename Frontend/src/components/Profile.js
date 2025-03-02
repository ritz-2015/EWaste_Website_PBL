import React from 'react'
import { useSelector } from 'react-redux';
import Navbar from './navBar';

const Profile = () => {
    const user = useSelector((store)=>store.user);
    return (
    <div className='overflow-hidden'>
      <Navbar/>
      <div className='flex justify-center items-center h-screen bg-gray-200'>
        <div className='flex flex-col justify-center items-center p-24 bg-gradient-to-b from-emerald-400 to-green-100 rounded-lg'>
            <div>Profile</div>
            <img className='w-40 h-40' src='https://www.alleganyco.gov/wp-content/uploads/unknown-person-icon-Image-from.png' alt='Profile' />
            <h1>Name: {user?.user?.name}</h1>
            <h2>Email: {user?.user?.email}</h2>
            <h3>Points: {user?.user?.points}</h3>
        </div>
      </div>
    </div>
  )
}

export default Profile;