import Link from "next/link";
import { motion } from "framer-motion";
import styles from "../styles/ProjectsSection.module.css";
import { ALL_PROJECTS } from "../data/projectsData";

const FEATURED = ALL_PROJECTS.slice(0, 3);

export const stackAccent: Record<string, string> = {
  "Three.js": styles.tagGreen,
  GLSL: styles.tagPink,
  GSAP: styles.tagAmber,
  React: styles.tagBlue,
  "React Three Fiber": styles.tagGreen,
  Tailwind: styles.tagBlue,
  NativeWind: styles.tagBlue,
  "Cannon.js": styles.tagPurple,
  HTML: styles.tagDefault,
  CSS: styles.tagBlue,
  JavaScript: styles.tagAmber,
  TypeScript: styles.tagBlue,
  "React Native": styles.tagBlue,
  Expo: styles.tagDefault,
  WebGL: styles.tagGreen,
  BFS: styles.tagPurple,
  Dijkstra: styles.tagPurple,
  Algorithms: styles.tagPurple,
  "Node.js": styles.tagGreen,
  Express: styles.tagDefault,
  JWT: styles.tagPurple,
};

export default function ProjectsSection() {
  return (
    <section className={styles.section} id="projects">
      {/* Label */}
      <motion.div
        className={styles.labelRow}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
      >
        <span className={styles.labelLine} />
        <span className={styles.labelText}>Work</span>
      </motion.div>

      <div className={styles.headingRow}>
        <motion.h2
          className={styles.heading}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Highlighted
          <span className={styles.headingAccent}> Projects</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link href="/projects" className={styles.viewAllLink}>
            View all {ALL_PROJECTS.length} projects{" "}
            <span className={styles.viewAllArrow}>→</span>
          </Link>
        </motion.div>
      </div>

      <div className={styles.grid}>
        {FEATURED.map((project, idx) => (
          <motion.article
            key={project.index}
            className={`${styles.card} ${styles[`accent_${project.accent}` as keyof typeof styles]}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.6,
              delay: idx * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -8 }}
          >
            <span className={styles.bgIndex} aria-hidden>
              {project.index}
            </span>

            <div className={styles.cardInner}>
              {(project.stars !== null || project.forks !== null) && (
                <div className={styles.repoMeta}>
                  {project.stars !== null && (
                    <span className={styles.repoStat}>
                      <span className={styles.repoIcon} aria-hidden>
                        ★
                      </span>
                      {project.stars}
                    </span>
                  )}
                  {project.forks !== null && (
                    <span className={styles.repoStat}>
                      <span className={styles.repoIcon} aria-hidden>
                        ⑂
                      </span>
                      {project.forks}
                    </span>
                  )}
                  <span className={styles.repoGhLabel}>GitHub</span>
                </div>
              )}

              <h3 className={styles.title}>{project.title}</h3>

              <div className={styles.stackRow}>
                {project.stack.map((tag) => (
                  <span
                    key={tag}
                    className={`${styles.tag} ${stackAccent[tag] ?? styles.tagDefault}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className={styles.divider} />
              <p className={styles.result}>{project.result}</p>

              {project.isPrivate || !project.href ? (
                <span
                  className={styles.privateLink}
                  aria-label={`${project.title} is private`}
                >
                  Private Repository 🔒
                </span>
              ) : (
                <a
                  href={project.href}
                  target={
                    project.href.startsWith("https") ? "_blank" : undefined
                  }
                  rel="noopener noreferrer"
                  className={styles.viewLink}
                  aria-label={`View ${project.title}`}
                >
                  <span>View Project</span>
                  <span className={styles.arrow}>↗</span>
                </a>
              )}
            </div>

            <div className={styles.cornerGlow} aria-hidden />
          </motion.article>
        ))}
      </div>
    </section>
  );
}
