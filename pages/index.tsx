import Hero from "../components/Hero";
import ExperienceSection from "../components/ExperienceSection";
import SpecialProjectsSection from "../components/SpecialProjectsSection";
import ProjectsSection from "../components/ProjectsSection";
import YoutubeSection2026 from "../components/YoutubeSection2026";
import SkillsSection from "../components/SkillsSection";
import ContactSection from "../components/ContactSection";
import styles from "../styles/Portfolio2026.module.css";

export default function Home() {
  return (
    <div className={styles.canvas}>
      <div className={styles.sectionSlot}>
        <Hero />
      </div>
      <div className={styles.sectionSlot}>
        <ExperienceSection />
      </div>
      <div className={styles.sectionSlot}>
        <SpecialProjectsSection />
      </div>
      <div className={styles.sectionSlot}>
        <ProjectsSection />
      </div>
      <div className={styles.sectionSlot}>
        <YoutubeSection2026 />
      </div>
      <div className={styles.sectionSlot}>
        <SkillsSection />
      </div>
      <div className={styles.sectionSlot}>
        <ContactSection />
      </div>
    </div>
  );
}
