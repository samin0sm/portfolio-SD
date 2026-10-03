import React from "react";
import Link from "next/link";
import {
  heroData,
  statsData,
  marqueeItems,
  overviewTabs,
  sampleProjectsData,
  testimonialsData,
  pricingPlans,
} from "@/src/data/home";
import { servicesData } from "@/src/data/service";
import HeroBackground from "@/components/HeroBackground";
import Counter from "@/components/Counter";
import Marquee from "@/components/Marquee";
import OverviewTabs from "@/components/OverviewTabs";
import FeaturedProjects from "@/components/FeaturedProjects";
import ServiceCarousel from "@/components/ServiceCarousel";
import ReviewCarousel from "@/components/ReviewCarousel";
import Pricing from "@/components/Pricing";
import { Download, Mail, ArrowRight, MapPin, Sparkles, CheckCircle2, Shield, Eye } from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section" id="home">
        <HeroBackground />
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="hero-status-badge">
              <span className="status-dot"></span>
              <span>{heroData.availability}</span>
            </div>

            <h1 className="hero-name">
              {heroData.name} <span>{heroData.lastName}</span>
            </h1>

            <h2 className="hero-title">{heroData.role}</h2>

            <p className="hero-intro">{heroData.description}</p>

            <div className="hero-actions">
              <a
                href={heroData.cvPdf}
                download="TANVIR_ANJUM_SAZID_CV.pdf"
                className="btn btn-primary btn-lg"
              >
                <Download size={18} />
                <span>Download Official CV</span>
                <span className="btn-file-pill">PDF • 239 KB</span>
              </a>

              <Link href="/about" className="btn btn-secondary btn-lg">
                <Eye size={18} />
                <span>View Credentials</span>
              </Link>

              <Link href="/contact" className="btn btn-outline btn-lg">
                <Mail size={18} />
                <span>Get in Touch</span>
              </Link>
            </div>

            <div className="hero-meta-strip">
              <div className="hero-meta-item">
                <MapPin size={16} />
                <span>{heroData.location}</span>
              </div>
              <div className="hero-meta-item">
                <Mail size={16} />
                <span>{heroData.email}</span>
              </div>
              <div className="hero-meta-item">
                <Shield size={16} />
                <span>National University Alumni (M.A. English)</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-card-frame">
              <img src={heroData.portrait} alt="Tanvir Anjum Sazid" />
              <div className="hero-card-overlay">
                <div className="hero-card-name">
                  {heroData.name} {heroData.lastName}
                </div>
                <div className="hero-card-sub">{heroData.subTitle}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <Counter stats={statsData} />
        </div>
      </section>

      {/* Marquee Ticker */}
      <Marquee items={marqueeItems} />

      {/* Overview Tabs Section */}
      <section className="section section-alt" id="overview">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Core Competencies</span>
            <h2 className="section-title">Institutional Domain Specializations</h2>
            <p className="section-desc">
              Structured operational capabilities designed to bring financial compliance, error-free documentation,
              and professional client communication to your corporate desks.
            </p>
          </div>

          <OverviewTabs tabs={overviewTabs} />
        </div>
      </section>

      {/* Featured Projects / Demonstrations */}
      <section className="section" id="projects">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Executive Portfolio</span>
            <h2 className="section-title">Verified Corporate Deliverables &amp; Case Studies</h2>
            <p className="section-desc">
              Select &quot;Interactive Preview&quot; on any deliverable to examine authentic correspondence,
              Standard Operating Procedures (SOPs), financial spreadsheet models, and audit reports.
            </p>
          </div>

          <FeaturedProjects projects={sampleProjectsData} />

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/cases" className="btn btn-secondary btn-lg">
              <span>Explore All Corporate Engagements &amp; Case Studies</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Corporate Services Carousel */}
      <section className="section section-alt" id="services">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Operational Capabilities</span>
            <h2 className="section-title">Specialized Corporate Services</h2>
            <p className="section-desc">
              Comprehensive capabilities across banking operations support, documentation control, Excel modeling,
              and customer relationship management.
            </p>
          </div>

          <ServiceCarousel services={servicesData} />

          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link href="/services" className="btn btn-primary">
              <span>View Full Services Catalog &amp; SLAs</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Recommendations & Testimonials */}
      <section className="section" id="testimonials">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Professional References</span>
            <h2 className="section-title">Academic &amp; Operational Commendations</h2>
            <p className="section-desc">
              Feedback from faculty heads, academic advisors, and supervisory coordinators regarding reliability, work
              ethic, and performance.
            </p>
          </div>

          <ReviewCarousel reviews={testimonialsData} />
        </div>
      </section>

      {/* Pricing / Engagement Models */}
      <section className="section section-alt" id="pricing">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Engagement Options</span>
            <h2 className="section-title">Corporate Hiring &amp; Project Models</h2>
            <p className="section-desc">
              Flexible options for full-time institutional employment, contractual operational support, or
              administrative coordination.
            </p>
          </div>

          <Pricing plans={pricingPlans} />
        </div>
      </section>

      {/* Contact CTA Banner */}
      <section className="section">
        <div className="container">
          <div
            style={{
              background: "linear-gradient(135deg, var(--bg-card), var(--bg-secondary))",
              border: "1px solid var(--border-color)",
              borderRadius: "var(--radius-xl)",
              padding: "3.5rem 2.5rem",
              textAlign: "center",
              boxShadow: "var(--shadow-lg)",
            }}
          >
            <span className="section-tag" style={{ marginBottom: "1rem" }}>
              Immediate Availability
            </span>
            <h2 style={{ fontSize: "2.25rem", fontWeight: 800, marginBottom: "0.75rem" }}>
              Ready to Strengthen Your Banking or Corporate Team?
            </h2>
            <p
              style={{
                fontSize: "1.05rem",
                color: "var(--text-secondary)",
                maxWidth: "640px",
                margin: "0 auto 2rem auto",
              }}
            >
              Tanvir Anjum Sazid is available for on-site full-time positions in Chattogram and Dhaka, with complete
              academic credentials and verified references.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn btn-primary btn-lg">
                <Mail size={18} />
                <span>Submit Recruitment Inquiry</span>
              </Link>
              <a
                href={heroData.cvPdf}
                download="TANVIR_ANJUM_SAZID_CV.pdf"
                className="btn btn-secondary btn-lg"
              >
                <Download size={18} />
                <span>Download Official CV (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
