import { motion } from "framer-motion";
import { fadeUp } from "../../animations/motionVariants"

const SectionCTA = ({ title, description, primaryText, secondaryText }) => {
     return (
          <section className="relative py-20 overflow-hidden">
               {/* Background */}
               <div className="absolute inset-0 bg-linear-to-r from-green-600 via-green-500 to-emerald-600"></div>

               {/* Decorative blur */}
               <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
               <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

               {/* Content */}
               <div className="relative max-w-7xl mx-auto px-6 text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                         {title}
                    </h2>

                    <p className="max-w-2xl mx-auto text-white/90 text-base md:text-lg mb-8">
                         {description}
                    </p>

                    <motion.div
                         layout={false}
                         variants={fadeUp}
                         initial="hidden"
                         whileInView="visible"
                         viewport={{ once: true, amount: 0.1 }}
                         className="flex flex-col sm:flex-row items-center justify-center gap-4">
                         <button className="bg-white text-green-700 font-semibold px-8 py-3 rounded-full transition hover:bg-gray-100">
                              {primaryText}
                         </button>

                         <button className="border border-white/70 text-white font-medium px-8 py-3 rounded-full transition hover:bg-white/10">
                              {secondaryText}
                         </button>
                    </motion.div>
               </div>
          </section>

     )
}

export default SectionCTA;