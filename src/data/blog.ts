export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  tags: string[];
  featured?: boolean;
}

export const blogPostsData: BlogPost[] = [
  {
    id: "post-1",
    slug: "streamlining-banking-kyc-compliance",
    title: "Mastering KYC Verification: Strategies for Zero-Deficiency Client Intake",
    excerpt:
      "A practical look at how structured checklist screening, document metadata tagging, and proactive client follow-ups eliminate compliance bottlenecks in retail and corporate banking.",
    category: "Banking Operations",
    publishedAt: "September 15, 2026",
    readTime: "5 min read",
    author: {
      name: "Tanvir Anjum Sazid",
      role: "Banking & Admin Specialist",
      avatar: "/assets/images/sazid_portfolio pic.jpeg",
    },
    tags: ["KYC", "Compliance", "Banking", "Risk Prevention"],
    featured: true,
  },
  {
    id: "post-2",
    slug: "excel-formulas-every-office-administrator-needs",
    title: "5 Essential Excel Formulas for High-Precision Office Record Management",
    excerpt:
      "Moving beyond simple sums: how combining VLOOKUP, SUMIFS, and nested IF conditions can automate data validation and save dozens of administrative hours every week.",
    category: "Data & Productivity",
    publishedAt: "August 28, 2026",
    readTime: "4 min read",
    author: {
      name: "Tanvir Anjum Sazid",
      role: "Banking & Admin Specialist",
      avatar: "/assets/images/sazid_portfolio pic.jpeg",
    },
    tags: ["Microsoft Excel", "Productivity", "VLOOKUP", "Spreadsheets"],
  },
  {
    id: "post-3",
    slug: "authoring-actionable-standard-operating-procedures",
    title: "How to Write Clear, Action-Oriented SOPs That Teams Actually Follow",
    excerpt:
      "Transforming complex administrative workflows into clean, role-specific procedural tables with quality assurance thresholds and clear error handling.",
    category: "Documentation",
    publishedAt: "August 10, 2026",
    readTime: "6 min read",
    author: {
      name: "Tanvir Anjum Sazid",
      role: "Banking & Admin Specialist",
      avatar: "/assets/images/sazid_portfolio pic.jpeg",
    },
    tags: ["SOP", "Document Control", "Process Management"],
  },
  {
    id: "post-4",
    slug: "empathetic-customer-service-in-financial-support",
    title: "The Art of De-escalation: Handling Urgent Banking Client Inquiries with Poise",
    excerpt:
      "When a client is under pressure during critical transactions, tone, ownership, and clear timeline commitments make the difference between escalation and customer loyalty.",
    category: "Customer Service",
    publishedAt: "July 22, 2026",
    readTime: "4 min read",
    author: {
      name: "Tanvir Anjum Sazid",
      role: "Banking & Admin Specialist",
      avatar: "/assets/images/sazid_portfolio pic.jpeg",
    },
    tags: ["Customer Service", "Conflict Resolution", "Communication"],
  },
];
