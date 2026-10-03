import { ProjectItem, sampleProjectsData } from "./home";

export interface CaseDetailMeta {
  clientType: string;
  duration: string;
  role: string;
  tools: string[];
  impactMetric: string;
  impactLabel: string;
}

export interface DetailedCase extends ProjectItem {
  metaData: CaseDetailMeta;
  background: string;
  challenge: string;
  solution: string;
  outcomes: string[];
}

export const detailedCasesData: Record<string, DetailedCase> = {
  "business-email": {
    ...sampleProjectsData[0],
    metaData: {
      clientType: "Enterprise Banking Operations",
      duration: "Ongoing Correspondence",
      role: "Administrative & Client Support Desk",
      tools: ["Microsoft Outlook", "Corporate Mail Protocol", "Teams"],
      impactMetric: "100%",
      impactLabel: "Timely Stakeholder Alignment",
    },
    background:
      "Large corporate clients require periodic regulatory account maintenance and documentation verification to maintain compliance with institutional banking policies.",
    challenge:
      "Communicating tight deadlines and missing compliance items to external senior executives without causing friction, maintaining complete courtesy, professionalism, and clarity.",
    solution:
      "Structured a standardized formal email communication template featuring status summaries, prioritized bullet points, clear resolution windows, and supplementary briefing schedules.",
    outcomes: [
      "48 of 52 corporate account dossiers cleared ahead of target schedule.",
      "Zero compliance escalation notices during external audit review.",
      "Praised by departmental head for diplomatic, concise, and professional tone.",
    ],
  },
  "doc-formatting": {
    ...sampleProjectsData[1],
    metaData: {
      clientType: "Office Administration & Records Management",
      duration: "2 Weeks Implementation",
      role: "Documentation Specialist",
      tools: ["Microsoft Word", "Google Docs", "Adobe Acrobat Pro"],
      impactMetric: "32%",
      impactLabel: "Retrieval Latency Reduction",
    },
    background:
      "A corporate administration division lacked standardized procedural manuals for incoming client record intake, resulting in inconsistent cataloging and retrieval bottlenecks.",
    challenge:
      "Creating an exhaustive yet easily adoptable Standard Operating Procedure (SOP) that clearly designates step-by-step responsibilities, verification outputs, and error handling.",
    solution:
      "Authored SOP-ADM-2026-08 with structured tabular matrices, explicit quality assurance rules, and clean visual typography.",
    outcomes: [
      "Standardized 5-step intake workflow across all administrative assistants.",
      "Error identification turnaround decreased from 24 hours to under 2 hours.",
      "Adopted as official institutional benchmark documentation.",
    ],
  },
  "excel-management": {
    ...sampleProjectsData[2],
    metaData: {
      clientType: "Corporate Client Records Management",
      duration: "3 Weeks Build & Audit",
      role: "Data Entry & Records Coordinator",
      tools: ["Microsoft Excel", "Google Sheets", "VLOOKUP", "SUMIFS"],
      impactMetric: "99.8%",
      impactLabel: "Registry Accuracy Score",
    },
    background:
      "A fast-growing services firm processed hundreds of monthly client dossiers without an automated tracking registry, leading to formula errors and manual reconciliation overhead.",
    challenge:
      "Designing a robust, error-proof master spreadsheet incorporating dynamic calculations, fee totals, relational lookups, and executive KPI status cards.",
    solution:
      "Engineered `Master_Client_Registry_2026.xlsx` using nested SUMIFS, VLOOKUP cross-referencing, data validation dropdowns, and automated status triggers.",
    outcomes: [
      "Tracked 350+ client records with zero broken formula references.",
      "Reduced monthly ledger reconciliation time by 65%.",
      "Passed 100% of internal quality compliance spot-checks.",
    ],
  },
  "customer-service": {
    ...sampleProjectsData[3],
    metaData: {
      clientType: "High-Priority Corporate Banking Client",
      duration: "Immediate Resolution SLA",
      role: "Banking Support Specialist",
      tools: ["Helpdesk Portal", "Core Banking Portal", "Direct Telecom"],
      impactMetric: "45 Mins",
      impactLabel: "Resolution Turnaround Time",
    },
    background:
      "A key corporate client faced an urgent pending verification status on a time-critical international fund transfer.",
    challenge:
      "Quickly resolving the bottleneck across verification officers while maintaining a reassuring, empathetic, and professional customer dialogue.",
    solution:
      "Directly accessed application records, verified compliance passage, expedited the ticket to senior sign-off, and provided transparent milestone timestamps.",
    outcomes: [
      "Status updated to 'Verified & Active' within 45 minutes.",
      "International wire transfer executed without penalty or delay.",
      "Received highest 5-star satisfaction rating from the corporate representative.",
    ],
  },
  "office-admin": {
    ...sampleProjectsData[4],
    metaData: {
      clientType: "Executive Board & Stakeholder Group",
      duration: "Annual Operational Review",
      role: "Executive Coordinator",
      tools: ["Google Workspace", "Microsoft Teams", "Presentation Suite"],
      impactMetric: "100%",
      impactLabel: "Action Item Accountability",
    },
    background:
      "Annual 18-stakeholder executive operational briefing requiring unified presentation collation, hybrid meeting logistics, live minute transcription, and post-meeting follow-up.",
    challenge:
      "Managing tight time constraints across 6 department heads and ensuring seamless AV tech, seating, and comprehensive Minutes of Meeting (MoM) delivery.",
    solution:
      "Executed an end-to-end 3-phase coordination protocol (Pre-meeting, Meeting Day, and Post-meeting T+24h) with explicit task ownership matrices.",
    outcomes: [
      "100% on-time execution of the 90-minute agenda.",
      "Published formal MoM with 12 actionable mandates within 24 hours.",
      "Seamless hybrid participation across local and remote attendees.",
    ],
  },
  "report-writing": {
    ...sampleProjectsData[5],
    metaData: {
      clientType: "Senior Management & Audit Committee",
      duration: "Quarterly Audit Cycle",
      role: "Administrative Analyst",
      tools: ["Microsoft Word", "Executive Report Layout", "Adobe PDF"],
      impactMetric: "32%",
      impactLabel: "Workflow Latency Reduction",
    },
    background:
      "Quarterly administrative audit requiring clear synthesis of 420 processed dossiers, query resolution timelines, and digital archive migration.",
    challenge:
      "Distilling raw operational metrics into an executive-level summary with strategic recommendations for leadership decision-making.",
    solution:
      "Authored a structured 3-part audit summary with bulleted metrics, clear performance benchmarks, and actionable recommendations.",
    outcomes: [
      "Adopted by executive directors for Q3 resource allocation.",
      "Demonstrated 98.4% first-time accuracy compliance across all units.",
      "Established permanent quarterly reporting template.",
    ],
  },
};
