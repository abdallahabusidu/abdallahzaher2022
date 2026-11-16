import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { EXPERIENCE, JobType, WorkMode } from "../data/experience";
import styles from "../styles/ExperienceSection.module.css";

// ─── Enums ───────────────────────────────────────────────────────────────────

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
