import ProductGrid from "../../components/productComponents/ProductGrid";
import SectionHero from "../../components/common/SectionHero";
import DetailCTASection from "../../components/common/details/DetailCTASection";

const Products = () => {
  return (
    <div className="bg-[#f3fff5]">
      <SectionHero title="Our Products" subtitle="Explore our range of high-quality solar products designed for residential, commercial, and industrial applications." />
      <ProductGrid id="solutions" />
      <DetailCTASection
        title="Looking for the Right Solar Products for Your Project?"
        description="Explore our range of high-quality solar products engineered for efficiency, safety, and long-term performance across residential, commercial, and industrial applications."
        primaryText="Request Product Enquiry"
        secondaryText="Talk to Product Expert"
        primaryTo="/contact"
        secondaryTo="tel:+916033322529"
      />
    </div>
  )
}

export default Products;