import React from "react";
import { ChevronLeft, ChevronRight, Send } from "lucide-react";

export interface FormNavigationProps {
  currentStep: number;
  totalSteps: number;
  onPrev: () => void;
  onNext: () => void;
  onSubmit: () => void;
  isSubmitting?: boolean;
}

export const FormNavigation: React.FC<FormNavigationProps> = ({
  currentStep,
  totalSteps,
  onPrev,
  onNext,
  onSubmit,
  isSubmitting = false,
}) => {
  const isFirstStep = currentStep === 1;
  const isLastStep = currentStep === totalSteps;

  return (
    <div className="form-nav-controls">
      {!isFirstStep ? (
        <button
          type="button"
          className="btn btn-secondary"
          onClick={onPrev}
          disabled={isSubmitting}
        >
          <ChevronLeft size={16} />
          <span>Previous Step</span>
        </button>
      ) : (
        <div />
      )}

      {!isLastStep ? (
        <button type="button" className="btn btn-primary" onClick={onNext}>
          <span>Continue</span>
          <ChevronRight size={16} />
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-primary"
          onClick={onSubmit}
          disabled={isSubmitting}
        >
          <Send size={16} />
          <span>{isSubmitting ? "Dispatching..." : "Submit Inquiry"}</span>
        </button>
      )}
    </div>
  );
};

export default FormNavigation;
