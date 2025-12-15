import { motion } from "framer-motion";
import { cardInView } from "../../animations/motionVariants";
import InfoCard from "../common/InfoCard";
import { productsData } from "../../data/productsData";

const ProductGrid = () => {
     return (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-6 max-w-7xl mx-auto">
               {productsData.map((product) => (
                    <motion.div
                         variants={cardInView}
                         initial="hidden"
                         whileInView="visible"
                         viewport={{ once: true, amount: 0.3 }}
                    >
                         <InfoCard
                              key={product.slug}
                              title={product.title}
                              info={product.shortDesc}
                              img={product.image}
                         />
                    </motion.div>
               ))}
          </div>
     );
};

export default ProductGrid;
