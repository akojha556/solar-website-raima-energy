import React from "react";
import { Link } from "react-router-dom";

const ProductDropdown = () => {
     const productList = [
          "Residential Rooftop Solar Power Plant",
          "Commercial Solar Power Plant",
          "Solar Pumps",
          "Solar Street Lights",
          "Solar Panel",
          "Solar Ongrid Inverter",
          "AC Distribution Box",
          "DC Distribution Box",
          "Chemical Earthing",
          "Lightning Arrestors",
          "AC & DC Cable",
     ];

     return (
          <>
               {/* PRODUCTS — DROPDOWN */}
               <li className="relative group">
                    {/* main button */}
                    <button className="py-6 flex items-center h-full px-6 hover:bg-blue-600 hover:text-white transition">
                         <p className="">Products</p>
                         <i className="fa-solid fa-caret-down ml-1 mt-1"></i>
                    </button>
                    {/* dropdown menu */}
                    <ul className="absolute left-0 top-full mt-1 w-64 bg-white text-gray-800 shadow-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 invisible group-hover:visible">

                         {productList.map((item, index) => (
                              <li key={index}>
                                   <Link to={`/products/${item.toLowerCase().replace(/ /g, "-")}`} className="block px-4 py-2 hover:bg-blue-600 hover:text-white transition duration-300 text-base">
                                        {item}
                                   </Link>
                              </li>
                         ))}
                    </ul>
               </li>
          </>
     )
}

export default ProductDropdown;