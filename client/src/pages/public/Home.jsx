import HomeAboutSection from "../../components/public/homeComponents/HomeAboutSection";
import HomeHeroSlider from "../../components/public/homeComponents/HomeHeroSlider";
import HomeProductsSection from "../../components/public/homeComponents/HomeProductSection";
import HomeServicesSection from "../../components/public/homeComponents/HomeServiceSection";
import TestimonialSection from "../../components/public/homeComponents/TestimonialSection";
import HomeFAQSection from "../../components/public/homeComponents/HomeFAQSection";
import HomeCTA from "../../components/public/homeComponents/HomeCTA";
import WhyChooseUs from "../../components/public/homeComponents/WhyChooseUs";

const Home = () => {

  return (
    <div>
      <HomeHeroSlider />
      <WhyChooseUs />
      <HomeProductsSection />
      <HomeServicesSection />
      <HomeAboutSection />
      <TestimonialSection />
      <HomeFAQSection />
      <HomeCTA />
    </div>
  )
}

export default Home;