import { servicesData } from "../../data/servicesData";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import DetailsHero from "../../components/common/details/DetailsHero";
import DetailsCompanyInfo from "../../components/common/details/DetailsCompanyInfo";
import DetailsSolutionSection from "../../components/common/details/DetailsSolutionSection";
import DetailsApplications from "../../components/common/details/DetailsApplications";
import DetailsBenifitSection from "../../components/common/details/DetailsBenifitSection";

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
      <DetailsBenifitSection data={service} items={service.benefits} />
    </div>
  )
}

export default ServiceDetails;