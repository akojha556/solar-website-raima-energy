import { motion } from "framer-motion";
import { fadeUp } from "../../../animations/motionVariants";
import { rooftopSolarFAQs, solarServiceFAQs } from "../../../data/faqData";
import FaqAccordion from "../faq/FaqAccordion";
import { Link } from "react-router-dom";
import { Button } from "../ui/Button";

export default function HomeFAQSection() {

     return (
          <section className="py-20 bg-white">
               <div className="max-w-7xl px-4 mx-auto">
                    <div className="flex flex-col items-center">
                         <motion.h1
                              layout="position"
                              variants={fadeUp}
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true }}
                              className="text-3xl text-center font-bold text-green-600 mb-10">Frequently Asked Questions
                         </motion.h1>
                         <div className="flex flex-col md:flex-row md:gap-4 justify-between mb-4">
                              <FaqAccordion items={rooftopSolarFAQs.slice(0, 4)} />
                              <FaqAccordion items={solarServiceFAQs.slice(0, 4)} />
                         </div>
                         <Link to="/faqs">
                              <Button variant="primary" size="lg">
                                   View All
                              </Button>
                         </Link>
                    </div>
               </div>
          </section>
     );
}
