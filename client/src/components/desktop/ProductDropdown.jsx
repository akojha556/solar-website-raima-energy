import React from "react";
import { Link } from "react-router-dom";
import { productList } from "../../data/productList"

const ProductDropdown = () => {

     return (
          <>
               {/* PRODUCTS — DROPDOWN */}
               <li className="relative block h-full p-6 md:px-4 lg:px-6 hover:text-green-600 after:content-[''] after:absolute after:left-0 after:bottom-2 after:w-0 after:h-0.5 after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full group">
                    {/* main button */}
                    <button>
                         <span className="">Products</span>
                         <i className="fa-solid fa-caret-down ml-1 transition-transform duration-200 group-hover:rotate-180"></i>
                    </button>
                    {/* dropdown menu */}
                    <ul className="absolute left-0 top-full mt-1 w-64 bg-white text-gray-800 shadow-lg rounded-md opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 ease-out">
                         {productList.map((item, index) => (
                              <li key={index}>
                                   <Link
                                        to={`/products/${item.toLowerCase().replace(/ /g, "-")}`}
                                        className="block px-4 py-2 text-base md:text-sm lg:text-base hover:bg-green-600 hover:text-white transition-colors duration-300">
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