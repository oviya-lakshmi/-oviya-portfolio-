import styles from "./Skills.module.css";

import {
  FaJava,
  FaReact,
  FaHtml5,
  FaGitAlt,
  FaPython,
  FaDatabase,
  FaFileExcel,
  FaLaptopCode,
  FaBrain,
  FaTools,
} from "react-icons/fa";

import {
  FaCode,
} from "react-icons/fa6";

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>

      <h2>Technical Skills</h2>

      <div className={styles.container}>

        <div className={styles.row}>
          <div className={styles.heading}>
            <FaCode />
            <span>Programming</span>
          </div>

          <div className={styles.items}>
            <div className={styles.skill}>C</div>
            <div className={styles.skill}>C++</div>
            <div className={styles.skill}><FaJava /> Java</div>
            <div className={styles.skill}><FaPython /> Python</div>
            <div className={styles.skill}>JS JavaScript</div>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.heading}>
            <FaLaptopCode />
            <span>Web Development</span>
          </div>

          <div className={styles.items}>
            <div className={styles.skill}><FaReact /> React</div>
            <div className={styles.skill}><FaHtml5 /> HTML</div>
            <div className={styles.skill}>CSS</div>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.heading}>
            <FaDatabase />
            <span>Database</span>
          </div>

          <div className={styles.items}>
            <div className={styles.skill}>SQL</div>
            <div className={styles.skill}>MySQL</div>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.heading}>
            <FaBrain />
            <span>AI / ML</span>
          </div>

          <div className={styles.items}>
            <div className={styles.skill}>Scikit-Learn</div>
            <div className={styles.skill}>NLP</div>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.heading}>
            <FaTools />
            <span>Tools</span>
          </div>

          <div className={styles.items}>
            <div className={styles.skill}><FaGitAlt /> Git</div>
            <div className={styles.skill}>VS Code</div>
            <div className={styles.skill}><FaFileExcel /> Excel</div>
          </div>
        </div>

      </div>

    </section>
  );
}