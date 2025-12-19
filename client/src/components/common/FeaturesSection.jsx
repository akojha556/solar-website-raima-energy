import { motion } from "framer-motion";
import { fadeLeft } from "../../animations/motionVariants";

const FeaturesSection = ({ className = "" }) => {
     const features = [
          {
               title: "Tailored Solar Solutions",
               desc: "Customized solar setups designed to match your exact energy needs, ensuring maximum efficiency.",
               icon: "fa-solid fa-screwdriver-wrench",
          },
          {
               title: "Premium-Grade Components",
               desc: "We use top-quality panels and inverters from trusted manufacturers for long-term durability.",
               icon: "fa-solid fa-solar-panel",
          },
          {
               title: "Expert & Safe Installation",
               desc: "Our professional installers ensure safe, precise, and clean installation every time.",
               icon: "fa-solid fa-handshake",
          },
          {
               title: "Competitive Pricing & Flexibility",
               desc: "Get premium solar systems at fair pricing along with flexible finance options.",
               icon: "fa-solid fa-money-bill-wave",
          },
     ];

     return (
          <motion.div
               layout="position"
               variants={fadeLeft}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, amount: 0.3 }}
               className={`grid gap-8 ${className}`}>
               {features.map((item, index) => (
                    <div
                         key={index}
                         className="flex bg-white border border-green-100 shadow-sm hover:shadow-lg transition-all rounded-2xl p-6 hover:-translate-y-1 cursor-default"
                    >
                         {/* Font Awesome icon */}
                         <div className="text-3xl md:text-4xl text-green-600 mr-4">
                              <i className={item.icon}></i>
                         </div>

                         <div>
                              <h3 className="text-lg md:text-xl font-semibold text-green-700">
                                   {item.title}
                              </h3>

                              <p className="text-green-600 mt-2 text-sm leading-relaxed">
                                   {item.desc}
                              </p>
                         </div>
                    </div>

               ))}
          </motion.div>
     )
}

export default FeaturesSection