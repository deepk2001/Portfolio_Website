"use client";
import styles from "./Experience.module.css";
import { portfolioData } from "@/lib/data";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <p className="section-label">02. Experience</p>
        <h2 className="section-title" style={{ marginBottom: "64px" }}>
          Where I&apos;ve <br />
          <span style={{ color: "var(--cyan)" }}>Worked</span>
        </h2>

        <div className={styles.timeline}>
          {portfolioData.experience.map((exp, idx) => (
            <div key={idx} className={styles.item}>
              <div className={styles.left}>
                <div className={styles.dot} />
                <span className={styles.period}>{exp.period}</span>
                <span className={`tag ${styles.type}`}>{exp.type}</span>
              </div>

              <div className={`card ${styles.card}`}>
                <div className={styles.header}>
                  <div>
                    <h3 className={styles.role}>{exp.role}</h3>
                    <p className={styles.company}>@ {exp.company}</p>
                  </div>
                  <div className={styles.num}>
                    <span>{String(idx + 1).padStart(2, "0")}</span>
                  </div>
                </div>
                <ul className={styles.list}>
                  {exp.highlights.map((h, i) => (
                    <li key={i} className={styles.listItem}>
                      <span className={styles.bullet} />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Education inline */}
        <div className={styles.edSection}>
          <p className="section-label" style={{ marginTop: "80px" }}>Education</p>
          <div className={styles.edGrid}>
            {portfolioData.education.map((edu, idx) => (
              <div key={idx} className={`card ${styles.edCard}`}>
                <span className={`tag ${styles.edStatus}`}>
                  {edu.status === "ongoing" ? "Current" : edu.period}
                </span>
                <h3 className={styles.edDegree}>{edu.degree}</h3>
                <p className={styles.edInstitution}>{edu.institution}</p>
                <p className={styles.edLocation}>{edu.location}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
