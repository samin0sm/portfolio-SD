import React from "react";

export interface StepThreeData {
  jobLocation: string;
  startDate: string;
  expectedWorkMode: string;
}

export interface StepThreeProps {
  formData: StepThreeData;
  onChange: (field: keyof StepThreeData, value: string) => void;
}

export const StepThree: React.FC<StepThreeProps> = ({ formData, onChange }) => {
  const locations = [
    "Chattogram (On-site)",
    "Dhaka (On-site / Relocation)",
    "Hybrid (Chattogram / Dhaka)",
    "Remote (Bangladesh / International)",
  ];

  const timelines = [
    "Immediate Availability (Within 24-48 Hours)",
    "Within 2 Weeks",
    "Next Month / Future Pipeline",
  ];

  return (
    <div>
      <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.5rem" }}>
        Step 3: Location &amp; Hiring Timeline
      </h3>
      <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
        Indicate your organization&apos;s location requirements and timeline.
      </p>

      <div className="form-group">
        <label className="form-label">Work Location &amp; Mode *</label>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.6rem" }}>
          {locations.map((loc) => {
            const isSelected = formData.jobLocation === loc;
            return (
              <button
                key={loc}
                type="button"
                onClick={() => onChange("jobLocation", loc)}
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
                {loc}
              </button>
            );
          })}
        </div>
      </div>

      <div className="form-group" style={{ marginTop: "1.25rem" }}>
        <label className="form-label">Target Onboarding Timeline *</label>
        <select
          className="form-select"
          value={formData.startDate}
          onChange={(e) => onChange("startDate", e.target.value)}
        >
          {timelines.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default StepThree;
