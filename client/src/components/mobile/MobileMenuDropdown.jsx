import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MobileProductDropdown from "./MobileProductDropdown";
import MobileServiceDropdown from "./MobileServiceDropdown";

const MobileMenuDropdown = () => {
     const [openMenu, setOpenMenu] = useState(null);
     const toggleMenu = (menu) => setOpenMenu(openMenu === menu ? null : menu);
     const [isOpen, setIsOpen] = useState(false);

     const toggleDrawer = () => setIsOpen(!isOpen);

     // 1️⃣ Disable body scroll when menu is open
     useEffect(() => {
          document.body.style.overflow = isOpen ? "hidden" : "auto";
          return () => (document.body.style.overflow = "auto");
     }, [isOpen]);

     // 2️⃣ Reset menu + body scroll when resizing to desktop
     useEffect(() => {
          const handleResize = () => {
               if (window.innerWidth >= 768) {
                    setIsOpen(false);
                    setOpenMenu(null);
                    document.body.style.overflow = "auto";
               }
          };

          window.addEventListener("resize", handleResize);
          return () => window.removeEventListener("resize", handleResize);
     }, []);

     return (
          <div>
               {/* Hamburger */}
               <button
                    onClick={() => {
                         toggleDrawer();
                         toggleMenu(null);
                    }}
                    className="relative z-50 cursor-pointer"
               >
                    <div className={`${isOpen && "translate-y-2 rotate-45"} transition-all duration-300 w-6 h-1 bg-black mb-1 rounded`} />
                    <div className={`${isOpen && "opacity-0"} transition-all duration-300 w-6 h-1 bg-black mb-1 rounded`} />
                    <div className={`${isOpen && "-translate-y-2 -rotate-45"} transition-all duration-300 w-6 h-1 bg-black mb-1 rounded`} />
               </button>

               {/* Menu Panel */}
               {isOpen && (
                    <div className="fixed left-0 top-[5.2rem] w-full h-[calc(100vh-84px)] bg-white overflow-y-auto z-40 animate-slideDown shadow-md">
                         <ul className="pt-1">

                              {/* Home */}
                              <li>
                                   <Link
                                        onClick={() => {
                                             setIsOpen(false);
                                             toggleMenu(null);
                                        }}
                                        to="/"
                                        className="block px-4 py-3 transition-all duration-200 hover:bg-green-100 hover:text-green-700 hover:pl-5"
                                   >
                                        Home
                                   </Link>
                              </li>

                              {/* About */}
                              <li>
                                   <Link
                                        onClick={() => {
                                             setIsOpen(false);
                                             toggleMenu(null);
                                        }}
                                        to="/about"
                                        className="block px-4 py-3 transition-all duration-200 hover:bg-green-100 hover:text-green-700 hover:pl-5"
                                   >
                                        About Us
                                   </Link>
                              </li>

                              {/* Dropdowns */}
                              <MobileProductDropdown openMenu={openMenu} toggleMenu={toggleMenu} />
                              <MobileServiceDropdown openMenu={openMenu} toggleMenu={toggleMenu} />

                              {/* Contact */}
                              <li>
                                   <Link
                                        onClick={() => {
                                             setIsOpen(false);
                                             toggleMenu(null);
                                        }}
                                        to="/contact"
                                        className="block px-4 py-3 transition-all duration-200 hover:bg-green-100 hover:text-green-700 hover:pl-5"
                                   >
                                        Contact Us
                                   </Link>
                              </li>

                         </ul>
                    </div>
               )}
          </div>
     );
};

export default MobileMenuDropdown;
