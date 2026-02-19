import { useParams } from "react-router-dom";
import DetailsHero from "../../components/public/common/details/DetailsHero";
import DetailsCompanyInfo from "../../components/public/common/details/DetailsCompanyInfo";
import DetailsSolutionSection from "../../components/public/common/details/DetailsSolutionSection";
import DetailsApplications from "../../components/public/common/details/DetailsApplications";
import DetailsBenefitSection from "../../components/public/common/details/DetailsBenefitSection";
import NotFound from "./NotFound";
import { useAppData } from "../../context/AppDataContext";
import FetchError from "../../components/public/ui/FetchError";

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

//Skeleton somponent for product details
const DetailsSkeleton = () => {
     return (
          <div className="bg-[#f3fff5] p-4 space-y-6 animate-pulse">
               {/* Hero Skeleton */}
               <div className="h-90 bg-gray-200 rounded-lg" />

               {/* Company Info */}
               <div className="space-y-3">
                    <div className="h-6 w-1/3 bg-gray-200 rounded" />
                    <div className="h-4 w-2/3 bg-gray-200 rounded" />
                    <div className="h-4 w-1/2 bg-gray-200 rounded" />
               </div>

               {/* Solutions Section */}
               <div className="grid grid-cols-2 gap-4">
                    <div className="h-32 bg-gray-200 rounded-lg" />
                    <div className="h-32 bg-gray-200 rounded-lg" />
               </div>

               {/* Applications */}
               <div className="grid grid-cols-3 gap-4">
                    <div className="h-24 bg-gray-200 rounded" />
                    <div className="h-24 bg-gray-200 rounded" />
                    <div className="h-24 bg-gray-200 rounded" />
               </div>

               {/* Benefits */}
               <div className="space-y-3">
                    <div className="h-5 w-1/4 bg-gray-200 rounded" />
                    <div className="h-4 w-3/4 bg-gray-200 rounded" />
                    <div className="h-4 w-2/3 bg-gray-200 rounded" />
               </div>
          </div>
     );
};


export default ProductDetails;
