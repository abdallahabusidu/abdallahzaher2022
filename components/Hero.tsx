import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import styles from "../styles/Hero.module.css";

/* ─── Data ─── */
const ROLES = [
  "Creative Developer",
  "Frontend Team Lead",
  "3D Web Engineer",
  "Full-Stack Developer",
];

const MARQUEE_ITEMS = [
  "React",
  "Next.js 15",
  "TypeScript",
  "Three.js",
  "GLSL",
  "GSAP",
  "Framer Motion",
  "TailwindCSS",
  "Node.js",
  "NestJS",
  "MongoDB",
  "Docker",
  "Figma",
  "Blender",
  "React Native",
  "WebGL",
];

const FLOAT_PILLS = [
  { label: "Three.js", cls: "pill1" },
  { label: "GSAP", cls: "pill2" },
  { label: "React", cls: "pill3" },
  { label: "GLSL", cls: "pill4" },
  { label: "Next.js", cls: "pill5" },
  { label: "TypeScript", cls: "pill6" },
];

/* ─── Typewriter hook ─── */
function useTypewriter(words: string[]) {
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "deleting">("typing");
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const word = words[wordIndex];
    if (phase === "typing") {
      if (text.length < word.length) {
        const id = setTimeout(
          () => setText(word.slice(0, text.length + 1)),
          75,
        );
        return () => clearTimeout(id);
      }
      const id = setTimeout(() => setPhase("deleting"), 1800);
      return () => clearTimeout(id);
    }
    if (text.length > 0) {
      const id = setTimeout(() => setText((t) => t.slice(0, -1)), 40);
      return () => clearTimeout(id);
    }
    const id = setTimeout(() => {
      setPhase("typing");
      setWordIndex((i) => (i + 1) % words.length);
    }, 0);
    return () => clearTimeout(id);
  }, [text, phase, wordIndex, words]);

  return text;
}

/* ─── Character animation variants ─── */
const charVariants = {
  hidden: { opacity: 0, y: 64, rotateX: -90 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: i * 0.055,
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const stagger = (delay = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren: 0.055, delayChildren: delay } },
});

/* ─── Hero ─── */
export default function Hero() {
  const role = useTypewriter(ROLES);

  /* Magnetic cursor */
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const cx = useSpring(cursorX, { damping: 20, stiffness: 380 });
  const cy = useSpring(cursorY, { damping: 20, stiffness: 380 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      cursorX.set(e.clientX - 10);
      cursorY.set(e.clientY - 10);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [cursorX, cursorY]);

  return (
    <>
      {/* ── Fixed navbar ── */}
      <motion.header
        className={styles.nav}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <span className={styles.navBrand}>AZ.</span>
        <nav className={styles.navLinks}>
          <a href="#experience" className={styles.navLink}>
            Experience
          </a>
          <a href="#projects" className={styles.navLink}>
            Projects
          </a>
          <a href="mailto:abdallahabusidu@gmail.com" className={styles.navCta}>
            Hire Me
          </a>
        </nav>
      </motion.header>

      {/* ── Custom cursor ── */}
      <motion.div
        className={styles.cursor}
        style={{ x: cx, y: cy }}
        aria-hidden
      />

      {/* ── Hero section ── */}
      <section className={styles.hero}>
        {/* Background layers */}
        <div className={styles.bgGrid} aria-hidden />
        <div className={styles.ambientA} aria-hidden />
        <div className={styles.ambientB} aria-hidden />
        <div className={styles.ambientC} aria-hidden />

        {/* Two-column layout */}
        <div className={styles.inner}>
          {/* ─── LEFT ─── */}
          <motion.div
            className={styles.left}
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.1, delayChildren: 0.3 },
              },
            }}
          >
            {/* Available badge */}
            <motion.div
              className={styles.badge}
              variants={{
                hidden: { opacity: 0, y: -10 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <span className={styles.pulse} aria-hidden />
              Available for Senior Roles · Dubai
            </motion.div>

            {/* Giant staggered name */}
            <div className={styles.titleWrap} aria-label="Abdallah Zaher">
              <motion.span
                className={styles.line1}
                initial="hidden"
                animate="show"
                variants={stagger(0.45)}
              >
                {"ABDALLAH".split("").map((ch, i) => (
                  <motion.span
                    key={i}
                    className={styles.char}
                    variants={charVariants}
                    custom={i}
                  >
                    {ch}
                  </motion.span>
                ))}
              </motion.span>

              <motion.span
                className={styles.line2}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.95,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                ZAHER
              </motion.span>
            </div>

            {/* Typewriter role */}
            <motion.div
              className={styles.roleRow}
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: { delay: 1.15, duration: 0.5 },
                },
              }}
            >
              <span className={styles.roleDash} aria-hidden>
                —
              </span>
              <span className={styles.roleText}>{role}</span>
              <span className={styles.caret} aria-hidden>
                |
              </span>
            </motion.div>

            {/* Bio */}
            <motion.p
              className={styles.bio}
              variants={{
                hidden: { opacity: 0, y: 14 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: 1.3, duration: 0.55 },
                },
              }}
            >
              Senior Full-Stack Developer with 5+ years crafting fintech
              platforms, interactive 3D experiences, and conversion-driven
              product interfaces. Based in Dubai.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className={styles.ctas}
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: 1.5, duration: 0.45 },
                },
              }}
            >
              <a
                href="mailto:abdallahabusidu@gmail.com"
                className={styles.ctaPrimary}
              >
                Let&apos;s Build Something
              </a>
              <a href="#experience" className={styles.ctaSecondary}>
                See Experience ↓
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              className={styles.socials}
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { delay: 1.7, duration: 0.5 } },
              }}
            >
              {[
                {
                  label: "LinkedIn",
                  href: "https://linkedin.com/in/abdallahabusidu",
                },
                { label: "GitHub", href: "https://github.com/abdallahabusidu" },
                {
                  label: "YouTube",
                  href: "https://www.youtube.com/@CodewithPosidoon/videos?app=desktop&view=0&sort=dd&shelf_id=2",
                },
                { label: "+971 52 775 9096", href: "tel:+971527759096" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  {s.label}
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* ─── RIGHT ─── */}
          <motion.div
            className={styles.right}
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.orbWrap}>
              {/* Rotating rings */}
              <div className={styles.ringOuter} aria-hidden />
              <div className={styles.ringInner} aria-hidden />

              {/* Glow orb */}
              <div className={styles.glowOrb} aria-hidden />

              {/* Floating tech pills */}
              {FLOAT_PILLS.map((p) => (
                <span
                  key={p.label}
                  className={`${styles.floatPill} ${styles[p.cls as keyof typeof styles]}`}
                >
                  {p.label}
                </span>
              ))}

              {/* Center stat */}
              <div className={styles.orbCenter}>
                <span className={styles.orbNum}>5+</span>
                <span className={styles.orbLabel}>years exp</span>
              </div>
            </div>

            {/* Stats below orb */}
            {/* <div className={styles.statRow}>
              {[
                { num: "1000+", label: "Tasks shipped" },
                { num: "5", label: "Lighthouse score" },
                { num: "30%", label: "Engagement lift" },
              ].map((s) => (
                <div key={s.label} className={styles.statCard}>
                  <span className={styles.statNum}>{s.num}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              ))}
            </div> */}
          </motion.div>
        </div>

        {/* ── Scrolling marquee ── */}
        <div className={styles.marqueeWrapper} aria-hidden>
          <div className={styles.marqueeBelt}>
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
              <span key={i} className={styles.marqueeItem}>
                {item}
                <span className={styles.marqueeSep}>✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
