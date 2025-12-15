import React from "react";
import { motion } from "framer-motion";
import { fadeUp, fadeLeft } from "../../animations/motionVariants";

const ContactSection = () => {
     return (
          <section className="py-20 bg-white">
               <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                         {/* LEFT : CONTACT INFO */}
                         <motion.div
                              variants={fadeUp}
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true, amount: 0.6 }}
                         >
                              <h2 className="text-2xl font-bold text-gray-900">
                                   Get in Touch
                              </h2>

                              <p className="mt-4 text-gray-600 max-w-md">
                                   Have questions about our solar solutions or need a quotation?
                                   Reach out to us using the details below.
                              </p>

                              <div className="mt-8 space-y-5">

                                   <div className="flex items-start gap-4">
                                        <i className="fa-solid fa-location-dot text-green-600 text-lg"></i>
                                        <p className="text-gray-700">
                                             T G Road, Ramnagar 2/3, Agartala, West Tripura, 799002
                                        </p>
                                   </div>

                                   <div className="flex gap-4 items-start">
                                        <p className="flex gap-2 min-w-fit">
                                             <i className="text-green-600 fa-solid fa-phone pt-1"></i>
                                             <a className="min-w-fit text-gray-700" href="tel:+916033322521">
                                                  +91 60333 22529
                                             </a>
                                             <span>/</span>
                                             <a className="min-w-fit text-gray-700" href="tel:+916033322521">
                                                  60333 22530
                                             </a>
                                        </p>
                                   </div>

                                   <div className="flex gap-4 items-start">
                                        <i className="text-green-600 fa-solid fa-envelope pt-1"></i>
                                        <a href="mailto:team@raimaenergy.com" className="text-gray-700">team@raimaenergy.com</a>
                                   </div>

                                   <div className="flex items-start gap-4">
                                        <i className="fa-solid fa-clock text-green-600 text-lg"></i>
                                        <p className="text-gray-700">
                                             Mon - Sat : 9:00 AM - 6:00 PM
                                        </p>
                                   </div>

                              </div>
                         </motion.div>

                         {/* RIGHT : CONTACT FORM */}
                         <div className="bg-[#f3fff5] p-6 border border-gray-200 rounded-xl">
                              <motion.form
                                   variants={fadeLeft}
                                   initial="hidden"
                                   whileInView="visible"
                                   viewport={{ once: true, amount: 0.6 }}
                                   className="space-y-5"
                              >
                                   {/* Full Name - REQUIRED */}
                                   <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                             Full Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                             type="text"
                                             placeholder="Enter your full name"
                                             required
                                             className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                                        />
                                   </div>

                                   {/* Phone Number - REQUIRED */}
                                   <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                             Phone Number <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                             type="tel"
                                             placeholder="Enter your phone number"
                                             required
                                             className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                                        />
                                   </div>

                                   {/* City - REQUIRED */}
                                   <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                             City <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                             type="text"
                                             placeholder="Enter your city"
                                             required
                                             className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                                        />
                                   </div>

                                   {/* Message - OPTIONAL */}
                                   <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                             Your Message
                                        </label>
                                        <textarea
                                             rows="4"
                                             placeholder="Write your message (optional)"
                                             className="w-full border border-gray-300 rounded-md px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
                                        ></textarea>
                                   </div>

                                   <button
                                        type="submit"
                                        className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 rounded-md transition"
                                   >
                                        Submit
                                   </button>
                              </motion.form>
                         </div>


                    </div>
               </div>
          </section>
     );
};

export default ContactSection;
