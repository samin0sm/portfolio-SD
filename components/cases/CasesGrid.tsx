"use client";

import React, { useState } from "react";
import { ProjectItem } from "@/src/data/home";
import CaseCard from "./CaseCard";
import FeaturedProjects from "@/components/FeaturedProjects";

export interface CasesGridProps {
  cases: ProjectItem[];
}

export const CasesGrid: React.FC<CasesGridProps> = ({ cases }) => {
  return <FeaturedProjects projects={cases} />;
};

export default CasesGrid;
