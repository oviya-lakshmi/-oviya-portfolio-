import styles from "./Footer.module.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className={styles.footer}>

      <div className={styles.top}>

        <div>

          <h2>Oviyalakshmi K</h2>

          <p>
            Software Developer | AI & Full Stack Enthusiast
          </p>

        </div>

        <button onClick={scrollTop}>
          <FaArrowUp />
        </button>

      </div>

      <hr />

      <div className={styles.links}>

        <a
          href="mailto:oviyalakshmikumar06@gmail.com"
        >
          <FaEnvelope />
        </a>

        <a
          href="https://github.com/oviya-lakshmi"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://linkedin.com/in/oviyalakshmi-k"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

      </div>

      <p className={styles.copy}>
        © {new Date().getFullYear()} Oviyalakshmi K. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;