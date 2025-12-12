import React from "react";
import { motion } from "framer-motion";
import about from "../assets/about.jpg";
import story from "../assets/story.jpg";
import mission from "../assets/mission.jpg";

const About = () => {
  const missionPoints = [
    {
      icon: "fa-brands fa-canadian-maple-leaf",
      text: "Driving the transition toward clean, renewable energy for a sustainable future."
    },
    {
      icon: "fa-solid fa-earth-asia",
      text: "Contributing to a greener planet by reducing environmental impact and promoting eco-friendly practices."
    },
    {
      icon: "fa-solid fa-solar-panel",
      text: "Empowering homes and businesses with dependable, independent solar energy solutions."
    },
    {
      icon: "fa-solid fa-lightbulb",
      text: "Enhancing everyday life through smart, efficient, and innovative solar technology."
    }
  ];


  return (
    <div>
      <section className="relative h-60 flex items-center justify-center">
        <img src={about} className="absolute inset-0 object-cover h-full w-full" />
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="text-white text-3xl md:text-4xl font-bold text-center z-10">About Us</h1>
      </section>
      {/* STORY SECTION */}
      <section className="bg-[#f3fff5] py-6">
        <div className="flex flex-col md:flex-row max-w-7xl mx-auto px-4 md:gap-10 justify-between">
          {/* LEFT SECTION */}
          <div className="flex flex-col flex-1 gap-2">
            <h2 className="text-green-600 text-2xl font-bold">The Raima Energy Story</h2>
            <p className="text-gray-600">
              Raima Energy is a leading provider of solar energy solutions in the North East, offering end-to-end services for residential, commercial, and institutional clients. With a strong commitment to sustainability and innovation, we align with key national initiatives, including the PM SuryaGhar Muft Bijli Yojana, to accelerate the region's transition to renewable energy.

              We deliver reliable, efficient, and cost-effective solar systems backed by professional service, technical expertise, and a customer-first approach. Our vision is to establish Raima Energy as the preferred solar partner across the North East, contributing to long-term energy security and environmental responsibility.</p>
            <motion.button
              layout
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-2 my-4 text-green-600 border border-green-400 hover:bg-green-400 cursor-pointer transition-colors hover:text-white">Contact Us</motion.button>
          </div>
          {/* RIGHT SECTION */}
          <div className="flex-1">
            <img src={story} alt="our-story" className="object-cover h-full  w-full" />
          </div>
        </div>
      </section>
      {/* MISSION SECTION */}
      <section className="bg-[#f3fff5] py-6">
        <div>
          {/* LEFT */}
          <div className="flex flex-col gap-4 relative min-h-90">
            <img src={mission} alt="our-mission" className="absolute inset-0 object-cover h-full w-full" />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="z-10 flex flex-col gap-4 items-center align-middle p-4 max-w-6xl mx-auto">
              <h2 className="text-2xl px-4 py-2 bg-green-600 text-white font-bold">Our Mission</h2>
              <h4 className="text-white font-semibold text-xl
               text-center">Our mission is to transform the energy landscape of the North East by delivering accessible, high-quality solar solutions that reduce costs, inspire sustainability, and create long-term energy independence.</h4>
            </div>
          </div>
          {/* RIGHT */}
          <div className="p-4 flex flex-col gap-4 -translate-y-20">
            {missionPoints.map((point, index) => {
              return (
                <div key={index} className="font-medium text-base font-gray-600 bg-white hover:-translate-y-1 transition-all p-4 shadow-sm hover:shadow-lg border border-green-100 text-green-700 flex flex-col items-center gap-2 cursor-default">
                  <i className={`${point.icon} text-3xl hover:rotate-45`}></i>
                  <p>
                    {point.text}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About;