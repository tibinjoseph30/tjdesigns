import service from "../../assets/images/service.webp";
import ServiceCard from "./ServiceCard";
import ServiceAction from "./ServiceAction";
import SectionHeader from "../shared/SectionHeader";
import SectionLayout from "../layout/SectionLayout";
import { useGetServicesQuery } from "../../store/dataApi";

const Service = () => {
const {data: serviceData, isLoading} = useGetServicesQuery();

  return (
    <SectionLayout id="services" className="service relative">
      <div className="container">
        <div className="grid grid-cols-2 gap-5">
          <div>
            <SectionHeader
              title={
                <>
                  Services that makes
                  <br /> you <span className="highlight-circle">Stand Out</span>
                </>
              }
            />
            <img
              src={service}
              alt={service}
              width="659"
              height="588"
              className="w-full relative"
            />
          </div>
          <div className="grid grid-cols-2 gap-5">
            {serviceData?.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
            <ServiceAction />
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default Service;
