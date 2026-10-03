import React from "react";
import { Sparkles } from "lucide-react";

export const BlogHero: React.FC = () => {
  return (
    <div className="section-header" style={{ marginBottom: "2.5rem" }}>
      <span className="section-tag">
        <Sparkles size={14} />
        <span>Insights &amp; Best Practices</span>
      </span>
      <h1 className="section-title">Knowledge Base &amp; Operational Articles</h1>
      <p className="section-desc">
        Practical insights on banking KYC compliance, advanced Microsoft Excel automation, SOP design, and
        empathetic customer support workflows.
      </p>
    </div>
  );
};

export default BlogHero;
