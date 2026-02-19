import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeLeft, fadeRight } from "../../../animations/motionVariants";

export default function HomeCTA() {
     return (
          <section className="bg-green-600 text-white py-16 px-6 md:px-12 lg:px-20">
               <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">

                    {/* Left Content */}
                    <motion.div
                         layout="position"
                         variants={fadeLeft}
                         initial="hidden"
                         whileInView="visible"
                         viewport={{ once: true }}
                         className="flex-1">
                         <h2 className="text-3xl md:text-4xl font-bold mb-4">
                              Ready to Switch to Clean Solar Energy?
                         </h2>
                         <p className="text-lg md:text-xl opacity-90 mb-6">
                              Contact us today for a free consultation and cost estimate.
                              Our experts are here to guide you every step of the way.
                         </p>

                         <button>
                              <Link to="/contact" className="bg-white text-green-600 font-semibold px-8 py-3 rounded-md shadow-md hover:bg-gray-200 transition duration-300 cursor-pointer">Contact Us</Link>
                         </button>
                    </motion.div>

                    {/* Right Content - Optional Image */}
                    <motion.div
                         layout="position"
                         variants={fadeRight}
                         initial="hidden"
                         whileInView="visible"
                         viewport={{ once: true }}
                         className="flex-1 flex justify-center md:justify-end">
                         <img
                              src="https://res.cloudinary.com/dgokm518s/image/upload/f_auto,q_auto/v1771527209/homecta_h6h0ju.png"
                              alt="Solar Panels"
                              className="w-full max-w-md rounded-lg shadow-lg object-contain"
                         />
                    </motion.div>
               </div>
          </section>
     )
}