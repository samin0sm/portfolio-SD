import React from "react";
import { mentorReferences } from "@/src/data/about";
import { UserCheck, Mail, Phone, Building } from "lucide-react";

export const AboutTeam: React.FC = () => {
  return (
    <div className="responsive-grid-2">
      {mentorReferences.map((ref) => (
        <div key={ref.id} className="stat-card" style={{ padding: "2rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
            <div className="project-icon-box">
              <UserCheck size={22} />
            </div>
            <div>
              <h4 style={{ fontSize: "1.15rem", fontWeight: 700 }}>{ref.name}</h4>
              <div style={{ fontSize: "0.85rem", color: "var(--brand-accent)", fontWeight: 600 }}>
                {ref.title}
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", fontSize: "0.875rem", color: "var(--text-secondary)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <Building size={16} color="var(--text-muted)" />
              <span>{ref.institution}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <Mail size={16} color="var(--text-muted)" />
              <span>{ref.email}</span>
            </div>
          </div>

          <div
            style={{
              marginTop: "1.25rem",
              paddingTop: "1rem",
              borderTop: "1px solid var(--border-color)",
              fontSize: "0.8rem",
              color: "var(--text-muted)",
              fontStyle: "italic",
            }}
          >
            Reference Context: {ref.relationship}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutTeam;
