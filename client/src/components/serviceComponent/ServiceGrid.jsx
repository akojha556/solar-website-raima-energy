import { serviceData } from "../../data/servicesData"
import InfoCard from "../common/InfoCard";
import { motion } from "framer-motion";
import { cardInView } from "../../animations/motionVariants";

const ServiceGrid = () => {
     return (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-6 max-w-7xl mx-auto">
               {serviceData.map((service) => {
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
                                   img={service.image} />
                         </motion.div>
                    )
               })}
          </div>
     )
}

export default ServiceGrid