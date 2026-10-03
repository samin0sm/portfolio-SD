import React from "react";
import { ServiceItem } from "@/src/data/service";
import { serviceDetailsData } from "@/src/data/serviceDetails";
import { Landmark, FileCheck, Sheet, Headset, CalendarCheck, ClipboardList, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export interface ServiceCardItemProps {
  service: ServiceItem;
}

const getServiceIcon = (iconName: string) => {
  switch (iconName) {
    case "landmark":
      return <Landmark size={26} />;
    case "file-check":
      return <FileCheck size={26} />;
    case "sheet":
      return <Sheet size={26} />;
    case "headset":
      return <Headset size={26} />;
    case "calendar-check":
      return <CalendarCheck size={26} />;
    case "clipboard-list":
      return <ClipboardList size={26} />;
    default:
      return <FileCheck size={26} />;
  }
};

export const ServiceCardItem: React.FC<ServiceCardItemProps> = ({ service }) => {
  const detail = serviceDetailsData[service.slug];

  return (
    <div id={service.slug} className="stat-card" style={{ padding: "2.5rem 2rem", marginBottom: "2rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: "1rem",
          marginBottom: "1.25rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <div className="service-icon-box" style={{ margin: 0 }}>
            {getServiceIcon(service.icon)}
          </div>
          <div>
            <span className="section-tag" style={{ margin: 0, padding: "0.15rem 0.55rem", fontSize: "0.725rem" }}>
              {service.category}
            </span>
            <h3 style={{ fontSize: "1.45rem", fontWeight: 800, marginTop: "0.35rem" }}>{service.title}</h3>
          </div>
        </div>

        <div
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "var(--brand-light)",
            borderRadius: "var(--radius-md)",
            border: "1px solid rgba(37, 99, 235, 0.2)",
            textAlign: "right",
          }}
        >
          <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: 600 }}>
            {service.stats.label}
          </div>
          <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--brand-primary)" }}>
            {service.stats.value}
          </div>
        </div>
      </div>

      <p style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.65, marginBottom: "1.75rem" }}>
        {detail ? detail.overview : service.shortDesc}
      </p>

      {/* Grid: Core Capabilities & Deliverables */}
      <div className="responsive-grid-2" style={{ marginBottom: "1.75rem" }}>
        <div
          style={{
            backgroundColor: "var(--bg-secondary)",
            padding: "1.25rem",
            borderRadius: "var(--radius-md)",
            border: "1px solid var(--border-color)",
          }}
        >
          <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--brand-primary)", marginBottom: "0.75rem" }}>
            Key Capabilities &amp; Standards:
          </h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {service.features.map((feat, idx) => (
              <div key={idx} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                <CheckCircle2 size={16} color="var(--accent-emerald)" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            backgroundColor: "var(--bg-secondary)",
            padding: "1.25rem",
            borderRadius: "var(--radius-md)",
            border: "1px solid var(--border-color)",
          }}
        >
          <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--brand-primary)", marginBottom: "0.75rem" }}>
            Standard Deliverables:
          </h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {service.deliverables.map((deliv, idx) => (
              <div key={idx} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                <CheckCircle2 size={16} color="var(--brand-accent)" />
                <span>{deliv}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4-Step Workflow if available */}
      {detail && detail.workflow && (
        <div style={{ marginBottom: "1.75rem" }}>
          <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.75rem" }}>
            Operational Workflow:
          </h4>
          <div className="responsive-grid-4" style={{ gap: "0.75rem" }}>
            {detail.workflow.map((w, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: "var(--bg-tertiary)",
                  padding: "0.85rem",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid var(--border-color)",
                }}
              >
                <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "var(--brand-accent)" }}>
                  Step {w.step}
                </span>
                <div style={{ fontWeight: 700, fontSize: "0.85rem", marginTop: "0.2rem", marginBottom: "0.25rem" }}>
                  {w.title}
                </div>
                <p style={{ fontSize: "0.775rem", color: "var(--text-secondary)", lineHeight: 1.4 }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="service-card-footer-row" style={{ paddingTop: "1.25rem", borderTop: "1px solid var(--border-color)" }}>
        <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
          {detail?.toolsUsed.map((tool, ti) => (
            <span key={ti} className="project-skill-pill">
              {tool}
            </span>
          ))}
        </div>

        <Link href={`/contact?service=${encodeURIComponent(service.title)}`} className="btn btn-primary btn-sm">
          <span>Inquire About This Service</span>
          <ArrowRight size={15} />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCardItem;
