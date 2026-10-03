"use client";

import React, { useState } from "react";
import { careerMilestones, educationList, whatDefinesUs } from "@/src/data/about";
import { CheckCircle2, Award, Calendar, GraduationCap, ShieldCheck } from "lucide-react";

export const AboutClient: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"values" | "education" | "milestones">("values");

  return (
    <div>
      <div className="tabs-nav" style={{ marginBottom: "2.5rem" }}>
        <button
          type="button"
          className={`tab-btn ${activeTab === "values" ? "active" : ""}`}
          onClick={() => setActiveTab("values")}
        >
          Core Values &amp; Ethics
        </button>
        <button
          type="button"
          className={`tab-btn ${activeTab === "education" ? "active" : ""}`}
          onClick={() => setActiveTab("education")}
        >
          Academic Qualifications
        </button>
        <button
          type="button"
          className={`tab-btn ${activeTab === "milestones" ? "active" : ""}`}
          onClick={() => setActiveTab("milestones")}
        >
          Career Timeline
        </button>
      </div>

      {activeTab === "values" && (
        <div className="services-grid">
          {whatDefinesUs.map((val) => (
            <div key={val.id} className="stat-card" style={{ padding: "2rem" }}>
              <div style={{ color: "var(--brand-accent)", marginBottom: "1rem" }}>
                <ShieldCheck size={28} />
              </div>
              <h4 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.5rem" }}>{val.title}</h4>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                {val.description}
              </p>
            </div>
          ))}
        </div>
      )}

      {activeTab === "education" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {educationList.map((edu, idx) => (
            <div
              key={idx}
              className="stat-card responsive-grid-2"
              style={{
                padding: "1.75rem",
              }}
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                  <GraduationCap size={22} color="var(--brand-accent)" />
                  <h4 style={{ fontSize: "1.25rem", fontWeight: 700 }}>{edu.degree}</h4>
                </div>
                <div style={{ fontSize: "0.95rem", color: "var(--brand-accent)", fontWeight: 600 }}>
                  {edu.institution}
                </div>
                <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginTop: "0.75rem", lineHeight: 1.6 }}>
                  {edu.description}
                </p>
              </div>

              <div style={{ backgroundColor: "var(--bg-secondary)", padding: "1.25rem", borderRadius: "var(--radius-md)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                  <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Passing Year:</span>
                  <strong style={{ color: "var(--brand-primary)" }}>{edu.year}</strong>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
                  <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Result:</span>
                  <strong style={{ color: "var(--accent-emerald)" }}>{edu.gpa}</strong>
                </div>

                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontWeight: 600, marginBottom: "0.4rem" }}>
                  Key Subjects &amp; Focus:
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem" }}>
                  {edu.courses.map((course, ci) => (
                    <span key={ci} className="project-skill-pill">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === "milestones" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          {careerMilestones.map((m, idx) => (
            <div
              key={idx}
              className="stat-card milestone-card-flex"
              style={{
                padding: "1.5rem",
              }}
            >
              <div
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 800,
                  color: "var(--brand-primary)",
                  fontFamily: "var(--font-heading)",
                  minWidth: "80px",
                }}
              >
                {m.year}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.25rem", flexWrap: "wrap" }}>
                  <h4 style={{ fontSize: "1.1rem", fontWeight: 700 }}>{m.title}</h4>
                  <span className="section-tag" style={{ margin: 0, padding: "0.15rem 0.5rem", fontSize: "0.7rem" }}>
                    {m.badge}
                  </span>
                </div>
                <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>{m.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AboutClient;
