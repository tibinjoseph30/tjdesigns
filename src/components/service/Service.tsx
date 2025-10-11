import service from "../../assets/images/service.webp";
import ServiceCard from "./ServiceCard";
import ServiceAction from "./ServiceAction";
import SectionHeader from "../shared/SectionHeader";
import SectionLayout from "../layout/Section";
import { useEffect, useState } from "react";
import type { ServiceTypes } from "../../constants/types/services.dt";

const Service = () => {
  const [serviceData, setServiceData] = useState<ServiceTypes[]>([]);

  useEffect(()=> {
    const fetchServices = async () => {
      try {
        const response = await fetch("/api/services.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setServiceData(data);
      } catch(error: any) {
        console.log("Fetch error: ", error);
      }
    }

    fetchServices();
  }, [])
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
            {serviceData.map((service) => (
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
