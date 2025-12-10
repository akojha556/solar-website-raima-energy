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
               <li ref={productRef} className="relative h-full">
                    {/* main button */}
                    <button onClick={() => {
                         setProductOpen(!productOpen);
                    }} className={`cursor-pointer h-full relative flex items-center p-6 md:px-4 lg:px-6 hover:text-green-500 ${productOpen ? "text-green-600 transform font-semibold" : ""}`}>
                         <span className="">Products</span>
                         <i className={"fa-solid fa-caret-down ml-1 transition-transform duration-200 " + (productOpen ? "rotate-180" : "")}></i>
                    </button>
                    {/* dropdown menu */}
                    <ul className={`absolute left-0 top-full z-50 mt-1 w-64 bg-white text-gray-800 shadow-lg rounded-md opacity-0 invisible transform transition-all duration-300 ease-out ${productOpen ? "opacity-100 translate-y-0 visible" : "translate-y-2"}`}>
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