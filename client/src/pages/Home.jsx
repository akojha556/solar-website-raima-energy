import React from "react";
import HeroSlider from "../components/homeComponents/HeroSlider";
import WhyChooseUs from "../components/homeComponents/WhyChooseUs";
import ProductsSection from "../components/homeComponents/ProductSection";
import ServicesSection from "../components/homeComponents/ServiceSection";
import AboutSection from "../components/homeComponents/AboutSection";
import FAQSection from "../components/homeComponents/FAQSection";
import CTASection from "../components/homeComponents/CTASection";

const Home = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  }

  const fadeLeft = {
    hidden: { opacity: 0, x: 90 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  }

  const fadeRight = {
    hidden: { opacity: 0, x: -90 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  }

  return (
    <div>
      <HeroSlider fadeUp={fadeUp} />
      <WhyChooseUs fadeLeft={fadeLeft} fadeRight={fadeRight} />
      <ProductsSection fadeLeft={fadeLeft} fadeRight={fadeRight} />
      <ServicesSection fadeUp={fadeUp} />
      <AboutSection fadeUp={fadeUp} fadeLeft={fadeLeft} fadeRight={fadeRight} />
      <FAQSection fadeUp={fadeUp} fadeLeft={fadeLeft} fadeRight={fadeRight} />
      <CTASection fadeLeft={fadeLeft} fadeRight={fadeRight} />
    </div>
  )
}

export default Home;