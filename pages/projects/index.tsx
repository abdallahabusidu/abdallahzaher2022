import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { ALL_PROJECTS } from "../../data/projectsData";
import { featuredWork } from "../../data/featuredWork";
import { NeonHeader, NeonFooter } from "../../components/NeonLayout";
import s from "../../styles/Neon.module.css";
const categories = [
  "All",
  ...Array.from(new Set(ALL_PROJECTS.map((p) => p.category))),
];
export default function Projects() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const filtered = ALL_PROJECTS.filter(
    (p) =>
      (category === "All" || category === p.category) &&
      `${p.title} ${p.stack.join(" ")} ${p.result}`
        .toLowerCase()
        .includes(query.toLowerCase()),
  );
  return (
    <div className={s.site} id="top">
      <Head>
        <title>Project archive — Abdallah Zaher</title>
        <meta
          name="description"
          content="Browse Abdallah Zaher's complete collection of web, mobile, AI and creative coding projects."
        />
      </Head>
      <a className={s.skip} href="#archive">
        Skip to project archive
      </a>
      <NeonHeader />
      <main className={s.case} id="archive">
        <Link href="/#work" className={s.backLink}>
          <ArrowLeft size={15} /> Selected work
        </Link>
        <div className={s.caseHeading}>
          <span className={s.label}>PRODUCTS / EXPERIMENTS / EXPLORATIONS</span>
          <h1>The archive.</h1>
          <p className={s.caseLead}>
            A collection of things built, ideas explored,
            <br />
            and lessons put into practice.
          </p>
        </div>
        <div className={s.filters}>
          <label htmlFor="search">Search projects</label>
          <input
            id="search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Project, technology, or keyword"
          />
          <label htmlFor="category">Category</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>
        <p className={s.resultsCount} aria-live="polite">
          {filtered.length} {filtered.length === 1 ? "project" : "projects"}
        </p>
        <div>
          {filtered.map((p) => {
            const featured = featuredWork.find((f) => f.title === p.title);
            return (
              <article key={p.index} className={s.archiveRow}>
                <span className={s.label}>{p.category}</span>
                <h2>{p.title}</h2>
                <p>{p.result}</p>
                <div className={s.tags}>
                  {p.stack.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                {featured ? (
                  <Link href={`/work/${featured.slug}`}>
                    View project <ArrowUpRight size={15} />
                  </Link>
                ) : p.href ? (
                  <a href={p.href} target="_blank" rel="noopener noreferrer">
                    Explore project <ArrowUpRight size={15} />
                  </a>
                ) : (
                  <span className={s.resultsCount}>Private project</span>
                )}
              </article>
            );
          })}
        </div>
        {!filtered.length && (
          <div className={s.emptyState}>
            <p>No matching projects. Try a different keyword or category.</p>
            <button
              className={s.secondaryButton}
              onClick={() => {
                setQuery("");
                setCategory("All");
              }}
            >
              Clear filters
            </button>
          </div>
        )}
      </main>
      <NeonFooter />
    </div>
  );
}
