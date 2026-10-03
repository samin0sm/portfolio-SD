"use client";

import React from "react";
import { MarqueeItem } from "@/src/data/home";

export interface MarqueeProps {
  items: MarqueeItem[];
  speed?: number;
}

export const Marquee: React.FC<MarqueeProps> = ({ items }) => {
  // Duplicate array to ensure smooth infinite loop
  const displayItems = [...items, ...items, ...items];

  return (
    <div className="marquee-container" aria-label="Core Competencies Marquee">
      <div className="marquee-content">
        {displayItems.map((item, index) => (
          <div key={`${item.id}-${index}`} className="marquee-item">
            <span>{item.label}</span>
            <span className="marquee-pill">{item.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
