import { motion } from "framer-motion";
import { fadeUp, fadeLeft } from "../../../animations/motionVariants";
import ConsultationForm from "../forms/ConsultationForm";

const ContactSection = () => {
     return (
          <section className="py-20 bg-white">
               <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                         {/* LEFT : CONTACT INFO */}
                         <motion.div
                              variants={fadeUp}
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true }}
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
                         <div className="bg-[#f3fff5] md:px-50 lg:px-20 md:py-16 border border-gray-200 rounded-xl">
                              <motion.div
                                   variants={fadeLeft}
                                   initial="hidden"
                                   whileInView="visible"
                                   viewport={{ once: true }}
                              >
                                   <ConsultationForm />
                              </motion.div>
                         </div>


                    </div>
               </div>
          </section>
     );
};

export default ContactSection;
