import React from "react";
import { Landmark, Shield, FileCheck, Table, Headphones, BookOpen, Layers, Award } from "lucide-react";

export const AboutIcons: React.FC = () => {
  const iconBadges = [
    { icon: <Landmark size={20} />, label: "Banking Support" },
    { icon: <Shield size={20} />, label: "KYC & AML" },
    { icon: <FileCheck size={20} />, label: "Documentation" },
    { icon: <Table size={20} />, label: "Microsoft Excel" },
    { icon: <Headphones size={20} />, label: "Client Relations" },
    { icon: <BookOpen size={20} />, label: "M.A. English" },
    { icon: <Layers size={20} />, label: "SOP Design" },
    { icon: <Award size={20} />, label: "99.8% Accuracy" },
  ];

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginTop: "1.5rem" }}>
      {iconBadges.map((badge, idx) => (
        <div
          key={idx}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.45rem 0.85rem",
            backgroundColor: "var(--bg-secondary)",
            border: "1px solid var(--border-color)",
            borderRadius: "var(--radius-md)",
            fontSize: "0.825rem",
            fontWeight: 600,
            color: "var(--text-primary)",
          }}
        >
          <span style={{ color: "var(--brand-accent)", display: "flex" }}>{badge.icon}</span>
          <span>{badge.label}</span>
        </div>
      ))}
    </div>
  );
};

export default AboutIcons;
