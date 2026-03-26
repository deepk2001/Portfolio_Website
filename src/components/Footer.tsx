import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.copy}>
          Designed & Built by{" "}
          <span style={{ color: "var(--cyan)" }}>Deep Hiren Kotecha</span>
        </p>
        <p className={styles.stack}>
          Built with Next.js · Deployed on Vercel
        </p>
      </div>
    </footer>
  );
}
