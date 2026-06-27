import styles from "./Github.module.css";
import {
  FaGithub,
  FaCodeBranch,
  FaLaptopCode,
  FaArrowRight,
} from "react-icons/fa";

export default function Github() {
  return (
    <section id="github" className={styles.github}>

      <h2>GitHub</h2>

      <div className={styles.card}>

        <div className={styles.left}>

          <div className={styles.icon}>
            <FaGithub />
          </div>

          <div>

            <h3>oviya-lakshmi</h3>

            <p>
              Passionate about building AI, MERN Stack and
              Machine Learning applications.
            </p>

          </div>

        </div>

        <div className={styles.stats}>

          <div>
            <h4>5+</h4>
            <span>Repositories</span>
          </div>

          <div>
            <h4>AI</h4>
            <span>Projects</span>
          </div>

          <div>
            <h4>220+</h4>
            <span>LeetCode</span>
          </div>

        </div>

        <a
          href="https://github.com/oviya-lakshmi"
          target="_blank"
          rel="noreferrer"
          className={styles.button}
        >
          <FaCodeBranch />

          View GitHub

          <FaArrowRight />
        </a>

      </div>

    </section>
  );
}