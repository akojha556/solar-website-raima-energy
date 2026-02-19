import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MobileProductDropdown from "./MobileProductDropdown";
import MobileServiceDropdown from "./MobileServiceDropdown";

const MobileMenuDropdown = () => {
     const [openMenu, setOpenMenu] = useState(null);
     const toggleMenu = (menu) => setOpenMenu(openMenu === menu ? null : menu);
     const [isOpen, setIsOpen] = useState(false);

     const toggleDrawer = () => setIsOpen(!isOpen);

     useEffect(() => {
          const html = document.documentElement;
          if (isOpen) {
               window.scrollTo({
                    top: 0,
                    behavior: "auto",
               });
               html.style.overflow = "hidden";
               document.body.style.touchAction = "none";
          } else {
               html.style.overflow = "";
               document.body.style.touchAction = "";
          }
     }, [isOpen]);

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
                    <div className="fixed left-0 top-[5.02rem] w-full h-[calc(100vh-84px)] bg-white overflow-y-auto z-40 animate-slideDown shadow-lg">
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
                              <MobileProductDropdown openMenu={openMenu} toggleMenu={toggleMenu} setIsOpen={setIsOpen} />
                              <MobileServiceDropdown openMenu={openMenu} toggleMenu={toggleMenu} setIsOpen={setIsOpen} />

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
