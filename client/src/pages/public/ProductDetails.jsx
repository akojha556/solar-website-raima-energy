import { useParams } from "react-router-dom";
import { productsData } from "../../data/productsData";
import DetailsHero from "../../components/common/details/DetailsHero";
import DetailsCompanyInfo from "../../components/common/details/DetailsCompanyInfo";
import DetailsSolutionSection from "../../components/common/details/DetailsSolutionSection";
import DetailsApplications from "../../components/common/details/DetailsApplications";
import DetailsBenifitSection from "../../components/common/details/DetailsBenifitSection";
import NotFound from "./NotFound";

const ProductDetails = () => {
     const { slug } = useParams();
     const product = productsData.find(p => p.slug === slug);

     //If no products route
     if (!product) {
          return <NotFound />;
     }

     return (
          <div className="bg-[#f3fff5]">
               <DetailsHero data={product} />
               <DetailsCompanyInfo />
               <DetailsSolutionSection data={product} options={product.types} />
               <DetailsApplications data={product} items={product.applications} />
               <DetailsBenifitSection data={product} items={product.benefits} />
          </div>
     );
};

export default ProductDetails;
