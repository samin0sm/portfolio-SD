export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  shortDesc: string;
  icon: string;
  features: string[];
  deliverables: string[];
  badge: string;
  stats: { label: string; value: string };
}

export const servicesData: ServiceItem[] = [
  {
    id: "srv-banking",
    slug: "banking-operations-support",
    title: "Banking Operations & Retail Support",
    category: "Banking & Financial Services",
    shortDesc:
      "Assistance with client onboarding, Know Your Customer (KYC) screening, account file compliance, and transactional inquiry handling.",
    icon: "landmark",
    badge: "Core Service",
    features: [
      "Client KYC & Due Diligence Screening",
      "Account Opening Documentation Review",
      "Transaction Query Resolution & Escalation",
      "Regulatory & Compliance Cross-Referencing",
    ],
    deliverables: [
      "Verified KYC Dossiers",
      "Exception & Discrepancy Log Sheets",
      "Client Query Audit Reports",
    ],
    stats: { label: "Compliance Rate", value: "100%" },
  },
  {
    id: "srv-doc-processing",
    slug: "document-processing-control",
    title: "Documentation & SOP Management",
    category: "Office Administration",
    shortDesc:
      "Authoring Standard Operating Procedures (SOPs), formatting corporate dossiers, PDF archiving, and digital document control.",
    icon: "file-check",
    badge: "High Demand",
    features: [
      "Standard Operating Procedure (SOP) Creation",
      "Adobe PDF Conversion, Splitting & Encrypting",
      "Executive Document Layout & Typography",
      "Digital Cloud Indexing & Metadata Tagging",
    ],
    deliverables: [
      "Standardized SOP Manuals",
      "Indexed PDF Catalogs",
      "Archival Classification Maps",
    ],
    stats: { label: "Dossiers Processed", value: "350+" },
  },
  {
    id: "srv-excel-data",
    slug: "excel-data-modeling",
    title: "Excel Data Management & Reporting",
    category: "Data & Analytics",
    shortDesc:
      "Building structured spreadsheets, applying relational formulas (VLOOKUP, SUMIFS, IF), cleaning noisy databases, and creating executive trackers.",
    icon: "sheet",
    badge: "Specialized",
    features: [
      "Formulas: VLOOKUP, INDEX/MATCH, SUMIFS, Nested IF",
      "Data Cleansing & Deduplication",
      "Executive KPI Dashboards & Summary Tables",
      "Spreadsheet Validation Rules & Error Checking",
    ],
    deliverables: [
      "Dynamic Excel Master Files",
      "Weekly/Monthly KPI Trackers",
      "Cleaned Database Exports",
    ],
    stats: { label: "Accuracy Rate", value: "99.8%" },
  },
  {
    id: "srv-customer-service",
    slug: "customer-service-communication",
    title: "Customer Service & Helpdesk Support",
    category: "Client Relationship",
    shortDesc:
      "Professional, empathetic communication across email, ticketing systems, and phone channels to resolve client inquiries rapidly.",
    icon: "headset",
    badge: "Client Focused",
    features: [
      "Empathetic & Polite Client Interaction",
      "First-Contact Query Resolution Protocols",
      "Professional Bilingual English/Bengali Communication",
      "Ticket Lifecycle Tracking & Follow-Through",
    ],
    deliverables: [
      "Ticket Resolution Logs",
      "Client Satisfaction Feedback Reports",
      "Response Email Template Suites",
    ],
    stats: { label: "Resolution SLA", value: "< 2 Hrs" },
  },
  {
    id: "srv-office-coordination",
    slug: "office-administration-coordination",
    title: "Office Administration & Event Logistics",
    category: "Operations",
    shortDesc:
      "Organizing board meetings, preparing executive Minutes of Meeting (MoM), coordinating stakeholders, and managing workplace supplies.",
    icon: "calendar-check",
    badge: "Organizational",
    features: [
      "Executive Meeting Scheduling & Agenda Planning",
      "Minutes of Meeting (MoM) Drafting & Task Tracking",
      "Workshop & Briefing Logistics Coordination",
      "Corporate Supply & Inventory Record Keeping",
    ],
    deliverables: [
      "Formal MoM Records with Action Items",
      "Event Logistic Checklists",
      "Office Supply Ledger Sheets",
    ],
    stats: { label: "Action Closure Rate", value: "100%" },
  },
  {
    id: "srv-report-writing",
    slug: "business-report-writing",
    title: "Executive Business Report Writing",
    category: "Corporate Communication",
    shortDesc:
      "Synthesizing operational data into concise, structured executive summaries and analytical audit reports.",
    icon: "clipboard-list",
    badge: "Executive",
    features: [
      "Operational Performance Audits",
      "Executive Briefs & Strategic Summaries",
      "Chart & Data Synthesis for Stakeholders",
      "Grammatical & Stylistic Polish",
    ],
    deliverables: [
      "Formatted Executive Audit Reports",
      "Briefing Documents for Management",
      "Quarterly Workflow Review Decks",
    ],
    stats: { label: "Turnaround Time", value: "24-48 Hrs" },
  },
];
