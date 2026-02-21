import { motion } from "framer-motion";
import { fadeUp } from "../../../animations/motionVariants";

const SectionHero = ({ title, subtitle }) => {
     return (
          <section className="relative h-[50vh] flex items-center justify-center">

               {/* Background image */}
               <img
                    src="https://res.cloudinary.com/dgokm518s/image/upload/f_auto,q_auto/v1771664404/page-hero-bg_ic7nsn.png"
                    alt="Solar Products"
                    className="absolute inset-0 w-full h-full object-cover"
               />

               {/* Overlay */}
               <div className="absolute inset-0 bg-black/50"></div>

               <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="relative text-center text-white px-6">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                         {title}
                    </h1>

                    <p className="text-white max-w-2xl mx-auto">
                         {subtitle}
                    </p>
               </motion.div>
          </section>
     );
};

export default SectionHero;
