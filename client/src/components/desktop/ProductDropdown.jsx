import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { productList } from "../../data/productList"

const ProductDropdown = () => {
     const [productOpen, setProductOpen] = useState(false);
     const productRef = useRef(null);

     //Detect click outside to close the product dropdown
     useEffect(() => {
          function handleClickOutside(e) {
               if (productRef.current && !productRef.current.contains(e.target)) {
                    setProductOpen(false);
               }
          }

          document.addEventListener("mousedown", handleClickOutside);
          return () => document.removeEventListener("mousedown", handleClickOutside);
     }, [])

     return (
          <>
               {/* PRODUCTS — DROPDOWN */}
               <li ref={productRef} className="relative group h-full">
                    {/* main button */}
                    <button onClick={() => {
                         if (window.innerWidth < 1024) {
                              setProductOpen(!productOpen);
                         }
                    }} className={`cursor-pointer h-full relative flex items-center p-6 md:px-4 lg:px-6 lg:hover:text-green-600 after:content-[''] after:absolute after:left-0 after:bottom-2 after:w-0 after:h-0.5 after:bg-green-600 after:transition-all after:duration-300 lg:group-hover:after:w-full ${productOpen ? "focus:text-green-600 focus:after:w-full transform" : ""}`}>
                         <span className="">Products</span>
                         <i className={"fa-solid fa-caret-down ml-1 transition-transform duration-200 lg:group-hover:rotate-180 " + (productOpen ? "rotate-180" : "")}></i>
                    </button>
                    {/* dropdown menu */}
                    <ul className={`absolute left-0 top-full z-50 mt-1 w-64 bg-white text-gray-800 shadow-lg rounded-md opacity-0 invisible transform lg:group-hover:opacity-100 lg:group-hover:translate-y-0 lg:group-hover:visible transition-all duration-300 ease-out ${productOpen ? "opacity-100 translate-y-0 visible" : "translate-y-2"}`}>
                         {productList.map((item, index) => (
                              <li key={index}>
                                   <Link
                                        to={`/products/${item.toLowerCase().replace(/ /g, "-")}`}
                                        className="block px-4 py-2 hover:pl-5 text-base md:text-sm lg:text-base hover:bg-[#8bd158] transition-all duration-300">
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