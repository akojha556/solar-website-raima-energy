import React from "react";
import { Link } from "react-router-dom";

const MobileProductDropdown = ({ setOpen }) => {
     return (
          <>
               {/* MOBILE DROPDOWN MENU */}

               <ul className="flex flex-col py-4 text-lg font-medium">
                    <li>
                         <Link to="/" onClick={() => setOpen(false)} className="block px-4 py-4 hover:bg-blue-600 active:bg-blue-400 hover:text-white transition duration-300">
                              Home
                         </Link>
                    </li>

                    <li>
                         <Link to="/about" onClick={() => setOpen(false)} className="block px-4 py-4 hover:bg-blue-600 active:bg-blue-400 hover:text-white transition duration-300">
                              About Us
                         </Link>
                    </li>

                    <li>
                         <Link to="/products" onClick={() => setOpen(false)} className="block px-4 py-4 hover:bg-blue-600 active:bg-blue-400 hover:text-white transition duration-300">
                              Products
                         </Link>
                    </li>

                    <li>
                         <Link to="/contact" onClick={() => setOpen(false)} className="block px-4 py-4 hover:bg-blue-600 active:bg-blue-400 hover:text-white transition duration-300">
                              Contact Us
                         </Link>
                    </li>
               </ul>
          </>
     )
}

export default MobileProductDropdown;