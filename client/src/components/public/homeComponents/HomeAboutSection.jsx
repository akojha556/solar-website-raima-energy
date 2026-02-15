import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import aboutImg from "../../../assets/page-hero-bg.png";
import { fadeUp, fadeLeft, fadeRight } from "../../../animations/motionVariants";
import AboutHighlights from "../common/AboutHighlights";
import { Button } from "../ui/Button";

export default function HomeAboutSection() {

     return (
          <section className="py-20 bg-[#f3fff5]">
               <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                    {/* LEFT SIDE CONTENT */}
                    <motion.div
                         layout="position"
                         variants={fadeRight}
                         initial="hidden"
                         whileInView="visible"
                         viewport={{ once: true }}
                         className="space-y-6 flex flex-col items-center lg:items-start">

                         <div className="space-y-4 flex flex-col items-center lg:block">

                              <h2 className="text-3xl md:text-4xl font-bold text-green-700">
                                   About Us
                              </h2>

                              <h3 className="text-xl md:text-2xl font-semibold text-green-600 text-center lg:text-left">
                                   Powering the North East with Solar Solutions
                              </h3>

                              <p className="text-green-700 text-sm sm:text-base leading-relaxed text-center lg:text-left">
                                   Raima Energy is your trusted partner for residential and commercial solar
                                   solutions across Guwahati, Assam, and the entire Northeast region.
                                   As a leading wholesaler and EPC provider, we offer a complete range of
                                   premium solar products from reliable brands like PAHAL, IB SOLAR, EVVO,
                                   and VSOLE.
                                   <br /><br />
                                   From energy audits and system design to installation and long-term service,
                                   our experienced team provides end-to-end solar project support.
                                   We ensure maximum performance and long-term cost savings with our
                                   data-driven solar approach.
                              </p>
                         </div>

                         <AboutHighlights />

                         {/* BUTTON */}
                         <motion.div
                              layout="position"
                              variants={fadeUp}
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true }}
                              className="mt-4"
                         >
                              <Link to="/about">
                                   <Button variant="primary" size="lg" className="px-12">KNOW MORE</Button>
                              </Link>
                         </motion.div>
                    </motion.div>

                    {/* RIGHT SIDE IMAGE */}
                    <motion.div
                         variants={fadeLeft}
                         initial="hidden"
                         whileInView="visible"
                         viewport={{ once: true }}
                         className="w-full h-full flex justify-center">
                         <img
                              src={aboutImg}
                              alt="About Raima Energy"
                              className="shadow-lg w-full h-120 object-cover"
                         />
                    </motion.div>

               </div>
          </section>
     );
}
