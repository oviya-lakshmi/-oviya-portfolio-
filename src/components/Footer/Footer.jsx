import styles from "./Footer.module.css";

import {
  FaGithub,
  FaLinkedin,
  FaHeart,
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";

function Footer() {
  return (
    <footer className={styles.footer}>

     <div className={styles.logoContainer}>
  <div className={styles.logoBox}>
    <img
      src="/logo.png"
      alt="Oviya Lakshmi Logo"
      className={styles.logo}
    />
  </div>
</div>

      <p className={styles.tagline}>
        Building AI-powered solutions with creativity,
        innovation and AI-driven innovation.
      </p>

      <div className={styles.socials}>

        <a
          href="https://github.com/oviya-lakshmi"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/oviyalakshmi-k"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://leetcode.com/u/oviyalakshmi/"
          target="_blank"
          rel="noreferrer"
        >
          <SiLeetcode />
        </a>

      </div>

      <div className={styles.line}></div>

      <p className={styles.copy}>
        © {new Date().getFullYear()} Oviya Lakshmi. All Rights Reserved.
      </p>

      <p className={styles.made}>
        Made with <FaHeart className={styles.heart} /> using React & Vite
      </p>

    </footer>
  );
}

export default Footer;