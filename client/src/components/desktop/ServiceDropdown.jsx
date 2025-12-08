import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { serviceList } from "../../data/serviceList";

const ServiceDropdown = () => {
     const [serviceOpen, setServiceOpen] = useState(false)
     const serviceRef = useRef(null);

     useEffect(() => {
          function handleClickOutside(e) {
               if (serviceRef.current && !serviceRef.current.contains(e.target)) {
                    setServiceOpen(null);
               }
          }

          document.addEventListener("mousedown", handleClickOutside);
     }, [])

     return (
          <>
               {/* SERVICES — DROPDOWN */}
               <li ref={serviceRef} className="relative group h-full">
                    {/* main button */}
                    <button onClick={() => {
                         if (window.innerWidth < 1024) {
                              setServiceOpen(!serviceOpen);
                         }
                    }} className={`flex items-center cursor-pointer h-full p-6 md:px-4 lg:px-6 lg:hover:text-green-600 after:content-[''] after:absolute after:left-0 after:bottom-2 after:w-0 after:h-0.5 after:bg-green-600 after:transition-all after:duration-300 lg:hover:after:w-full ${serviceOpen ? "focus:after:w-full text-green-600 transform" : ""}`}>
                         <span>Services</span>
                         <i className={"fa-solid fa-caret-down ml-1 transition-transform duration-200 lg:group-hover:rotate-180 " + (serviceOpen ? "rotate-180" : "")}></i>
                    </button>
                    {/* dropdown menu */}
                    <ul className={`absolute left-0 top-full z-50 mt-1 w-64 bg-white text-gray-800 shadow-lg rounded-md opacity-0 invisible lg:group-hover:opacity-100 lg:group-hover:translate-y-0 lg:group-hover:visible transition-all duration-300 ease-out ${serviceOpen ? "opacity-100 visible translate-y-0" : "translate-y-2"}`}>

                         {serviceList.map((item, index) => (
                              <li key={index}>
                                   <Link to={`/products/${item.toLowerCase().replace(/ /g, "-")}`} className="block px-4 py-2 text-base md:text-sm lg:text-base hover:bg-green-600 hover:text-white transition-colors duration-300">
                                        {item}
                                   </Link>
                              </li>
                         ))}
                    </ul>
               </li>
          </>
     )
}

export default ServiceDropdown;