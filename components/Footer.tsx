"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Mail, Phone, MapPin, Download } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div>
            <h3 className="footer-brand-title">Tanvir Anjum Sazid</h3>
            <p className="footer-brand-desc">
              Aspiring Banking Operations, Customer Service, and Administration professional dedicated to accuracy,
              confidentiality, and institutional excellence in Chattogram, Bangladesh.
            </p>
            <div style={{ marginTop: "1.25rem" }}>
              <a
                href="/assets/cv/TANVIR_ANJUM_SAZID_CV.pdf"
                download="TANVIR_ANJUM_SAZID_CV.pdf"
                className="btn btn-secondary btn-sm"
              >
                <Download size={14} />
                <span>Download CV (PDF)</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="footer-col-title">Navigation</h4>
            <div className="footer-links">
              <Link href="/">Home Overview</Link>
              <Link href="/about">About &amp; Credentials</Link>
              <Link href="/services">Corporate Services</Link>
              <Link href="/cases">Demonstrations &amp; Cases</Link>
              <Link href="/insights">Articles &amp; Insights</Link>
              <Link href="/contact">Inquiry &amp; Contact</Link>
            </div>
          </div>

          {/* Key Services */}
          <div>
            <h4 className="footer-col-title">Capabilities</h4>
            <div className="footer-links">
              <Link href="/services#banking-operations-support">Banking Support &amp; KYC</Link>
              <Link href="/services#document-processing-control">SOP Authoring &amp; Control</Link>
              <Link href="/services#excel-data-modeling">Excel Data Modeling</Link>
              <Link href="/services#customer-service-communication">Client Support Desk</Link>
              <Link href="/services#office-administration-coordination">Office Coordination</Link>
              <Link href="/services#business-report-writing">Executive Report Writing</Link>
            </div>
          </div>

          {/* Contact Snippets */}
          <div>
            <h4 className="footer-col-title">Direct Contact</h4>
            <div className="footer-links">
              <a
                href="mailto:tanjum643@gmail.com"
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <Mail size={15} color="var(--brand-accent)" />
                <span>tanjum643@gmail.com</span>
              </a>
              <a
                href="tel:+8801864759644"
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <Phone size={15} color="var(--brand-accent)" />
                <span>+880 1864-759644</span>
              </a>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--text-muted)" }}>
                <MapPin size={15} color="var(--brand-accent)" />
                <span>Chattogram, Bangladesh</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div>
            &copy; {currentYear} Tanvir Anjum Sazid. All rights reserved. Official Professional Corporate
            Application.
          </div>
          <button
            type="button"
            className="back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Scroll back to top of page"
          >
            <span>Back to Top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
