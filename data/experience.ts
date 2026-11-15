export enum JobType {
  FullTime = "Full-time",
  PartTime = "Part-time",
  Contract = "Contract",
  Freelance = "Freelance",
}

export enum WorkMode {
  OnSite = "On-site",
  Remote = "Remote",
  Hybrid = "Hybrid",
}

interface ExperienceItem {
  index: string;
  company: string;
  role: string;
  period: string;
  location: string;
  flag: string;
  country: string;
  type: JobType;
  mode: WorkMode;
  accent: string;
  highlights: string[];
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    index: "01",
    company: "Eunx",
    role: "Frontend Developer (React / Next.js)",
    period: "Feb 2025 — Present",
    location: "On-site · Dubai",
    flag: "🇦🇪",
    country: "UAE",
    type: JobType.FullTime,
    mode: WorkMode.OnSite,
    accent: "amber",
    highlights: [
      "Led end-to-end frontend architecture for a fintech investment platform and admin dashboard built with Next.js from scratch.",
      "Designed scalable component systems emphasising performance, reusability, and clean-code principles.",
      "Mentored the frontend team through code reviews, technical guidance, and best-practice enforcement.",
      "Collaborated with backend, mobile, and product teams to ensure seamless API integration and consistent UX.",
    ],
  },
  {
    index: "02",
    company: "StoryMe",
    role: "Creative Developer",
    period: "Jan 2024 — Dec 2024",
    location: "Remote · Cairo",
    flag: "🇪🇬",
    country: "Egypt",
    type: JobType.PartTime,
    mode: WorkMode.Remote,
    accent: "pink",
    highlights: [
      "Delivered two high-impact creative web projects for governmental entities in Morocco with advanced motion design.",
      "Built interactive Three.js + Next.js experiences that increased user engagement by 30%.",
      "Achieved 4.8 / 5 average user satisfaction based on post-launch feedback surveys.",
    ],
  },
  {
    index: "03",
    company: "DataSkew",
    role: "React / Next.js Frontend Engineer",
    period: "Jan 2024 — Dec 2024",
    location: "Remote · Cairo",
    flag: "🇪🇬",
    country: "Egypt",
    type: JobType.PartTime,
    mode: WorkMode.Remote,
    accent: "indigo",
    highlights: [
      "Developed a Laundry Technician Management Dashboard for a US-based company used to track technicians and service workflows.",
      "Built a role-based, data-driven dashboard optimised for non-technical operational users.",
    ],
  },
  {
    index: "04",
    company: "BashSquare",
    role: "Software Engineer",
    period: "Mar 2024 — Dec 2024",
    location: "Remote · Budapest",
    flag: "🇭🇺",
    country: "Hungary",
    type: JobType.FullTime,
    mode: WorkMode.Remote,
    accent: "teal",
    highlights: [
      "Designed and implemented a production-ready client application with cross-functional teams.",
      "Represented the company at Salons Solutions Exhibition in Paris, supporting lead generation.",
      "Increased landing page traffic by 40% and engagement by 25%.",
    ],
  },
  {
    index: "05",
    company: "Intella",
    role: "Frontend Developer, AI Products",
    period: "Sep 2022 — Feb 2024",
    location: "On-site · Cairo",
    flag: "🇪🇬",
    country: "Egypt",
    type: JobType.FullTime,
    mode: WorkMode.OnSite,
    accent: "amber",
    highlights: [
      "Integrated LLMs and AI backend endpoints into the IntellaVx and IntellaCx conversational AI products used by business clients.",
      "Built chatbot interfaces, streamed LLM responses, speech-to-text transcript views and dashboards for AI-generated summaries and insights.",
      "Contributed to $3.5M fundraising success by supporting investor demos and product readiness.",
      "Achieved the highest Jira task-completion rate with 150+ resolved tasks.",
    ],
  },
  {
    index: "06",
    company: "Smartella / LearnCity",
    role: "Software Engineer",
    period: "Jun 2021 — Aug 2022",
    location: "Remote · London",
    flag: "🇬🇧",
    country: "United Kingdom",
    type: JobType.FullTime,
    mode: WorkMode.Remote,
    accent: "pink",
    highlights: [
      "Designed and optimised high-conversion landing pages for 15+ client projects.",
    ],
  },
];
