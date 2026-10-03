"use client";

import React, { useState } from "react";
import CasesHero from "@/components/cases/CasesHero";
import CasesFilterBar from "@/components/cases/CasesFilterBar";
import CasesGrid from "@/components/cases/CasesGrid";
import { casesData, caseCategories } from "@/src/data/case";
import { detailedCasesData } from "@/src/data/caseDetails";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function CasesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredCases = casesData.filter((c) => {
    if (selectedCategory === "all") return true;
    return c.category === selectedCategory;
  });

  return (
    <div className="section" style={{ paddingTop: "calc(var(--nav-height) + 2.5rem)" }}>
      <div className="container">
        {/* Cases Hero */}
        <CasesHero />

        {/* Filter Bar */}
        <CasesFilterBar
          categories={caseCategories}
          activeCategory={selectedCategory}
          onSelectCategory={(catId) => setSelectedCategory(catId)}
        />

        {/* Interactive Demonstrations Grid */}
        <div style={{ marginBottom: "5rem" }}>
          <CasesGrid cases={filteredCases} />
        </div>

        {/* Deep-Dive Case Study Summaries */}
        <div style={{ marginBottom: "5rem" }}>
          <div className="section-header">
            <span className="section-tag">Case Impact Analysis</span>
            <h2 className="section-title">Challenge, Solution &amp; Measurable Outcomes</h2>
            <p className="section-desc">
              Detailed walkthroughs of real-world problems solved through administrative and analytical rigor.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {Object.entries(detailedCasesData).map(([key, detailedCase]) => (
              <div
                key={key}
                className="stat-card"
                style={{
                  padding: "2.5rem 2rem",
                  display: "grid",
                  gridTemplateColumns: "1.2fr 0.8fr",
                  gap: "2.5rem",
                }}
              >
                <div>
                  <span className="section-tag" style={{ marginBottom: "0.5rem" }}>
                    {detailedCase.metaData.clientType}
                  </span>
                  <h3 style={{ fontSize: "1.45rem", fontWeight: 800, marginBottom: "0.5rem" }}>
                    {detailedCase.title}
                  </h3>
                  <p style={{ fontSize: "0.925rem", color: "var(--text-secondary)", marginBottom: "1.25rem", lineHeight: 1.6 }}>
                    {detailedCase.background}
                  </p>

                  <div style={{ marginBottom: "1rem" }}>
                    <strong style={{ fontSize: "0.9rem", color: "var(--brand-primary)" }}>The Challenge:</strong>
                    <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginTop: "0.25rem" }}>
                      {detailedCase.challenge}
                    </p>
                  </div>

                  <div>
                    <strong style={{ fontSize: "0.9rem", color: "var(--brand-primary)" }}>The Implemented Solution:</strong>
                    <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginTop: "0.25rem" }}>
                      {detailedCase.solution}
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    backgroundColor: "var(--bg-secondary)",
                    padding: "1.5rem",
                    borderRadius: "var(--radius-lg)",
                    border: "1px solid var(--border-color)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <div style={{ textAlign: "center", paddingBottom: "1.25rem", borderBottom: "1px solid var(--border-color)", marginBottom: "1.25rem" }}>
                      <div style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--brand-primary)", lineHeight: 1 }}>
                        {detailedCase.metaData.impactMetric}
                      </div>
                      <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontWeight: 600, marginTop: "0.35rem" }}>
                        {detailedCase.metaData.impactLabel}
                      </div>
                    </div>

                    <h4 style={{ fontSize: "0.9rem", fontWeight: 700, marginBottom: "0.75rem" }}>
                      Measurable Outcomes:
                    </h4>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                      {detailedCase.outcomes.map((out, oi) => (
                        <div key={oi} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.825rem", color: "var(--text-secondary)" }}>
                          <CheckCircle2 size={16} color="var(--accent-emerald)" style={{ flexShrink: 0, marginTop: "2px" }} />
                          <span>{out}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ marginTop: "1.5rem", paddingTop: "1rem", borderTop: "1px solid var(--border-color)" }}>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: 600, marginBottom: "0.35rem" }}>
                      Tools Deployed:
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem" }}>
                      {detailedCase.metaData.tools.map((t, ti) => (
                        <span key={ti} className="project-skill-pill">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
            Interested in Discussing Corporate Opportunities or Reviewing Deliverables?
          </h3>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--text-secondary)",
              maxWidth: "580px",
              margin: "0 auto 2rem auto",
            }}
          >
            Tanvir Anjum Sazid is available for formal interviews, operational discussions, and full-time
            recruitment across Chattogram and Dhaka.
          </p>

          <Link href="/contact" className="btn btn-primary btn-lg">
            <span>Schedule an Interview / Discussion</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}
