import Link from "next/link";
import { useRef, useState } from "react";
import {
  ArrowUpRight,
  Code2,
  BriefcaseBusiness,
  Menu,
  X,
  Play,
} from "lucide-react";
import s from "../styles/Neon.module.css";

export function NeonHeader({ home = false }: { home?: boolean }) {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const base = home ? "" : "/";
  return (
    <header
      className={s.header}
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          setOpen(false);
          menuButton.current?.focus();
        }
      }}
    >
      <div className={s.headerInner}>
        <Link className={s.brand} href="/" aria-label="Abdallah Zaher home">
          <svg viewBox="0 0 66 36" aria-hidden="true">
            <path
              d="M2 31 22 4l19 27M12 21h20M32 5h28L38 30h25"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinejoin="miter"
            />
          </svg>
          <span>Abdallah Zaher</span>
        </Link>
        <button
          ref={menuButton}
          className={s.menuButton}
          aria-expanded={open}
          aria-controls="primary-navigation"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav
          id="primary-navigation"
          className={`${s.navigation} ${open ? s.open : ""}`}
          aria-label="Main navigation"
        >
          <a href={`${base}#work`} onClick={() => setOpen(false)}>
            Work
          </a>
          <a href={`${base}#about`} onClick={() => setOpen(false)}>
            About
          </a>
          <a href={`${base}#experience`} onClick={() => setOpen(false)}>
            Experience
          </a>
          <a className={s.button} href="mailto:abdallahabusidu@gmail.com">
            Let’s talk <ArrowUpRight size={16} />
          </a>
        </nav>
      </div>
    </header>
  );
}

export function NeonFooter() {
  const [projectType, setProjectType] = useState("Web product");
  return (
    <footer className={s.footer} id="contact">
      <div className={s.footerGlow} />
      <div className={s.container}>
        <span className={s.label}>THE NEXT CHAPTER</span>
        <h2>
          Have an idea?
          <br className={s.mobileBreak} /> <span>Let’s build it.</span>
        </h2>
        <p>Choose a starting point. Let’s work out the rest together.</p>
        <div
          className={s.projectChoices}
          role="group"
          aria-label="What would you like to build?"
        >
          {["Web product", "Mobile app", "Creative experience"].map((type) => (
            <button
              key={type}
              aria-pressed={type === projectType}
              onClick={() => setProjectType(type)}
            >
              {type}
            </button>
          ))}
        </div>
        <a
          href={`mailto:abdallahabusidu@gmail.com?subject=${encodeURIComponent(`Let's build a ${projectType.toLowerCase()}`)}`}
          className={s.button}
        >
          Start the conversation <ArrowUpRight size={18} />
        </a>
        <a className={s.footerEmail} href="mailto:abdallahabusidu@gmail.com">
          abdallahabusidu@gmail.com
        </a>
        <div className={s.footerBottom}>
          <span>© {new Date().getFullYear()} Abdallah Zaher</span>
          <div className={s.socials}>
            <a href="https://github.com/abdallahabusidu" aria-label="GitHub">
              <Code2 size={18} />
            </a>
            <a
              href="https://linkedin.com/in/abdallahabusidu"
              aria-label="LinkedIn"
            >
              <BriefcaseBusiness size={18} />
            </a>
            <a
              href="https://www.youtube.com/@CodewithPosidoon"
              aria-label="YouTube"
            >
              <Play size={18} />
            </a>
          </div>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
