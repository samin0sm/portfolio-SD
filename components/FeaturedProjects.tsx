"use client";

import React, { useState } from "react";
import { ProjectItem } from "@/src/data/home";
import ProjectCard from "./ProjectCard";
import { X, Table as TableIcon, CheckCircle2 } from "lucide-react";

export interface FeaturedProjectsProps {
  projects: ProjectItem[];
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onOpenModal={(p) => setSelectedProject(p)} />
        ))}
      </div>

      {/* Interactive Project Modal */}
      {selectedProject && (
        <div
          className="modal-backdrop active"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div className="modal-dialog" role="dialog" aria-modal="true">
            <div className="modal-header">
              <div>
                <h3 className="modal-title">{selectedProject.title}</h3>
                <span className="modal-subtitle">
                  {selectedProject.category} &bull; {selectedProject.badge}
                </span>
              </div>
              <button
                type="button"
                className="modal-close-btn"
                onClick={closeModal}
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            <div className="modal-body">
              {/* Email Type */}
              {selectedProject.modalContent.type === "email" && (
                <div>
                  <div className="sample-email-preview">
                    <div className="email-meta-header">
                      <div className="email-meta-row">
                        <span className="email-meta-label">To:</span>
                        <span>{selectedProject.modalContent.meta.to}</span>
                      </div>
                      <div className="email-meta-row">
                        <span className="email-meta-label">From:</span>
                        <span>{selectedProject.modalContent.meta.from}</span>
                      </div>
                      <div className="email-meta-row">
                        <span className="email-meta-label">Subject:</span>
                        <strong>{selectedProject.modalContent.meta.subject}</strong>
                      </div>
                      <div className="email-meta-row">
                        <span className="email-meta-label">Date:</span>
                        <span>{selectedProject.modalContent.meta.date}</span>
                      </div>
                    </div>
                    <div className="email-body-text">{selectedProject.modalContent.preview}</div>
                  </div>

                  <div className="key-takeaways-box">
                    <div className="takeaways-title">Workplace Competencies Demonstrated:</div>
                    <ul className="takeaways-list">
                      {selectedProject.modalContent.takeaways.map((t, i) => (
                        <li key={i}>{t}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Document / SOP Type */}
              {selectedProject.modalContent.type === "document" && (
                <div>
                  <div
                    style={{
                      backgroundColor: "var(--bg-secondary)",
                      padding: "1rem",
                      borderRadius: "var(--radius-md)",
                      marginBottom: "1.25rem",
                      fontSize: "0.85rem",
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "0.5rem",
                      border: "1px solid var(--border-color)",
                    }}
                  >
                    <div>
                      <strong>Document ID:</strong> {selectedProject.modalContent.docMeta.docNumber}
                    </div>
                    <div>
                      <strong>Version:</strong> {selectedProject.modalContent.docMeta.version}
                    </div>
                    <div>
                      <strong>Effective Date:</strong> {selectedProject.modalContent.docMeta.effectiveDate}
                    </div>
                    <div>
                      <strong>Department:</strong> {selectedProject.modalContent.docMeta.department}
                    </div>
                  </div>

                  <h4
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 800,
                      marginBottom: "1rem",
                      color: "var(--brand-primary)",
                    }}
                  >
                    {selectedProject.modalContent.title}
                  </h4>

                  {selectedProject.modalContent.sections.map((sec, idx) => (
                    <div key={idx} style={{ marginBottom: "1.25rem" }}>
                      <div style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.35rem" }}>
                        {sec.heading}
                      </div>
                      {sec.body && (
                        <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                          {sec.body}
                        </p>
                      )}
                      {sec.table && (
                        <div className="sample-table-wrapper">
                          <table className="sample-table">
                            <thead>
                              <tr>
                                {sec.table.headers.map((h, hi) => (
                                  <th key={hi}>{h}</th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {sec.table.rows.map((row, ri) => (
                                <tr key={ri}>
                                  {row.map((cell, ci) => (
                                    <td key={ci}>{cell}</td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}
                    </div>
                  ))}

                  <div className="key-takeaways-box">
                    <div className="takeaways-title">Documentation Capabilities Demonstrated:</div>
                    <ul className="takeaways-list">
                      {selectedProject.modalContent.takeaways.map((t, i) => (
                        <li key={i}>{t}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Spreadsheet Type */}
              {selectedProject.modalContent.type === "spreadsheet" && (
                <div>
                  <div className="spreadsheet-kpi-grid">
                    {selectedProject.modalContent.kpis.map((kpi, idx) => (
                      <div key={idx} className="kpi-card">
                        <div className="kpi-num">{kpi.value}</div>
                        <div className="kpi-text">{kpi.label}</div>
                      </div>
                    ))}
                  </div>

                  <div
                    style={{
                      fontSize: "0.85rem",
                      fontWeight: 700,
                      marginBottom: "0.5rem",
                      color: "var(--text-muted)",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                    }}
                  >
                    <TableIcon size={16} />
                    <span>
                      Active Sheet: <strong>{selectedProject.modalContent.sheetName}</strong>
                    </span>
                  </div>

                  <div className="sample-table-wrapper">
                    <table className="sample-table">
                      <thead>
                        <tr>
                          {selectedProject.modalContent.tableHeaders.map((th, i) => (
                            <th key={i}>{th}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {selectedProject.modalContent.tableData.map((row, ri) => (
                          <tr key={ri}>
                            <td>
                              <strong>{row[0]}</strong>
                            </td>
                            <td>{row[1]}</td>
                            <td>{row[2]}</td>
                            <td>
                              <span className="status-badge-verified">{row[3]}</span>
                            </td>
                            <td>{row[4]}</td>
                            <td>{row[5]}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="formulas-box">
                    <div className="formulas-title">Key Formulas &amp; Functions Applied:</div>
                    {selectedProject.modalContent.formulasShowcase.map((f, i) => (
                      <code key={i} className="formula-code">
                        {f}
                      </code>
                    ))}
                  </div>

                  <div className="key-takeaways-box">
                    <div className="takeaways-title">Data Management Strengths:</div>
                    <ul className="takeaways-list">
                      {selectedProject.modalContent.takeaways.map((t, i) => (
                        <li key={i}>{t}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Customer Support Type */}
              {selectedProject.modalContent.type === "support_dialog" && (
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "0.85rem",
                      color: "var(--text-muted)",
                      marginBottom: "1rem",
                      padding: "0.6rem 0.85rem",
                      backgroundColor: "var(--bg-tertiary)",
                      borderRadius: "var(--radius-md)",
                    }}
                  >
                    <span>
                      Ticket ID: <strong>{selectedProject.modalContent.ticketId}</strong>
                    </span>
                    <span>
                      Channel: <strong>{selectedProject.modalContent.channel}</strong>
                    </span>
                  </div>

                  <div className="chat-bubble client-bubble">
                    <div className="bubble-sender">
                      Client Inquiry &bull; {selectedProject.modalContent.clientName}
                    </div>
                    <p>{selectedProject.modalContent.inquiry}</p>
                  </div>

                  <div className="chat-bubble agent-bubble">
                    <div className="bubble-sender">
                      Representative Response &bull; Tanvir Anjum Sazid
                    </div>
                    <p style={{ whiteSpace: "pre-line" }}>{selectedProject.modalContent.response}</p>
                  </div>

                  <div className="key-takeaways-box">
                    <div className="takeaways-title">Customer Service Competencies:</div>
                    <ul className="takeaways-list">
                      {selectedProject.modalContent.takeaways.map((t, i) => (
                        <li key={i}>{t}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Office Admin Plan Type */}
              {selectedProject.modalContent.type === "admin_plan" && (
                <div>
                  <div
                    style={{
                      backgroundColor: "var(--bg-secondary)",
                      border: "1px solid var(--border-color)",
                      borderRadius: "var(--radius-md)",
                      padding: "1.25rem",
                      marginBottom: "1.5rem",
                    }}
                  >
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                      {selectedProject.modalContent.eventTitle}
                    </h4>
                    <div
                      style={{
                        fontSize: "0.85rem",
                        color: "var(--text-muted)",
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "1.5rem",
                      }}
                    >
                      <div>
                        <strong>Date:</strong> {selectedProject.modalContent.date}
                      </div>
                      <div>
                        <strong>Venue:</strong> {selectedProject.modalContent.location}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    {selectedProject.modalContent.coordinationChecklist.map((phase, pi) => (
                      <div
                        key={pi}
                        style={{
                          backgroundColor: "var(--bg-card)",
                          border: "1px solid var(--border-color)",
                          borderRadius: "var(--radius-md)",
                          padding: "1rem",
                        }}
                      >
                        <div
                          style={{
                            fontWeight: 700,
                            fontSize: "0.95rem",
                            color: "var(--brand-accent)",
                            marginBottom: "0.5rem",
                          }}
                        >
                          {phase.phase}
                        </div>
                        <ul
                          style={{
                            paddingLeft: "1.25rem",
                            listStyle: "disc",
                            fontSize: "0.875rem",
                            color: "var(--text-secondary)",
                            lineHeight: 1.5,
                          }}
                        >
                          {phase.items.map((item, ii) => (
                            <li key={ii}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="key-takeaways-box">
                    <div className="takeaways-title">Administrative Coordination Capabilities:</div>
                    <ul className="takeaways-list">
                      {selectedProject.modalContent.takeaways.map((t, i) => (
                        <li key={i}>{t}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Report Type */}
              {selectedProject.modalContent.type === "report" && (
                <div>
                  <div
                    style={{
                      borderBottom: "2px solid var(--brand-primary)",
                      paddingBottom: "1rem",
                      marginBottom: "1.25rem",
                    }}
                  >
                    <h4
                      style={{
                        fontSize: "1.15rem",
                        fontWeight: 800,
                        color: "var(--brand-primary)",
                        lineHeight: 1.3,
                      }}
                    >
                      {selectedProject.modalContent.reportTitle}
                    </h4>
                    <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "0.35rem" }}>
                      {selectedProject.modalContent.author} &bull; {selectedProject.modalContent.date}
                    </div>
                  </div>

                  {selectedProject.modalContent.structure.map((str, si) => (
                    <div key={si} style={{ marginBottom: "1.25rem" }}>
                      <div
                        style={{
                          fontWeight: 700,
                          fontSize: "0.95rem",
                          color: "var(--text-primary)",
                          marginBottom: "0.35rem",
                        }}
                      >
                        {str.heading}
                      </div>
                      <p
                        style={{
                          fontSize: "0.9rem",
                          color: "var(--text-secondary)",
                          lineHeight: 1.6,
                          whiteSpace: "pre-line",
                        }}
                      >
                        {str.content}
                      </p>
                    </div>
                  ))}

                  <div className="key-takeaways-box">
                    <div className="takeaways-title">Report Writing Strengths:</div>
                    <ul className="takeaways-list">
                      {selectedProject.modalContent.takeaways.map((t, i) => (
                        <li key={i}>{t}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeaturedProjects;
