import Head from "next/head";
import CreativeHero from "../components/CreativeHero";
import CraftStrip from "../components/CraftStrip";
import ProjectShowcase from "../components/ProjectShowcase";
import EngineeringSection from "../components/EngineeringSection";
import JourneySection from "../components/JourneySection";
import { NeonHeader, NeonFooter } from "../components/NeonLayout";
import s from "../styles/Neon.module.css";

export default function Home() {
  return (
    <div className={s.site} id="top">
      <Head>
        <title>Abdallah Zaher — Creative Full-Stack Engineer</title>
        <meta
          name="description"
          content="Creative mind. Engineering depth. Abdallah Zaher is a Dubai-based full-stack engineer building web, mobile and AI products."
        />
        <meta
          property="og:title"
          content="Abdallah Zaher — Creative Full-Stack Engineer"
        />
        <meta
          property="og:description"
          content="Explore real interfaces and the engineering behind web, mobile and AI products by Abdallah Zaher."
        />
        <meta name="theme-color" content="#090c16" />
      </Head>
      <a className={s.skip} href="#work">
        Skip to selected work
      </a>
      <NeonHeader home />
      <main>
        <CreativeHero />
        <CraftStrip />
        <ProjectShowcase />
        <EngineeringSection />
        <JourneySection />
      </main>
      <NeonFooter />
    </div>
  );
}
