import { motion } from "framer-motion";
import { cardInView } from "../../animations/motionVariants";
import InfoCard from "../common/InfoCard";
import { productsData } from "../../data/productsData";

const ProductGrid = ({ id }) => {
     return (
          <section id={id} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-6 max-w-7xl mx-auto bg-[#f3fff5]">
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
                              img={product.images.main}
                              slug={product.slug}
                              type="products"
                         />
                    </motion.div>
               ))}
          </section>
     );
};

export default ProductGrid;
