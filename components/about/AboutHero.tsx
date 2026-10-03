import React from "react";
import { aboutHeroData } from "@/src/data/about";
import { heroData } from "@/src/data/home";
import { Download, CheckCircle2, MapPin } from "lucide-react";
import Link from "next/link";

export const AboutHero: React.FC = () => {
  return (
    <div className="hero-grid" style={{ marginBottom: "4rem" }}>
      <div>
        <div className="hero-status-badge">
          <span className="status-dot"></span>
          <span>{aboutHeroData.status}</span>
        </div>

        <h1 className="hero-name" style={{ fontSize: "2.75rem", marginBottom: "1rem" }}>
          {aboutHeroData.heading}
        </h1>

        <p className="hero-intro" style={{ fontSize: "1.1rem" }}>
          {aboutHeroData.bio}
        </p>

        <div
          style={{
            backgroundColor: "var(--brand-light)",
            border: "1px solid rgba(37, 99, 235, 0.2)",
            borderRadius: "var(--radius-lg)",
            padding: "1.5rem",
            marginBottom: "2rem",
          }}
        >
          <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--brand-primary)", marginBottom: "0.4rem" }}>
            Operational Philosophy &amp; Mission:
          </div>
          <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
            “{aboutHeroData.mission}”
          </p>
        </div>

        <div className="hero-actions">
          <a
            href={heroData.cvPdf}
            download="TANVIR_ANJUM_SAZID_CV.pdf"
            className="btn btn-primary"
          >
            <Download size={16} />
            <span>Download Official CV (PDF)</span>
          </a>
          <Link href="/contact" className="btn btn-secondary">
            <span>Schedule Recruiter Interview</span>
          </Link>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-card-frame">
          <img src="/assets/images/sazid-portrait.jpg" alt="Tanvir Anjum Sazid" />
          <div className="hero-card-overlay">
            <div className="hero-card-name">Tanvir Anjum Sazid</div>
            <div className="hero-card-sub" style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
              <MapPin size={13} />
              <span>{aboutHeroData.location}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
