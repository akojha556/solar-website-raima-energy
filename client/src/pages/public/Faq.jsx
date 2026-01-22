import CTASection from "../../components/common/cta/CTASection";
import PageHero from "../../components/common/PageHero";
import FaqAccordion from "../../components/faq/FaqAccordion";
import { rooftopSolarFAQs, solarServiceFAQs } from "../../data/faqData";

const Faq = () => {

  return (
    <div>
      <PageHero heading="Frequenly Asked Questions" />
      {/* Question Section */}
      <section className="max-w-7xl mx-auto my-12 px-4">
        <div className="flex flex-col md:flex-row md:gap-4 justify-between">
          <FaqAccordion items={rooftopSolarFAQs} />
          <FaqAccordion items={solarServiceFAQs} />
        </div>
      </section>
      <CTASection />
    </div>
  )
}

export default Faq