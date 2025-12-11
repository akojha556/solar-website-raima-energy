import { useState } from "react";
import { motion } from "framer-motion";

export default function FAQSection({ fadeUp, fadeLeft, fadeRight }) {
     const faqs1 = [
          {
               q: "What is a solar rooftop system and how does it work?",
               a: "A solar rooftop system converts sunlight into electricity using solar panels. The generated DC power is converted to AC using an inverter and used to run household appliances."
          },
          {
               q: "How much can I save using solar energy?",
               a: "Most households save 60-90% on their monthly electricity bills depending on consumption and system size."
          },
          {
               q: "How long does a solar installation take?",
               a: "Residential installations usually take 1-3 days depending on roof structure and system capacity."
          },
          {
               q: "What government subsidies are available?",
               a: "Under PM Surya Ghar Muft Bijli Yojana, homeowners can receive subsidies on rooftop solar installations. Eligibility depends on system size and location."
          },
     ];

     const faqs2 = [
          {
               q: "How long do solar panels last?",
               a: "High-quality solar panels typically last 25-30 years with minimal maintenance."
          },
          {
               q: "Do solar systems work during cloudy days?",
               a: "Yes, solar panels still generate electricity, though at reduced efficiency. A hybrid system with batteries ensures uninterrupted power."
          },
          {
               q: "What maintenance does a solar system require?",
               a: "Maintenance is minimal—primarily cleaning panels every few months and routine system checks once or twice per year."
          },
          {
               q: "Can I run AC, water heaters, and heavy appliances on solar?",
               a: "Yes. With the right system size and inverter capacity, you can run all household appliances including ACs and pumps."
          }
     ]

     const [openLeftIndex, setOpenLeftIndex] = useState(null);
     const [openRightIndex, setOpenRightIndex] = useState(null);

     const toggleLeftFaq = (index) => {
          setOpenLeftIndex(openLeftIndex === index ? null : index);
     }

     const toggleRightFaq = (index) => {
          setOpenRightIndex(openRightIndex === index ? null : index);
     }

     return (
          <section className="py-20 bg-white">
               <div className="px-4 max-w-7xl md:px-12 mx-auto">
                    <div>
                         <motion.h1
                              layout
                              variants={fadeUp}
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true }}
                              className="text-3xl font-bold text-green-600 text-center mb-10">Frequently Asked Questions</motion.h1>
                         <div className="flex flex-col md:flex-row md:gap-4 justify-between">
                              <motion.div
                                   layout
                                   variants={fadeRight}
                                   initial="hidden"
                                   whileInView="visible"
                                   viewport={{ once: true }}
                                   className="flex-1">
                                   {faqs1.map((faq, index) => {
                                        return (
                                             <div key={index} className="py-1 px-2 border mb-2 border-green-200 rounded-lg shadow-md bg-white">
                                                  {/* QUESTION */}
                                                  <div>
                                                       <button onClick={() => {
                                                            toggleLeftFaq(index);
                                                            toggleRightFaq("null");
                                                       }} className="text-green-700 px-4 py-2 text-base flex gap-2 items-center justify-between cursor-pointer transition-all transform hover:text-green-600 w-full">
                                                            <p className="text-left">{faq.q}</p>
                                                            <i className={`fa-solid fa-plus transition ${openLeftIndex === index ? "rotate-45" : ""}`}></i>
                                                       </button>
                                                  </div>
                                                  {/* ANSWER */}
                                                  <div className={`overflow-hidden w-full transition-all duration-300 ${openLeftIndex === index ? "max-h-96" : "max-h-0"}`}>
                                                       <p className="py-2 px-4 text-base text-gray-600">{faq.a}</p>
                                                  </div>
                                             </div>
                                        )

                                   })}
                              </motion.div>
                              <motion.div
                                   layout
                                   variants={fadeLeft}
                                   initial="hidden"
                                   whileInView="visible"
                                   viewport={{ once: true }}
                                   className="flex-1">
                                   {faqs2.map((faq, index) => {
                                        return (
                                             <div key={index} className="py-1 px-2 border mb-2 border-green-200 rounded-lg shadow-md bg-white">
                                                  {/* QUESTION */}
                                                  <div>
                                                       <button onClick={() => {
                                                            toggleRightFaq(index);
                                                            toggleLeftFaq(null);
                                                       }} className="text-green-700 px-4 py-2 text-base flex gap-2 items-center justify-between cursor-pointer transition-all transform hover:text-green-600 w-full">
                                                            <p className="text-left">{faq.q}</p>
                                                            <i className={`fa-solid fa-plus transition ${openRightIndex === index ? "rotate-45" : ""}`}></i>
                                                       </button>
                                                  </div>
                                                  {/* ANSWER */}
                                                  <div className={`overflow-hidden w-full transition-all duration-300 ${openRightIndex === index ? "max-h-96" : "max-h-0"}`}>
                                                       <p className="py-2 px-4 text-base text-gray-600">{faq.a}</p>
                                                  </div>
                                             </div>
                                        )

                                   })}
                              </motion.div>
                         </div>
                    </div>
               </div>
          </section>
     );
}
