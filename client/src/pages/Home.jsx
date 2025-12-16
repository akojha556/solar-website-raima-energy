import React from "react";
import HeroSlider from "../components/homeComponents/HeroSlider";
import WhyChooseUs from "../components/homeComponents/WhyChooseUs";
import ProductsSection from "../components/homeComponents/ProductSection";
import ServicesSection from "../components/homeComponents/ServiceSection";
import AboutSection from "../components/homeComponents/AboutSection";
import FAQSection from "../components/homeComponents/FAQSection";
import CTASection from "../components/homeComponents/CTASection";
import TestimonialSection from "../components/homeComponents/TestimonialSection";

const Home = () => {

  return (
    <div>
      <HeroSlider />
      <WhyChooseUs />
      <ProductsSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialSection />
      <FAQSection />
      <CTASection />
    </div>
  )
}

export default Home;