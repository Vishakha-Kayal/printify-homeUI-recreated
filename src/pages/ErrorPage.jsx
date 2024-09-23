import React from 'react'
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-4">
          <h1 className="text-9xl font-bold text-purple-600">404</h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 mt-4">Oops! Page not found.</h2>
          <p className="text-gray-600 mt-2 text-lg md:text-xl">
            Sorry, we can't find the page you're looking for.
          </p>
          <NavLink
            to="/"
            className="mt-6 px-6 py-3 bg-[#6C5DD4] text-white rounded-lg text-lg hover:bg-purple-700 transition duration-300 ease-in-out"
          >
            Go Back Home
          </NavLink>
        </div>
      );
}

export default ErrorPage