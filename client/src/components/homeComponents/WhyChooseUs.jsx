import { motion } from "framer-motion";
import choose from "../../assets/choose.jpg";

export default function WhyChooseUs({ fadeLeft, fadeRight }) {
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
          <section className="py-16 bg-[#ffffff]">
               <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 mx-auto max-w-7xl px-4  items-start">
                    {/* LEFT SECTION */}
                    <motion.div
                         layout
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
                    <motion.div
                         layout
                         variants={fadeLeft}
                         initial="hidden"
                         whileInView="visible"
                         viewport={{ once: true }} className="grid grid-cols-1 gap-8">
                         {features.map((item, index) => (
                              <div
                                   key={index}
                                   className="flex bg-white border border-green-100 shadow-sm hover:shadow-lg transition-all rounded-2xl p-6 hover:-translate-y-1"
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
               </div>
          </section>
     );
}
