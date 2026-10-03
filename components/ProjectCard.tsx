"use client";

import React from "react";
import { ProjectItem } from "@/src/data/home";
import { Mail, FileText, Table, Headphones, Calendar, Clipboard, ArrowUpRight } from "lucide-react";

export interface ProjectCardProps {
  project: ProjectItem;
  onOpenModal: (project: ProjectItem) => void;
}

const getProjectIcon = (iconName: string) => {
  switch (iconName) {
    case "mail":
      return <Mail size={22} />;
    case "file-text":
      return <FileText size={22} />;
    case "table":
      return <Table size={22} />;
    case "headphones":
      return <Headphones size={22} />;
    case "calendar":
      return <Calendar size={22} />;
    case "clipboard":
      return <Clipboard size={22} />;
    default:
      return <FileText size={22} />;
  }
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenModal }) => {
  return (
    <div className="project-card">
      <div className="project-card-header">
        <div className="project-icon-box">{getProjectIcon(project.icon)}</div>
        <span className="project-badge">{project.badge}</span>
      </div>

      <h3 className="project-card-title">{project.title}</h3>
      <p className="project-card-desc">{project.shortDesc}</p>

      <div className="project-skills">
        {project.skillsUsed.map((skill, idx) => (
          <span key={idx} className="project-skill-pill">
            {skill}
          </span>
        ))}
      </div>

      <div className="project-card-footer">
        <span style={{ fontSize: "0.8rem", color: "var(--brand-accent)", fontWeight: 600 }}>
          {project.tag}
        </span>
        <button
          type="button"
          className="btn btn-secondary btn-sm"
          onClick={() => onOpenModal(project)}
          aria-label={`Open interactive review for ${project.title}`}
        >
          <span>Interactive Preview</span>
          <ArrowUpRight size={15} />
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
