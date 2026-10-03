import React from "react";
import { FolderKanban } from "lucide-react";

export const CasesHero: React.FC = () => {
  return (
    <div className="section-header" style={{ marginBottom: "2.5rem" }}>
      <span className="section-tag">
        <FolderKanban size={14} />
        <span>Verified Portfolio &amp; Demonstrations</span>
      </span>
      <h1 className="section-title">Case Studies &amp; Practical Workflows</h1>
      <p className="section-desc">
        Explore realistic, institutional demonstrations covering banking correspondence, SOP authoring, Excel KPI
        registries, customer service ticketing, and executive reporting.
      </p>
    </div>
  );
};

export default CasesHero;
