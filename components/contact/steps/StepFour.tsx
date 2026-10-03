import React from "react";

export interface StepFourData {
  subject: string;
  message: string;
}

export interface StepFourProps {
  formData: StepFourData;
  summary: {
    name: string;
    organization: string;
    email: string;
    phone: string;
    roleCategory: string;
    engagementType: string;
    jobLocation: string;
    startDate: string;
  };
  onChange: (field: keyof StepFourData, value: string) => void;
}

export const StepFour: React.FC<StepFourProps> = ({ formData, summary, onChange }) => {
  return (
    <div>
      <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.5rem" }}>
        Step 4: Message &amp; Review Summary
      </h3>
      <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginBottom: "1.25rem" }}>
        Review your details and include specific job description details or questions.
      </p>

      {/* Summary Box */}
      <div
        className="modal-doc-meta-grid"
        style={{
          backgroundColor: "var(--bg-secondary)",
          border: "1px solid var(--border-color)",
          borderRadius: "var(--radius-md)",
          padding: "1rem 1.25rem",
          marginBottom: "1.5rem",
          fontSize: "0.825rem",
        }}
      >
        <div>
          <span style={{ color: "var(--text-muted)" }}>Candidate Role:</span>{" "}
          <strong>{summary.roleCategory}</strong>
        </div>
        <div>
          <span style={{ color: "var(--text-muted)" }}>Engagement:</span>{" "}
          <strong>{summary.engagementType}</strong>
        </div>
        <div>
          <span style={{ color: "var(--text-muted)" }}>Location:</span>{" "}
          <strong>{summary.jobLocation}</strong>
        </div>
        <div>
          <span style={{ color: "var(--text-muted)" }}>Timeline:</span>{" "}
          <strong>{summary.startDate}</strong>
        </div>
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="subject">
          Subject / Opportunity Title *
        </label>
        <input
          type="text"
          id="subject"
          className="form-input"
          placeholder="e.g. Interview Invitation — Banking Operations Executive"
          value={formData.subject}
          onChange={(e) => onChange("subject", e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="message">
          Message &amp; Scope of Work / Interview Schedule *
        </label>
        <textarea
          id="message"
          className="form-textarea"
          placeholder="Please share details regarding the position, required timings, interview format, or any special documentation requested..."
          value={formData.message}
          onChange={(e) => onChange("message", e.target.value)}
          required
        />
      </div>
    </div>
  );
};

export default StepFour;
