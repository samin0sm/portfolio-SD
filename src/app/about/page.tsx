import React from "react";
import AboutHero from "@/components/about/AboutHero";
import WhatDefinesUs from "@/components/about/WhatDefinesUs";
import AboutIcons from "@/components/about/AboutIcons";
import AboutClient from "@/components/AboutClient";
import AboutTeam from "@/components/about/AboutTeam";
import AboutFAQ from "@/components/about/AboutFAQ";
import Link from "next/link";
import { Download, Mail, ArrowRight } from "lucide-react";
import { heroData } from "@/src/data/home";

export const metadata = {
  title: "About Tanvir Anjum Sazid | Academic Credentials & Career Background",
  description:
    "Comprehensive background, Master of Arts in English qualifications, verified references, core values, and FAQ for Tanvir Anjum Sazid.",
};

export default function AboutPage() {
  return (
    <div className="section" style={{ paddingTop: "calc(var(--nav-height) + 2.5rem)" }}>
      <div className="container">
        {/* About Hero */}
        <AboutHero />

        {/* What Defines Us */}
        <div style={{ marginBottom: "5rem" }}>
          <div className="section-header">
            <span className="section-tag">Core Principles</span>
            <h2 className="section-title">Values &amp; Workplace Ethics</h2>
            <p className="section-desc">
              The foundational pillars that guide every task, record verification, and client interaction.
            </p>
          </div>
          <WhatDefinesUs />
        </div>

        {/* Skill Badges & Domain Icons */}
        <div style={{ marginBottom: "5rem" }}>
          <div className="section-header">
            <span className="section-tag">Technical Matrix</span>
            <h2 className="section-title">Verified Domain Competencies</h2>
            <p className="section-desc">
              Key operational capabilities across financial compliance, document processing, and office tools.
            </p>
          </div>
          <AboutIcons />
        </div>

        {/* Interactive Deep Dive Client */}
        <div style={{ marginBottom: "5rem" }}>
          <div className="section-header">
            <span className="section-tag">Qualifications</span>
            <h2 className="section-title">Academic &amp; Professional Background</h2>
            <p className="section-desc">
              Explore detailed degrees from National University, milestones, and ethics.
            </p>
          </div>
          <AboutClient />
        </div>

        {/* References & Mentors */}
        <div style={{ marginBottom: "5rem" }}>
          <div className="section-header">
            <span className="section-tag">References</span>
            <h2 className="section-title">Academic &amp; Professional References</h2>
            <p className="section-desc">
              Distinguished professors and supervisory contacts available to vouch for character and work quality.
            </p>
          </div>
          <AboutTeam />
        </div>

        {/* FAQs */}
        <div style={{ marginBottom: "5rem" }}>
          <div className="section-header">
            <span className="section-tag">Hiring FAQs</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-desc">
              Quick answers regarding availability, target positions, software skills, and interview scheduling.
            </p>
          </div>
          <AboutFAQ />
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
            Interested in Scheduling an Interview?
          </h3>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--text-secondary)",
              maxWidth: "550px",
              margin: "0 auto 2rem auto",
            }}
          >
            Download the official CV or submit an interview inquiry to begin the recruitment process.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn btn-primary btn-lg">
              <Mail size={18} />
              <span>Contact for Interview</span>
            </Link>
            <a
              href={heroData.cvPdf}
              download="TANVIR_ANJUM_SAZID_CV.pdf"
              className="btn btn-secondary btn-lg"
            >
              <Download size={18} />
              <span>Download CV (PDF)</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
