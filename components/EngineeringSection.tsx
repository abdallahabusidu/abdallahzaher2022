import { useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Database,
  Layers,
  Sparkles,
  Smartphone,
  Workflow,
} from "lucide-react";
import n from "../styles/Neon.module.css";
import s from "../styles/Engineering.module.css";
const approaches = [
  {
    name: "Interface",
    label: "MAKE COMPLEXITY FEEL SIMPLE",
    title: "Start with the person.",
    text: "Clear flows, reusable components and the small interactions that make a product feel considered. For the browser, the phone, and the person holding it.",
    nodes: [
      ["Experience", "React / Next.js / React Native"],
      ["Language", "TypeScript / Component systems"],
      ["Detail", "Motion / RTL / Responsive layouts"],
    ],
    Icon: Smartphone,
  },
  {
    name: "System",
    label: "BUILD WHAT THE INTERFACE DEPENDS ON",
    title: "Connect the whole product.",
    text: "APIs, permissions, data and background work are part of the experience too. I build across those boundaries so the product can work as one system.",
    nodes: [
      ["Application", "React / React Native"],
      ["Services", "NestJS / FastAPI / Edge Functions"],
      ["Foundation", "Supabase / PostgreSQL / MongoDB"],
    ],
    Icon: Database,
  },
  {
    name: "Experience",
    label: "GIVE THE IDEA A DISTINCTIVE VOICE",
    title: "Make room for the unexpected.",
    text: "Creative development adds depth to a useful interface: expressive motion, interactive scenes and visual storytelling, designed to remain usable across screen sizes.",
    nodes: [
      ["Story", "Interaction / Visual direction"],
      ["Expression", "Three.js / WebGL / GSAP"],
      ["Delivery", "Progressive enhancement / Reduced motion"],
    ],
    Icon: Sparkles,
  },
];
export default function EngineeringSection() {
  const [selected, setSelected] = useState(0);
  const approach = approaches[selected];
  const Icon = approach.Icon;
  return (
    <section id="about" className={`${n.container} ${s.engineering}`}>
      <div className={n.sectionHeading}>
        <span className={n.label}>THE WAY I BUILD</span>
        <span className={n.headingLine} />
      </div>
      <div className={s.layout}>
        <div className={s.intro}>
          <span className={s.kicker}>
            CURIOUS BY NATURE. PRECISE BY PRACTICE.
          </span>
          <h2>
            The interface is
            <br />
            only the <span>beginning.</span>
          </h2>
          <p>
            I’m Abdallah, a full-stack engineer based in Dubai. I connect the
            visible parts of a product with the systems underneath — and care
            equally about how both are put together.
          </p>
          <div
            className={s.approachButtons}
            role="group"
            aria-label="Explore my engineering approach"
          >
            {approaches.map((a, i) => (
              <button
                key={a.name}
                aria-pressed={i === selected}
                onClick={() => setSelected(i)}
              >
                {a.name}
                <ArrowUpRight size={14} />
              </button>
            ))}
          </div>
          <a
            className={n.inlineLink}
            href="https://www.youtube.com/@CodewithPosidoon"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore my creative coding on YouTube <ArrowUpRight size={15} />
          </a>
        </div>
        <div className={s.system}>
          <div className={s.systemHeader}>
            <span>
              <i /> {approach.label}
            </span>
            <Icon size={20} />
          </div>
          <div className={s.nodes} key={selected}>
            {approach.nodes.map(([title, stack], i) => (
              <div className={s.nodeWrap} key={title}>
                <div className={s.node}>
                  <span>0{i + 1}</span>
                  <div>
                    <strong>{title}</strong>
                    <small>{stack}</small>
                  </div>
                  {i === 0 ? (
                    <Layers size={17} />
                  ) : i === 1 ? (
                    <Code2 size={17} />
                  ) : (
                    <Workflow size={17} />
                  )}
                </div>
                {i < 2 && (
                  <div className={s.connector}>
                    <ArrowDown size={13} />
                    <i />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className={s.approachExplanation} aria-live="polite">
            <h3>{approach.title}</h3>
            <p>{approach.text}</p>
          </div>
        </div>
      </div>
      <div className={s.capabilities}>
        <span>PRODUCT THINKING</span>
        <i>✦</i>
        <span>FULL-STACK ENGINEERING</span>
        <i>✦</i>
        <span>CREATIVE DEVELOPMENT</span>
        <i>✦</i>
        <span>CONTINUOUS CURIOSITY</span>
      </div>
    </section>
  );
}
