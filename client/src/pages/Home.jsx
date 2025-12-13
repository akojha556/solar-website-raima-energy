import React from "react";
import HeroSlider from "../components/homeComponents/HeroSlider";
import WhyChooseUs from "../components/homeComponents/WhyChooseUs";
import ProductsSection from "../components/homeComponents/ProductSection";
import ServicesSection from "../components/homeComponents/ServiceSection";
import AboutSection from "../components/homeComponents/AboutSection";
import FAQSection from "../components/homeComponents/FAQSection";
import CTASection from "../components/homeComponents/CTASection";

const Home = () => {

  return (
    <div>
      <HeroSlider />
      <WhyChooseUs />
      <ProductsSection />
      <ServicesSection />
      <AboutSection />
      <FAQSection />
      <CTASection />
    </div>
  )
}

export default Home;