import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { cardInView } from "../../../animations/motionVariants";
import InfoCard from "../common/InfoCard";
import { getAllProducts } from "../../../services/productService";

const ProductGrid = ({ id }) => {
     const [productsData, setProductData] = useState([]);
     const [loading, setLoading] = useState(true);

     useEffect(() => {
          const loadProducts = async () => {
               try {
                    const response = await getAllProducts();
                    setProductData(response.data);
               } catch (error) {
                    alert(error.message);
               } finally {
                    setLoading(false);
               }
          }

          loadProducts();
     }, []);

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
                         {productsData.map((product) => (
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
