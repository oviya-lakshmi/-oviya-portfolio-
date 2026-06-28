import styles from "./Github.module.css";
import {
  FaGithub,
  FaCodeBranch,
  FaLaptopCode,
  FaArrowRight,
  FaCode,
  FaFire,
} from "react-icons/fa";

export default function Github() {
  return (
    <section id="github" className={styles.github}>

      <div className={styles.heading}>
        <h2>GitHub Journey</h2>

        <p>
          Building projects, solving coding challenges and continuously
          learning modern software development.
        </p>
      </div>

      <div className={styles.grid}>

        {/* Profile */}

        <div className={styles.profileCard}>

          <div className={styles.icon}>
            <FaGithub />
          </div>

          <h3>oviya-lakshmi</h3>

          <p>
            Passionate about AI, MERN Stack,
            Machine Learning and Full Stack Development.
          </p>

        </div>

        {/* Stats */}

        <div className={styles.statsCard}>

          <div className={styles.stat}>
            <FaCode />
            <h4>5+</h4>
            <span>Repositories</span>
          </div>

          <div className={styles.stat}>
            <FaLaptopCode />
            <h4>AI</h4>
            <span>Projects</span>
          </div>

          <div className={styles.stat}>
            <FaFire />
            <h4>220+</h4>
            <span>LeetCode</span>
          </div>

        </div>

        {/* Button */}

        <div className={styles.actionCard}>

          <FaCodeBranch className={styles.branchIcon}/>

          <h3>Explore My Work</h3>

          <p>
            Visit my GitHub profile to explore repositories,
            source code and ongoing projects.
          </p>

          <a
            href="https://github.com/oviya-lakshmi"
            target="_blank"
            rel="noreferrer"
            className={styles.button}
          >
            View GitHub
            <FaArrowRight />
          </a>

        </div>

      </div>

    </section>
  );
}