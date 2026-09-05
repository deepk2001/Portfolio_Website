"use client";
import styles from "./Recommendations.module.css";
import { portfolioData } from "@/lib/data";

export default function Recommendations() {
  return (
    <section
      className="section"
      id="recommendations"
      style={{ background: "var(--bg-2)" }}
    >
      <div className="container">
        <p className="section-label">Recommendations</p>
        <h2 className="section-title" style={{ marginBottom: "64px" }}>
          What Leaders <br />
          <span style={{ color: "var(--cyan)" }}>Say</span>
        </h2>

        <div className={styles.grid}>
          {portfolioData.recommendations.map((rec, idx) => (
            <div key={idx} className={`card ${styles.card}`}>
              <div className={styles.quoteMark} aria-hidden="true">
                &ldquo;
              </div>
              <p className={styles.context}>{rec.context}</p>
              <div className={styles.footer}>
                <div>
                  <h3 className={styles.name}>{rec.name}</h3>
                  <p className={styles.title}>{rec.title}</p>
                  <p className={styles.org}>{rec.organization}</p>
                </div>
                <a
                  href={`mailto:${rec.email}`}
                  className={styles.email}
                  aria-label={`Email ${rec.name}`}
                >
                  {rec.email}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
