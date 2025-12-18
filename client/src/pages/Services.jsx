import SectionHero from "../components/common/SectionHero";
import ServiceGrid from "../components/serviceComponent/ServiceGrid";
import SectionCTA from "../components/common/SectionCTA";

const Services = () => {
     return (
          <div>
               <SectionHero title="Our Services" subtitle="Delivering expert solar services for homes, businesses, and industrial facilities with proven reliability." />
               <ServiceGrid />
               <SectionCTA
                    title="Need Reliable Solar Services from Industry Experts?"
                    description="Our professional team delivers complete solar services including installation, maintenance, audits, and system upgradation to ensure optimal performance and peace of mind."
                    primaryText="Book a Service Consultation"
                    secondaryText="Talk to Our Expert"
               />

          </div>
     )
}

export default Services