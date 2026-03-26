"use client";
import styles from "./Projects.module.css";
import { portfolioData } from "@/lib/data";

export default function Projects() {
  return (
    <section className="section" id="projects" style={{ background: "var(--bg-2)" }}>
      <div className="container">
        <p className="section-label">03. Projects</p>
        <h2 className="section-title" style={{ marginBottom: "64px" }}>
          Things I&apos;ve <br />
          <span style={{ color: "var(--cyan)" }}>Built</span>
        </h2>

        <div className={styles.grid}>
          {portfolioData.projects.map((project, idx) => (
            <div key={idx} className={`card ${styles.projectCard}`}>
              <div className={styles.cardTop}>
                <div className={styles.cardNum}>
                  <span>{String(idx + 1).padStart(2, "0")}</span>
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkBtn}
                    aria-label="View project"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                )}
                {project.comingSoon && (
                  <span className={styles.soon}>Soon</span>
                )}
              </div>

              <h3 className={styles.title}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>

              <div className={styles.tags}>
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
