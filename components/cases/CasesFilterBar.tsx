"use client";

import React from "react";
import { CaseCategory } from "@/src/data/case";

export interface CasesFilterBarProps {
  categories: CaseCategory[];
  activeCategory: string;
  onSelectCategory: (catId: string) => void;
}

export const CasesFilterBar: React.FC<CasesFilterBarProps> = ({
  categories,
  activeCategory,
  onSelectCategory,
}) => {
  return (
    <div className="tabs-nav" style={{ marginBottom: "3rem" }}>
      {categories.map((cat) => (
        <button
          key={cat.id}
          type="button"
          className={`tab-btn ${activeCategory === cat.id ? "active" : ""}`}
          onClick={() => onSelectCategory(cat.id)}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
};

export default CasesFilterBar;
