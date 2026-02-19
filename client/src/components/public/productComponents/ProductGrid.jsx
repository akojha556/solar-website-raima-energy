import { motion } from "framer-motion";
import { cardInView } from "../../../animations/motionVariants";
import InfoCard from "../common/InfoCard";
import { useAppData } from "../../../context/AppDataContext";
import FetchError from "../ui/FetchError";

const ProductGrid = ({ id }) => {
     const { productData, loading, error } = useAppData();

     if (error) {
          return (
               <FetchError message={"Unable to load products."} />
          );
     };

     return (
          <section id={id}>
               {loading ?
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-6 max-w-7xl mx-auto bg-[#f3fff5]">
                         {Array(10).fill(0).map((_, i) => (
                              <div
                                   key={i}
                                   className="h-50 bg-gray-200 animate-pulse rounded-lg"
                              />
                         ))}
                    </div> : <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-6 max-w-7xl mx-auto bg-[#f3fff5]">
                         {productData.map((product) => (
                              <motion.div
                                   key={product.slug}
                                   variants={cardInView}
                                   initial="hidden"
                                   whileInView="visible"
                                   viewport={{ once: true, amount: 0.3 }}
                              >
                                   <InfoCard
                                        title={product.title}
                                        info={product.shortDesc}
                                        img={product.images.main.url}
                                        slug={product.slug}
                                        type="products"
                                   />
                              </motion.div>
                         ))}
                    </div>
               }
          </section>
     );
};

export default ProductGrid;
