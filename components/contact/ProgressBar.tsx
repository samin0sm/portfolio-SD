import React from "react";
import { Check } from "lucide-react";

export interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  stepLabels: string[];
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  currentStep,
  totalSteps,
  stepLabels,
}) => {
  const percentage = ((currentStep - 1) / (totalSteps - 1)) * 100;

  return (
    <div className="progress-bar-wrapper">
      <div className="progress-bar-track">
        <div className="progress-bar-fill" style={{ width: `${percentage}%` }} />
      </div>

      <div className="steps-indicators">
        {stepLabels.map((label, idx) => {
          const stepNum = idx + 1;
          const isCompleted = stepNum < currentStep;
          const isActive = stepNum === currentStep;

          return (
            <div
              key={idx}
              className={`step-indicator-item ${isActive || isCompleted ? "active" : ""}`}
            >
              <div className="step-indicator-num">
                {isCompleted ? <Check size={12} /> : stepNum}
              </div>
              <span className="step-label-text" style={{ display: isActive ? "inline" : "none" }}>
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressBar;
