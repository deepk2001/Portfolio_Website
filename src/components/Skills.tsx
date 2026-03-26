"use client";
import styles from "./Skills.module.css";
import { portfolioData } from "@/lib/data";

export default function Skills() {
  return (
    <section className="section" id="skills" style={{ background: "var(--bg-2)" }}>
      <div className="container">
        <p className="section-label">05. Skills</p>
        <h2 className="section-title" style={{ marginBottom: "64px" }}>
          Technical <br />
          <span style={{ color: "var(--cyan)" }}>Arsenal</span>
        </h2>

        <div className={styles.grid}>
          {Object.entries(portfolioData.skills).map(([category, skills]) => (
            <div key={category} className={`card ${styles.skillCard}`}>
              <h3 className={styles.category}>{category}</h3>
              <div className={styles.tags}>
                {skills.map((skill) => (
                  <span key={skill} className={styles.skillTag}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Other skills */}
        <div className={`card ${styles.otherCard}`}>
          <h3 className={styles.category}>Other Competencies</h3>
          <div className={styles.tags}>
            {["Critical Analysis", "Structured Analytical Thinking", "Disaster Recovery Techniques", "Root Cause Analysis", "Leadership in Agile"].map((s) => (
              <span key={s} className={`${styles.skillTag} ${styles.soft}`}>{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
