export interface ValueItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  gpa: string;
  description: string;
  courses: string[];
}

export interface MentorReference {
  id: string;
  name: string;
  title: string;
  institution: string;
  phone: string;
  email: string;
  relationship: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface MilestoneItem {
  year: string;
  title: string;
  description: string;
  badge: string;
}

export const aboutHeroData = {
  heading: "Driven by Precision, Professionalism & Purpose",
  tagline: "About Tanvir Anjum Sazid",
  bio: "A disciplined, detail-oriented professional holding a Master of Arts in English with dedicated training in banking support procedures, office coordination, executive documentation, customer care, and spreadsheet data modeling.",
  mission:
    "To deliver meticulous operational excellence, transparent customer service, and reliable administrative support while maintaining the highest ethical and corporate governance standards.",
  location: "Chattogram, Bangladesh",
  status: "Available for Immediate Full-Time Employment",
};

export const whatDefinesUs: ValueItem[] = [
  {
    id: "accuracy",
    title: "Meticulous Accuracy",
    description:
      "Every document, database entry, and customer file is verified with 99.8%+ precision against institutional guidelines.",
    icon: "check-circle",
  },
  {
    id: "integrity",
    title: "Institutional Integrity",
    description:
      "Upholding confidentiality, anti-fraud vigilance, and transparent ethical conduct in all corporate interactions.",
    icon: "shield",
  },
  {
    id: "communication",
    title: "Clear Communication",
    description:
      "Fluent English and Bengali communication, providing empathetic customer resolution and concise executive reporting.",
    icon: "message-square",
  },
  {
    id: "adaptability",
    title: "Continuous Adaptability",
    description:
      "Rapidly mastering new digital platforms, enterprise CRM software, banking workflows, and SOP requirements.",
    icon: "trending-up",
  },
];

export const educationList: EducationItem[] = [
  {
    degree: "Master of Arts (M.A.) in English",
    institution: "National University (Chattogram Government College)",
    year: "2022",
    gpa: "CGPA: 2.91 out of 4.00",
    description:
      "Post-graduate study emphasizing analytical syntax, structured communication, critical thinking, and formal composition.",
    courses: [
      "Advanced Business Composition",
      "Critical Analysis & Research",
      "Linguistic Semantics",
      "Executive Discourse",
    ],
  },
  {
    degree: "Bachelor of Arts (B.A.) in English",
    institution: "National University (Patiya Government College)",
    year: "2021",
    gpa: "CGPA: 2.80 out of 4.00",
    description:
      "Comprehensive undergraduate foundation in language proficiency, literature, and organizational communication.",
    courses: [
      "English Phonetics & Linguistics",
      "Written Syntax & Grammar",
      "Professional Presentations",
      "Literature & Cultural Studies",
    ],
  },
];

export const mentorReferences: MentorReference[] = [
  {
    id: "ref-1",
    name: "Dr. K. M. Rezaul Karim",
    title: "Associate Professor & Head of Department",
    institution: "Chattogram Government College",
    phone: "+880 1819-XXXXXX",
    email: "rezaul.karim@cgcollege.edu.bd",
    relationship: "Academic Mentor & Master's Faculty Advisor",
  },
  {
    id: "ref-2",
    name: "Mohammad Ashraful Alam",
    title: "Assistant Professor of English",
    institution: "Patiya Government College",
    phone: "+880 1712-XXXXXX",
    email: "ashraful.alam@pgcollege.edu.bd",
    relationship: "Undergraduate Academic Advisor",
  },
];

export const faqsData: FaqItem[] = [
  {
    id: "faq-1",
    question: "What specific roles is Tanvir Anjum Sazid looking for?",
    answer:
      "Primary targets include Banking Operations Assistant, Customer Service Executive, Documentation Specialist, Administrative Officer, KYC/AML Compliance Assistant, and Office Coordinator in banks, corporate firms, and multinational entities.",
    category: "Career",
  },
  {
    id: "faq-2",
    question: "What is his location availability and willingness to relocate?",
    answer:
      "Currently based in Chattogram, Bangladesh. Open to full-time on-site positions in Chattogram and Dhaka, as well as hybrid and remote opportunities.",
    category: "Logistics",
  },
  {
    id: "faq-3",
    question: "What software tools and technical skills does he possess?",
    answer:
      "Expertise in Microsoft Office (Word, Excel with VLOOKUP/SUMIFS, PowerPoint), Google Workspace, Adobe Acrobat Pro PDF processing, CRM/Helpdesk tools, and fast typing/record management.",
    category: "Technical",
  },
  {
    id: "faq-4",
    question: "How can recruiters arrange an interview or skills assessment?",
    answer:
      "You can submit a message via the Contact page or email directly at tanjum643@gmail.com, or call +8801864759644. Responses are provided within 24 hours.",
    category: "Hiring",
  },
];

export const careerMilestones: MilestoneItem[] = [
  {
    year: "2022",
    title: "Master of Arts in English Completed",
    description: "Graduated with honors from Chattogram Government College.",
    badge: "Academic",
  },
  {
    year: "2024",
    title: "Advanced Excel & Office Automation",
    description: "Completed intensive training in spreadsheet modeling, formulas, and SOP writing.",
    badge: "Certification",
  },
  {
    year: "2025",
    title: "Banking & KYC Compliance Deep Dive",
    description: "Specialized study in financial customer screening, AML awareness, and documentation.",
    badge: "Professional",
  },
  {
    year: "2026",
    title: "Corporate Portfolio & Operational Demonstrations",
    description: "Launched standardized digital showcases for verified workplace capabilities.",
    badge: "Milestone",
  },
];
