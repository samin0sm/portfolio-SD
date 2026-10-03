import React from "react";
import { ProjectItem } from "@/src/data/home";
import ProjectCard from "@/components/ProjectCard";

export interface CaseCardProps {
  caseItem: ProjectItem;
  onOpenModal: (item: ProjectItem) => void;
}

export const CaseCard: React.FC<CaseCardProps> = ({ caseItem, onOpenModal }) => {
  return <ProjectCard project={caseItem} onOpenModal={onOpenModal} />;
};

export default CaseCard;
