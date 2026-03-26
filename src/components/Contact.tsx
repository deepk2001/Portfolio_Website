"use client";
import styles from "./Contact.module.css";
import { portfolioData } from "@/lib/data";

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <p className="section-label">06. Contact</p>
        <h2 className="section-title" style={{ marginBottom: "24px" }}>
          Let&apos;s Work <br />
          <span style={{ color: "var(--cyan)" }}>Together</span>
        </h2>
        <p className={styles.subtitle}>
          I&apos;m currently open to research collaborations, internships, and full-time opportunities.
          Whether you have a question or just want to say hi — my inbox is always open.
        </p>

        <div className={styles.grid}>
          <div className={styles.links}>
            <a href={`mailto:${portfolioData.email}`} className={`card ${styles.contactCard}`}>
              <div className={styles.iconWrap}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <p className={styles.contactLabel}>Email</p>
                <p className={styles.contactValue}>{portfolioData.email}</p>
              </div>
              <svg className={styles.arrow} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>

            <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" className={`card ${styles.contactCard}`}>
              <div className={styles.iconWrap}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </div>
              <div>
                <p className={styles.contactLabel}>LinkedIn</p>
                <p className={styles.contactValue}>deep-kotecha-59206921b</p>
              </div>
              <svg className={styles.arrow} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>

            <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" className={`card ${styles.contactCard}`}>
              <div className={styles.iconWrap}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </div>
              <div>
                <p className={styles.contactLabel}>GitHub</p>
                <p className={styles.contactValue}>deepk2001</p>
              </div>
              <svg className={styles.arrow} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>

            <a href={`mailto:${portfolioData.psuEmail}`} className={`card ${styles.contactCard}`}>
              <div className={styles.iconWrap}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <div>
                <p className={styles.contactLabel}>PSU Email</p>
                <p className={styles.contactValue}>{portfolioData.psuEmail}</p>
              </div>
              <svg className={styles.arrow} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <div className={styles.cta}>
            <div className={styles.ctaGlow} />
            <p className={styles.ctaEyebrow}>Open to opportunities</p>
            <h3 className={styles.ctaTitle}>Have a project in mind?</h3>
            <p className={styles.ctaText}>
              Whether it&apos;s a research collaboration, a startup idea, or a role at your company —
              I&apos;d love to connect and explore how we can build something great together.
            </p>
            <a href={`mailto:${portfolioData.email}`} className={styles.ctaBtn}>
              Say Hello
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
