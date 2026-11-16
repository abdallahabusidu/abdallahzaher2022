import Head from "next/head";
import Link from "next/link";
import type { GetStaticPaths, GetStaticProps } from "next";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { ALL_PROJECTS, Project } from "../../data/projectsData";
import { featuredWork } from "../../data/featuredWork";
import { NeonHeader, NeonFooter } from "../../components/NeonLayout";
import {
  ProductVisual,
  NearMissExplainer,
} from "../../components/ProjectShowcase";
import { projectStories } from "../../data/projectStories";
import s from "../../styles/Neon.module.css";

export default function Work({ project }: { project: Project }) {
  const index = featuredWork.findIndex((p) => p.title === project.title);
  const feature = featuredWork[index];
  const next = featuredWork[(index + 1) % featuredWork.length];
  return (
    <div className={s.site} id="top">
      <Head>
        <title>{`${project.title} — Abdallah Zaher`}</title>
        <meta name="description" content={feature.detail} />
      </Head>
      <a className={s.skip} href="#overview">
        Skip to project overview
      </a>
      <NeonHeader />
      <main className={s.case} id="overview">
        <Link href="/#work" className={s.backLink}>
          <ArrowLeft size={15} /> Selected work
        </Link>
        <div className={s.caseHeading}>
          <span className={s.label}>{feature.category}</span>
          <h1>{project.title}</h1>
          <p className={s.caseLead}>{feature.detail}</p>
          <div className={s.tags}>
            {project.stack.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
        <div
          className={s.productPreview}
          style={{ "--project-accent": feature.color } as React.CSSProperties}
        >
          <ProductVisual slug={feature.slug} />
        </div>
        <div className={s.caseStory}>
          <h2>{projectStories[feature.slug].headline}</h2>
          <p>{projectStories[feature.slug].description}</p>
        </div>
        {feature.slug === "nearmiss" && <NearMissExplainer />}
        <div className={s.caseColumns}>
          <div>
            <span className={s.label}>BEHIND THE PRODUCT</span>
            <h2>Engineering contribution</h2>
            <p>{feature.contribution}</p>
          </div>
          <div>
            <span className={s.label}>THE EXPERIENCE</span>
            <h2>What it brings together</h2>
            <ul>
              {feature.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        </div>
        {project.isPrivate && (
          <p className={s.privateNote}>
            This is a private project. Get in touch to discuss the engineering
            and product approach.
          </p>
        )}
        <div className={s.caseActions}>
          {project.href && (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className={s.button}
            >
              Visit {project.title} <ArrowUpRight size={16} />
            </a>
          )}
          <a
            className={s.secondaryButton}
            href="mailto:abdallahabusidu@gmail.com"
          >
            Discuss this work <ArrowUpRight size={16} />
          </a>
        </div>
        <div className={s.nextProject}>
          <span>KEEP EXPLORING</span>
          <Link href={`/work/${next.slug}`}>{next.title} ↗</Link>
        </div>
      </main>
      <NeonFooter />
    </div>
  );
}
export const getStaticPaths: GetStaticPaths = async () => ({
  paths: featuredWork.map((p) => ({ params: { slug: p.slug } })),
  fallback: false,
});
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const feature = featuredWork.find((p) => p.slug === params?.slug);
  const project = ALL_PROJECTS.find((p) => p.title === feature?.title);
  return project ? { props: { project } } : { notFound: true };
};
