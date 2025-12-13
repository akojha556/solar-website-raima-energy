import { motion } from "framer-motion";
import { fadeLeft, fadeRight } from "../../animations/motionVariants";

export default function CTASection() {
     return (
          <section className="bg-green-600 text-white py-16 px-6 md:px-12 lg:px-20">
               <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">

                    {/* Left Content */}
                    <motion.div
                         layout={false}
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

                         <button className="bg-white text-green-600 font-semibold px-8 py-3 rounded-md shadow-md hover:bg-gray-200 transition duration-300 cursor-pointer">
                              Contact Us
                         </button>
                    </motion.div>

                    {/* Right Content - Optional Image */}
                    <motion.div
                         layout={false}
                         variants={fadeRight}
                         initial="hidden"
                         whileInView="visible"
                         viewport={{ once: true }}
                         className="flex-1 flex justify-center md:justify-end">
                         <img
                              src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=800&q=80"
                              alt="Solar Panels"
                              className="w-full max-w-md rounded-lg shadow-lg"
                         />
                    </motion.div>
               </div>
          </section>

     )
}