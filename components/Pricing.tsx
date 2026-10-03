import React from "react";
import { PricingPlan } from "@/src/data/home";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

export interface PricingProps {
  plans: PricingPlan[];
}

export const Pricing: React.FC<PricingProps> = ({ plans }) => {
  return (
    <div className="pricing-grid">
      {plans.map((plan) => (
        <div key={plan.id} className={`pricing-card ${plan.popular ? "popular" : ""}`}>
          {plan.badge && <span className="pricing-card-badge">{plan.badge}</span>}

          <h3 className="pricing-plan-name">{plan.name}</h3>
          <p className="pricing-plan-desc">{plan.description}</p>

          <div className="pricing-price-box">
            <span className="pricing-amount">{plan.price}</span>
            <span className="pricing-frequency">/ {plan.frequency}</span>
          </div>

          <div className="pricing-features">
            {plan.features.map((feat, idx) => (
              <div key={idx} className="pricing-feature-item">
                <Check size={16} />
                <span>{feat}</span>
              </div>
            ))}
          </div>

          <Link
            href={`/contact?subject=${encodeURIComponent(plan.name)}`}
            className={`btn ${plan.popular ? "btn-primary" : "btn-secondary"}`}
            style={{ width: "100%", marginTop: "auto" }}
          >
            <span>{plan.ctaText}</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Pricing;
