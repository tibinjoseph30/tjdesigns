import service from "../../assets/images/service.webp";
import ServiceCard from "./ServiceCard";
import ServiceAction from "./ServiceAction";
import SectionHeader from "../shared/SectionHeader";
import SectionLayout from "../layout/SectionLayout";
import { useGetServicesQuery } from "../../store/dataApi";

const Service = () => {
  const { data: serviceData = [] } = useGetServicesQuery();

  const topServices = serviceData.slice(0, 3);

  return (
    <SectionLayout id="services" className="service relative mt-[var(--section-gap)]">
      <div className="container">
        <div className="grid items-end sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <div className="sm:col-span-2 md:col-span-1 xl:col-span-2 sm:row-span-2 grid">
            <SectionHeader
              title={
                <>
                  Services that makes
                  <br /> you <span className="highlight-circle">Stand Out</span>
                </>
              }
            />
            <div className="service-image h-full rounded-[var(--global-card-radius)] overflow-hidden relative">
              <img
                src={service}
                alt={service}
                width="659"
                height="588"
                className="w-full h-full object-cover relative"
              />
            </div>
          </div>
            {topServices?.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
            <ServiceAction />
          {/* <div className="col-span-2 grid lg:grid-cols-2 gap-5">
          </div> */}
        </div>
      </div>
    </SectionLayout>
  );
};

export default Service;
