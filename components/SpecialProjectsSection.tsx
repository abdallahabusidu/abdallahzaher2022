import { motion } from "framer-motion";
import { StaticImageData } from "next/image";
import douoonLogo from "../assets/douoon.png";
import koapathLogo from "../assets/Koapath.png";
import { ALL_PROJECTS, Project } from "../data/projectsData";
import styles from "../styles/SpecialProjectsSection.module.css";
import StickerPeel from "./StickerPeel";
const targetTitles = ["Douoon", "Koapath"];

const fallback: Record<
  string,
  Omit<Project, "image"> & { image: StaticImageData }
> = {
  Douoon: {
    index: "87",
    title: "Douoon",
    stack: ["React Native", "TypeScript", "Real Product"],
    result:
      "Premium product platform focused on polished user journeys, conversion performance, and scalable frontend architecture.",
    accent: "indigo",
    href: "https://www.douoon.com",
    stars: null,
    forks: null,
    category: "Frontend",
    image: douoonLogo,
  },
  Koapath: {
    index: "88",
    title: "Koapath",
    stack: ["React", "Node.js", "Analytics"],
    result:
      "Data-first workflow platform crafted for operations teams with strong dashboard UX and high-clarity reporting surfaces.",
    accent: "teal",
    href: "https://www.koapath.com",
    stars: null,
    forks: null,
    category: "Frontend",
    image: koapathLogo,
  },
};

const logoMap: Record<string, StaticImageData> = {
  Douoon: douoonLogo,
  Koapath: koapathLogo,
};

const accentClass: Record<Project["accent"], string> = {
  amber: styles.accentAmber,
  pink: styles.accentPink,
  indigo: styles.accentIndigo,
  teal: styles.accentTeal,
};

const spotlight = targetTitles.map((name) => {
  const existing = ALL_PROJECTS.find(
    (p) => p.title.toLowerCase() === name.toLowerCase(),
  );
  return existing ?? fallback[name];
});

export default function SpecialProjectsSection() {
  return (
    <section className={styles.section} id="special-projects">
      <div className={styles.gridBg} aria-hidden />
      <div className={styles.glowA} aria-hidden />
      <div className={styles.glowB} aria-hidden />
      <div className={styles.inner}>
        <motion.div
          className={styles.labelRow}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <span className={styles.labelLine} />
          <span className={styles.labelText}>Special Builds</span>
        </motion.div>

        <motion.h2
          className={styles.heading}
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
        >
          Douoon &amp;
          <span className={styles.headingAccent}> Koapath</span>
        </motion.h2>

        <div className={styles.cards}>
          {spotlight.map((project, idx) => (
            <motion.article
              key={project.title}
              className={`${styles.card} ${accentClass[project.accent]}`}
              initial={{ opacity: 0, y: 34, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: idx * 0.12 }}
              whileHover={{ y: -8 }}
            >
              <span className={styles.index}>{project.index}</span>
              <div>
                <StickerPeel
                  imageSrc={logoMap[project.title].src}
                  width={210}
                  rotate={-8}
                  peelBackHoverPct={30}
                  peelBackActivePct={45}
                  shadowIntensity={0.5}
                  lightingIntensity={0.12}
                  initialPosition="center"
                  peelDirection={-60}
                  style={{
                    top: "-5rem",
                    right: "-3rem",
                    left: "auto",
                    overflow: "visible",
                  }}
                />
              </div>

              <h3 className={styles.title}>{project.title}</h3>
              <p className={styles.description}>{project.result}</p>

              <div className={styles.stackRow}>
                {project.stack.map((item) => (
                  <span className={styles.tag} key={`${project.title}-${item}`}>
                    {item}
                  </span>
                ))}
              </div>

              {project.href ? (
                <a
                  href={project.href}
                  target={
                    project.href.startsWith("https") ? "_blank" : undefined
                  }
                  rel="noopener noreferrer"
                  className={styles.link}
                  aria-label={`Open ${project.title}`}
                >
                  Open Project ↗
                </a>
              ) : (
                <span className={styles.privateBadge}>
                  Private Repository 🔒
                </span>
              )}

              <div className={styles.shimmer} aria-hidden />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
