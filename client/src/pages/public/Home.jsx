import HomeAboutSection from "../../components/homeComponents/HomeAboutSection";
import HomeHeroSlider from "../../components/homeComponents/HomeHeroSlider";
import HomeProductsSection from "../../components/homeComponents/HomeProductSection";
import HomeServicesSection from "../../components/homeComponents/HomeServiceSection";
import TestimonialSection from "../../components/homeComponents/TestimonialSection";
import HomeFAQSection from "../../components/homeComponents/HomeFAQSection";
import HomeCTA from "../../components/homeComponents/HomeCTA";
import WhyChooseUs from "../../components/homeComponents/WhyChooseUs";

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