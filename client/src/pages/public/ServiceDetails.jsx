import { servicesData } from "../../data/servicesData";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import DetailsHero from "../../components/public/common/details/DetailsHero";
import DetailsCompanyInfo from "../../components/public/common/details/DetailsCompanyInfo";
import DetailsSolutionSection from "../../components/public/common/details/DetailsSolutionSection";
import DetailsApplications from "../../components/public/common/details/DetailsApplications";
import DetailsBenefitSection from "../../components/public/common/details/DetailsBenefitSection";

const ServiceDetails = () => {
  const { slug } = useParams();
  const service = servicesData.find(s => s.slug === slug);

  if (!service) {
    return <NotFound />;
  }

  return (
    <div className="bg-[#f3fff5]">
      <DetailsHero data={service} />
      <DetailsCompanyInfo />
      <DetailsSolutionSection data={service} options={service.useCases} />
      <DetailsApplications data={service} items={service.options} />
      <DetailsBenefitSection data={service} items={service.benefits} />
    </div>
  )
}

export default ServiceDetails;