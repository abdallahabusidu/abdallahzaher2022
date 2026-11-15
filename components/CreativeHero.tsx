import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Smartphone,
  Triangle,
  Workflow,
  Pause,
  Play,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import s from "../styles/CreativeHero.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function CreativeHero() {
  const root = useRef<HTMLElement>(null);
  const entrance = useRef<gsap.core.Timeline | null>(null);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const query = matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(query.matches);
    update();
    query.addEventListener("change", update);
    const observer = new IntersectionObserver(([entry]) =>
      setInView(entry.isIntersecting),
    );
    if (root.current) observer.observe(root.current);
    return () => {
      query.removeEventListener("change", update);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (reduced || !root.current) return;
    const el = root.current;
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
        entrance.current = intro;
        intro
          .fromTo(
            "[data-hero-line]",
            { yPercent: 110, rotate: 3 },
            {
              yPercent: 0,
              rotate: 0,
              duration: 1.05,
              stagger: 0.12,
              clearProps: "transform",
            },
            0.05,
          )
          .fromTo(
            "[data-hero-copy]",
            { opacity: 0, y: 18 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              stagger: 0.1,
              clearProps: "all",
            },
            0.35,
          )
          .fromTo(
            "[data-portrait]",
            { opacity: 0, y: 45, scale: 1.06 },
            { opacity: 1, y: 0, scale: 1, duration: 1.2, clearProps: "all" },
            0.2,
          )
          .fromTo(
            "[data-panel]",
            { opacity: 0, y: 30, rotateY: -15 },
            {
              opacity: 1,
              y: 0,
              rotateY: 0,
              duration: 1,
              stagger: 0.15,
              clearProps: "all",
            },
            0.7,
          );
      }, el);
      return () => ctx.revert();
    });
    return () => mm.revert();
  }, [reduced]);

  useEffect(() => {
    entrance.current?.paused(paused || !inView);
  }, [paused, inView]);

  useEffect(() => {
    if (paused || reduced || !inView || !root.current) return;
    const el = root.current;
    let onMove: ((event: PointerEvent) => void) | undefined;
    let onLeave: (() => void) | undefined;
    const mm = gsap.matchMedia();
    mm.add(
      "(min-width: 900px) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
      () => {
        const ctx = gsap.context(() => {
          const portraitX = gsap.quickTo("[data-depth-portrait]", "x", {
            duration: 1.1,
            ease: "power3.out",
          });
          const portraitY = gsap.quickTo("[data-depth-portrait]", "y", {
            duration: 1.1,
            ease: "power3.out",
          });
          const panelX = gsap.quickTo("[data-depth-panels]", "x", {
            duration: 0.8,
            ease: "power3.out",
          });
          const panelY = gsap.quickTo("[data-depth-panels]", "y", {
            duration: 0.8,
            ease: "power3.out",
          });
          const ringX = gsap.quickTo("[data-depth-ring]", "x", {
            duration: 1.4,
            ease: "power3.out",
          });
          onMove = (event) => {
            const box = el.getBoundingClientRect();
            const x = (event.clientX - box.left) / box.width - 0.5;
            const y = (event.clientY - box.top) / box.height - 0.5;
            portraitX(x * 24);
            portraitY(y * 16);
            panelX(x * -36);
            panelY(y * -26);
            ringX(x * 14);
          };
          onLeave = () => {
            portraitX(0);
            portraitY(0);
            panelX(0);
            panelY(0);
            ringX(0);
          };
          el.addEventListener("pointermove", onMove, { passive: true });
          el.addEventListener("pointerleave", onLeave);
          gsap.to("[data-scroll-scene]", {
            y: 65,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top top",
              end: "bottom top",
              scrub: 1,
            },
          });
        }, el);
        return () => {
          if (onMove) el.removeEventListener("pointermove", onMove);
          if (onLeave) el.removeEventListener("pointerleave", onLeave);
          ctx.revert();
        };
      },
    );
    return () => mm.revert();
  }, [paused, reduced, inView]);

  return (
    <section
      ref={root}
      className={`${s.hero} ${paused || reduced || !inView ? s.paused : ""}`}
      aria-labelledby="hero-title"
    >
      <div className={s.landscape} aria-hidden="true">
        <Image
          src="/art/hero-world.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          quality={85}
        />
      </div>
      <div className={s.atmosphere} aria-hidden="true" />
      <div className={s.particles} aria-hidden="true">
        {Array.from({ length: 18 }, (_, i) => (
          <i
            key={i}
            style={{
              left: `${8 + ((i * 47) % 88)}%`,
              top: `${15 + ((i * 31) % 73)}%`,
              animationDelay: `-${i * 0.7}s`,
              animationDuration: `${5 + (i % 4)}s`,
            }}
          />
        ))}
      </div>
      <div className={s.inner}>
        <div className={s.copy}>
          <div className={s.eyebrow} data-hero-copy>
            <span /> Abdallah Zaher AbuSidu
          </div>
          <h1 id="hero-title">
            <span className={s.line}>
              <span data-hero-line>Creative</span>
            </span>
            <span className={s.line}>
              <span data-hero-line>
                <span className={s.gradient}>Full-Stack</span> Developer
                <span className={s.period}>.</span>
              </span>
            </span>
          </h1>
          <p className={s.description} data-hero-copy>
            I build high-impact products that connect
            <br className={s.desktopBreak} /> engineering, design and creativity
            — from
            <br className={s.desktopBreak} /> scalable apps to immersive web
            experiences.
          </p>
          <div className={s.chips} data-hero-copy>
            <span>
              <Code2 /> React / Next.js
            </span>
            <span>
              <Smartphone /> React Native
            </span>
            <span>
              <Triangle /> Three.js
            </span>
            <span>
              <Workflow /> NestJS
            </span>
          </div>
          <div className={s.actions} data-hero-copy>
            <a href="#work" className={s.primary}>
              Explore my work <ArrowRight size={18} />
            </a>
            <a
              href="https://www.youtube.com/@CodewithPosidoon"
              target="_blank"
              rel="noopener noreferrer"
              className={s.secondary}
            >
              <Play size={13} fill="currentColor" /> Watch my work{" "}
              <ArrowUpRight size={15} />
            </a>
          </div>
          <div className={s.credentials} data-hero-copy>
            <div>
              <strong>
                5<span>+</span>
              </strong>
              <small>Years of experience</small>
            </div>
            <div>
              <strong>
                Web<span> / </span>Mobile
              </strong>
              <small>Products, built end to end</small>
            </div>
            <div>
              <strong>
                Dubai<span> ↗</span>
              </strong>
              <small>Building beyond borders</small>
            </div>
          </div>
        </div>
        <div className={s.scene} aria-hidden="true" data-scroll-scene>
          <div className={s.sceneLabel}>
            IDEAS INTO EXPERIENCES <span>↗</span>
          </div>
          <div className={s.ringDepth} data-depth-ring>
            <div className={s.orbit}>
              <svg viewBox="0 0 600 600">
                <defs>
                  <linearGradient id="hero-orbit" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#ffb99b" />
                    <stop offset=".45" stopColor="#ff665e" />
                    <stop offset="1" stopColor="#ff5b6400" />
                  </linearGradient>
                </defs>
                <circle cx="300" cy="300" r="262" />
                <circle className={s.orbitSweep} cx="300" cy="300" r="262" />
              </svg>
              <i className={s.orbitDot} />
            </div>
            <div className={s.orbitSecondary} />
          </div>
          <div className={s.portraitDepth} data-depth-portrait>
            <div className={s.portrait} data-portrait>
              <Image
                src="/art/hero-portrait.webp"
                alt=""
                fill
                priority
                sizes="(max-width:700px) 100vw, 650px"
                quality={85}
              />
            </div>
          </div>
          <div className={s.panels} data-depth-panels>
            <div className={s.codePosition} data-panel>
              <div className={s.codePanel}>
                <div className={s.panelBar}>
                  <span>
                    <i />
                    <i />
                    <i />
                  </span>
                  <small>experience.tsx</small>
                  <Code2 size={15} />
                </div>
                <pre>
                  <span className={s.syntaxPink}>const</span> experience = {"{"}
                  <br /> vision:{" "}
                  <span className={s.syntaxGreen}>"unexpected"</span>,<br />{" "}
                  craft: <span className={s.syntaxGreen}>"intentional"</span>,
                  <br /> possibilities:{" "}
                  <span className={s.syntaxBlue}>Infinity</span>
                  <br />
                  {"}"};<br />
                  <br />
                  <span className={s.syntaxPink}>export default</span> create
                  <span className={s.syntaxBlue}>(</span>
                  <br /> experience
                  <br />
                  <span className={s.syntaxBlue}>)</span>;
                </pre>
                <div className={s.panelStatus}>
                  <span /> Bringing ideas to life
                </div>
              </div>
            </div>
            <div className={s.terrainPosition} data-panel>
              <div className={s.terrainPanel}>
                <div className={s.panelBar}>
                  <span>CREATIVE DEVELOPMENT</span>
                  <BoxMark />
                </div>
                <svg viewBox="0 0 280 150" className={s.terrain}>
                  {Array.from({ length: 14 }, (_, i) => (
                    <path
                      key={i}
                      d={`M 0 ${135 - i * 4} Q 45 ${130 - i * 6}, 85 ${83 - i * 2} T 150 ${30 + i * 3} T 215 ${92 - i * 3} T 280 ${115 - i * 4}`}
                      style={{ animationDelay: `-${i * 0.12}s` }}
                    />
                  ))}
                </svg>
                <small>FORM. FUNCTION. FEELING.</small>
              </div>
            </div>
            <div className={s.smallPosition} data-panel>
              <div className={s.smallPanel}>
                <span>✦</span>
                <small>
                  ENGINEERED
                  <br />
                  TO FEEL DIFFERENT.
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={s.heroBottom}>
        <span>
          <i /> AVAILABLE FOR SENIOR ROLES
        </span>
        <a href="#work">
          SCROLL TO DISCOVER <ArrowDown size={13} />
        </a>
        <button
          onClick={() => setPaused(!paused)}
          aria-pressed={paused}
          aria-label={paused ? "Play hero animation" : "Pause hero animation"}
          disabled={reduced}
        >
          {paused || reduced ? <Play size={12} /> : <Pause size={12} />}
          <span>
            {reduced
              ? "REDUCED MOTION"
              : paused
                ? "PLAY MOTION"
                : "PAUSE MOTION"}
          </span>
        </button>
      </div>
    </section>
  );
}

function BoxMark() {
  return (
    <svg width="15" height="15" viewBox="0 0 20 20">
      <path
        d="M10 1 18 5v10l-8 4-8-4V5l8-4ZM2 5l8 4 8-4M10 9v10"
        fill="none"
        stroke="currentColor"
      />
    </svg>
  );
}
