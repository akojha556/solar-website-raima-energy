import SectionHero from "../../components/common/SectionHero";
import ServiceGrid from "../../components/serviceComponent/ServiceGrid";
import DetailCTASection from "../../components/common/details/DetailCTASection";

const Services = () => {
     return (
          <div>
               <SectionHero title="Our Services" subtitle="Delivering expert solar services for homes, businesses, and industrial facilities with proven reliability." />
               <ServiceGrid />
               <DetailCTASection
                    title="Need Reliable Solar Services from Industry Experts?"
                    description="Our professional team delivers complete solar services including installation, maintenance, audits, and system upgradation to ensure optimal performance and peace of mind."
                    primaryText="Book a Service Consultation"
                    secondaryText="Talk to Our Expert"
                    primaryTo="/contact"
                    secondaryTo="tel:+916033322530"
               />
          </div>
     )
}

export default Services;