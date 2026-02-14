import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailsHero from "../../components/common/details/DetailsHero";
import DetailsCompanyInfo from "../../components/common/details/DetailsCompanyInfo";
import DetailsSolutionSection from "../../components/common/details/DetailsSolutionSection";
import DetailsApplications from "../../components/common/details/DetailsApplications";
import DetailsBenefitSection from "../../components/common/details/DetailsBenefitSection";
import NotFound from "./NotFound";
import { getAllProducts } from "../../services/productService";

const ProductDetails = () => {
     const [productData, setProductData] = useState([]);
     const [loading, setLoading] = useState(true);

     const { slug } = useParams();
     const product = productData.find(p => p.slug === slug);

     useEffect(() => {
          const loadProducts = async () => {
               try {
                    const response = await getAllProducts();
                    setProductData(response.data);
               } catch (error) {
                    alert(error.message);
               } finally {
                    setLoading(false);
               }
          }

          loadProducts();
     }, []);

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
               <DetailsBenefitSection data={product} items={product.benefits} />
          </div>
     );
};

export default ProductDetails;
