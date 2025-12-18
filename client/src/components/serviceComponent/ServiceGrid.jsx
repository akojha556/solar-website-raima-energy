import InfoCard from "../common/InfoCard";
import { motion } from "framer-motion";
import { cardInView } from "../../animations/motionVariants";
import { servicesData } from "../../data/servicesData";

const ServiceGrid = () => {
     return (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-6 max-w-7xl mx-auto">
               {servicesData.map((service) => {
                    return (
                         <motion.div
                              variants={cardInView}
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true, amount: 0.3 }}
                         >
                              <InfoCard
                                   key={service.slug}
                                   title={service.title}
                                   info={service.shortDesc}
                                   img={service.images.main} />
                         </motion.div>
                    )
               })}
          </div>
     )
}

export default ServiceGrid;