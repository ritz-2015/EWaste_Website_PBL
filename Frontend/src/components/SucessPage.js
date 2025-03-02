import React from 'react'
import { Link } from 'react-router-dom'
const SucessPage = () => {
  return (
    <div className="max-w-md mx-auto m-16 p-8 bg-green-100 rounded-lg shadow-md bg-gradient-to-br from-green-200 to-green-100 text-center">
      <h2 className="text-2xl font-bold mb-4">Booking Successful!</h2>
      <p className="text-gray-800 dark:text-gray-300">Thank you for booking with us. Your request has been successfully submitted.</p>
      <p className="text-gray-800 dark:text-gray-300">We'll get back to you shortly.</p>
      <Link to="/map">
        <button className="mt-8 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Sell More</button>
      </Link>
    </div>
  )
}

export default SucessPage