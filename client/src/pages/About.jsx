import React from "react";
import { motion } from "framer-motion";
import about from "../assets/about.jpg";
import story from "../assets/story.jpg";
import mission from "../assets/mission.jpg";
import ctaimg from "../assets/ctaimg.jpg";
import FeaturesSection from "../components/common/FeaturesSection";

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
          <div className="flex flex-col flex-1 gap-4">
            <h2 className="text-green-600 text-2xl font-bold">The Raima Energy Story</h2>
            <p className="text-gray-600">
              Raima Energy is a leading provider of solar energy solutions in the North East, offering end-to-end services for residential, commercial, and institutional clients. With a strong commitment to sustainability and innovation, we align with key national initiatives, including the PM SuryaGhar Muft Bijli Yojana, to accelerate the region's transition to renewable energy.

              We deliver reliable, efficient, and cost-effective solar systems backed by professional service, technical expertise, and a customer-first approach. Our vision is to establish Raima Energy as the preferred solar partner across the North East, contributing to long-term energy security and environmental responsibility.</p>
            <motion.button
              layout
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-2 my-4 text-green-600 border border-green-400 hover:bg-green-400 cursor-pointer transition-colors hover:text-white md:mt-8">Contact Us</motion.button>
          </div>
          {/* RIGHT SECTION */}
          <div className="flex-1">
            <img src={story} alt="our-story" className="object-cover h-full  w-full" />
          </div>
        </div>
      </section>
      {/* MISSION SECTION */}
      <section className="bg-[#f3fff5] py-6">
        <div className="flex flex-col align-middle items-center">
          {/* LEFT */}
          <div className="flex flex-col gap-4 relative min-h-100 w-full">
            <img src={mission} alt="our-mission" className="absolute inset-0 object-cover h-full w-full" />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="z-10 flex flex-col gap-4 items-center align-middle p-4 max-w-6xl mx-auto">
              <h2 className="text-2xl px-4 py-2 bg-green-600 text-white font-bold mt-10">Our Mission</h2>
              <h4 className="text-white font-bold text-xl md:text-2xl lg:text-3xl
               text-center max-w-xl md:max-w-2xl lg:max-w-5xl">Our mission is to transform the energy landscape of the North East by delivering accessible, high-quality solar solutions that reduce costs, inspire sustainability, and create long-term energy independence.</h4>
            </div>
          </div>
          {/* RIGHT */}
          <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 -translate-y-26 md:-translate-y-28 lg:-translate-y-32 max-w-7xl">
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
          </div>
        </div>
      </section>
      {/* Why choose us section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row">
            <div className="relative min-h-100 lg:min-h-180 flex-1">
              <img src={ctaimg} alt="contact-us" className="absolute inset-0 object-cover h-full w-full" />
            </div>
            <div className="mx-6 lg:mx-0 px-4 lg:px-12 pb-6 flex flex-col gap-12 bg-green-50/90 -translate-y-58 lg:translate-y-0 lg:max-w-4xl">
              <div>
                <h2 className="text-2xl px-4 py-2 bg-green-600 text-white font-bold mt-10 max-w-fit mb-4">Why choose us?</h2>
                <p className="text-lg md:text-xl lg:text-2xl font-semibold">Raima Energy: Bringing sustainable, reliable, and smart solar power to every corner of the North-East.</p>
              </div>
              <FeaturesSection className="md:grid-cols-2" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About;