import { useParams } from "react-router-dom";
import DetailsHero from "../../components/public/common/details/DetailsHero";
import DetailsCompanyInfo from "../../components/public/common/details/DetailsCompanyInfo";
import DetailsSolutionSection from "../../components/public/common/details/DetailsSolutionSection";
import DetailsApplications from "../../components/public/common/details/DetailsApplications";
import DetailsBenefitSection from "../../components/public/common/details/DetailsBenefitSection";
import NotFound from "./NotFound";
import { useAppData } from "../../context/AppDataContext";
import FetchError from "../../components/public/ui/FetchError";
import { DetailsSkeleton } from "../../components/public/ui/DetailsSkeleton";

const ProductDetails = () => {
     const { productData, loading, error } = useAppData();

     const { slug } = useParams();
     const product = Array.isArray(productData)
          ? productData.find(p => p.slug === slug)
          : null;

     //If no products route
     if (!loading && !product && !error) {
          return <NotFound />;
     }

     if (error) {
          return (
               <FetchError message={"Unable to load the requested product."} />
          );
     };

     return (
          <div>
               {loading ? <DetailsSkeleton /> :
                    <div className="bg-[#f3fff5]">
                         <DetailsHero data={product} />
                         <DetailsCompanyInfo />
                         <DetailsSolutionSection data={product} options={product.types} />
                         <DetailsApplications data={product} items={product.applications} />
                         <DetailsBenefitSection data={product} items={product.benefits} />
                    </div>
               }
          </div>
     );
};


export default ProductDetails;
