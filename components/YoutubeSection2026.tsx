import { motion } from "framer-motion";
import styles from "../styles/YoutubeSection2026.module.css";

const CHANNEL_URL = "https://www.youtube.com/@CodewithPosidoon/videos?app=desktop&view=0&sort=dd&shelf_id=2";

const VIDEOS = [
  {
    title: "Three.js Arabic Deep Dives",
    type: "Series",
    summary:
      "Arabic-first breakdowns of shaders, lighting, and scene architecture with practical mini-projects.",
    href: CHANNEL_URL,
    accent: "amber",
  },
  {
    title: "Frontend Architecture Sessions",
    type: "Long-form",
    summary:
      "Production patterns for React and Next.js apps: folder structure, state strategy, and performance profiling.",
    href: CHANNEL_URL,
    accent: "indigo",
  },
  {
    title: "Creative Coding Labs",
    type: "Workshop",
    summary:
      "Fast experiments mixing GSAP, WebGL, and interaction design to build unique hero and campaign experiences.",
    href: CHANNEL_URL,
    accent: "teal",
  },
] as const;

export default function YoutubeSection2026() {
  return (
    <section className={styles.section} id="youtube">
      <div className={styles.bgPattern} aria-hidden />
      <div className={styles.inner}>

        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
        >
          <span className={styles.eyebrow}>YouTube</span>
          <h2 className={styles.heading}>
            Learn with Me on
            <span className={styles.headingAccent}> YouTube</span>
          </h2>
          <p className={styles.sub}>
            Tutorials, architecture walkthroughs, and creative development breakdowns.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {VIDEOS.map((video, idx) => (
            <motion.article
              key={video.title}
              className={`${styles.card} ${styles[`accent_${video.accent}` as keyof typeof styles]}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <span className={styles.kind}>{video.type}</span>
              <h3 className={styles.title}>{video.title}</h3>
              <p className={styles.summary}>{video.summary}</p>
              <a href={video.href} target="_blank" rel="noopener noreferrer" className={styles.link}>
                Watch on YouTube ↗
              </a>
            </motion.article>
          ))}
        </div>

        <motion.a
          href={CHANNEL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.channelBtn}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45, delay: 0.2 }}
        >
          Visit Full Channel
        </motion.a>
      </div>
    </section>
  );
}
