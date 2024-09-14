

import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full">
      {/* Top Banner */}
      <div className="bg-black text-white text-center py-2 text-xs">
        FREE SHIPPING for orders over $300. <a href="#" className="underline">Order today</a>
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex justify-between items-center py-3 border-b border-gray-300">
        {/* Left Section: Logo */}
        <div className="flex items-center space-x-1">
          <img
            src="https://a.storyblok.com/f/165154/261x55/ecf04f407f/gelato_logo_black.svg"
            alt="Logo"
            className="w-24" // Adjusted logo size
          />
        </div>

        <div className="hidden md:flex items-center space-x-5 text-sm text-gray-600">
          <button className="font-medium hover:text-black flex items-center">
            <i className="fas fa-headset mr-1"></i> 
            Contact us
          </button>
          <button className="font-medium hover:text-black flex items-center">
            <i className="fas fa-globe mr-1"></i> 
            IN/INR
          </button>
          <button className="font-medium hover:text-black flex items-center">
            <i className="fas fa-shopping-cart mr-1"></i> 
            Cart
          </button>
          <button className="font-medium hover:text-black flex items-center">
            <i className="fas fa-user mr-1"></i> 
            Sign in
          </button>
          <button className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800">
            Sign up for free
          </button>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleDropdown}
            aria-expanded={isOpen}
            className="text-gray-600 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Links Section (Second Row) */}
      <div className="bg-white border-b border-gray-300">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 flex justify-center space-x-5 py-2 text-sm text-gray-600">
          <button className="font-medium hover:text-black">Products</button>
          <button className="font-medium hover:text-black">Start selling</button>
          <button className="font-medium hover:text-black">Tools and apps</button>
          <button className="font-medium hover:text-black">Pricing</button>
          <button className="font-medium hover:text-black">Resources</button>
          <button className="font-medium hover:text-black">Pro sellers</button>
          <button className="font-medium hover:text-black">GelatoConnect</button>
        </div>
      </div>

      {/* Dropdown Menu for Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-300">
          <div className="flex flex-col space-y-2 py-2 px-4 text-gray-600">
            <button className="font-medium text-left hover:text-black">Products</button>
            <button className="font-medium text-left hover:text-black">Start selling</button>
            <button className="font-medium text-left hover:text-black">Contact us</button>
            <button className="font-medium text-left hover:text-black">IN/INR</button>
            <button className="font-medium text-left hover:text-black">Cart</button>
            <button className="font-medium text-left hover:text-black">Sign in</button>
            <button className="bg-black text-white py-1 px-3 rounded-md hover:bg-gray-800">Sign up for free</button>
            <button className="font-medium text-left hover:text-black">Tools and apps</button>
            <button className="font-medium text-left hover:text-black">Pricing</button>
            <button className="font-medium text-left hover:text-black">Resources</button>
            <button className="font-medium text-left hover:text-black">Pro sellers</button>
            <button className="font-medium text-left hover:text-black">GelatoConnect</button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;




