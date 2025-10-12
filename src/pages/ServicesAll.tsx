import PageLayout from "../components/layout/PageLayout";
import ServiceCard from "../components/service/ServiceCard";
import PageHeader from "../components/shared/PageHeader";
import { useGetServicesQuery } from "../store/dataApi";

const AllServices = () => {
  const { data: serviceData, isLoading } = useGetServicesQuery();

  return (
    <PageLayout>
      <PageHeader title="All Services" />
      <div className="grid grid-cols-4 gap-5">
        {serviceData?.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
    </PageLayout>
  );
};

export default AllServices;
