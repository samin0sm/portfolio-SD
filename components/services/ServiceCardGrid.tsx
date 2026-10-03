import React from "react";
import { ServiceItem } from "@/src/data/service";
import ServiceCardItem from "./ServiceCardItem";

export interface ServiceCardGridProps {
  services: ServiceItem[];
}

export const ServiceCardGrid: React.FC<ServiceCardGridProps> = ({ services }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {services.map((srv) => (
        <ServiceCardItem key={srv.id} service={srv} />
      ))}
    </div>
  );
};

export default ServiceCardGrid;
