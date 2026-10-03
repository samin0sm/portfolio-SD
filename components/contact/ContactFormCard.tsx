"use client";

import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import FormNavigation from "./FormNavigation";
import StepOne, { StepOneData } from "./steps/StepOne";
import StepTwo, { StepTwoData } from "./steps/StepTwo";
import StepThree, { StepThreeData } from "./steps/StepThree";
import StepFour, { StepFourData } from "./steps/StepFour";
import { CheckCircle2 } from "lucide-react";

export const ContactFormCard: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    // Step 1
    name: "",
    organization: "",
    email: "",
    phone: "",
    // Step 2
    roleCategory: "Banking Operations & KYC Compliance",
    engagementType: "Full-Time Corporate Employment",
    // Step 3
    jobLocation: "Chattogram (On-site)",
    startDate: "Immediate Availability (Within 24-48 Hours)",
    expectedWorkMode: "Full-Time",
    // Step 4
    subject: "Corporate Opportunity / Interview Invitation",
    message: "",
  });

  const stepLabels = ["Contact", "Role Focus", "Timeline", "Summary"];

  const handleFieldChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep === 1) {
      if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
        alert("Please fill in your Name, Email, and Phone number to continue.");
        return;
      }
    }
    setCurrentStep((prev) => Math.min(prev + 1, 4));
  };

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = () => {
    if (!formData.subject.trim() || !formData.message.trim()) {
      alert("Please provide a Subject and Message before submitting.");
      return;
    }

    const emailBody = `
From: ${formData.name} (${formData.email})
Organization: ${formData.organization || "N/A"}
Phone / WhatsApp: ${formData.phone}

Opportunity Focus: ${formData.roleCategory}
Engagement Model: ${formData.engagementType}
Location: ${formData.jobLocation}
Start Timeline: ${formData.startDate}

Message / Requirements:
${formData.message}
    `.trim();

    const mailtoUrl = `mailto:tanjum643@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoUrl;
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div
        className="contact-step-wizard"
        style={{ textAlign: "center", padding: "3.5rem 2rem" }}
      >
        <div style={{ color: "var(--accent-emerald)", marginBottom: "1rem", display: "flex", justifyContent: "center" }}>
          <CheckCircle2 size={54} />
        </div>
        <h3 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "0.5rem" }}>
          Thank You, {formData.name}!
        </h3>
        <p style={{ color: "var(--text-secondary)", maxWidth: "460px", margin: "0 auto 1.5rem auto", fontSize: "0.95rem" }}>
          Your recruitment message has been dispatched via email. Tanvir Anjum Sazid will review your
          requirements and respond within 24 hours.
        </p>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => {
            setIsSubmitted(false);
            setCurrentStep(1);
          }}
        >
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <div className="contact-step-wizard">
      <ProgressBar currentStep={currentStep} totalSteps={4} stepLabels={stepLabels} />

      {currentStep === 1 && (
        <StepOne
          formData={{
            name: formData.name,
            organization: formData.organization,
            email: formData.email,
            phone: formData.phone,
          }}
          onChange={(field, val) => handleFieldChange(field, val)}
        />
      )}

      {currentStep === 2 && (
        <StepTwo
          formData={{
            roleCategory: formData.roleCategory,
            engagementType: formData.engagementType,
          }}
          onChange={(field, val) => handleFieldChange(field, val)}
        />
      )}

      {currentStep === 3 && (
        <StepThree
          formData={{
            jobLocation: formData.jobLocation,
            startDate: formData.startDate,
            expectedWorkMode: formData.expectedWorkMode,
          }}
          onChange={(field, val) => handleFieldChange(field, val)}
        />
      )}

      {currentStep === 4 && (
        <StepFour
          formData={{
            subject: formData.subject,
            message: formData.message,
          }}
          summary={{
            name: formData.name,
            organization: formData.organization,
            email: formData.email,
            phone: formData.phone,
            roleCategory: formData.roleCategory,
            engagementType: formData.engagementType,
            jobLocation: formData.jobLocation,
            startDate: formData.startDate,
          }}
          onChange={(field, val) => handleFieldChange(field, val)}
        />
      )}

      <FormNavigation
        currentStep={currentStep}
        totalSteps={4}
        onPrev={handlePrev}
        onNext={handleNext}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default ContactFormCard;
