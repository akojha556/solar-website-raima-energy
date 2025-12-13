import React from "react";
import { motion } from "framer-motion";
import p1 from "../../assets/products/p1.jpg";
import p2 from "../../assets/products/p2.jpg";
import p3 from "../../assets/products/p3.jpg";
import p4 from "../../assets/products/p4.jpg";
import p5 from "../../assets/products/p5.jpg";
import p6 from "../../assets/products/p6.jpg";
import CallCTA from "../common/CallCTA";

export default function ProductsSection({ fadeLeft, fadeRight }) {
     const products = [
          { name: "Residential Rooftop Solar Power Plant", img: p1 },
          { name: "Commercial Solar Power Plant", img: p2 },
          { name: "Solar Pumps", img: p3 },
          { name: "Solar Street Lights", img: p4 },
          { name: "Solar Panel", img: p5 },
          { name: "Solar Ongrid Inverter", img: p6 },
     ];

     return (
          <section className="py-16 bg-[#f3fff5]">

               <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-4 items-start">

                    {/* LEFT TEXT SECTION */}
                    <motion.div
                         layout={false}
                         variants={fadeLeft}
                         initial="hidden"
                         whileInView="visible"
                         viewport={{ once: true }}
                         className="space-y-4 md:space-y-6 lg:text-left lg:max-w-120 flex flex-col items-center lg:block">
                         <h2 className="text-xl md:text-2xl font-bold text-white border w-fit p-4 bg-green-600 mb-8">
                              Our Products
                         </h2>

                         <p className="lg:text-2xl text-xl text-green-700 font-medium leading-snug text-center md:text-left">
                              Choose Raima Energy & Save Big on Your Energy Bills—Browse Our Solar Solutions!
                         </p>

                         <p className="text-green-600 text-sm sm:text-base leading-relaxed text-center md:text-left">
                              Raima Energy is dedicated to transforming energy consumption across the North East
                              with high-performance and cost-efficient solar technologies. Supporting initiatives
                              like the PM Surya Ghar Muft Bijli Yojana, we aim to make solar power accessible to
                              every home and business with innovative, durable, and sustainable products.
                         </p>

                         {/* BUTTONS  */}
                         <div className="w-full flex flex-col items-center md:flex-row md:justify-center lg:justify-normal gap-2">
                              <CallCTA primaryText="GET A QUOTE" secondaryText="CALL NOW" primaryVariant="primary" secondaryVariant="ghost" secondaryIconClass="group-hover:text-blue-900" />
                         </div>
                    </motion.div>


                    {/* RIGHT PRODUCT GRID */}
                    <motion.div
                         layout={false}
                         variants={fadeRight}
                         initial="hidden"
                         whileInView="visible"
                         viewport={{ once: true }}
                         className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                         {products.map((product, i) => (
                              <div
                                   key={i}
                                   className="group bg-white px-2 py-6 shadow-sm border border-green-100 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer"
                              >
                                   <div className="overflow-hidden">
                                        <img
                                             src={product.img}
                                             alt={product.name}
                                             className="w-full h-40 object-cover group-hover:scale-110 transition-all duration-300"
                                        />
                                   </div>

                                   <h4 className="text-center mt-2 sm:mt-3 text-green-700 font-semibold text-sm sm:text-base leading-tight">
                                        {product.name}
                                   </h4>
                              </div>
                         ))}
                    </motion.div>
                    <div className="text-center lg:hidden">
                         <button className="px-4 py-2 cursor-pointer rounded-md w-fit transform transition-all text-green-600 hover:scale-[1.03] border text-xs">Explore Products</button>
                    </div>
               </div>
          </section>
     );
}
