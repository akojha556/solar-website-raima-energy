import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { servicesData } from "../../data/servicesData";

const ServiceDropdown = () => {
     const [serviceOpen, setServiceOpen] = useState(false)
     const serviceRef = useRef(null);

     useEffect(() => {
          function handleClickOutside(e) {
               if (serviceRef.current && !serviceRef.current.contains(e.target)) {
                    setServiceOpen(null);
               }
          }

          document.addEventListener("pointerdown", handleClickOutside);
          return () => document.removeEventListener("pointerdown", handleClickOutside);
     }, []);

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
                         {servicesData.map((service) => (
                              <li key={service.slug}>
                                   <Link to={`/services/${service.slug}`}
                                        className="block px-4 py-2 text-xs lg:text-sm transition-all duration-300 hover:bg-green-50 hover:text-green-600 hover:pl-5"
                                   >
                                        {service.title}
                                   </Link>
                              </li>
                         ))}
                         {/* Divider */}
                         <li className="border-t my-1"></li>

                         {/* View All */}
                         <li>
                              <Link
                                   onClick={() => setServiceOpen(false)}
                                   to="/services"
                                   className="group/menu flex items-center px-4 py-2 text-xs lg:text-sm font-semibold text-green-600 hover:bg-green-50 transition-all rounded-md"
                              >
                                   View All Services
                                   <i className="fa-solid fa-arrow-right ml-1 mt-1 inline-block transition-transform duration-200 group-hover/menu:translate-x-2 text-xs"></i>
                              </Link>
                         </li>
                    </ul>
               </li>
          </>
     )
}

export default ServiceDropdown;