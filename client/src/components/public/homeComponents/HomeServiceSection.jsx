import { motion } from "framer-motion";
import { fadeUp, fadeLeft, fadeRight } from "../../../animations/motionVariants";
import { servicesData } from "../../../data/servicesData";
import { Link } from "react-router-dom";
import ProductServiceCTAButtons from "../common/cta/ProductServiceCTAButtons";

export default function HomeServicesSection() {

     return (
          <section className="py-20 bg-white">
               <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-6 items-start">
                    {/* LEFT PRODUCT GRI */}
                    <motion.div
                         layout="position"
                         variants={fadeRight}
                         initial="hidden"
                         whileInView="visible"
                         viewport={{ once: true }}
                         className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 order-2 lg:order-1"
                    >
                         {servicesData.slice(0, 6).map((service) => {
                              return (
                                   <Link to={`/services/${service.slug}`}
                                        aria-label={`View details of ${service.title}`}
                                        key={service.slug}
                                        className="block group bg-white px-2 py-6 shadow-sm border border-green-100 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer"
                                   >
                                        <div className="overflow-hidden">
                                             <img
                                                  src={service.images.main}
                                                  alt={service.title}
                                                  className="w-full h-40 object-cover group-hover:scale-110 transition-all duration-300"
                                             />
                                        </div>

                                        <h4 className="text-center mt-2 sm:mt-3 text-green-700 font-semibold text-sm sm:text-base leading-tight">
                                             {service.title}
                                        </h4>
                                   </Link>
                              );
                         })}
                    </motion.div>

                    {/* RIGHT TEXT SECTION */}
                    <motion.div
                         layout="position"
                         variants={fadeLeft}
                         initial="hidden"
                         whileInView="visible"
                         viewport={{ once: true }}
                         className="space-y-4 md:space-y-6 lg:text-left lg:max-w-120 flex flex-col items-center lg:block order-1 lg:order-2"
                    >
                         <h2 className="text-xl lg:text-right md:text-2xl font-bold text-white border w-fit p-4 bg-green-600 mb-8">
                              Our Services
                         </h2>

                         <p className="lg:text-2xl text-xl text-green-700 font-medium leading-snug text-center md:text-left">
                              Power Your Solar Journey with Raima Energy—Explore Our Expert Installation & Maintenance Services!
                         </p>

                         <p className="text-green-600 text-sm sm:text-base leading-relaxed text-center md:text-left">
                              Raima Energy is committed to delivering reliable and professional solar services across the North East, ensuring seamless installation, maintenance, and long-term system performance. By supporting initiatives like the PM Surya Ghar Muft Bijli Yojana, we help homeowners and businesses adopt solar energy with expert guidance, quality workmanship, and end-to-end service support.
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
                              <ProductServiceCTAButtons primaryText="Get Free Consultation" secondaryText="View All Services" primaryTo="/contact" secondaryTo="/services" />
                         </motion.div>
                    </motion.div>
               </div>
          </section>
     );
}
