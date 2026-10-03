import React from "react";

export interface StepTwoData {
  roleCategory: string;
  engagementType: string;
}

export interface StepTwoProps {
  formData: StepTwoData;
  onChange: (field: keyof StepTwoData, value: string) => void;
}

export const StepTwo: React.FC<StepTwoProps> = ({ formData, onChange }) => {
  const roleCategories = [
    "Banking Operations & KYC Compliance",
    "Executive Office Administration & Coordination",
    "Customer Support & Client Relationship Management",
    "Documentation Control & SOP Architecture",
    "Financial Spreadsheets & Data Modeling",
    "Corporate Governance & Advisory Support",
  ];

  const engagementTypes = [
    "Full-Time Corporate Employment",
    "Contractual Operations Specialist",
    "Administrative & Advisory Consultation",
    "Strategic Project Engagement",
  ];

  return (
    <div>
      <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.5rem" }}>
        Step 2: Department &amp; Professional Focus
      </h3>
      <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
        Select the operational department and target engagement model.
      </p>

      <div className="form-group">
        <label className="form-label">Primary Operational Domain *</label>
        <div className="form-responsive-grid" style={{ gap: "0.6rem" }}>
          {roleCategories.map((cat) => {
            const isSelected = formData.roleCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => onChange("roleCategory", cat)}
                style={{
                  padding: "0.75rem 1rem",
                  borderRadius: "var(--radius-md)",
                  border: isSelected ? "2px solid var(--brand-accent)" : "1px solid var(--border-color)",
                  backgroundColor: isSelected ? "var(--brand-light)" : "var(--bg-secondary)",
                  color: isSelected ? "var(--brand-accent)" : "var(--text-primary)",
                  fontWeight: isSelected ? 700 : 500,
                  fontSize: "0.85rem",
                  textAlign: "left",
                  transition: "all var(--transition-fast)",
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      <div className="form-group" style={{ marginTop: "1.25rem" }}>
        <label className="form-label">Engagement Model *</label>
        <select
          className="form-select"
          value={formData.engagementType}
          onChange={(e) => onChange("engagementType", e.target.value)}
        >
          {engagementTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default StepTwo;
