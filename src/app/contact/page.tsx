import React from "react";
import ContactHero from "@/components/contact/ContactHero";
import ContactFormCard from "@/components/contact/ContactFormCard";
import ContactProcess from "@/components/contact/ContactProcess";
import { Mail, Phone, MapPin, Clock, ShieldCheck, Download } from "lucide-react";
import { heroData } from "@/src/data/home";

export const metadata = {
  title: "Contact & Recruiter Inquiry | Tanvir Anjum Sazid",
  description:
    "Direct contact channel and multi-step recruitment inquiry wizard for hiring Tanvir Anjum Sazid in banking, administration, or documentation roles.",
};

export default function ContactPage() {
  return (
    <div className="section" style={{ paddingTop: "calc(var(--nav-height) + 2.5rem)" }}>
      <div className="container">
        <ContactHero />

        <div className="contact-container">
          {/* Left Contact Info Card */}
          <div className="contact-info-card">
            <span className="section-tag" style={{ marginBottom: "1rem" }}>
              Direct Channels
            </span>
            <h3 style={{ fontSize: "1.45rem", fontWeight: 800, marginBottom: "0.75rem" }}>
              Contact Information
            </h3>
            <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "2rem" }}>
              Feel free to call, email, or WhatsApp directly for urgent recruiter inquiries, interview schedules,
              or assessment requests.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2.5rem" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                <div className="project-icon-box" style={{ width: "36px", height: "36px" }}>
                  <Mail size={18} />
                </div>
                <div>
                  <div style={{ fontSize: "0.775rem", color: "var(--text-muted)", fontWeight: 600 }}>
                    Official Email:
                  </div>
                  <a href={`mailto:${heroData.email}`} style={{ fontWeight: 700, fontSize: "0.95rem" }}>
                    {heroData.email}
                  </a>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                <div className="project-icon-box" style={{ width: "36px", height: "36px" }}>
                  <Phone size={18} />
                </div>
                <div>
                  <div style={{ fontSize: "0.775rem", color: "var(--text-muted)", fontWeight: 600 }}>
                    Phone / WhatsApp:
                  </div>
                  <a href={`tel:${heroData.phone}`} style={{ fontWeight: 700, fontSize: "0.95rem" }}>
                    {heroData.phone}
                  </a>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                <div className="project-icon-box" style={{ width: "36px", height: "36px" }}>
                  <MapPin size={18} />
                </div>
                <div>
                  <div style={{ fontSize: "0.775rem", color: "var(--text-muted)", fontWeight: 600 }}>
                    Current Location:
                  </div>
                  <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--text-primary)" }}>
                    {heroData.location}
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                <div className="project-icon-box" style={{ width: "36px", height: "36px" }}>
                  <Clock size={18} />
                </div>
                <div>
                  <div style={{ fontSize: "0.775rem", color: "var(--text-muted)", fontWeight: 600 }}>
                    Response SLA:
                  </div>
                  <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--text-primary)" }}>
                    Under 24 Hours (Guaranteed)
                  </div>
                </div>
              </div>
            </div>

            <div style={{ display: "flex", gap: "0.75rem" }}>
              <a
                href={heroData.cvPdf}
                download="TANVIR_ANJUM_SAZID_CV.pdf"
                className="btn btn-secondary btn-sm"
                style={{ flex: 1 }}
              >
                <Download size={14} />
                <span>PDF CV</span>
              </a>
              <a
                href={heroData.cvDocx}
                download="TANVIR_ANJUM_SAZID_CV.docx"
                className="btn btn-secondary btn-sm"
                style={{ flex: 1 }}
              >
                <Download size={14} />
                <span>DOCX CV</span>
              </a>
            </div>
          </div>

          {/* Right Multi-Step Form */}
          <div>
            <ContactFormCard />
          </div>
        </div>

        {/* 4-Step Process */}
        <ContactProcess />
      </div>
    </div>
  );
}
