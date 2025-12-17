import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../../animations/motionVariants";

const ContactMap = () => {
     return (
          <motion.section
               variants={fadeUp}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               className="py-20 bg-[#f3fff5]">
               <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-8 text-center">
                         <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                              Our Location
                         </h2>
                         <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
                              Visit our office or reach out to us for any assistance related to
                              solar solutions.
                         </p>
                    </div>

                    <div className="w-full h-87.5 rounded-xl overflow-hidden shadow-sm">
                         <iframe
                              title="Office Location"
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15025.44151549907!2d91.27082627052134!3d23.839063656090993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3753f43b7cce4fbb%3A0x857fc36acac03844!2sRAIMA%20ENERGY%20LLP!5e0!3m2!1sen!2sin!4v1764999910131!5m2!1sen!2sin"
                              loading="lazy"
                              referrerPolicy="no-referrer-when-downgrade"
                              className="w-full h-full border-0"
                         ></iframe>
                    </div>
               </div>
          </motion.section>
     );
};

export default ContactMap;
