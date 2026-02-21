import { motion } from "framer-motion";
import { fadeUp } from "../../../animations/motionVariants";

const testimonials = [
     {
          name: "Rakesh Sharma",
          location: "Guwahati, Assam",
          rating: 5,
          project: "Residential Rooftop Solar - 5kW",
          image: "https://res.cloudinary.com/dgokm518s/image/upload/f_auto,q_auto/v1771665665/user1_r6594e.png",
          feedback:
               "Raima Energy managed our rooftop solar installation professionally. The system performance has been excellent and the team guided us clearly at every stage.",
     },
     {
          name: "Anita Das",
          location: "Silchar, Assam",
          rating: 5,
          project: "Residential Solar Power Plant - 3kW",
          image: "https://res.cloudinary.com/dgokm518s/image/upload/f_auto,q_auto/v1771665666/user2_fo9fkp.png",
          feedback:
               "Very transparent process and quality components. Installation was completed on time and we are already seeing reduced electricity bills.",
     },
     {
          name: "Sanjay Verma",
          location: "Shillong, Meghalaya",
          rating: 5,
          project: "Commercial Solar Installation - 20kW",
          image: "https://res.cloudinary.com/dgokm518s/image/upload/f_auto,q_auto/v1771665668/user3_swmhdw.png",
          feedback:
               "Professional execution and excellent after-sales support. The entire solar project was delivered smoothly without any issues.",
     },
];

const TestimonialSection = () => {
     return (
          <section className="py-20 bg-white">
               <div className="max-w-7xl mx-auto px-6">

                    {/* Section Header */}
                    <motion.div
                         variants={fadeUp}
                         initial="hidden"
                         whileInView="visible"
                         viewport={{ once: true }}
                         className="text-center max-w-2xl mx-auto mb-14"
                    >
                         <h2 className="text-3xl md:text-4xl font-bold text-green-600">
                              What Our Customers Say
                         </h2>
                         <p className="mt-4 text-gray-600">
                              Real experiences from customers who have switched to clean and reliable
                              solar energy solutions.
                         </p>
                    </motion.div>

                    {/* Testimonials Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                         {testimonials.map((item, index) => (
                              <motion.div
                                   key={index}
                                   variants={fadeUp}
                                   initial="hidden"
                                   whileInView="visible"
                                   viewport={{ once: true }}
                                   className="bg-white p-6 rounded-xl border border-green-100 shadow-sm hover:shadow-md"
                              >
                                   {/* Top Section */}
                                   <div className="flex items-center gap-4">
                                        <img
                                             src={item.image}
                                             alt={item.name}
                                             className="w-14 h-14 rounded-full object-cover border"
                                        />

                                        <div className="flex-1">
                                             <p className="font-semibold text-gray-900">{item.name}</p>
                                             <p className="text-sm text-gray-500">{item.location}</p>

                                             {/* Rating */}
                                             <div className="flex items-center gap-1 mt-1">
                                                  {Array.from({ length: item.rating }).map((_, i) => (
                                                       <i
                                                            key={i}
                                                            className="fa-solid fa-star text-yellow-400 text-sm"
                                                       ></i>
                                                  ))}
                                             </div>
                                        </div>
                                   </div>

                                   {/* Feedback */}
                                   <p className="mt-5 text-gray-700 leading-relaxed">
                                        “{item.feedback}”
                                   </p>

                                   {/* Verified Badge */}
                                   <div className="mt-4 flex items-center gap-2 text-sm text-green-600">
                                        <i className="fa-solid fa-circle-check"></i>
                                        <span>Verified Customer</span>
                                   </div>

                                   {/* Project Info */}
                                   <p className="mt-1 text-xs text-gray-500">
                                        {item.project}
                                   </p>
                              </motion.div>
                         ))}
                    </div>

               </div>
          </section>
     );
};

export default TestimonialSection;