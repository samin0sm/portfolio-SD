/**
 * Sample Projects Data for Tanvir Anjum Sazid's Corporate Portfolio
 * Rich, realistic demonstrations of practical workplace capabilities.
 */

const sampleProjectsData = [
  {
    id: "business-email",
    title: "Professional Business Email",
    category: "Communication & Client Handling",
    tag: "Email & Correspondence",
    icon: "mail",
    badge: "Formal Communication",
    shortDesc: "A sample demonstrating professional email communication, clear writing, proper formatting, and workplace communication skills.",
    skillsUsed: ["Professional English Communication", "Professional Email Communication", "Attention to Detail", "Workplace Etiquette"],
    modalContent: {
      type: "email",
      meta: {
        to: "corporate.clients@enterprise-bank.com",
        from: "tanjum643@gmail.com (Tanvir Anjum Sazid — Administrative Coordinator)",
        subject: "Formal Update: Q3 Client Documentation Verification & Account Maintenance Schedule",
        date: "Monday, October 12, 2026 at 09:30 AM",
        priority: "High / Formal Business"
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
        "Accurate grammar, syntax, and polite closing."
      ]
    }
  },
  {
    id: "doc-formatting",
    title: "Document Formatting and Processing",
    category: "Documentation & Office Tools",
    tag: "SOP & Document Control",
    icon: "file-text",
    badge: "Standard Operating Procedure",
    shortDesc: "A sample demonstrating the ability to create, edit, organize, and format professional corporate documents.",
    skillsUsed: ["Microsoft Word", "Google Docs", "Adobe PDF Tools", "Documentation & Processing", "Attention to Detail"],
    modalContent: {
      type: "document",
      docMeta: {
        docNumber: "SOP-ADM-2026-08",
        effectiveDate: "September 01, 2026",
        version: "v2.4 (Approved)",
        department: "Office Administration & Records Management"
      },
      title: "STANDARD OPERATING PROCEDURE: INCOMING CLIENT RECORD VERIFICATION & ARCHIVING",
      sections: [
        {
          heading: "1. Purpose & Scope",
          body: "This document outlines the standardized workflow for receiving, digitizing, cataloging, and securely archiving incoming client identification records and business documentation to ensure complete operational compliance and rapid retrieval."
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
              ["05", "Dispatch Confirmation to Client", "Client Service Desk", "Automated / Formal Email Notification"]
            ]
          }
        },
        {
          heading: "3. Quality Assurance & Error Handling",
          body: "Any discrepancies found during the verification phase (e.g., missing signatures, expired licenses) must be flagged within 2 hours. A standard formal deficiency notice is prepared and logged in the exception ledger for immediate follow-up."
        }
      ],
      takeaways: [
        "Standardized formatting with clean typography and hierarchy.",
        "Clear table structures for multi-step operational clarity.",
        "Ready for immediate institutional deployment."
      ]
    }
  },
  {
    id: "excel-management",
    title: "Excel Data Management",
    category: "Data Entry & Information Handling",
    tag: "Spreadsheet & Analytics",
    icon: "table",
    badge: "Formulas & KPI Tracker",
    shortDesc: "A sample project demonstrating basic Excel skills, data organization, formulas, tables, and information management.",
    skillsUsed: ["Microsoft Excel", "Google Sheets", "Formulas (VLOOKUP, SUMIFS, IF)", "Data Cleansing", "Record Management"],
    modalContent: {
      type: "spreadsheet",
      kpis: [
        { label: "Total Client Files Processed", value: "350+" },
        { label: "Record Accuracy Rate", value: "99.8%" },
        { label: "Avg. Turnaround Time", value: "1.2 hrs" },
        { label: "Audit Compliance", value: "100% Passed" }
      ],
      sheetName: "Master_Client_Registry_2026.xlsx",
      tableHeaders: ["Record ID", "Client / Account Name", "Service Category", "Verification Status", "Processing Fee", "Filing Status"],
      tableData: [
        ["REC-8091", "Apex Logistics Ltd.", "Banking Support", "Verified", "$450.00", "Completed"],
        ["REC-8092", "Horizon Trading Co.", "Corporate Documentation", "Verified", "$620.00", "Completed"],
        ["REC-8093", "Bayview Maritime Group", "Office Coordination", "In Review", "$890.00", "Pending Sign-off"],
        ["REC-8094", "Delta Agro Industries", "Banking Support", "Verified", "$310.00", "Completed"],
        ["REC-8095", "Sunrise Tech Solutions", "Client Service", "Verified", "$750.00", "Completed"],
        ["REC-8096", "Crown Textile Mills", "Document Verification", "Verified", "$540.00", "Completed"]
      ],
      formulasShowcase: [
        "=SUMIFS(E2:E7, D2:D7, \"Verified\") → Calculate total revenue from verified records",
        "=IF(D2=\"Verified\", \"Ready for Archive\", \"Hold for Review\") → Automated operational status flags",
        "=VLOOKUP(A2, MasterCatalog!A:F, 3, FALSE) → Relational cross-referencing across worksheets"
      ],
      takeaways: [
        "Structured data hygiene avoiding redundant or duplicate entries.",
        "Applied formulas for dynamic calculation and operational visibility.",
        "Clean aesthetic table styling with clear headers and aligned data types."
      ]
    }
  },
  {
    id: "customer-service",
    title: "Customer Service Communication",
    category: "Customer Support & Banking Assistance",
    tag: "Client Support & Inquiry Handling",
    icon: "headphones",
    badge: "Service Excellence",
    shortDesc: "A sample demonstrating professional responses to customer or client inquiries with empathy, precision, and resolution.",
    skillsUsed: ["Customer Service & Client Handling", "Problem Solving", "Professional English Communication", "Banking Support"],
    modalContent: {
      type: "support_dialog",
      ticketId: "TKT-SRV-9421",
      channel: "Official Helpdesk / Client Portal",
      clientName: "Shahidul Karim (Account Representative, Zenith Holdings)",
      inquiry: "Good morning. We submitted our updated corporate documentation and banking authorization form 2 days ago, but our account portal still shows 'Verification Pending'. We need this approved today for an urgent international transfer.",
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
        "High level of professionalism matching institutional expectations."
      ]
    }
  },
  {
    id: "office-admin",
    title: "Office Administration Sample",
    category: "Office Coordination & Management",
    tag: "Executive Logistics & Planning",
    icon: "calendar",
    badge: "Executive Coordination",
    shortDesc: "A sample demonstrating meeting scheduling, task coordination, document management, and administrative organization.",
    skillsUsed: ["Office Administration & Coordination", "Time Management & Organization", "Teamwork & Collaboration", "Google Workspace"],
    modalContent: {
      type: "admin_plan",
      eventTitle: "Annual Executive Operational Review & Stakeholder Briefing",
      date: "Thursday, November 19, 2026",
      location: "Executive Conference Room A & Hybrid Zoom / Google Meet",
      coordinationChecklist: [
        { phase: "Pre-Meeting (T-minus 3 Days)", items: ["Collated and compiled 6 department progress decks into a unified master presentation.", "Dispatched formal calendar invites with secure digital agenda links to 18 attendees.", "Coordinated catering, seating layout, stationery, and AV tech check."] },
        { phase: "Meeting Day Logistics", items: ["Managed room access, attendance log, and digital guest badges.", "Provided real-time slide projection and recorded executive meeting minutes.", "Monitored time allocation for each speaker according to the strict 90-minute schedule."] },
        { phase: "Post-Meeting Follow-up (T+24 Hours)", items: ["Drafted and formatted comprehensive Minutes of the Meeting (MoM).", "Extracted 12 distinct action items with assigned owners and agreed completion dates.", "Archived presentation slides and signed approvals in corporate cloud storage."] }
      ],
      takeaways: [
        "End-to-end organizational discipline and anticipation of logistics needs.",
        "Structured stakeholder communication and timely post-event reporting.",
        "High attention to detail ensuring smooth executive workflow."
      ]
    }
  },
  {
    id: "report-writing",
    title: "Professional Report Writing",
    category: "Documentation & Analysis",
    tag: "Executive Reporting",
    icon: "clipboard",
    badge: "Analytical Report",
    shortDesc: "A sample demonstrating clear writing, information organization, and professional report formatting.",
    skillsUsed: ["Professional English Communication", "Report Writing & Formatting", "Data Analysis", "Attention to Detail"],
    modalContent: {
      type: "report",
      reportTitle: "EXECUTIVE SUMMARY: Q2 ADMINISTRATIVE WORKFLOW EFFICIENCY & RECORDS MANAGEMENT AUDIT",
      author: "Prepared by: Tanvir Anjum Sazid",
      date: "July 2026",
      structure: [
        {
          heading: "1. Executive Overview",
          content: "During the second quarter of 2026, the administrative support unit completed a systematic review of document processing timelines, client intake records, and digital filing compliance. The implementation of standardized naming protocols and structured Excel trackers resulted in a 32% reduction in retrieval latency."
        },
        {
          heading: "2. Key Performance Metrics",
          content: "• Total Documentation Dossiers Processed: 420 files\n• First-Time Accuracy Compliance: 98.4%\n• Average Resolution Time for Customer Queries: 1.8 hours (down from 2.6 hours)\n• Storage Optimization: 100% of physical files cross-indexed to cloud digital archives."
        },
        {
          heading: "3. Strategic Recommendations",
          content: "1. Expand digital form intake to minimize manual re-entry errors.\n2. Maintain weekly cross-departmental coordination huddles to identify documentation bottlenecks early.\n3. Conduct bi-monthly data sanitation on master customer registries."
        }
      ],
      takeaways: [
        "Objective, concise business English tailored for management decision-making.",
        "Clear hierarchy with highlights, metrics, and actionable recommendations.",
        "Demonstrates strong analytical thinking and document synthesis."
      ]
    }
  }
];

// Resume Data for the Interactive CV Modal
const resumeData = {
  name: "TANVIR ANJUM SAZID",
  title: "Aspiring Administration, Customer Service & Banking Support Professional",
  contact: {
    location: "Chattogram, Bangladesh",
    email: "tanjum643@gmail.com",
    phone: "+8801864759644"
  },
  summary: "Motivated and responsible graduate with a Master of Arts in English and strong written/verbal communication, administrative, documentation, and client-handling skills. Seeking a professional role where accuracy, service quality, teamwork, and organizational efficiency are valued.",
  education: [
    {
      degree: "Master of Arts (M.A.) in English",
      institution: "National University (Chattogram Government College)",
      year: "2022",
      gpa: "CGPA: 2.91 out of 4.00",
      description: "Advanced study in analytical communication, literature, research methodologies, and professional composition."
    },
    {
      degree: "Bachelor of Arts (B.A.) in English",
      institution: "National University (Patiya Government College)",
      year: "2021",
      gpa: "CGPA: 2.80 out of 4.00",
      description: "Foundation in English language proficiency, written syntax, critical analysis, and verbal communication."
    }
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
    "Problem Solving"
  ],
  languages: [
    { name: "Bangla", level: "Fluent (Native)" },
    { name: "English", level: "Fluent in Reading, Writing, and Speaking" }
  ],
  careerInterests: [
    "Administration",
    "Office Coordination",
    "Customer Service",
    "Client Service",
    "Banking Support",
    "Documentation",
    "Data Entry and Record Management",
    "Administrative Support"
  ]
};
