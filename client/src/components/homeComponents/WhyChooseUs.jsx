import { motion } from "framer-motion";
import choose from "../../assets/choose.jpg";
import FeaturesSection from "../common/FeaturesSection";
import { fadeLeft, fadeRight } from "../../animations/motionVariants";

export default function WhyChooseUs() {

     return (
          <section className="py-16 bg-[#ffffff]">
               <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 mx-auto max-w-7xl px-4  items-start">
                    {/* LEFT SECTION */}
                    <motion.div
                         layout={false}
                         variants={fadeRight}
                         initial="hidden"
                         whileInView="visible"
                         viewport={{ once: true }}
                         className="px-4 flex flex-col items-center lg:block">
                         {/* Heading */}
                         <h2 className="text-3xl md:text-4xl font-bold text-green-700">
                              Why Choose Us
                         </h2>
                         <p className="text-green-600 mt-2 lg:text-left mb-4 text-lg text-center">
                              Delivering reliable and efficient solar solutions built for long-term performance.
                         </p>
                         <div>
                              <img src={choose} alt="choose-us" className="h-60 w-140 md:h-120 md:w-200 object-cover" />
                         </div>
                    </motion.div>
                    {/* RIGHT SECTION */}
                    {/* Grid */}
                    <FeaturesSection className="grid-cols-1" />
               </div>
          </section>
     );
}
