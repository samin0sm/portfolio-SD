"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sun,
  Moon,
  Download,
  Eye,
  Menu,
  X,
  User,
  GraduationCap,
  Briefcase,
  Sparkles,
  Layers,
  FolderKanban,
  Mail,
  FileText,
  Phone,
} from "lucide-react";
import { resumeData } from "@/src/data/home";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [theme, setTheme] = useState<string>("light");
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("sazid_portfolio_theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("sazid_portfolio_theme", nextTheme);
  };

  const navLinks = [
    { href: "/", label: "Home", icon: <User size={16} /> },
    { href: "/about", label: "About", icon: <GraduationCap size={16} /> },
    { href: "/services", label: "Services", icon: <Briefcase size={16} /> },
    { href: "/cases", label: "Cases", icon: <FolderKanban size={16} /> },
    { href: "/insights", label: "Insights", icon: <Sparkles size={16} /> },
    { href: "/contact", label: "Contact", icon: <Mail size={16} /> },
  ];

  return (
    <>
      <header className={`site-header ${isScrolled ? "scrolled" : ""}`}>
        <div className="container header-container">
          <Link href="/" className="brand-logo" aria-label="Tanvir Anjum Sazid Home">
            <div className="brand-avatar">
              <img
                src="/assets/images/sazid-portrait.jpg"
                alt="Tanvir Anjum Sazid"
                className="brand-avatar-img"
              />
            </div>
            <div className="brand-info">
              <span className="brand-name">Tanvir Anjum Sazid</span>
              <span className="brand-role">Banking &amp; Administration</span>
            </div>
          </Link>

          <nav className={`main-nav ${isNavOpen ? "nav-open" : ""}`} aria-label="Main Navigation">
            {/* Mobile Drawer Header */}
            <div className="drawer-header">
              <div className="drawer-profile">
                <div className="drawer-avatar">
                  <img src="/assets/images/sazid-portrait.jpg" alt="Tanvir Anjum Sazid" />
                </div>
                <div className="drawer-profile-info">
                  <span className="drawer-name">Tanvir Anjum Sazid</span>
                  <span className="drawer-status">
                    <span className="status-dot"></span> Available for Hire
                  </span>
                </div>
              </div>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setIsNavOpen(false)}
                aria-label="Close navigation menu"
              >
                <X size={18} />
              </button>
            </div>

            <ul className="nav-links">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`nav-link ${isActive ? "active" : ""}`}
                      onClick={() => setIsNavOpen(false)}
                    >
                      <span className="nav-link-icon">{link.icon}</span>
                      <span>{link.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="header-actions">
              {/* Desktop Theme Toggle */}
              <button
                type="button"
                className="theme-toggle-btn desktop-theme-btn"
                onClick={toggleTheme}
                aria-label="Toggle Dark/Light Mode"
                title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              {/* CV Action Group */}
              <div className="header-cv-group">
                <a
                  href="/assets/cv/TANVIR_ANJUM_SAZID_CV.pdf"
                  download="TANVIR_ANJUM_SAZID_CV.pdf"
                  className="btn btn-primary btn-sm"
                >
                  <Download size={14} />
                  <span>CV</span>
                </a>
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={() => setIsCvModalOpen(true)}
                  title="Preview Interactive CV Modal"
                >
                  <Eye size={14} />
                  <span>View</span>
                </button>
              </div>

              {/* Mobile Drawer Theme Switch Bar */}
              <div className="drawer-theme-row">
                <span className="drawer-theme-label">Appearance</span>
                <button
                  type="button"
                  className="drawer-theme-toggle"
                  onClick={toggleTheme}
                  aria-label="Toggle Theme Mode"
                >
                  {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                  <span>{theme === "dark" ? "Executive Dark" : "Corporate Light"}</span>
                </button>
              </div>

              {/* Drawer Quick Contacts */}
              <div className="drawer-quick-contacts">
                <a href="mailto:tanjum643@gmail.com" className="drawer-contact-item">
                  <Mail size={16} />
                  <span>tanjum643@gmail.com</span>
                </a>
                <a href="tel:+8801864759644" className="drawer-contact-item">
                  <Phone size={16} />
                  <span>+880 1864-759644</span>
                </a>
              </div>
            </div>
          </nav>

          {/* Header Mobile Controls */}
          <div className="header-mobile-controls">
            <button
              type="button"
              className="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label="Toggle Theme Mode"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              type="button"
              className="hamburger-btn"
              onClick={() => setIsNavOpen(!isNavOpen)}
              aria-label="Toggle Navigation Menu"
              aria-expanded={isNavOpen}
            >
              {isNavOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Backdrop for mobile nav */}
        <div
          className={`nav-backdrop ${isNavOpen ? "active" : ""}`}
          onClick={() => setIsNavOpen(false)}
          aria-hidden="true"
        />
      </header>

      {/* Interactive CV Modal */}
      {isCvModalOpen && (
        <div
          className="modal-backdrop active"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsCvModalOpen(false);
          }}
        >
          <div className="modal-dialog" role="dialog" aria-modal="true" style={{ maxWidth: "840px" }}>
            <div className="modal-header">
              <div>
                <h3 className="modal-title">{resumeData.name}</h3>
                <span className="modal-subtitle">{resumeData.title}</span>
              </div>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setIsCvModalOpen(false)}
                aria-label="Close CV preview modal"
              >
                <X size={18} />
              </button>
            </div>

            <div className="modal-body">
              {/* Contact Bar */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "1.5rem",
                  padding: "0.85rem 1rem",
                  backgroundColor: "var(--bg-secondary)",
                  borderRadius: "var(--radius-md)",
                  marginBottom: "1.5rem",
                  fontSize: "0.85rem",
                  border: "1px solid var(--border-color)",
                }}
              >
                <div>
                  <strong>Location:</strong> {resumeData.contact.location}
                </div>
                <div>
                  <strong>Email:</strong> {resumeData.contact.email}
                </div>
                <div>
                  <strong>Phone:</strong> {resumeData.contact.phone}
                </div>
              </div>

              {/* Summary */}
              <div style={{ marginBottom: "1.5rem" }}>
                <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--brand-primary)", marginBottom: "0.4rem" }}>
                  Professional Summary
                </h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                  {resumeData.summary}
                </p>
              </div>

              {/* Education */}
              <div style={{ marginBottom: "1.5rem" }}>
                <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--brand-primary)", marginBottom: "0.6rem" }}>
                  Academic Credentials
                </h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                  {resumeData.education.map((edu, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: "0.85rem",
                        backgroundColor: "var(--bg-secondary)",
                        borderRadius: "var(--radius-md)",
                        border: "1px solid var(--border-color)",
                      }}
                    >
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                        <strong style={{ fontSize: "0.95rem" }}>{edu.degree}</strong>
                        <span style={{ fontSize: "0.8rem", color: "var(--brand-accent)", fontWeight: 700 }}>
                          {edu.year}
                        </span>
                      </div>
                      <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
                        {edu.institution} &bull; {edu.gpa}
                      </div>
                      <p style={{ fontSize: "0.825rem", color: "var(--text-secondary)", marginTop: "0.3rem" }}>
                        {edu.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div style={{ marginBottom: "1.5rem" }}>
                <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--brand-primary)", marginBottom: "0.6rem" }}>
                  Core Competencies &amp; Technical Skills
                </h4>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  {resumeData.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontSize: "0.75rem",
                        padding: "0.3rem 0.65rem",
                        backgroundColor: "var(--brand-light)",
                        color: "var(--brand-accent)",
                        borderRadius: "var(--radius-full)",
                        fontWeight: 600,
                        border: "1px solid rgba(37, 99, 235, 0.2)",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Download Buttons */}
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  paddingTop: "1.5rem",
                  borderTop: "1px solid var(--border-color)",
                }}
              >
                <a
                  href="/assets/cv/TANVIR_ANJUM_SAZID_CV.pdf"
                  download="TANVIR_ANJUM_SAZID_CV.pdf"
                  className="btn btn-primary"
                  style={{ flex: 1 }}
                >
                  <Download size={16} />
                  <span>Download Official PDF</span>
                </a>
                <a
                  href="/assets/cv/TANVIR_ANJUM_SAZID_CV.docx"
                  download="TANVIR_ANJUM_SAZID_CV.docx"
                  className="btn btn-secondary"
                  style={{ flex: 1 }}
                >
                  <FileText size={16} />
                  <span>Download DOCX Format</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
