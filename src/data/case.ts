import { ProjectItem, sampleProjectsData } from "./home";

export interface CaseCategory {
  id: string;
  label: string;
}

export const caseCategories: CaseCategory[] = [
  { id: "all", label: "All Engagements" },
  { id: "Corporate Communication & Compliance", label: "Communication & Compliance" },
  { id: "Records Management & Governance", label: "Documentation & SOP" },
  { id: "Data Analysis & Information Control", label: "Data Analytics & Excel" },
  { id: "Customer Relationship & Banking Support", label: "Banking & Client Support" },
  { id: "Office Administration & Operations", label: "Operations & Governance" },
  { id: "Corporate Reporting & Analysis", label: "Executive Reporting" },
];

export const casesData: ProjectItem[] = sampleProjectsData;
