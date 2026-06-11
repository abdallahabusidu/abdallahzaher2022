import { motion } from "framer-motion";
import styles from "../styles/ContactSection.module.css";

const LINKS = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/abdallahabusidu",
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/abdallahabusidu",
    external: true,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@CodewithPosidoon/videos?app=desktop&view=0&sort=dd&shelf_id=2",
    external: true,
  },
];

export default function ContactSection() {
  return (
    <section className={styles.section} id="contact">
      {/* Ambient glow */}
      <div className={styles.glow} aria-hidden />

      <div className={styles.inner}>
        {/* Label */}
        <motion.div
          className={styles.labelRow}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <span className={styles.labelLine} />
          <span className={styles.labelText}>Get in touch</span>
        </motion.div>

        {/* Big headline */}
        <motion.h2
          className={styles.heading}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Open to Senior
          <br />
          <span className={styles.headingAccent}>Frontend</span> &amp;
          <br />
          Creative Roles
        </motion.h2>

        <motion.p
          className={styles.sub}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, delay: 0.15 }}
        >
          Available for product-focused engineering, immersive marketing builds,
          and high-performance frontend architecture. Based in Dubai.
        </motion.p>

        {/* Contact cards */}
        <motion.div
          className={styles.contactCards}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, delay: 0.25 }}
        >
          <a
            href="mailto:abdallahabusidu@gmail.com"
            className={styles.cardEmail}
          >
            <span className={styles.cardIcon} aria-hidden>
              ✉
            </span>
            <span className={styles.cardTop}>Email</span>
            <span className={styles.cardValue}>abdallahabusidu@gmail.com</span>
            <span className={styles.cardArrow} aria-hidden>
              ↗
            </span>
          </a>

          <a href="tel:+971527759096" className={styles.cardPhone}>
            <span className={styles.cardIcon} aria-hidden>
              ✆
            </span>
            <span className={styles.cardTop}>Phone / WhatsApp</span>
            <span className={styles.cardValue}>+971 52 775 9096</span>
            <span className={styles.cardArrow} aria-hidden>
              ↗
            </span>
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          className={styles.socials}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              {link.label}
            </a>
          ))}
        </motion.div>

        {/* Footer strip */}
        <motion.div
          className={styles.footerStrip}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, delay: 0.45 }}
        >
          <span>© 2026 Abdallah Zaher AbuSidu</span>
          <span className={styles.footerDot} aria-hidden>
            ✦
          </span>
          <span>Senior Full-Stack Developer · Dubai</span>
        </motion.div>
      </div>
    </section>
  );
}
