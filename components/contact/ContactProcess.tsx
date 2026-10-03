import React from "react";
import { Send, MessageSquare, CheckSquare, Briefcase } from "lucide-react";

export const ContactProcess: React.FC = () => {
  const steps = [
    {
      num: "01",
      icon: <Send size={22} />,
      title: "Inquiry Submission",
      desc: "Submit your requirement or job opening via this form, email, or direct telephone.",
    },
    {
      num: "02",
      icon: <MessageSquare size={22} />,
      title: "Prompt Response (< 24h)",
      desc: "Receive a tailored response along with supplementary academic & credential records.",
    },
    {
      num: "03",
      icon: <CheckSquare size={22} />,
      title: "Skills & Scenario Briefing",
      desc: "Online or in-person technical and interpersonal interview/practical demonstration.",
    },
    {
      num: "04",
      icon: <Briefcase size={22} />,
      title: "Immediate Onboarding",
      desc: "Ready to deploy with verified academic background, clear references, and enthusiasm.",
    },
  ];

  return (
    <div style={{ marginTop: "4rem" }}>
      <div className="section-header" style={{ marginBottom: "2.5rem" }}>
        <h3 style={{ fontSize: "1.65rem", fontWeight: 800 }}>Recruitment &amp; Engagement Workflow</h3>
        <p className="section-desc">Transparent and rapid 4-step hiring process.</p>
      </div>

      <div className="services-grid" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
        {steps.map((step, idx) => (
          <div key={idx} className="stat-card" style={{ padding: "1.75rem" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "1rem",
              }}
            >
              <div style={{ color: "var(--brand-accent)" }}>{step.icon}</div>
              <span
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 800,
                  color: "var(--text-muted)",
                  fontFamily: "var(--font-heading)",
                }}
              >
                {step.num}
              </span>
            </div>
            <h4 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "0.5rem" }}>{step.title}</h4>
            <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactProcess;
