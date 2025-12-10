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
               <li ref={serviceRef} className="relative h-full group">
                    {/* main button */}
                    <button onClick={() => {
                         setServiceOpen(!serviceOpen);
                    }} className={`cursor-pointer h-full relative flex items-center p-6 md:px-4 lg:px-6 md:group-hover:text-green-600 after:content-[''] after:absolute after:left-0 after:bottom-2 after:w-0 after:h-0.5 after:bg-green-600 after:transition-all after:duration-300 md:group-hover:after:w-full ${serviceOpen ? "focus:text-green-600 focus:after:w-full transform" : ""}`}>
                         <span>Services</span>
                         <i className={"fa-solid fa-caret-down ml-1 transition-transform duration-200 md:group-hover:rotate-180 " + (serviceOpen ? "rotate-180" : "")}></i>
                    </button>
                    {/* dropdown menu */}
                    <ul className={`absolute left-0 top-full z-50 mt-1 w-64 bg-white text-gray-800 shadow-lg rounded-md opacity-0 invisible transform md:group-hover:opacity-100 md:group-hover:-translate-y-1 md:group-hover:visible transition-all duration-300 ease-out ${serviceOpen ? "opacity-100 -translate-y-1 visible" : "translate-y-2"}`}>
                         {serviceList.map((item, index) => (
                              <li key={index}>
                                   <Link to={`/products/${item.toLowerCase().replace(/ /g, "-")}`} className="block px-4 py-2 hover:pl-5 text-base md:text-sm lg:text-base hover:bg-[#8bd158] transition-all duration-300">
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