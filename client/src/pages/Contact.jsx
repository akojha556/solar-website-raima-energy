import PageHero from "../components/common/PageHero";
import ContactMap from "../components/contactComponents/ContactMap";
import ContactSection from "../components/contactComponents/ContactSection";

const Contact = () => {

  return (
    <div className="bg-[#f3fff5]">
      <PageHero heading="Contact Us" />
      <ContactSection />
      <ContactMap />
    </div>
  )
}

export default Contact;