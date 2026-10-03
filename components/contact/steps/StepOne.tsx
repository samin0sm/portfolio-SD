import React from "react";

export interface StepOneData {
  name: string;
  organization: string;
  email: string;
  phone: string;
}

export interface StepOneProps {
  formData: StepOneData;
  onChange: (field: keyof StepOneData, value: string) => void;
}

export const StepOne: React.FC<StepOneProps> = ({ formData, onChange }) => {
  return (
    <div>
      <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.5rem" }}>
        Step 1: Recruiter &amp; Organization Details
      </h3>
      <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
        Please provide your contact details so we can reply promptly.
      </p>

      <div className="form-group">
        <label className="form-label" htmlFor="name">
          Your Full Name / Recruiter Name *
        </label>
        <input
          type="text"
          id="name"
          className="form-input"
          placeholder="e.g. Sarah Ahmed / HR Manager"
          value={formData.name}
          onChange={(e) => onChange("name", e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="organization">
          Organization / Institution / Bank Name
        </label>
        <input
          type="text"
          id="organization"
          className="form-input"
          placeholder="e.g. Eastern Bank Ltd. / Standard Corporate Services"
          value={formData.organization}
          onChange={(e) => onChange("organization", e.target.value)}
        />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
        <div className="form-group">
          <label className="form-label" htmlFor="email">
            Corporate Email Address *
          </label>
          <input
            type="email"
            id="email"
            className="form-input"
            placeholder="name@organization.com"
            value={formData.email}
            onChange={(e) => onChange("email", e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="phone">
            Contact Number / WhatsApp *
          </label>
          <input
            type="tel"
            id="phone"
            className="form-input"
            placeholder="+880 18XX-XXXXXX"
            value={formData.phone}
            onChange={(e) => onChange("phone", e.target.value)}
            required
          />
        </div>
      </div>
    </div>
  );
};

export default StepOne;
