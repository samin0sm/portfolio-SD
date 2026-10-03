"use client";

import React, { useEffect, useState } from "react";
import { StatItem } from "@/src/data/home";

export interface CounterProps {
  stats: StatItem[];
  className?: string;
}

export const Counter: React.FC<CounterProps> = ({ stats, className = "" }) => {
  const [animatedValues, setAnimatedValues] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    stats.forEach((item) => {
      let start = 0;
      const end = item.value;
      const duration = 1200;
      const steps = 30;
      const stepTime = duration / steps;
      const increment = end / steps;

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setAnimatedValues((prev) => ({
          ...prev,
          [item.id]: Number(start.toFixed(item.suffix.includes("%") ? 1 : 0)),
        }));
      }, stepTime);
    });
  }, [stats]);

  return (
    <div className={`stats-grid ${className}`}>
      {stats.map((item) => (
        <div key={item.id} className="stat-card">
          <div className="stat-val-wrapper">
            <span className="stat-value">
              {animatedValues[item.id] !== undefined ? animatedValues[item.id] : item.value}
            </span>
            <span className="stat-suffix">{item.suffix}</span>
          </div>
          <div className="stat-label">{item.label}</div>
          <p className="stat-desc">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Counter;
