import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import styles from "../styles/ExperienceSection.module.css";

// ─── Enums ───────────────────────────────────────────────────────────────────

enum JobType {
  FullTime = "Full-time",
  PartTime = "Part-time",
  Contract = "Contract",
  Freelance = "Freelance",
}

enum WorkMode {
  OnSite = "On-site",
  Remote = "Remote",
  Hybrid = "Hybrid",
}

// Map each JobType to a distinct CSS variant class
const typeVariantMap: Record<JobType, string> = {
  [JobType.FullTime]: styles.badgeFullTime,
  [JobType.PartTime]: styles.badgePartTime,
  [JobType.Contract]: styles.badgeContract,
  [JobType.Freelance]: styles.badgeFreelance,
};

// Map each WorkMode to a distinct CSS variant class
const modeVariantMap: Record<WorkMode, string> = {
  [WorkMode.OnSite]: styles.modeBadgeOnSite,
  [WorkMode.Remote]: styles.modeBadgeRemote,
  [WorkMode.Hybrid]: styles.modeBadgeHybrid,
};

// ─── Data ─────────────────────────────────────────────────────────────────────

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

const EXPERIENCE: ExperienceItem[] = [
  {
    index: "01",
    company: "Eunx",
    role: "React.js / Next.js Frontend Engineer",
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
    period: "Jul 2024 — Dec 2024",
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
    role: "React / Next.js Frontend Engineer",
    period: "Sep 2022 — Feb 2024",
    location: "On-site · Cairo",
    flag: "🇪🇬",
    country: "Egypt",
    type: JobType.FullTime,
    mode: WorkMode.OnSite,
    accent: "amber",
    highlights: [
      "Developed IntellaVx and IntellaCx dashboards, improving internal workflows and client interaction.",
      "Contributed to $3.5M fundraising success by supporting investor demos and product readiness.",
      "Achieved the highest Jira task-completion rate with 150+ resolved tasks.",
    ],
  },
  {
    index: "06",
    company: "Smartella / LearnCity",
    role: "Software Engineer",
    period: "Jul 2021 — Aug 2022",
    location: "Remote · London",
    flag: "🇬🇧",
    country: "United Kingdom",
    type: JobType.FullTime,
    mode: WorkMode.Remote,
    accent: "pink",
    highlights: [
      "Designed and optimized high-conversion landing pages for 15+ clients",
      "Increased click-through rates by 45% and client satisfaction by 70%",
    ],
  },
];

const accentMap: Record<string, string> = {
  amber: styles.accentAmber,
  pink: styles.accentPink,
  indigo: styles.accentIndigo,
  teal: styles.accentTeal,
};

export default function ExperienceSection() {
  const lineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: lineRef,
    offset: ["start 0.9", "end 0.1"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className={styles.section} id="experience">
      <div className={styles.bgGrid} aria-hidden />
      <div className={styles.bgGlowA} aria-hidden />
      <div className={styles.bgGlowB} aria-hidden />
      <div className={styles.inner}>
        {/* Section label */}
        <motion.div
          className={styles.labelRow}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <span className={styles.labelLine} />
          <span className={styles.labelText}>Career</span>
        </motion.div>

        <motion.h2
          className={styles.heading}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Experience
          <span className={styles.headingAccent}> Timeline</span>
        </motion.h2>

        {/* Timeline body */}
        <div className={styles.timelineWrap} ref={lineRef}>
          {/* Animated fill line */}
          <div className={styles.lineTrack}>
            <motion.div
              className={styles.lineFill}
              style={{ height: lineHeight }}
            />
          </div>

          <div className={styles.cards}>
            {EXPERIENCE.map((item, idx) => (
              <motion.article
                key={item.index}
                className={`${styles.card} ${accentMap[item.accent]}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: idx * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {/* Timeline dot */}
                <div className={styles.dot} />

                {/* Card header */}
                <div className={styles.cardTop}>
                  <div className={styles.cardMeta}>
                    <span className={styles.cardIndex}>{item.index}</span>
                    <div>
                      <p className={styles.cardPeriod}>
                        {item.period} · {item.location}
                      </p>
                      <div className={styles.badgeRow}>
                        <span
                          className={`${styles.cardBadge} ${typeVariantMap[item.type]}`}
                        >
                          {item.type}
                        </span>
                        <span
                          className={`${styles.cardBadge} ${modeVariantMap[item.mode]}`}
                        >
                          {item.mode}
                        </span>
                        <span className={styles.flagChip} title={item.country}>
                          <span className={styles.flagEmoji}>{item.flag}</span>
                          <span className={styles.flagLabel}>
                            {item.country}
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className={styles.cardCompany}>{item.company}</h3>
                    <p className={styles.cardRole}>{item.role}</p>
                  </div>
                </div>

                {/* Divider */}
                <div className={styles.cardDivider} />

                {/* Highlights */}
                <ul className={styles.cardList}>
                  {item.highlights.map((h) => (
                    <li key={h} className={styles.cardItem}>
                      <span className={styles.cardBullet} aria-hidden>
                        →
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Sweep shimmer */}
                <div className={styles.shimmer} aria-hidden />
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
