import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fade, fadeUp } from "../../../animations/motionVariants";

const Footer = () => {

     return (
          <footer className="bg-gray-900 text-gray-300 py-12">
               <div className="max-w-7xl mx-auto px-6 relative">

                    {/* LOGO */}
                    <motion.div
                         layout="position"
                         variants={fade}
                         initial="hidden"
                         whileInView="visible"
                         viewport={{ once: true, amount: 0.5 }}
                         className="absolute -top-25 left-1/2 transform -translate-x-1/2 z-10">
                         <Link to="/"><img src="https://res.cloudinary.com/dgokm518s/image/upload/f_auto,q_auto/v1770495135/logojpg_nbqgqs.jpg" alt="RaimaEnergy Logo" className="w-auto h-26 md:h-28" /></Link>
                    </motion.div>

                    {/* GRID */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16 pt-24">

                         {/* CONTACT INFO */}
                         <div>
                              <h2 className="text-xl text-center md:text-left font-semibold text-white mb-4">Contact Info</h2>

                              <div className="flex flex-col gap-3">
                                   <div className="flex">
                                        <p className="hover:text-white group flex gap-2">
                                             <i className="text-red-400 group-hover:text-red-500 fa-solid fa-location-dot pt-1"></i>
                                             <span>T G Road, Ramnagar 2/3, Agartala, West Tripura, 799002</span>
                                        </p>
                                   </div>

                                   <div className="flex flex-wrap">
                                        <p className="hover:text-white group flex gap-2 min-w-fit">
                                             <i className="text-red-400 group-hover:text-red-500 fa-solid fa-phone pt-1"></i>
                                             <a className="min-w-fit" href="tel:+916033322529">
                                                  +91 60333 22529
                                             </a>
                                             <span>/</span>
                                             <a className="min-w-fit" href="tel:+916033322530">
                                                  60333 22530
                                             </a>
                                        </p>
                                   </div>

                                   <div className="flex">
                                        <p className="hover:text-white group flex items-center gap-2">
                                             <i className="text-red-400 group-hover:text-red-500 fa-solid fa-envelope pt-1"></i>
                                             <a href="mailto:team@raimaenergy.com">team@raimaenergy.com</a>
                                        </p>
                                   </div>
                              </div>

                              <Link to="/contact" className="md:block w-full">
                                   <motion.button
                                        layout="position"
                                        variants={fadeUp}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.2 }}
                                        className="px-6 py-3 rounded-md w-full bg-green-600 text-white font-semibold text-sm md:text-base lg:text-lg shadow-md cursor-pointer hover:bg-green-700 hover:shadow-lg hover:scale-105 transition-all duration-300 ease-out mt-6">GET A QUOTE</motion.button>
                              </Link>
                         </div>

                         {/* BUSINESS HOURS */}
                         <div>
                              <h2 className="text-xl text-center md:text-left font-semibold text-white mb-4">Business Hours</h2>

                              {/* TIMINGS */}
                              <div className="flex flex-col gap-3">
                                   <div className="flex">
                                        <div className="hover:text-white group flex items-center gap-2">
                                             <i className="text-red-400 group-hover:text-red-500 fa-solid fa-clock"></i>
                                             <span>Mon - Sat: 10 AM - 6 PM</span>
                                        </div>
                                   </div>

                                   <div className="flex">
                                        <div className="hover:text-white group flex items-center align-middle gap-2">
                                             <i className="text-red-400 group-hover:text-red-500 fa-solid fa-clock"></i>
                                             <span>Sunday: Closed</span>
                                        </div>
                                   </div>
                              </div>

                              {/* SOCIAL ICONS */}
                              <div className="flex items-center gap-4 mt-8">
                                   <a href="https://www.facebook.com/share/1D8NwXwRCG/" target="_blank" className="hover:opacity-80">
                                        <i className="hover:text-blue-500 transition-all hover:scale-110 text-3xl fa-brands fa-facebook"></i>
                                   </a>

                                   <a href="https://wa.me/6033322529" target="_blank" className="hover:opacity-80">
                                        <i className="hover:text-green-500 transition-all hover:scale-110 text-3xl fa-brands fa-whatsapp"></i>
                                   </a>
                              </div>
                         </div>

                         {/* INFORMATION */}
                         <div>
                              <h2 className="text-xl text-center md:text-left font-semibold text-white mb-4">Information</h2>

                              <ul className="space-y-3">
                                   <li>
                                        <Link
                                             to="/about"
                                             className="flex items-center gap-2 group hover:text-white transition"
                                        >
                                             <i className="text-red-400 fa-solid fa-users p-1 group-hover:text-red-600 transition"></i>
                                             <span>About Us</span>
                                        </Link>
                                   </li>


                                   <li className="flex items-center gap-2">
                                        <Link to="/faqs" className="flex items-center gap-2 group hover:text-white transition">
                                             <i className="text-red-400 fa-solid fa-circle-question p-1 group-hover:text-red-600 transition"></i>
                                             <span>FAQs</span>
                                        </Link>
                                   </li>

                                   <li className="flex items-center gap-2">

                                        <Link to="/contact" className="group flex items-center gap-2 hover:text-white transition">
                                             <i className="group-hover:text-red-600 text-red-400 fa-solid fa-headset p-1"></i>
                                             <span>Contact Us</span>
                                        </Link>
                                   </li>
                              </ul>
                         </div>

                         {/* LOCATION */}
                         <div>
                              <h2 className="text-xl text-center md:text-left font-semibold text-white mb-1">Location</h2>

                              <iframe
                                   className="w-full h-56 rounded-lg border border-gray-700"
                                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15025.44151549907!2d91.27082627052134!3d23.839063656090993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3753f43b7cce4fbb%3A0x857fc36acac03844!2sRAIMA%20ENERGY%20LLP!5e0!3m2!1sen!2sin!4v1764999910131!5m2!1sen!2sin"
                                   loading="lazy"
                                   allowFullScreen
                              ></iframe>
                         </div>
                    </div>

                    {/* COPYRIGHT */}
                    <div className="text-center text-gray-400 mt-12 border-t border-gray-700 pt-6">
                         © 2021&ndash;{new Date().getFullYear()} Raima Energy. All Rights Reserved.
                    </div>

               </div>
          </footer>
     );
};

export default Footer;
