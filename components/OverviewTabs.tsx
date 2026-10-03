"use client";

import React, { useState } from "react";
import { OverviewTab } from "@/src/data/home";
import OverviewTabContent from "./OverviewTabContent";

export interface OverviewTabsProps {
  tabs: OverviewTab[];
}

export const OverviewTabs: React.FC<OverviewTabsProps> = ({ tabs }) => {
  const [activeTabId, setActiveTabId] = useState<string>(tabs[0]?.id || "");

  const currentTab = tabs.find((t) => t.id === activeTabId) || tabs[0];

  return (
    <div className="overview-tabs-section">
      <div className="tabs-nav">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`tab-btn ${activeTabId === tab.id ? "active" : ""}`}
            onClick={() => setActiveTabId(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {currentTab && <OverviewTabContent tab={currentTab} />}
    </div>
  );
};

export default OverviewTabs;
