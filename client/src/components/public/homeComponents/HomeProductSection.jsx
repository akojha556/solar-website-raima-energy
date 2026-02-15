import { motion } from "framer-motion";
import { fadeUp, fadeLeft, fadeRight } from "../../../animations/motionVariants";
import { productsData } from "../../../data/productsData";
import { Link } from "react-router-dom";
import ProductServiceCTAButtons from "../common/cta/ProductServiceCTAButtons";

export default function HomeProductsSection() {

     return (
          <section className="py-16 bg-[#f3fff5]">

               <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-4 items-start">

                    {/* LEFT TEXT SECTION */}
                    <motion.div
                         layout="position"
                         variants={fadeRight}
                         initial="hidden"
                         whileInView="visible"
                         viewport={{ once: true }}
                         className="space-y-4 md:space-y-6 lg:text-left lg:max-w-120 flex flex-col items-center lg:block">
                         <h2 className="text-xl md:text-2xl font-bold text-white border w-fit p-4 bg-green-600 mb-8">
                              Our Products
                         </h2>

                         <p className="lg:text-2xl text-xl text-green-700 font-medium leading-snug text-center md:text-left">
                              Discover Smart Solar Solutions with Raima Energy—Built to Reduce Costs and Power Your Future!
                         </p>

                         <p className="text-green-600 text-sm sm:text-base leading-relaxed text-center md:text-left">
                              Raima Energy delivers high-performance and cost-efficient solar products designed to transform energy consumption across the North East. Aligned with initiatives like the PM Surya Ghar Muft Bijli Yojana, our solar solutions help homes and businesses generate clean energy, reduce electricity bills, and achieve long-term energy independence through reliable, durable, and innovative technology.
                         </p>

                         {/* BUTTONS  */}
                         <motion.div
                              layout="position"
                              variants={fadeUp}
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true }}
                              className="w-full flex flex-col items-center md:flex-row md:justify-center lg:justify-normal gap-2">
                              {/* CTA buttons */}
                              <ProductServiceCTAButtons primaryText="View All Products" secondaryText="Compare Solar Solutions" primaryTo="/products" secondaryTo="/products#solutions" />
                         </motion.div>
                    </motion.div>

                    {/* RIGHT PRODUCT GRID */}
                    <motion.div
                         layout="position"
                         variants={fadeLeft}
                         initial="hidden"
                         whileInView="visible"
                         viewport={{ once: true }}
                         className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                         {productsData.slice(0, 6).map((product) => {
                              return (
                                   <Link to={`/products/${product.slug}`}
                                        aria-label={`View details of ${product.title}`}
                                        key={product.slug}
                                        className="block group bg-white px-2 py-6 shadow-sm border border-green-100 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer"
                                   >
                                        <div className="overflow-hidden">
                                             <img
                                                  src={product.images.main.url}
                                                  alt={product.title}
                                                  className="w-full h-40 object-cover group-hover:scale-110 transition-all duration-300"
                                             />
                                        </div>

                                        <h4 className="text-center mt-2 sm:mt-3 text-green-700 font-semibold text-sm sm:text-base leading-tight">
                                             {product.title}
                                        </h4>
                                   </Link>
                              );
                         })}
                    </motion.div>
               </div>
          </section>
     );
}
