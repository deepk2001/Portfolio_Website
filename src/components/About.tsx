"use client";
import styles from "./About.module.css";
import { portfolioData } from "@/lib/data";

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "99%", label: "Transaction Success Rate" },
  { value: "70%", label: "AI Model Accuracy" },
  { value: "2", label: "Publications" },
];

export default function About() {
  return (
    <section className="section" id="about" style={{ background: "var(--bg-2)" }}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.left}>
            <p className="section-label">01. About Me</p>
            <h2 className="section-title" style={{ marginBottom: "32px" }}>
              Crafting Code,<br />
              <span style={{ color: "var(--cyan)" }}>Driving Research</span>
            </h2>

            <p className={styles.bio}>
              I&apos;m a Full Stack Software Engineer and graduate student at Penn State University,
              bringing 2 years of industry experience building scalable, user-focused applications
              at Bajaj Finserv Health.
            </p>
            <p className={styles.bio}>
              My work spans everything from micro-frontend architectures and payment systems to
              AI-powered health tools and distributed systems research. I love sitting at the
              intersection of engineering rigour and research curiosity.
            </p>
            <p className={styles.bio}>
              When I&apos;m not building, I&apos;m publishing — with papers on homomorphic encryption
              in healthcare and micro-frontend architecture presented at national conferences.
            </p>

            <div className={styles.techRow}>
              <span className={styles.techLabel}>Primary Stack:</span>
              {["React", "Next.js", "Node.js", "TypeScript", "NestJS"].map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.statsGrid}>
              {stats.map((stat) => (
                <div key={stat.label} className={`card ${styles.statCard}`}>
                  <span className={styles.statValue}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>

            <div className={`card ${styles.quoteCard}`}>
              <div className={styles.quoteIcon}>&ldquo;</div>
              <p className={styles.quoteText}>
                Passionate about applying full stack expertise to academic projects and research,
                while continuously exploring new technologies to create innovative and impactful solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
