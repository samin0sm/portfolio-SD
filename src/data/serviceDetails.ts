import { servicesData, ServiceItem } from "./service";

export interface ServiceDetail extends ServiceItem {
  overview: string;
  workflow: { step: string; title: string; desc: string }[];
  toolsUsed: string[];
  useCases: string[];
}

export const serviceDetailsData: Record<string, ServiceDetail> = {
  "banking-operations-support": {
    ...servicesData[0],
    overview:
      "Comprehensive retail and corporate banking support focusing on KYC document validation, client dossier management, risk screening, and prompt query resolution.",
    workflow: [
      { step: "01", title: "Client Dossier Intake", desc: "Collect and catalog submitted identification, trade licenses, and tax forms." },
      { step: "02", title: "KYC & AML Compliance Check", desc: "Cross-reference against institutional checklists and regulatory mandates." },
      { step: "03", title: "Database Entry & Verification", desc: "Update banking core databases with verified records and generate unique dossier IDs." },
      { step: "04", title: "Audit Trail Archival", desc: "Secure encrypted cloud filing for rapid audit retrieval." },
    ],
    toolsUsed: ["Banking Core Systems", "Microsoft Excel", "Adobe Acrobat Pro", "Google Workspace"],
    useCases: ["Retail Account Opening", "Corporate Client Due Diligence", "Annual KYC Refresh", "Audit Compliance Preparation"],
  },
  "document-processing-control": {
    ...servicesData[1],
    overview:
      "Institutional-grade documentation authoring, Standard Operating Procedure (SOP) design, version control, and multi-format publishing.",
    workflow: [
      { step: "01", title: "Requirement Gathering", desc: "Map business workflows and stakeholder operational expectations." },
      { step: "02", title: "Drafting & Visual Formatting", desc: "Author clear instructions, workflow tables, and visual hierarchies." },
      { step: "03", title: "Stakeholder Review", desc: "Incorporate leadership feedback and assign strict version controls." },
      { step: "04", title: "Publishing & Distribution", desc: "Distribute encrypted PDFs and maintain cloud index registries." },
    ],
    toolsUsed: ["Microsoft Word", "Google Docs", "Adobe PDF Tools", "Markdown"],
    useCases: ["Departmental SOP Authoring", "Employee Onboarding Handbooks", "Corporate Policy Documentation", "Client Agreements"],
  },
  "excel-data-modeling": {
    ...servicesData[2],
    overview:
      "Advanced spreadsheet engineering for record registries, financial tracking, automated flag detection, and management KPI reporting.",
    workflow: [
      { step: "01", title: "Data Ingestion & Hygiene", desc: "Extract raw data, remove duplicates, trim spaces, and format data types." },
      { step: "02", title: "Formula Architecture", desc: "Implement VLOOKUP, SUMIFS, and dynamic conditional statements." },
      { step: "03", title: "Dashboard & Table Design", desc: "Create readable summary cards, pivot tables, and KPI metric highlights." },
      { step: "04", title: "Validation & Handover", desc: "Lock formula cells, insert user guidance comments, and test edge cases." },
    ],
    toolsUsed: ["Microsoft Excel (Advanced)", "Google Sheets", "Power Query basics", "CSV/TSV parsers"],
    useCases: ["Master Customer Registries", "Monthly Processing Fee Trackers", "Inventory Audits", "Operational SLA Monitoring"],
  },
  "customer-service-communication": {
    ...servicesData[3],
    overview:
      "High-touch, courteous, and resolution-oriented customer communication across multichannel support portals, emails, and direct phone lines.",
    workflow: [
      { step: "01", title: "Ticket Triaging", desc: "Review incoming client inquiry and assign priority urgency levels." },
      { step: "02", title: "Investigation & Collaboration", desc: "Inspect backend database and liaise with operations officers." },
      { step: "03", title: "Empathetic Response", desc: "Formulate clear, polite, and actionable resolution emails with timelines." },
      { step: "04", title: "Follow-up & Closure", desc: "Ensure client satisfaction and record resolution in CRM system." },
    ],
    toolsUsed: ["Email Clients (Outlook / Gmail)", "Helpdesk CRM Systems", "Teams / Zoom", "Knowledge Bases"],
    useCases: ["Banking Inquiries", "Corporate Account Assistance", "Escalation Management", "Client Onboarding Orientation"],
  },
  "office-administration-coordination": {
    ...servicesData[4],
    overview:
      "Full administrative oversight covering executive meeting planning, board minutes transcription, task ownership tracking, and logistical coordination.",
    workflow: [
      { step: "01", title: "Agenda & Schedule Coordination", desc: "Align attendee availability, book conference venues, and prepare decks." },
      { step: "02", title: "Live Meeting Secretarial Support", desc: "Record discussions, decisions, motions, and timeline agreements." },
      { step: "03", title: "Minutes (MoM) Drafting", desc: "Synthesize discussions into concise, bulleted action items with assigned owners." },
      { step: "04", title: "Dissemination & Archival", desc: "Secure approval signatures and archive minutes in corporate storage." },
    ],
    toolsUsed: ["Google Calendar", "Microsoft Teams", "Zoom", "Slack", "Asana/Trello basics"],
    useCases: ["Board of Directors Meetings", "Executive Strategy Huddles", "Vendor Negotiation Briefings", "Office Asset Inventory"],
  },
  "business-report-writing": {
    ...servicesData[5],
    overview:
      "Executive reporting that converts raw operational metrics into polished, actionable business summaries ready for director-level decision making.",
    workflow: [
      { step: "01", title: "Metric Collection", desc: "Gather quantitative KPIs and qualitative feedback from departments." },
      { step: "02", title: "Analytical Synthesis", desc: "Identify trends, bottlenecks, efficiency gains, and areas of risk." },
      { step: "03", title: "Executive Report Authoring", desc: "Draft executive summary, metric tables, and strategic recommendations." },
      { step: "04", title: "Final Polish & Formatting", desc: "Ensure flawless typography, grammar, visual branding, and PDF export." },
    ],
    toolsUsed: ["Microsoft Word", "Google Docs", "Adobe InDesign basics", "Canva Pro"],
    useCases: ["Quarterly Department Audits", "Operational Bottleneck Reviews", "Workflow Modernization Proposals", "Annual Performance Briefs"],
  },
};
