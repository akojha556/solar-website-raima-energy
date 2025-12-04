import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import ProductDropdown from "./ProductDropdown";
import MobileProductDropdown from "./MobileProductDropdown";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/">
          <img src={logo} alt="RaimaEnergy Logo" className="h-30 w-auto" />
        </Link>


        {/* DESKTOP MENU */}
        <ul className="hidden md:flex text-lg font-medium">
          <li>
            <Link to="/" className="block h-full p-6 hover:bg-blue-600 hover:text-white active:bg-blue-400 transition duration-300">
              Home
            </Link>
          </li>

          <li>
            <Link to="/about" className="block h-full p-6 hover:bg-blue-600 hover:text-white active:bg-blue-400 transition duration-300">
              About Us
            </Link>
          </li>

          <ProductDropdown />

          <li>
            <Link to="/contact" className="block h-full p-6 hover:bg-blue-600 hover:text-white active:bg-blue-400 transition duration-300">
              Contact Us
            </Link>
          </li>
        </ul>

        <Link to="/cotact" className="hidden md:block">
          <button>GET A QUOTE</button>
        </Link>


        {/* MOBILE MENU ICON */}
        <button className={`${open ? "relative z-51" : ""} md:hidden cursor-pointer p-2 pt-4`} onClick={handleClick}>
          <div className={`${open && "translate-y-2 rotate-45"} duration-300 w-6 bg-black h-1 mb-1`}></div>
          <div className={`${open && "opacity-0"} duration-300 w-6 bg-black h-1 mb-1`}></div>
          <div className={`${open && "-translate-y-2 -rotate-45"} duration-300 w-6 bg-black h-1 mb-2`}></div>
        </button>
      </div>

      <div className={`md:hidden bg-white transition-all duration-300 overflow-hidden ${open ? "max-h-96" : "max-h-0"
        }`}>
        <MobileProductDropdown setOpen={setOpen} />
      </div>

    </nav>
  );
};

export default Navbar;
