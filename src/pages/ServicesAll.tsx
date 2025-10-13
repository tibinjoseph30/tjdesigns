import PageLayout from "../components/layout/PageLayout";
import OtherServiceCard from "../components/service/OtherServiceCard";
import ServiceCard from "../components/service/ServiceCard";
import PageHeader from "../components/shared/PageHeader";
import { useGetServicesQuery } from "../store/dataApi";

const AllServices = () => {
  const { data: serviceData = [] } = useGetServicesQuery();

  const mainServices = [...serviceData].slice(0, 3);
  const otherServices = [...serviceData].slice(3);

  return (
    <PageLayout>
      <PageHeader title="All Services" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-10">
        {mainServices?.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
      <div className="grid">
        {otherServices.map((service) => (
          <OtherServiceCard key={service.id} {...service} />
        ))}
      </div>
    </PageLayout>
  );
};

export default AllServices;
