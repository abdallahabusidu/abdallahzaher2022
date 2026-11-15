import Image from "next/image";
import Link from "next/link";
import { CSSProperties, useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  Expand,
  X,
  ShieldCheck,
  FileText,
  Users,
  Search,
  ScanLine,
  Activity,
} from "lucide-react";
import { featuredWork } from "../data/featuredWork";
import {
  nearMissSteps,
  projectStories,
  ProductScreen,
} from "../data/projectStories";
import n from "../styles/Neon.module.css";
import s from "../styles/Showcase.module.css";

export function ProductVisual({ slug }: { slug: string }) {
  const story = projectStories[slug];
  const [active, setActive] = useState(0);
  const [zoom, setZoom] = useState<ProductScreen | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (!zoom) return;
    const el = dialog.current;
    el?.showModal();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      el?.close();
      document.body.style.overflow = overflow;
    };
  }, [zoom]);
  if (slug !== "koapath") return <ConceptVisual slug={slug} />;
  return (
    <div className={`${s.visual} ${s.posterStage}`}>
      <div className={s.stageOrbit} />
      <div
        className={s.screenControls}
        role="group"
        aria-label="Koapath artwork selection"
      >
        {story.screens.map((screen, i) => (
          <button
            key={screen.src}
            aria-pressed={i === active}
            onClick={() => setActive(i)}
          >
            {screen.label}
          </button>
        ))}
      </div>
      <div className={s.posterPair}>
        {[active, (active + 1) % story.screens.length].map((index, i) => (
          <button
            key={`${index}-${i}`}
            className={i === 0 ? s.mainPoster : s.backPoster}
            onClick={() => setZoom(story.screens[index])}
            aria-label={`Enlarge ${story.screens[index].label}`}
          >
            <Image
              src={story.screens[index].src}
              alt={story.screens[index].label}
              width={story.screens[index].width}
              height={story.screens[index].height}
              sizes="(max-width:700px) 45vw, 300px"
            />
            <span>
              <Expand size={12} /> View artwork
            </span>
          </button>
        ))}
      </div>
      <span className={s.visualCaption}>{story.evidence}</span>
      {zoom && (
        <dialog
          ref={dialog}
          className={s.lightbox}
          onCancel={() => setZoom(null)}
          onClick={(e) => {
            if (e.target === e.currentTarget) setZoom(null);
          }}
          aria-label={`${zoom.label} enlarged artwork`}
        >
          <div className={s.lightboxBar}>
            <span>{zoom.label}</span>
            <button onClick={() => setZoom(null)} aria-label="Close artwork">
              <X size={22} />
            </button>
          </div>
          <div className={s.lightboxImage}>
            <Image
              src={zoom.src}
              alt={zoom.label}
              width={zoom.width}
              height={zoom.height}
              sizes="90vw"
            />
          </div>
          <p>{story.evidence}</p>
        </dialog>
      )}
    </div>
  );
}

function ConceptVisual({ slug }: { slug: string }) {
  if (slug === "douoon")
    return (
      <div className={`${s.visual} ${s.agreement}`}>
        <div className={s.documentOrbit} />
        <Image
          className={s.douoonLogo}
          src="/screens/douoon-logo.webp"
          alt="Douoon"
          width={175}
          height={175}
        />
        <div className={s.agreementTitle}>
          Trust is the foundation.
          <br />
          <span>Clarity is the interface.</span>
        </div>
        <ol className={s.agreementSteps}>
          {[
            {
              Icon: FileText,
              title: "Create",
              detail: "Document the agreement",
            },
            {
              Icon: Users,
              title: "Sign",
              detail: "Bring parties & witnesses together",
            },
            {
              Icon: ShieldCheck,
              title: "Keep track",
              detail: "Follow the agreement’s history",
            },
          ].map(({ Icon, title, detail }) => (
            <li key={title}>
              <Icon size={20} />
              <div>
                <strong>{title}</strong>
                <small>{detail}</small>
              </div>
              <Check size={14} />
            </li>
          ))}
        </ol>
        <span className={s.visualCaption}>
          Product identity & feature overview
        </span>
      </div>
    );
  if (slug === "nearmiss")
    return (
      <div className={`${s.visual} ${s.trafficVisual}`}>
        <span className={s.diagramLabel}>MOVEMENT → MEASUREMENT → MEANING</span>
        <svg
          viewBox="0 0 460 300"
          className={s.trafficDiagram}
          role="img"
          aria-label="Illustration of two tracked paths approaching a conflict zone"
        >
          <defs>
            <linearGradient id="traffic-path">
              <stop stopColor="#c9f179" stopOpacity=".1" />
              <stop offset="1" stopColor="#c9f179" />
            </linearGradient>
          </defs>
          <path d="M0 140h460M215 0v300" stroke="#ffffff0c" strokeWidth="62" />
          <path
            d="M0 140h460M215 0v300"
            stroke="#ffffff25"
            strokeDasharray="8 10"
          />
          <rect
            x="164"
            y="89"
            width="102"
            height="102"
            rx="18"
            fill="#c9f17908"
            stroke="#c9f17955"
            strokeDasharray="4 5"
          />
          <path
            d="M20 140H375"
            fill="none"
            stroke="url(#traffic-path)"
            strokeWidth="3"
          />
          <path d="M215 20V270" fill="none" stroke="#9bd5c2" strokeWidth="2" />
          <g className={s.vehicleHorizontal}>
            <rect x="0" y="-8" width="29" height="16" rx="4" fill="#c9f179" />
            <rect
              x="-7"
              y="-15"
              width="43"
              height="30"
              rx="6"
              stroke="#c9f17966"
              fill="none"
            />
          </g>
          <g className={s.vehicleVertical}>
            <rect x="-7" y="0" width="14" height="25" rx="4" fill="#9bd5c2" />
            <rect
              x="-14"
              y="-7"
              width="28"
              height="39"
              rx="6"
              stroke="#9bd5c266"
              fill="none"
            />
          </g>
          <text
            x="282"
            y="103"
            fill="#c9f179"
            fontSize="9"
            fontFamily="monospace"
          >
            CONFLICT ZONE
          </text>
          <text
            x="24"
            y="252"
            fill="#939f96"
            fontSize="9"
            fontFamily="monospace"
          >
            ILLUSTRATED TRAJECTORIES
          </text>
        </svg>
        <div className={s.diagramNodes}>
          <span>
            <ScanLine size={17} /> Track
          </span>
          <ArrowRight size={13} />
          <span>
            <Activity size={17} /> Measure
          </span>
          <ArrowRight size={13} />
          <span>
            <Search size={17} /> Review
          </span>
        </div>
        <span className={s.visualCaption}>
          Illustrated system flow · not a dashboard screenshot
        </span>
      </div>
    );
  return (
    <div className={`${s.visual} ${s.learningVisual}`}>
      <div className={s.learningOrbit} />
      <span className={s.diagramLabel}>CURIOSITY HAS A NEXT STEP.</span>
      <div className={s.learningCore}>
        <span>✦</span>
        <strong>AI</strong>
        <small>LEARN BY EXPLORING</small>
      </div>
      <div className={s.learningSteps}>
        {["Discover an idea", "Try a challenge", "Build understanding"].map(
          (title, i) => (
            <div key={title}>
              <span>0{i + 1}</span>
              <strong>{title}</strong>
              <Check size={15} />
            </div>
          ),
        )}
      </div>
      <span className={s.visualCaption}>Illustrated learning journey</span>
    </div>
  );
}

export function NearMissExplainer() {
  const [active, setActive] = useState(0);
  const icons = [ScanLine, Activity, Search, ShieldCheck];
  const Icon = icons[active];
  return (
    <div className={s.nearExplainer}>
      <div className={s.explainerIntro}>
        <span className={n.label}>FROM FOOTAGE TO EVIDENCE</span>
        <h3>More than a detection box.</h3>
        <p>
          A reviewable chain from camera movement to an engineering decision.
        </p>
      </div>
      <div
        className={s.pipeline}
        role="tablist"
        aria-label="NearMiss processing stages"
      >
        {nearMissSteps.map((step, i) => (
          <button
            key={step.title}
            id={`pipeline-tab-${i}`}
            role="tab"
            aria-selected={i === active}
            aria-controls="pipeline-detail"
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={(e) => {
              if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
                e.preventDefault();
                const next = (i + (e.key === "ArrowRight" ? 1 : 3)) % 4;
                setActive(next);
                document.getElementById(`pipeline-tab-${next}`)?.focus();
              }
            }}
          >
            <span>0{i + 1}</span>
            {step.title}
            <ArrowRight size={13} />
          </button>
        ))}
      </div>
      <div
        id="pipeline-detail"
        role="tabpanel"
        aria-labelledby={`pipeline-tab-${active}`}
        className={s.pipelineDetail}
        key={active}
      >
        <Icon size={28} />
        <div>
          <h4>{nearMissSteps[active].title}</h4>
          <p>{nearMissSteps[active].detail}</p>
          <small>{nearMissSteps[active].stack}</small>
        </div>
      </div>
      <div className={s.safetyMeasures}>
        <div>
          <strong>TTC</strong>
          <span>How soon paths would collide if movement continued.</span>
        </div>
        <div>
          <strong>PET</strong>
          <span>
            The time separating road users through the same conflict zone.
          </span>
        </div>
        <div>
          <strong>DRAC</strong>
          <span>The deceleration required to avoid a collision.</span>
        </div>
      </div>
      <p className={s.pilotNote}>
        Pilot / prototype. Calibration and tracking quality affect the measures;
        field validation remains part of the pilot.
      </p>
    </div>
  );
}

export default function ProjectShowcase() {
  return (
    <section id="work" className={`${n.container} ${s.work}`}>
      <div className={n.sectionHeading}>
        <span className={n.label}>SELECTED WORK</span>
        <span className={n.headingLine} />
        <span className={n.sectionNote}>PRODUCTS, BEYOND THE COVER</span>
      </div>
      <div className={s.workHeading}>
        <h2>
          Real products.
          <br />
          <span>Every detail has a purpose.</span>
        </h2>
        <p>
          A closer look at the interfaces,
          <br />
          systems and thinking behind the work.
        </p>
      </div>
      <div className={s.stories}>
        {featuredWork.map((project, index) => {
          const story = projectStories[project.slug];
          return (
            <article
              key={project.slug}
              className={`${s.story} ${index % 2 ? s.reverse : ""}`}
              style={{ "--project-accent": project.color } as CSSProperties}
            >
              <div className={s.storyCopy}>
                <span className={s.projectEyebrow}>
                  0{index + 1} / {project.category}
                </span>
                <h3>{project.title}</h3>
                <h4>{story.headline}</h4>
                <p>{story.description}</p>
                <ul>
                  {story.points.map((point) => (
                    <li key={point}>
                      <Check size={13} />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className={s.focus}>{story.focus}</div>
                <div className={s.projectActions}>
                  <Link className={n.button} href={`/work/${project.slug}`}>
                    Explore {project.title}
                    <ArrowUpRight size={16} />
                  </Link>
                  {story.links ? (
                    <a
                      className={s.secondaryLink}
                      href={story.links}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit product <ArrowUpRight size={15} />
                    </a>
                  ) : (
                    <a
                      className={s.secondaryLink}
                      href={`mailto:abdallahabusidu@gmail.com?subject=${encodeURIComponent(`Let's talk about ${project.title}`)}`}
                    >
                      Discuss this project <ArrowUpRight size={15} />
                    </a>
                  )}
                </div>
              </div>
              <ProductVisual slug={project.slug} />
              {project.slug === "nearmiss" && <NearMissExplainer />}
            </article>
          );
        })}
      </div>
      <div className={n.archiveLink}>
        <span>More explorations. More things built.</span>
        <Link href="/projects">
          Explore the full archive <ArrowUpRight size={17} />
        </Link>
      </div>
      <div className={s.workCta}>
        <div>
          <span className={n.label}>YOUR PRODUCT COULD BE NEXT</span>
          <h3>
            A complex idea?
            <br />
            Let’s make it feel simple.
          </h3>
        </div>
        <a
          href="mailto:abdallahabusidu@gmail.com?subject=Let%E2%80%99s%20build%20a%20product"
          className={n.button}
        >
          Start a conversation <ArrowUpRight size={18} />
        </a>
      </div>
    </section>
  );
}
