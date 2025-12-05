import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import ProductDropdown from "./desktop/ProductDropdown.jsx";
import ServiceDropdown from "./desktop/ServiceDropdown.jsx";
import MobileMenuDropdown from "./mobile/MobileMenuDropdown.jsx";

const Navbar = () => {

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/">
          <img src={logo} alt="RaimaEnergy Logo" className="lg:h-30 w-auto h-25 sm:h-26" />
        </Link>


        {/* DESKTOP MENU */}
        <ul className="hidden md:flex md:items-center md:text-base lg:text-lg font-medium h-full">
          <li className="h-full">
            <Link to="/" className="relative block h-full p-6 md:px-4 lg:px-6 hover:text-green-600 after:content-[''] after:absolute after:left-0 after:bottom-2 after:w-0 after:h-0.5 after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full">Home</Link>
          </li>

          <li className="h-full">
            <Link to="/about" className="relative block h-full p-6 md:px-4 lg:px-6 hover:text-green-600 after:content-[''] after:absolute after:left-0 after:bottom-2 after:w-0 after:h-0.5 after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full">
              About Us
            </Link>
          </li>

          <ProductDropdown />

          <ServiceDropdown />

          <li className="h-full">
            <Link to="/contact" className="relative block h-full p-6 md:px-4 lg:px-6 hover:text-green-600 after:content-[''] after:absolute after:left-0 after:bottom-2 after:w-0 after:h-0.5 after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full">
              Contact Us
            </Link>
          </li>
        </ul>

        <Link to="/contact" className="hidden md:block">
          <button className="px-6 py-3 rounded-md bg-green-600 text-white font-semibold text-sm md:text-base lg:text-lg shadow-md cursor-pointer hover:bg-green-700 hover:shadow-lg hover:scale-105 transition-all duration-300 ease-out">GET A QUOTE</button>
        </Link>

        <div className={`md:hidden bg-white transition-all duration-300`}>
          <MobileMenuDropdown />
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
