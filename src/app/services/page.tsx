import React from "react";
import { servicesData } from "@/src/data/service";
import ServiceCardGrid from "@/components/services/ServiceCardGrid";
import { Briefcase, ShieldCheck, Clock, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Corporate Services & Capabilities | Tanvir Anjum Sazid",
  description:
    "Comprehensive service catalog covering banking operations support, KYC document processing, Excel data modeling, SOP authoring, and customer helpdesk administration.",
};

export default function ServicesPage() {
  return (
    <div className="section" style={{ paddingTop: "calc(var(--nav-height) + 2.5rem)" }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">
            <Briefcase size={14} />
            <span>Operational Capabilities</span>
          </span>
          <h1 className="section-title">Corporate Services &amp; Domain Expertise</h1>
          <p className="section-desc">
            Standardized, rigorous service workflows designed for retail banking, corporate administration, client
            handling, and database management.
          </p>
        </div>

        {/* SLA & Service Guarantees */}
        <div className="responsive-grid-3" style={{ marginBottom: "3.5rem" }}>
          <div className="stat-card" style={{ padding: "1.75rem" }}>
            <div style={{ color: "var(--brand-accent)", marginBottom: "0.75rem" }}>
              <ShieldCheck size={28} />
            </div>
            <h4 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.4rem" }}>
              100% Audit Compliance
            </h4>
            <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
              Rigid adherence to regulatory checklists, institutional confidentiality, and KYC guidelines.
            </p>
          </div>

          <div className="stat-card" style={{ padding: "1.75rem" }}>
            <div style={{ color: "var(--accent-emerald)", marginBottom: "0.75rem" }}>
              <Clock size={28} />
            </div>
            <h4 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.4rem" }}>
              Rapid Turnaround SLAs
            </h4>
            <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
              Customer inquiries addressed in &lt; 2 hours; administrative reports delivered within 24-48 hours.
            </p>
          </div>

          <div className="stat-card" style={{ padding: "1.75rem" }}>
            <div style={{ color: "var(--accent-amber)", marginBottom: "0.75rem" }}>
              <CheckCircle2 size={28} />
            </div>
            <h4 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.4rem" }}>
              99.8% Data Accuracy
            </h4>
            <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
              Zero tolerance for formula errors, broken references, or unverified records.
            </p>
          </div>
        </div>

        {/* Full Service Card Grid */}
        <div style={{ marginBottom: "4rem" }}>
          <ServiceCardGrid services={servicesData} />
        </div>

        {/* Bottom CTA */}
        <div
          style={{
            background: "linear-gradient(135deg, var(--bg-card), var(--bg-secondary))",
            border: "1px solid var(--border-color)",
            borderRadius: "var(--radius-xl)",
            padding: "3.5rem 2.5rem",
            textAlign: "center",
            boxShadow: "var(--shadow-md)",
          }}
        >
          <h3 style={{ fontSize: "1.85rem", fontWeight: 800, marginBottom: "0.75rem" }}>
            Have a Specific Operational Requirement?
          </h3>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--text-secondary)",
              maxWidth: "550px",
              margin: "0 auto 2rem auto",
            }}
          >
            Let&apos;s discuss custom documentation audits, spreadsheet engineering, or full-time placement.
          </p>

          <Link href="/contact" className="btn btn-primary btn-lg">
            <span>Request Service Consultation</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}
