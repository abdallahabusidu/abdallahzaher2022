export type ProductScreen = {
  src: string;
  label: string;
  width: number;
  height: number;
};
export type ProjectStory = {
  headline: string;
  description: string;
  focus: string;
  links?: string;
  evidence: string;
  screens: ProductScreen[];
  points: string[];
};
export const projectStories: Record<string, ProjectStory> = {
  koapath: {
    headline: "Two sides. One stronger connection.",
    description:
      "A coaching platform that brings the coach’s workspace and the trainee’s daily routine together. Training, nutrition, progress and conversations stay connected.",
    focus: "React Native apps · NestJS API · CI/CD",
    links: "https://www.koapath.com",
    evidence: "Supplied App Store artwork · v3",
    screens: [
      {
        src: "/screens/koapath-v3-trainee.webp",
        label: "Trainee plan",
        width: 1290,
        height: 2796,
      },
      {
        src: "/screens/koapath-v3-coach.webp",
        label: "Coach overview",
        width: 1290,
        height: 2796,
      },
      {
        src: "/screens/koapath-v3-journey.webp",
        label: "Training journey",
        width: 1290,
        height: 2796,
      },
      {
        src: "/screens/koapath-v3-templates.webp",
        label: "Program library",
        width: 1290,
        height: 2796,
      },
    ],
    points: [
      "A clear plan for the trainee’s day",
      "Reusable workouts for the coaching team",
      "Progress, conversations and subscriptions",
    ],
  },
  douoon: {
    headline: "Clarity at every step of an agreement.",
    description:
      "Create a debt agreement, bring the parties and witnesses together, then keep a traceable record of what happens next. Designed for Arabic and English, including right-to-left layouts.",
    focus: "React Native · Supabase · Row-level security",
    links: "https://www.douoon.com",
    evidence: "Product identity & feature overview",
    screens: [],
    points: [
      "Digital signatures from multiple parties",
      "Witness invitations and an audit trail",
      "Debt forgiveness and bilingual access",
    ],
  },
  nearmiss: {
    headline: "See the conflict. Understand the risk.",
    description:
      "NearMiss is a road-safety analytics pilot. It turns camera footage into tracked movement, detects close encounters, and gives traffic engineers the evidence behind each risk score.",
    focus: "Computer vision · Python engine · Bilingual dashboard",
    evidence: "Illustrated system flow",
    screens: [],
    points: [
      "Track vehicles and pedestrians in calibrated space",
      "Measure conflicts using TTC, PET and DRAC",
      "Review events, trends and scoring evidence",
    ],
  },
  "ai-kids-club": {
    headline: "Big ideas, made small enough to explore.",
    description:
      "An Arabic-first learning experience that helps children explore AI through missions, challenges and an animated companion. Offline-first progress keeps the learning journey moving.",
    focus: "React Native · Offline sync · Server-side rewards",
    evidence: "Illustrated learning journey",
    screens: [],
    points: [
      "Mission-based learning with a clear next step",
      "Progress, XP and rewards",
      "Arabic-first, with bilingual interfaces",
    ],
  },
};

export const nearMissSteps = [
  {
    title: "Observe",
    detail:
      "Detect road users in video, then follow their movement across frames.",
    stack: "RF-DETR · ONNX · ByteTrack",
  },
  {
    title: "Measure",
    detail:
      "Map image positions into calibrated space and measure nearby encounters.",
    stack: "Homography · TTC · PET · DRAC",
  },
  {
    title: "Explain",
    detail:
      "Score events with versioned settings and show the factors behind the result.",
    stack: "Python engine · FastAPI",
  },
  {
    title: "Review",
    detail:
      "Explore camera views, event evidence, maps and trends in Arabic or English.",
    stack: "React · TimescaleDB",
  },
];
