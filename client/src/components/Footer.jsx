import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
     return (
          <footer className="bg-gray-900 text-gray-300 py-12">
               <div className="max-w-7xl mx-auto px-6">

                    {/* LOGO */}
                    <div className="text-center mb-12">
                         <h1 className="text-3xl font-bold text-white tracking-wide">RaimaEnergy</h1>
                    </div>

                    {/* GRID */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">

                         {/* CONTACT INFO */}
                         <div>
                              <h2 className="text-xl font-semibold text-white mb-4">Contact Info</h2>

                              <p className="mb-2">📍 Bhubaneswar, Odisha, India</p>
                              <p className="mb-2">📞 +91 98765 43210</p>
                              <p className="mb-4">✉️ info@solarservices.com</p>

                              {/* GET QUOTE BUTTON */}
                              <Link
                                   to="/contact"
                                   className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
                              >
                                   Get Quote
                              </Link>
                         </div>

                         {/* BUSINESS HOURS */}
                         <div>
                              <h2 className="text-xl font-semibold text-white mb-4">Business Hours</h2>

                              <p className="flex items-center gap-2 mb-2">
                                   Mon - Fri: 9 AM - 8 PM
                              </p>

                              <p className="flex items-center gap-2 mb-2">
                                   Saturday: 10 AM - 6 PM
                              </p>

                              <p className="flex items-center gap-2 mb-6">
                                   Sunday: Closed
                              </p>

                              {/* SOCIAL MEDIA ICONS */}
                              <div className="flex items-center gap-4">
                                   {/* Facebook */}
                                   <a
                                        href="https://facebook.com"
                                        target="_blank"
                                        className="hover:opacity-80"
                                   >
                                        <svg className="h-7 w-7 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                                             <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 5 3.66 9.13 8.44 9.93v-7.03H8.1v-2.9h2.33V9.79c0-2.3 1.37-3.57 3.47-3.57.99 0 2.03.18 2.03.18v2.24h-1.14c-1.12 0-1.47.7-1.47 1.42v1.7h2.5l-.4 2.9h-2.1V22c4.78-.8 8.44-4.93 8.44-9.93z" />
                                        </svg>
                                   </a>

                                   {/* Instagram */}
                                   <a
                                        href="https://instagram.com"
                                        target="_blank"
                                        className="hover:opacity-80"
                                   >
                                        <svg className="h-7 w-7 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                                             <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm6.5-.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                                        </svg>
                                   </a>
                              </div>
                         </div>

                         {/* INFORMATION LINKS */}
                         <div>
                              <h2 className="text-xl font-semibold text-white mb-4">Information</h2>

                              <ul className="space-y-3">
                                   <li className="flex items-center gap-2">
                                        <Link to="/about" className="hover:text-white transition">About Us</Link>
                                   </li>

                                   <li className="flex items-center gap-2">
                                        <Link to="/faq" className="hover:text-white transition">FAQs</Link>
                                   </li>

                                   <li className="flex items-center gap-2">
                                        <Link to="/contact" className="hover:text-white transition">Contact Us</Link>
                                   </li>
                              </ul>
                         </div>

                         {/* LOCATION */}
                         <div>
                              <h2 className="text-xl font-semibold text-white mb-1">Location</h2>

                              {/* Company name + map button */}
                              <div className="flex justify-between items-center mb-3">
                                   <span className="font-semibold text-white">Raima Energy</span>
                              </div>

                              {/* Google Map Embed */}
                              <iframe
                                   className="w-full h-40 sm:h-48 md:h-56 lg:h-40 rounded-lg border border-gray-700"
                                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116043.54779984787!2d85.72896872808349!3d20.296058718461246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909dc53bbcf17%3A0x8e1b8c6f8a1a5f04!2sBhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1700000000000"
                                   loading="lazy"
                                   allowFullScreen=""
                              ></iframe>
                         </div>

                    </div>

                    <div className="text-center text-gray-400 mt-12 border-t border-gray-700 pt-6">
                         © 2021–{new Date().getFullYear()} Raima Energy. All Rights Reserved.
                    </div>

               </div>
          </footer>
     );
};

export default Footer;
