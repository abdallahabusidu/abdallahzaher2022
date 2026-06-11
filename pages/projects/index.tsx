import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../../styles/AllProjects.module.css";
import { ALL_PROJECTS, Project } from "../../data/projectsData";
import { stackAccent } from "../../components/ProjectsSection";

const CATEGORIES = [
  "All",
  "Creative 3D",
  "Frontend",
  "Mobile",
  "Backend",
  "Education",
  "CS",
  "ML/AI",
  "Hardware",
  "Game",
  "Private",
] as const;
type Category = (typeof CATEGORIES)[number];

const accentGradients: Record<Project["accent"], string> = {
  amber: "linear-gradient(135deg, rgba(245,159,58,0.18) 0%, transparent 60%)",
  pink: "linear-gradient(135deg, rgba(240,98,146,0.18) 0%, transparent 60%)",
  indigo: "linear-gradient(135deg, rgba(129,140,248,0.18) 0%, transparent 60%)",
  teal: "linear-gradient(135deg, rgba(45,212,191,0.18) 0%, transparent 60%)",
};

const accentBorder: Record<Project["accent"], string> = {
  amber: "rgba(245,159,58,0.45)",
  pink: "rgba(240,98,146,0.45)",
  indigo: "rgba(129,140,248,0.45)",
  teal: "rgba(45,212,191,0.45)",
};

const accentText: Record<Project["accent"], string> = {
  amber: "#f0b368",
  pink: "#f9a8c9",
  indigo: "#a5b4fc",
  teal: "#5eead4",
};

function randomSizes(count: number): number[] {
  return Array.from({ length: count }, () => {
    const r = Math.random();
    if (r < 0.12) return 2; // featured: 2col × 2row
    if (r < 0.26) return 1; // wide: 2col × 1row
    return 0;               // normal: 1col × 1row
  });
}

export default function ProjectsPage() {
  const [active, setActive] = useState<Category>("All");
  const [bentoSizes, setBentoSizes] = useState<number[]>([]);

  const filtered =
    active === "All"
      ? ALL_PROJECTS
      : ALL_PROJECTS.filter((p) => p.category === active);

  useEffect(() => {
    setBentoSizes(randomSizes(filtered.length));
  }, [active]);

  return (
    <div className={styles.page}>
      {/* Ambient orbs */}
      <div className={styles.orbA} aria-hidden />
      <div className={styles.orbB} aria-hidden />
      <div className={styles.bgGrid} aria-hidden />

      {/* Back nav */}
      <motion.div
        className={styles.backRow}
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <Link href="/" className={styles.backLink}>
          ← Back to Home
        </Link>
        <span className={styles.backSep} aria-hidden />
        <span className={styles.backCount}>{filtered.length} projects</span>
      </motion.div>

      {/* Header */}
      <motion.header
        className={styles.header}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className={styles.labelBadge}>Full Project Archive</p>
        <h1 className={styles.heading}>
          All
          <span className={styles.headingAccent}> Projects</span>
        </h1>
        <p className={styles.sub}>
          {ALL_PROJECTS.length} repositories spanning creative 3D, frontend
          products, mobile apps, backend APIs, machine learning, hardware
          engineering, games, and open-source education.
        </p>
      </motion.header>

      {/* Category filter */}
      <motion.div
        className={styles.filters}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`${styles.filterBtn} ${active === cat ? styles.filterActive : ""}`}
            onClick={() => setActive(cat)}
          >
            {cat}
            {cat !== "All" && (
              <span className={styles.filterCount}>
                {ALL_PROJECTS.filter((p) => p.category === cat).length}
              </span>
            )}
          </button>
        ))}
      </motion.div>

      {/* Bento grid */}
      <motion.div className={styles.bento} layout>
        <AnimatePresence mode="popLayout">
          {filtered.map((project, idx) => (
            <motion.article
              key={project.index}
              layout
              className={`${styles.card} ${
                bentoSizes[idx] === 2
                  ? styles.cardFeatured
                  : bentoSizes[idx] === 1
                    ? styles.cardWide
                    : ""
              }`}
              style={{
                background: accentGradients[project.accent],
                borderColor: accentBorder[project.accent],
              }}
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.88, y: -16 }}
              transition={{
                duration: 0.4,
                delay: idx * 0.04,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6, transition: { duration: 0.22 } }}
            >
              {/* Top row */}
              <div className={styles.cardHead}>
                <span
                  className={styles.cardIndex}
                  style={{
                    WebkitTextStrokeColor: accentBorder[project.accent],
                  }}
                >
                  {project.index}
                </span>

                <div className={styles.cardHeadRight}>
                  {/* Category chip */}
                  <span
                    className={styles.catChip}
                    style={{
                      borderColor: accentBorder[project.accent],
                      color: accentText[project.accent],
                    }}
                  >
                    {project.category}
                  </span>

                  {/* Stars/forks */}
                  {project.stars !== null && (
                    <span className={styles.starBadge}>★ {project.stars}</span>
                  )}
                </div>
              </div>

              {/* Title */}
              <h2
                className={styles.cardTitle}
                style={{ color: accentText[project.accent] }}
              >
                {project.title}
              </h2>

              {/* Stack pills */}
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

              {/* Result — only shown on featured or large cards */}
              <p className={styles.result}>{project.result}</p>

              {/* Link */}
              {project.isPrivate || !project.href ? (
                <span
                  className={styles.cardPrivate}
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
                  className={styles.cardLink}
                  style={{ color: accentText[project.accent] }}
                  aria-label={`View ${project.title}`}
                >
                  View ↗
                </a>
              )}

              {/* Shimmer */}
              <div className={styles.shimmer} aria-hidden />
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
