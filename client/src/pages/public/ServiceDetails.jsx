import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import DetailsHero from "../../components/public/common/details/DetailsHero";
import DetailsCompanyInfo from "../../components/public/common/details/DetailsCompanyInfo";
import DetailsSolutionSection from "../../components/public/common/details/DetailsSolutionSection";
import DetailsApplications from "../../components/public/common/details/DetailsApplications";
import DetailsBenefitSection from "../../components/public/common/details/DetailsBenefitSection";
import { useAppData } from "../../context/AppDataContext";
import FetchError from "../../components/public/ui/FetchError";
import { DetailsSkeleton } from "../../components/public/ui/DetailsSkeleton";

const ServiceDetails = () => {
  const { serviceData, loading, error } = useAppData();

  const { slug } = useParams();
  const service = Array.isArray(serviceData) ? serviceData.find(s => s.slug === slug) : null;

  if (!loading && !service && !error) {
    return <NotFound />;
  };

  if (error) {
    return <FetchError message="Unable to load the required service." />
  };

  return (
    <div>
      {loading ? <DetailsSkeleton /> : <div className="bg-[#f3fff5]">
        <DetailsHero data={service} />
        <DetailsCompanyInfo />
        <DetailsSolutionSection data={service} options={service.useCases} />
        <DetailsApplications data={service} items={service.options} />
        <DetailsBenefitSection data={service} items={service.benefits} />
      </div>}
    </div>
  );
};

export default ServiceDetails;