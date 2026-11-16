import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Plus, MapPin } from "lucide-react";
import { EXPERIENCE } from "../data/experience";
import n from "../styles/Neon.module.css";
import s from "../styles/Journey.module.css";

export default function JourneySection() {
  const [active, setActive] = useState<string | null>(EXPERIENCE[0].index);
  const reduced = useReducedMotion();
  return (
    <section className={`${n.container} ${s.journey}`} id="experience">
      <div className={n.sectionHeading}>
        <span className={n.label}>THE JOURNEY</span>
        <span className={n.headingLine} />
        <span className={n.sectionNote}>PEOPLE / PRODUCTS / PROGRESS</span>
      </div>
      <div className={s.heading}>
        <h2>
          Different teams.
          <br />
          <span>One evolving craft.</span>
        </h2>
        <p>
          From the first interface to product architecture.
          <br />
          Explore the chapters behind the work.
        </p>
      </div>
      <div className={s.timeline}>
        {EXPERIENCE.map((job, index) => {
          const open = active === job.index;
          return (
            <article
              className={`${s.chapter} ${open ? s.active : ""}`}
              key={job.index}
            >
              <div className={s.marker}>
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className={s.chapterContent}>
                <h3>
                  <button
                    id={`career-trigger-${job.index}`}
                    aria-expanded={open}
                    aria-controls={`career-panel-${job.index}`}
                    onClick={() => setActive(open ? null : job.index)}
                  >
                    <div className={s.company}>
                      <strong>{job.company}</strong>
                      <span>{job.role}</span>
                    </div>
                    <span className={s.date}>{job.period}</span>
                    <span className={s.plus}>
                      <Plus size={20} />
                    </span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      id={`career-panel-${job.index}`}
                      role="region"
                      aria-labelledby={`career-trigger-${job.index}`}
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: {
                          duration: reduced ? 0 : 0.42,
                          ease: [0.22, 1, 0.36, 1],
                        },
                        opacity: { duration: reduced ? 0 : 0.25 },
                      }}
                      className={s.panel}
                    >
                      <div className={s.panelInner}>
                        <div className={s.jobMeta}>
                          <span>
                            <MapPin size={11} />
                            {job.location}
                          </span>
                          <span>{job.type}</span>
                          <span>{job.mode}</span>
                        </div>
                        <motion.ul
                          initial="hidden"
                          animate="show"
                          variants={{
                            hidden: {},
                            show: {
                              transition: {
                                staggerChildren: reduced ? 0 : 0.05,
                              },
                            },
                          }}
                        >
                          {job.highlights.map((h) => (
                            <motion.li
                              key={h}
                              variants={{
                                hidden: { opacity: 0, y: reduced ? 0 : 8 },
                                show: { opacity: 1, y: 0 },
                              }}
                              transition={{ duration: reduced ? 0 : 0.3 }}
                            >
                              {h}
                            </motion.li>
                          ))}
                        </motion.ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </article>
          );
        })}
      </div>
      <div className={s.nextChapter}>
        <span>THE NEXT CHAPTER IS STILL UNWRITTEN.</span>
        <a href="mailto:abdallahabusidu@gmail.com?subject=Let%E2%80%99s%20talk%20about%20a%20role">
          Build it with me <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
}
