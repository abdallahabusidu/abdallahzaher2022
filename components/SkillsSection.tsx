import { motion } from "framer-motion";
import styles from "../styles/SkillsSection.module.css";

const CATEGORIES = [
  {
    label: "Frontend + Creative",
    accent: "amber",
    skills: [
      { name: "React", weight: "core" },
      { name: "Next.js 15", weight: "core" },
      { name: "TypeScript", weight: "core" },
      { name: "Tailwind CSS", weight: "core" },
      { name: "Three.js", weight: "core" },
      { name: "React Three Fiber", weight: "strong" },
      { name: "GLSL", weight: "strong" },
      { name: "GSAP", weight: "strong" },
      { name: "Framer Motion", weight: "strong" },
      { name: "Vue.js", weight: "mid" },
      { name: "Nuxt.js", weight: "mid" },
      { name: "React Native", weight: "mid" },
      { name: "Expo", weight: "mid" },
      { name: "Zustand", weight: "mid" },
      { name: "Redux", weight: "mid" },
      { name: "D3.js", weight: "mid" },
      { name: "MUI", weight: "mid" },
      { name: "Shadcn", weight: "mid" },
      { name: "Anime.js", weight: "mid" },
      { name: "Matter.js", weight: "mid" },
      { name: "Cannon.js", weight: "mid" },
    ],
  },
  {
    label: "Backend + Data",
    accent: "indigo",
    skills: [
      { name: "Node.js", weight: "core" },
      { name: "Express", weight: "core" },
      { name: "NestJS", weight: "strong" },
      { name: "MongoDB", weight: "strong" },
      { name: "SQL", weight: "strong" },
      { name: "Firebase", weight: "strong" },
      { name: "Prisma", weight: "mid" },
      { name: "REST API", weight: "mid" },
      { name: "JWT", weight: "mid" },
      { name: "Auth0", weight: "mid" },
      { name: "OAuth", weight: "mid" },
      { name: "Bcrypt.js", weight: "mid" },
    ],
  },
  {
    label: "Tooling + Delivery",
    accent: "teal",
    skills: [
      { name: "Git", weight: "core" },
      { name: "Docker", weight: "strong" },
      { name: "Vercel", weight: "strong" },
      { name: "Netlify", weight: "strong" },
      { name: "Figma", weight: "strong" },
      { name: "Blender", weight: "mid" },
      { name: "Cypress", weight: "mid" },
      { name: "Jest", weight: "mid" },
      { name: "Testing Library", weight: "mid" },
      { name: "Webpack", weight: "mid" },
      { name: "Vite", weight: "mid" },
      { name: "Jira", weight: "mid" },
      { name: "GitHub Projects", weight: "mid" },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section className={styles.section} id="skills">
      {/* Label */}
      <motion.div
        className={styles.labelRow}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
      >
        <span className={styles.labelLine} />
        <span className={styles.labelText}>Expertise</span>
      </motion.div>

      <motion.h2
        className={styles.heading}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Skill
        <span className={styles.headingAccent}> Architecture</span>
      </motion.h2>

      <div className={styles.grid}>
        {CATEGORIES.map((cat, catIdx) => (
          <motion.div
            key={cat.label}
            className={`${styles.categoryBlock} ${styles[`accent_${cat.accent}` as keyof typeof styles]}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.6,
              delay: catIdx * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className={styles.catHeader}>
              <span className={styles.catNum}>
                {String(catIdx + 1).padStart(2, "0")}
              </span>
              <h3 className={styles.catLabel}>{cat.label}</h3>
            </div>

            <div className={styles.pillsWrap}>
              {cat.skills.map((skill, sIdx) => (
                <motion.span
                  key={skill.name}
                  className={`${styles.pill} ${styles[`pill_${skill.weight}` as keyof typeof styles]} ${styles[`pill_${cat.accent}` as keyof typeof styles]}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{
                    duration: 0.3,
                    delay: catIdx * 0.1 + sIdx * 0.025,
                  }}
                >
                  {skill.name}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
