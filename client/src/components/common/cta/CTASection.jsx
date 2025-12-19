import { motion } from "framer-motion";
import { fadeUp } from "../../../animations/motionVariants";
import CTAButtons from "./CTAButtons";
import cta from "../../../assets/cta.jpg";

const CTASection = () => {
     return (
          <section className="py-14">
               <div className="max-w-7xl mx-auto">
                    <div className="relative md:min-h-110 lg:min-h-135 min-h-98">
                         <img src={cta} alt="chontact-us" className="absolute inset-0 w-full h-full object-cover" />
                         <div className="absolute inset-0 bg-black/50"></div>
                         <div className="absolute inset-0 flex justify-between items-center bg-blue-600/80 z-50 m-4 p-4 md:p-6 md:m-0 md:left-0 md:top-0 md:bottom-0 md:right-1/2 lg:right-3/5">
                              <div className="flex flex-col">
                                   <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold text-center md:text-left pb-12">Raima Energy believes in making a positive impact on society and the planet. Join us on our journey towards a more sustainable future. </h2>
                                   {/* BUTTON section */}
                                   <motion.div
                                        layout="position"
                                        variants={fadeUp}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.2 }}
                                        className="flex flex-col md:flex-row items-center">
                                        <CTAButtons primaryText="Contact Us" secondaryText="+916033322529" primaryVariant="primary" secondaryVariant="ghostWhite" secondaryIconClass="group-hover:text-white" />
                                   </motion.div>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     )
}

export default CTASection;