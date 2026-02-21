import { motion } from "framer-motion";
import InfoCard from "../common/InfoCard";
import { cardInView } from "../../../animations/motionVariants";
import { useAppData } from "../../../context/AppDataContext";
import FetchError from "../ui/FetchError";

const ServiceGrid = () => {
     const { serviceData, loading, error } = useAppData();

     if (error) {
          return (
               <FetchError message={"Unable to load services."} />
          );
     };

     return (
          <div>
               {loading ?
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-6 max-w-7xl mx-auto bg-[#f3fff5]">
                         {Array(6).fill(0).map((_, i) => (
                              <div
                                   key={i}
                                   className="h-50 bg-gray-200 animate-pulse rounded-lg"
                              />
                         ))}
                    </div> : <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-6 max-w-7xl mx-auto">
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
                                             img={service.images.main.url}
                                             slug={service.slug}
                                             type="services"
                                        />
                                   </motion.div>
                              )
                         })}
                    </div>
               }
          </div>
     );
};

export default ServiceGrid;