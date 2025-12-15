import React from "react";
import { motion } from "framer-motion";
import story from "../assets/story.jpg";
import mission from "../assets/mission.jpg";
import cta from "../assets/cta.jpg";
import chooseAbout from "../assets/chooseAbout.jpg"
import FeaturesSection from "../components/common/FeaturesSection";
import CallCTA from "../components/common/CallCTA";
import { fadeRight, fadeDown, fadeUp } from "../animations/motionVariants";
import PageHero from "../components/common/PageHero";

const About = () => {
  const missionPoints = [
    {
      icon: "fa-brands fa-canadian-maple-leaf",
      text: "Promoting clean, renewable energy."
    },
    {
      icon: "fa-solid fa-earth-asia",
      text: "Reducing environmental impact for a greener planet."
    },
    {
      icon: "fa-solid fa-solar-panel",
      text: "Providing reliable solar solutions for homes and businesses."
    },
    {
      icon: "fa-solid fa-lightbulb",
      text: "Delivering smart and efficient solar innovations."
    }
  ];

  return (
    <div className="bg-[#f3fff5]">

      {/* ABOUT HERO */}
      <PageHero heading="About" />

      {/* STORY SECTION */}
      <section className="py-6">
        <div className="flex flex-col md:flex-row max-w-7xl mx-auto md:gap-20 justify-between">
          {/* LEFT SECTION */}
          <motion.div
            layout={false}
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="flex flex-col lg:flex-2 gap-4">
            <h2 className="text-green-600 text-2xl md:text-3xl font-bold">The Raima Energy Story</h2>
            <p className="text-gray-600">
              Raima Energy is a leading provider of solar energy solutions in the North East, offering end-to-end services for residential, commercial, and institutional clients. With a strong commitment to sustainability and innovation, we align with key national initiatives, including the PM SuryaGhar Muft Bijli Yojana, to accelerate the region's transition to renewable energy.

              We deliver reliable, efficient, and cost-effective solar systems backed by professional service, technical expertise, and a customer-first approach. Our vision is to establish Raima Energy as the preferred solar partner across the North East, contributing to long-term energy security and environmental responsibility.</p>
            <motion.button
              layout
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-2 my-4 text-green-600 border border-green-400 hover:bg-green-400 cursor-pointer transition-colors hover:text-white md:mt-8">Contact Us</motion.button>
          </motion.div>
          {/* RIGHT SECTION */}
          <div className="lg:flex-3">
            <img src={story} alt="our-story" className="object-cover h-full  w-full" />
          </div>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="py-6">
        <div className="pb-176 md:pb-70 lg:pb-40">
          <div className="flex flex-col align-middle items-center relative">
            {/* LEFT */}
            <div className="flex flex-col gap-4 relative min-h-100 w-full">
              <img src={mission} alt="our-mission" className="absolute inset-0 object-cover h-full w-full" />
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="z-10 flex flex-col gap-4 items-center align-middle p-4 max-w-6xl mx-auto">
                <motion.h2
                  layout={false}
                  variants={fadeDown}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className="text-2xl px-4 py-2 bg-green-600 text-white font-bold mt-10">Our Mission</motion.h2>
                <h4 className="text-white font-bold text-xl md:text-2xl lg:text-3xl
               text-center max-w-xl md:max-w-2xl lg:max-w-5xl">Our mission is to transform the energy landscape of the North East by delivering accessible, high-quality solar solutions that reduce costs, inspire sustainability, and create long-term energy independence.</h4>
              </div>
            </div>
            {/* RIGHT */}
            <motion.div
              layout={false}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="absolute top-4/5 md:top-2/3 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl">
              {missionPoints.map((point, index) => {
                return (
                  <div key={index} className="font-medium text-base font-gray-600 bg-white hover:-translate-y-1 transition-all py-10 px-2 shadow-sm hover:shadow-lg border border-green-100 text-green-700 flex flex-col items-center gap-2 cursor-default">
                    <i className={`${point.icon} text-4xl`}></i>
                    <p className="text-lg md:text-xl text-center lg:text-2xl font-semibold">
                      {point.text}
                    </p>
                  </div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto">
          <div className="relative md:min-h-110 lg:min-h-135 min-h-98">
            <img src={cta} alt="chontact-us" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute inset-0 flex justify-between items-center bg-blue-600/80 z-50 m-4 p-4 md:p-6 md:m-0 md:left-0 md:top-0 md:bottom-0 md:right-1/2 lg:right-3/5">
              <div className="flex flex-col">
                <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold text-center md:text-left pb-12">Raima Energy believes in making a positive impact on society and the planet. Join us on our journey towards a more sustainable future. </h2>
                {/* BUTTON section */}
                <motion.div
                  layout={false}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className="flex flex-col md:flex-row items-center">
                  <CallCTA primaryText="Contact Us" secondaryText="+916033322529" primaryVariant="primary" secondaryVariant="ghostWhite" secondaryIconClass="group-hover:text-white" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto pb-270 md:pb-110 lg:pb-0">
          <div className="relative">
            {/* LEFT- image */}
            <div className="relative h-65 md:h-90 lg:h-180 lg:w-[60%]">
              <img src={chooseAbout} alt="why-choose-us" className="w-full h-full object-cover" />
            </div>
            {/* RIGHT -choose us*/}
            <div className="absolute z-10 bg-white mx-4 top-1/2 translate-y-18 md:translate-y-0 lg:mx-0 lg:w-[70%] lg:top-1/2 lg:-translate-y-1/2 lg:right-0 px-6 lg:px-12 py-10 flex flex-col gap-8">
              <div>
                <motion.h2
                  layout={false}
                  variants={fadeDown}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className="text-2xl px-4 py-2 bg-green-600 text-white font-bold max-w-fit mb-4">Why choose us?</motion.h2>
                <p className="text-lg md:text-xl lg:text-2xl font-semibold">Raima Energy: Bringing sustainable, reliable, and smart solar power to every corner of the North-East.</p>
              </div>
              <FeaturesSection className="grid-cols-1 md:grid-cols-2" />
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default About;