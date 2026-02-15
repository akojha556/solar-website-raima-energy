import PageHero from "../../components/public/common/PageHero";
import ContactMap from "../../components/public/contactComponents/ContactMap";
import ContactSection from "../../components/public/contactComponents/ContactSection"

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