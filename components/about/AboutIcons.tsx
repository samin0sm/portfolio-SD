import React from "react";
import { Landmark, Shield, FileCheck, Table, Headphones, BookOpen, Layers, Award } from "lucide-react";

export const AboutIcons: React.FC = () => {
  const iconBadges = [
    { icon: <Landmark size={20} />, label: "Banking Operations", category: "Core" },
    { icon: <Shield size={20} />, label: "KYC Compliance", category: "Compliance" },
    { icon: <FileCheck size={20} />, label: "Document Processing", category: "Operations" },
    { icon: <Table size={20} />, label: "Advanced Excel", category: "Analytics" },
    { icon: <Headphones size={20} />, label: "Customer Relations", category: "Service" },
    { icon: <BookOpen size={20} />, label: "English Composition", category: "Academics" },
    { icon: <Layers size={20} />, label: "SOP Authoring", category: "Governance" },
    { icon: <Award size={20} />, label: "99.8% Accuracy Score", category: "Quality" },
  ];

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1rem" }}>
      {iconBadges.map((badge, idx) => (
        <div
          key={idx}
          className="stat-card"
          style={{
            padding: "1.25rem",
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            boxShadow: "var(--shadow-xs)",
          }}
        >
          <div style={{ color: "var(--brand-accent)" }}>{badge.icon}</div>
          <div>
            <div style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--text-primary)" }}>
              {badge.label}
            </div>
            <div style={{ fontSize: "0.725rem", color: "var(--text-muted)" }}>{badge.category}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutIcons;
