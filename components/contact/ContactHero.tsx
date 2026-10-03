import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export const ContactHero: React.FC = () => {
  return (
    <div className="section-header" style={{ marginBottom: "3rem" }}>
      <span className="section-tag">
        <Send size={14} />
        <span>Direct Communication</span>
      </span>
      <h1 className="section-title">Get in Touch / Recruitment Inquiry</h1>
      <p className="section-desc">
        Reach out directly for corporate recruitment, full-time banking openings, documentation audits, or
        administrative coordination roles in Chattogram or Dhaka.
      </p>
    </div>
  );
};

export default ContactHero;
