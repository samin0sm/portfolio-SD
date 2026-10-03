import React from "react";
import { ServiceItem } from "@/src/data/service";
import { Landmark, FileCheck, Sheet, Headset, CalendarCheck, ClipboardList, ArrowRight, Check } from "lucide-react";
import Link from "next/link";

export interface ServiceCardProps {
  service: ServiceItem;
}

const getServiceIcon = (iconName: string) => {
  switch (iconName) {
    case "landmark":
      return <Landmark size={24} />;
    case "file-check":
      return <FileCheck size={24} />;
    case "sheet":
      return <Sheet size={24} />;
    case "headset":
      return <Headset size={24} />;
    case "calendar-check":
      return <CalendarCheck size={24} />;
    case "clipboard-list":
      return <ClipboardList size={24} />;
    default:
      return <FileCheck size={24} />;
  }
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="service-card">
      <div className="service-icon-box">{getServiceIcon(service.icon)}</div>
      <h3 className="service-card-title">{service.title}</h3>
      <p className="service-card-desc">{service.shortDesc}</p>

      <div className="service-feature-list">
        {service.features.slice(0, 3).map((feat, idx) => (
          <div key={idx} className="service-feature-item">
            <Check size={16} />
            <span>{feat}</span>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "auto", paddingTop: "1rem", borderTop: "1px solid var(--border-color)" }}>
        <Link
          href={`/services#${service.slug}`}
          className="btn btn-ghost btn-sm"
          style={{ width: "100%", justifyContent: "space-between", padding: "0.5rem 0" }}
        >
          <span>View Capabilities &amp; SLA</span>
          <ArrowRight size={15} />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
