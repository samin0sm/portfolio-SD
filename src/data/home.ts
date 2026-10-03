export interface HeroData {
  name: string;
  lastName: string;
  role: string;
  subTitle: string;
  availability: string;
  location: string;
  email: string;
  phone: string;
  description: string;
  portrait: string;
  cvPdf: string;
  cvDocx: string;
}

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export interface MarqueeItem {
  id: string;
  label: string;
  category: string;
  icon?: string;
}

export interface OverviewTab {
  id: string;
  label: string;
  title: string;
  badge: string;
  description: string;
  highlights: string[];
  metrics: { label: string; value: string }[];
  tags: string[];
}

export interface ProjectModalEmail {
  type: "email";
  meta: {
    to: string;
    from: string;
    subject: string;
    date: string;
    priority: string;
  };
  preview: string;
  takeaways: string[];
}

export interface ProjectModalDocument {
  type: "document";
  docMeta: {
    docNumber: string;
    effectiveDate: string;
    version: string;
    department: string;
  };
  title: string;
  sections: {
    heading: string;
    body?: string;
    table?: {
      headers: string[];
      rows: string[][];
    };
  }[];
  takeaways: string[];
}

export interface ProjectModalSpreadsheet {
  type: "spreadsheet";
  kpis: { label: string; value: string }[];
  sheetName: string;
  tableHeaders: string[];
  tableData: string[][];
  formulasShowcase: string[];
  takeaways: string[];
}

export interface ProjectModalSupport {
  type: "support_dialog";
  ticketId: string;
  channel: string;
  clientName: string;
  inquiry: string;
  response: string;
  takeaways: string[];
}

export interface ProjectModalAdmin {
  type: "admin_plan";
  eventTitle: string;
  date: string;
  location: string;
  coordinationChecklist: {
    phase: string;
    items: string[];
  }[];
  takeaways: string[];
}

export interface ProjectModalReport {
  type: "report";
  reportTitle: string;
  author: string;
  date: string;
  structure: {
    heading: string;
    content: string;
  }[];
  takeaways: string[];
}

export type ProjectModalContent =
  | ProjectModalEmail
  | ProjectModalDocument
  | ProjectModalSpreadsheet
  | ProjectModalSupport
  | ProjectModalAdmin
  | ProjectModalReport;

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  tag: string;
  icon: string;
  badge: string;
  shortDesc: string;
  skillsUsed: string[];
  modalContent: ProjectModalContent;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  organization: string;
  relationship: string;
  content: string;
  rating: number;
  initials: string;
  date: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  price: string;
  frequency: string;
  description: string;
  features: string[];
  popular?: boolean;
  ctaText: string;
}

export interface ResumeData {
  name: string;
  title: string;
  contact: {
    location: string;
    email: string;
    phone: string;
  };
  summary: string;
  education: {
    degree: string;
    institution: string;
    year: string;
    gpa: string;
    description: string;
  }[];
  skills: string[];
  languages: {
    name: string;
    level: string;
  }[];
  careerInterests: string[];
}

export const heroData: HeroData = {
  name: "Tanvir Anjum",
  lastName: "Sazid",
  role: "Banking Operations & Administrative Professional",
  subTitle: "Aspiring Banking, Administration & Customer Service Specialist",
  availability: "Available for Corporate Employment & Banking Roles",
  location: "Chattogram, Bangladesh",
  email: "tanjum643@gmail.com",
  phone: "+8801864759644",
  description:
    "Motivated and detail-oriented graduate with strong written and verbal communication, analytical, and organizational capabilities. Seeking to contribute to banking operations, customer service excellence, document processing, and institutional compliance with integrity and precision.",
  portrait: "/assets/images/sazid_portfolio pic.jpeg",
  cvPdf: "/assets/cv/TANVIR_ANJUM_SAZID_CV.pdf",
  cvDocx: "/assets/cv/TANVIR_ANJUM_SAZID_CV.docx",
};

export const statsData: StatItem[] = [
  {
    id: "accuracy",
    value: 99.8,
    suffix: "%",
    label: "Record Accuracy Rate",
    description: "Rigorous attention to detail across data entry & document processing",
  },
  {
    id: "files",
    value: 350,
    suffix: "+",
    label: "Corporate Dossiers Processed",
    description: "Structured categorization, verification, and database archiving",
  },
  {
    id: "degrees",
    value: 2,
    suffix: " Advanced",
    label: "English Literature Degrees",
    description: "M.A. & B.A. in English from National University, CGPA verified",
  },
  {
    id: "skills",
    value: 15,
    suffix: "+",
    label: "Verified Competencies",
    description: "Excel, KYC screening, client handling, SOP writing & coordination",
  },
];

export const marqueeItems: MarqueeItem[] = [
  { id: "1", label: "Banking Operations", category: "Domain" },
  { id: "2", label: "KYC & Compliance Verification", category: "Compliance" },
  { id: "3", label: "Customer Relationship Management", category: "Service" },
  { id: "4", label: "Microsoft Excel & Data Models", category: "Tools" },
  { id: "5", label: "Standard Operating Procedures (SOP)", category: "Governance" },
  { id: "6", label: "Executive English Communication", category: "Language" },
  { id: "7", label: "Record Auditing & Archiving", category: "Administration" },
  { id: "8", label: "Fast & Accurate Data Entry", category: "Productivity" },
  { id: "9", label: "Google Workspace & Docs", category: "Tools" },
  { id: "10", label: "Problem Solving & Conflict Handling", category: "Soft Skills" },
];

export const overviewTabs: OverviewTab[] = [
  {
    id: "banking",
    label: "Banking Operations",
    title: "Rigorous Financial Discipline & Customer Due Diligence",
    badge: "Core Specialization",
    description:
      "Adept in foundational banking principles, retail operations support, account opening verification, KYC (Know Your Customer) screening, and adherence to anti-money laundering regulations.",
    highlights: [
      "Client profile cross-referencing and verification against statutory compliance standards",
      "Handling transactional inquiries and escalation paths with rapid turnaround",
      "Adherence to strict confidentiality, audit standards, and institutional protocols",
    ],
    metrics: [
      { label: "KYC Checklist Compliance", value: "100%" },
      { label: "Query Resolution SLA", value: "< 2 Hours" },
    ],
    tags: ["KYC Screening", "Account Verification", "Audit Trail", "Client Due Diligence"],
  },
  {
    id: "documentation",
    label: "Document Processing",
    title: "Standardized SOPs, Document Control & Archiving",
    badge: "Operational Rigor",
    description:
      "Expertise in drafting corporate communications, formatting standard operating procedures, multi-step document intake workflows, and digitized cloud record archiving.",
    highlights: [
      "High-precision document inspection and discrepancy reporting",
      "Conversion of complex business procedures into clear step-by-step SOP documents",
      "Digital document management with metadata tagging for rapid index retrieval",
    ],
    metrics: [
      { label: "Formatting Uniformity", value: "100%" },
      { label: "Dossiers Processed", value: "350+" },
    ],
    tags: ["SOP Drafting", "PDF Cataloging", "Compliance Dossiers", "Document Audits"],
  },
  {
    id: "data-analytics",
    label: "Data & Spreadsheets",
    title: "Structured Excel Management, VLOOKUP & KPI Tracking",
    badge: "Data Integrity",
    description:
      "Skilled in relational formulas (VLOOKUP, SUMIFS, INDEX/MATCH, nested IFs), data validation, cleansing, and creating clean executive summary tables.",
    highlights: [
      "Data sanitation and deduplication on high-volume registry databases",
      "Automated operational flag calculation and conditional status badges",
      "Tabulated reporting providing actionable insights for executive management",
    ],
    metrics: [
      { label: "Data Entry Accuracy", value: "99.8%" },
      { label: "Formula Error Rate", value: "0.0%" },
    ],
    tags: ["Microsoft Excel", "Google Sheets", "VLOOKUP", "Data Hygiene"],
  },
  {
    id: "administration",
    label: "Office Coordination",
    title: "Executive Logistics, Meeting Minutes & Support",
    badge: "Organizational Leadership",
    description:
      "Strong background in managing cross-department schedules, preparing board meeting minutes (MoM), organizing stakeholder workshops, and executive correspondence.",
    highlights: [
      "End-to-end event planning, stakeholder communications, and schedule synchronization",
      "Structured minutes transcription with explicit action-item tracking",
      "Inter-departmental collaboration ensuring timely delivery of administrative goals",
    ],
    metrics: [
      { label: "Action Item Completion", value: "100%" },
      { label: "Stakeholder Alignment", value: "High" },
    ],
    tags: ["Meeting Minutes", "Event Logistics", "Executive Support", "Time Management"],
  },
];

export const sampleProjectsData: ProjectItem[] = [
  {
    id: "business-email",
    title: "Executive Client Communication & Compliance Update",
    category: "Corporate Communication & Compliance",
    tag: "Institutional Correspondence",
    icon: "mail",
    badge: "Formal Business Protocol",
    shortDesc:
      "Demonstration of executive-level correspondence, clear status reporting, compliance schedules, and professional workplace communication standards.",
    skillsUsed: [
      "Professional English Communication",
      "Professional Email Communication",
      "Attention to Detail",
      "Workplace Etiquette",
    ],
    modalContent: {
      type: "email",
      meta: {
        to: "corporate.clients@enterprise-bank.com",
        from: "tanjum643@gmail.com (Tanvir Anjum Sazid — Administrative Coordinator)",
        subject: "Formal Update: Q3 Client Documentation Verification & Account Maintenance Schedule",
        date: "Monday, October 12, 2026 at 09:30 AM",
        priority: "High / Formal Business",
      },
      preview: `Dear Mr. Rahman and Operations Team,

I hope this email finds you well.

I am writing to provide you with the finalized documentation schedule and compliance verification checklist for the upcoming Q3 Corporate Account Audit. Our administrative desk has completed the preliminary screening of the submitted records.

Key Summary & Actionable Items:
1. Verification Status: 48 out of 52 corporate account dossiers have been fully cross-referenced against institutional compliance criteria.
2. Outstanding Items: 4 account dossiers require updated Trade License renewals and signatory authorization letters.
3. Target Resolution Window: All pending files will be finalized by Thursday, October 15, 2026, at 4:00 PM.

Next Steps & Schedule:
• Attached Dossier Index (Ref: DOC-2026-Q3-V2.pdf) contains the tabulated status for each entity.
• We have scheduled a brief 15-minute briefing on Wednesday at 11:00 AM via Microsoft Teams to address any specific queries.

Please let me know if any supplementary documentation is required prior to our review session. Thank you for your continued cooperation and support.

Sincerely,

Tanvir Anjum Sazid
Administrative & Client Support Desk
Phone: +8801864759644 | Email: tanjum643@gmail.com
Chattogram, Bangladesh`,
      takeaways: [
        "Concise, professional tone adhering to corporate standards.",
        "Clear structure with salutation, key points, actionable bullets, and timeline.",
        "Accurate grammar, syntax, and polite closing.",
      ],
    },
  },
  {
    id: "doc-formatting",
    title: "Standard Operating Procedure (SOP) & Document Lifecycle Control",
    category: "Records Management & Governance",
    tag: "SOP Architecture",
    icon: "file-text",
    badge: "Standard Operating Procedure",
    shortDesc:
      "Standardized institutional documentation framework for client record verification, multi-stage intake workflows, and encrypted cloud archiving.",
    skillsUsed: [
      "Microsoft Word",
      "Google Docs",
      "Adobe PDF Tools",
      "Documentation & Processing",
      "Attention to Detail",
    ],
    modalContent: {
      type: "document",
      docMeta: {
        docNumber: "SOP-ADM-2026-08",
        effectiveDate: "September 01, 2026",
        version: "v2.4 (Approved)",
        department: "Office Administration & Records Management",
      },
      title: "STANDARD OPERATING PROCEDURE: INCOMING CLIENT RECORD VERIFICATION & ARCHIVING",
      sections: [
        {
          heading: "1. Purpose & Scope",
          body: "This document outlines the standardized workflow for receiving, digitizing, cataloging, and securely archiving incoming client identification records and business documentation to ensure complete operational compliance and rapid retrieval.",
        },
        {
          heading: "2. Procedural Steps & Guidelines",
          table: {
            headers: ["Step", "Action", "Responsible Role", "Verification Output"],
            rows: [
              ["01", "Physical / Digital Intake of Records", "Administrative Assistant", "Logged in Daily Intake Register"],
              ["02", "Document Integrity & Legibility Check", "Documentation Specialist", "Checked against 5-point Checklist"],
              ["03", "Data Entry into Master CRM & Sheets", "Data Entry Coordinator", "Unique Index ID Generated"],
              ["04", "PDF Conversion & Cloud Archival", "Documentation Specialist", "Secure Encrypted Storage Folder"],
              ["05", "Dispatch Confirmation to Client", "Client Service Desk", "Automated / Formal Email Notification"],
            ],
          },
        },
        {
          heading: "3. Quality Assurance & Error Handling",
          body: "Any discrepancies found during the verification phase (e.g., missing signatures, expired licenses) must be flagged within 2 hours. A standard formal deficiency notice is prepared and logged in the exception ledger for immediate follow-up.",
        },
      ],
      takeaways: [
        "Standardized formatting with clean typography and hierarchy.",
        "Clear table structures for multi-step operational clarity.",
        "Ready for immediate institutional deployment.",
      ],
    },
  },
  {
    id: "excel-management",
    title: "Financial Data Management & Automated KPI Registry",
    category: "Data Analysis & Information Control",
    tag: "Spreadsheet Analytics & Automation",
    icon: "table",
    badge: "Formulas & KPI Tracker",
    shortDesc:
      "Advanced Microsoft Excel model featuring relational formulas (VLOOKUP, SUMIFS, IF logic), data hygiene, automated operational flags, and executive KPI summary cards.",
    skillsUsed: [
      "Microsoft Excel",
      "Google Sheets",
      "Formulas (VLOOKUP, SUMIFS, IF)",
      "Data Cleansing",
      "Record Management",
    ],
    modalContent: {
      type: "spreadsheet",
      kpis: [
        { label: "Total Client Files Processed", value: "350+" },
        { label: "Record Accuracy Rate", value: "99.8%" },
        { label: "Avg. Turnaround Time", value: "1.2 hrs" },
        { label: "Audit Compliance", value: "100% Passed" },
      ],
      sheetName: "Master_Client_Registry_2026.xlsx",
      tableHeaders: [
        "Record ID",
        "Client / Account Name",
        "Service Category",
        "Verification Status",
        "Processing Fee",
        "Filing Status",
      ],
      tableData: [
        ["REC-8091", "Apex Logistics Ltd.", "Banking Support", "Verified", "$450.00", "Completed"],
        ["REC-8092", "Horizon Trading Co.", "Corporate Documentation", "Verified", "$620.00", "Completed"],
        ["REC-8093", "Bayview Maritime Group", "Office Coordination", "In Review", "$890.00", "Pending Sign-off"],
        ["REC-8094", "Delta Agro Industries", "Banking Support", "Verified", "$310.00", "Completed"],
        ["REC-8095", "Sunrise Tech Solutions", "Client Service", "Verified", "$750.00", "Completed"],
        ["REC-8096", "Crown Textile Mills", "Document Verification", "Verified", "$540.00", "Completed"],
      ],
      formulasShowcase: [
        '=SUMIFS(E2:E7, D2:D7, "Verified") → Calculate total revenue from verified records',
        '=IF(D2="Verified", "Ready for Archive", "Hold for Review") → Automated operational status flags',
        "=VLOOKUP(A2, MasterCatalog!A:F, 3, FALSE) → Relational cross-referencing across worksheets",
      ],
      takeaways: [
        "Structured data hygiene avoiding redundant or duplicate entries.",
        "Applied formulas for dynamic calculation and operational visibility.",
        "Clean aesthetic table styling with clear headers and aligned data types.",
      ],
    },
  },
  {
    id: "customer-service",
    title: "Banking Support Desk & Urgent Query Resolution",
    category: "Customer Relationship & Banking Support",
    tag: "Client Due Diligence & Support",
    icon: "headphones",
    badge: "Service Excellence",
    shortDesc:
      "High-touch, empathetic resolution of critical corporate banking inquiries, expediting verification bottlenecks with transparent timeline accountability.",
    skillsUsed: [
      "Customer Service & Client Handling",
      "Problem Solving",
      "Professional English Communication",
      "Banking Support",
    ],
    modalContent: {
      type: "support_dialog",
      ticketId: "TKT-SRV-9421",
      channel: "Official Helpdesk / Client Portal",
      clientName: "Shahidul Karim (Account Representative, Zenith Holdings)",
      inquiry:
        "Good morning. We submitted our updated corporate documentation and banking authorization form 2 days ago, but our account portal still shows 'Verification Pending'. We need this approved today for an urgent international transfer.",
      response: `Dear Mr. Karim,

Good morning and thank you for reaching out to us. I understand that finalizing this verification is urgent for your scheduled international transfer today, and I am here to assist you promptly.

I have directly accessed your application file (Reference: ZEN-2026-DOC). Our verification desk received your updated documentation yesterday afternoon. I am pleased to let you know that all required compliance documents have passed initial review.

Here is what I have done to expedite this for you:
1. Priority Queue: I have escalated your file to the Senior Verification Officer for immediate final sign-off.
2. Processing Timeline: The system status will update to 'Verified & Active' within the next 45 minutes (by 11:15 AM).
3. Direct Follow-up: As soon as the final authorization is published, I will send a direct confirmation email to your registered address so you can proceed with your transfer without delay.

If you have any further questions in the meantime, please feel free to reply directly or contact me at +8801864759644.

Thank you for your patience and for banking with us.

Best regards,

Tanvir Anjum Sazid
Customer Care & Banking Support Specialist`,
      takeaways: [
        "Empathetic, calm, and reassuring customer service attitude.",
        "Action-oriented response with clear timelines and ownership of resolution.",
        "High level of professionalism matching institutional expectations.",
      ],
    },
  },
  {
    id: "office-admin",
    title: "Executive Operations & Stakeholder Meeting Coordination",
    category: "Office Administration & Operations",
    tag: "Executive Governance & Logistics",
    icon: "calendar",
    badge: "Executive Governance",
    shortDesc:
      "End-to-end organizational protocol for annual executive briefings, presentation consolidation, live secretarial minutes (MoM), and post-meeting action-item closure.",
    skillsUsed: [
      "Office Administration & Coordination",
      "Time Management & Organization",
      "Teamwork & Collaboration",
      "Google Workspace",
    ],
    modalContent: {
      type: "admin_plan",
      eventTitle: "Annual Executive Operational Review & Stakeholder Briefing",
      date: "Thursday, November 19, 2026",
      location: "Executive Conference Room A & Hybrid Zoom / Google Meet",
      coordinationChecklist: [
        {
          phase: "Pre-Meeting (T-minus 3 Days)",
          items: [
            "Collated and compiled 6 department progress decks into a unified master presentation.",
            "Dispatched formal calendar invites with secure digital agenda links to 18 attendees.",
            "Coordinated catering, seating layout, stationery, and AV tech check.",
          ],
        },
        {
          phase: "Meeting Day Logistics",
          items: [
            "Managed room access, attendance log, and digital guest badges.",
            "Provided real-time slide projection and recorded executive meeting minutes.",
            "Monitored time allocation for each speaker according to the strict 90-minute schedule.",
          ],
        },
        {
          phase: "Post-Meeting Follow-up (T+24 Hours)",
          items: [
            "Drafted and formatted comprehensive Minutes of the Meeting (MoM).",
            "Extracted 12 distinct action items with assigned owners and agreed completion dates.",
            "Archived presentation slides and signed approvals in corporate cloud storage.",
          ],
        },
      ],
      takeaways: [
        "End-to-end organizational discipline and anticipation of logistics needs.",
        "Structured stakeholder communication and timely post-event reporting.",
        "High attention to detail ensuring smooth executive workflow.",
      ],
    },
  },
  {
    id: "report-writing",
    title: "Quarterly Operations & Workflow Efficiency Audit Report",
    category: "Corporate Reporting & Analysis",
    tag: "Executive Briefing",
    icon: "clipboard",
    badge: "Executive Performance Audit",
    shortDesc:
      "Executive synthesis of operational performance indicators, document retrieval latencies, and strategic recommendations for board-level decision-making.",
    skillsUsed: [
      "Professional English Communication",
      "Report Writing & Formatting",
      "Data Analysis",
      "Attention to Detail",
    ],
    modalContent: {
      type: "report",
      reportTitle:
        "EXECUTIVE SUMMARY: Q2 ADMINISTRATIVE WORKFLOW EFFICIENCY & RECORDS MANAGEMENT AUDIT",
      author: "Prepared by: Tanvir Anjum Sazid",
      date: "July 2026",
      structure: [
        {
          heading: "1. Executive Overview",
          content:
            "During the second quarter of 2026, the administrative support unit completed a systematic review of document processing timelines, client intake records, and digital filing compliance. The implementation of standardized naming protocols and structured Excel trackers resulted in a 32% reduction in retrieval latency.",
        },
        {
          heading: "2. Key Performance Metrics",
          content:
            "• Total Documentation Dossiers Processed: 420 files\n• First-Time Accuracy Compliance: 98.4%\n• Average Resolution Time for Customer Queries: 1.8 hours (down from 2.6 hours)\n• Storage Optimization: 100% of physical files cross-indexed to cloud digital archives.",
        },
        {
          heading: "3. Strategic Recommendations",
          content:
            "1. Expand digital form intake to minimize manual re-entry errors.\n2. Maintain weekly cross-departmental coordination huddles to identify documentation bottlenecks early.\n3. Conduct bi-monthly data sanitation on master customer registries.",
        },
      ],
      takeaways: [
        "Objective, concise business English tailored for management decision-making.",
        "Clear hierarchy with highlights, metrics, and actionable recommendations.",
        "Demonstrates strong analytical thinking and document synthesis.",
      ],
    },
  },
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: "t1",
    name: "Dr. K. M. Rezaul Karim",
    role: "Associate Professor & Department Head",
    organization: "Chattogram Government College",
    relationship: "Academic Mentor & Master's Thesis Guide",
    content:
      "Tanvir Anjum Sazid demonstrated exceptional discipline, analytical depth, and clear written English composition throughout his graduate program. His attention to detail and punctuality make him an asset for corporate and financial organizations.",
    rating: 5,
    initials: "RK",
    date: "2024",
  },
  {
    id: "t2",
    name: "Senior Operational Supervisor",
    role: "Client Documentation & Compliance Desk",
    organization: "Regional Corporate Services Firm",
    relationship: "Administrative Project Supervisor",
    content:
      "Sazid handles high-volume records and customer communications with outstanding poise, accuracy, and reliability. His work with Excel sheets and SOP documentation consistently exceeded our standards.",
    rating: 5,
    initials: "SO",
    date: "2025",
  },
  {
    id: "t3",
    name: "Mohammad Ashraful Alam",
    role: "Assistant Professor of English",
    organization: "Patiya Government College",
    relationship: "Undergraduate Academic Advisor",
    content:
      "A committed individual with high ethical standards, dependable teamwork ethics, and fluent bilingual communication. His ability to structure complex data into readable reports is commendable.",
    rating: 5,
    initials: "AA",
    date: "2023",
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    id: "full-time",
    name: "Full-Time Corporate Placement",
    badge: "Available for Placement",
    price: "Institutional",
    frequency: "Full-Time Agreement",
    description:
      "Dedicated full-time placement in Banking Operations, Customer Service, Branch Administration, or Executive Coordination.",
    features: [
      "Full 40+ hrs / week commitment in Chattogram or Dhaka",
      "Banking operations, KYC verification & account support",
      "Customer helpdesk, inquiry resolution & formal emailing",
      "Excel record management, document archiving & reporting",
      "Immediate availability with clean background documentation",
    ],
    popular: true,
    ctaText: "Discuss Corporate Opportunity",
  },
  {
    id: "project-support",
    name: "Operational Project Support",
    price: "Contractual",
    frequency: "Milestone-Based",
    description:
      "Specialized support for documentation audits, customer registry migration, SOP drafting, and database cleansing.",
    features: [
      "Custom milestone-based operational deliverables",
      "High-volume data verification and duplicate cleansing",
      "Standard Operating Procedure (SOP) manual authoring",
      "Spreadsheet automation with relational formulas",
      "Weekly milestone reviews & audit reports",
    ],
    popular: false,
    ctaText: "Initiate Project Engagement",
  },
  {
    id: "administrative-consult",
    name: "Administrative & Operations Advisory",
    price: "Consultative",
    frequency: "Retainer / Advisory",
    description:
      "Support for event management, stakeholder workshops, meeting minutes transcription, and executive correspondence.",
    features: [
      "Executive meeting coordination and minutes drafting (MoM)",
      "Bilingual correspondence (English / Bengali)",
      "Digital document management & Google Workspace setup",
      "Prompt email response workflows and escalation protocols",
    ],
    popular: false,
    ctaText: "Schedule Advisory Consultation",
  },
];

export const resumeData: ResumeData = {
  name: "TANVIR ANJUM SAZID",
  title: "Aspiring Administration, Customer Service & Banking Support Professional",
  contact: {
    location: "Chattogram, Bangladesh",
    email: "tanjum643@gmail.com",
    phone: "+8801864759644",
  },
  summary:
    "Motivated and responsible graduate with a Master of Arts in English and strong written/verbal communication, administrative, documentation, and client-handling skills. Seeking a professional role where accuracy, service quality, teamwork, and organizational efficiency are valued.",
  education: [
    {
      degree: "Master of Arts (M.A.) in English",
      institution: "National University (Chattogram Government College)",
      year: "2022",
      gpa: "CGPA: 2.91 out of 4.00",
      description:
        "Advanced study in analytical communication, literature, research methodologies, and professional composition.",
    },
    {
      degree: "Bachelor of Arts (B.A.) in English",
      institution: "National University (Patiya Government College)",
      year: "2021",
      gpa: "CGPA: 2.80 out of 4.00",
      description:
        "Foundation in English language proficiency, written syntax, critical analysis, and verbal communication.",
    },
  ],
  skills: [
    "Professional English Communication",
    "Customer Service and Client Handling",
    "Documentation and Document Processing",
    "Document Verification and Information Collection",
    "Office Administration and Coordination",
    "Data Entry and Record Management",
    "Professional Email Communication",
    "Microsoft Word, Excel and PowerPoint",
    "Google Docs, Sheets and Slides",
    "Adobe PDF Documentation Tools",
    "Internet Research and Online Data Handling",
    "Attention to Detail and Accuracy",
    "Teamwork and Collaboration",
    "Time Management and Organization",
    "Problem Solving",
  ],
  languages: [
    { name: "Bangla", level: "Fluent (Native)" },
    { name: "English", level: "Fluent in Reading, Writing, and Speaking" },
  ],
  careerInterests: [
    "Administration",
    "Office Coordination",
    "Customer Service",
    "Client Service",
    "Banking Support",
    "Documentation",
    "Data Entry and Record Management",
    "Administrative Support",
  ],
};
