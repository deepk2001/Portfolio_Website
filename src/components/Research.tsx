"use client";
import styles from "./Research.module.css";
import { portfolioData } from "@/lib/data";

export default function Research() {
  return (
    <section className="section" id="research">
      <div className="container">
        <p className="section-label">04. Research</p>
        <h2 className="section-title" style={{ marginBottom: "64px" }}>
          Published <br />
          <span style={{ color: "var(--cyan)" }}>Work</span>
        </h2>

        <div className={styles.list}>
          {portfolioData.research.map((pub, idx) => (
            <div key={idx} className={`card ${styles.pubCard}`}>
              <div className={styles.pubNum}>{String(idx + 1).padStart(2, "0")}</div>
              <div className={styles.pubContent}>
                <h3 className={styles.pubTitle}>{pub.title}</h3>
                <p className={styles.pubAuthors}>{pub.authors}</p>
                <p className={styles.pubVenue}>
                  <span className={styles.pubVenueLabel}>Venue</span>
                  {pub.venue}
                </p>
                <p className={styles.pubPublisher}>{pub.publisher} · {pub.year}</p>
                {pub.doi && (
                  <a
                    href={pub.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.doiLink}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                    </svg>
                    Link: {pub.doi}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
