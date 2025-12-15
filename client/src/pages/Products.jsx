import ProductGrid from "../components/productComponents/ProductGrid";
import SectionHero from "../components/common/SectionHero";
import SectionCTA from "../components/common/SectionCTA";

const Products = () => {
  return (
    <div>
      <SectionHero title="Our Products" subtitle="Explore our range of high-quality solar products designed for residential, commercial, and industrial applications." />
      <ProductGrid />
      <SectionCTA
        title="Looking for the Right Solar Products for Your Project?"
        description="Explore our range of high-quality solar products engineered for efficiency, safety, and long-term performance across residential, commercial, and industrial applications."
        primaryText="Explore Solar Products"
        secondaryText="Request Product Enquiry"
      />

    </div>
  )
}

export default Products;