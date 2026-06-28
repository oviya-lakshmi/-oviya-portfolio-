import styles from "./About.module.css";

import {
  FaCode,
  FaGraduationCap,
  FaAward,
  FaLaptopCode,
  FaBrain,
  FaUsers,
  FaLightbulb,
} from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className={styles.about}>

      <div className={styles.title}>
        <p>WHO I AM</p>
        <h2>About Me</h2>
      </div>

      <div className={styles.grid}>

        {/* LEFT BIG CARD */}

        <div className={`${styles.card} ${styles.aboutCard}`}>

          <h3>Hello! 👋 I'm Oviyalakshmi</h3>

          <p>
            I'm an Information Technology undergraduate at
            <strong> Madras Institute of Technology</strong>,
            passionate about building AI-powered applications,
            scalable web platforms and solving real-world
            problems through technology.
          </p>

          <p>
            My interests span Full Stack Development,
            Artificial Intelligence, Machine Learning and
            Software Engineering. I enjoy turning ideas into
            impactful digital solutions while continuously
            improving my technical and problem-solving skills.
          </p>

          <p>
            Beyond academics, I actively solve coding
            challenges on LeetCode, contribute to projects
            and explore emerging technologies.
          </p>

        </div>

        {/* RIGHT SMALL CARDS */}

        <div className={styles.card}>
          <FaCode className={styles.icon}/>
          <h4>220+</h4>
          <span>LeetCode Problems</span>
        </div>

        <div className={styles.card}>
          <FaAward className={styles.icon}/>
          <h4>8.46</h4>
          <span>Current CGPA</span>
        </div>

        <div className={styles.card}>
          <FaBrain className={styles.icon}/>
          <h4>FFE</h4>
          <span>Scholarship Recipient</span>
        </div>

        <div className={styles.card}>
          <FaLaptopCode className={styles.icon}/>
          <h4>5+</h4>
          <span>Major Projects</span>
        </div>

        <div className={styles.card}>
          <FaGraduationCap className={styles.icon}/>
          <h4>MIT</h4>
          <span>IT Student</span>
        </div>

        <div className={styles.card}>
          <FaUsers className={styles.icon}/>
          <h4>Leadership</h4>
          <span>Volunteer & Team Member</span>
        </div>

        {/* WIDE CARD */}

        <div className={`${styles.card} ${styles.wideCard}`}>

          <FaLightbulb className={styles.icon}/>

          <div>
            <h4>Passionate About</h4>
            <span>
              Artificial Intelligence • Machine Learning •
              Full Stack Development • Problem Solving
            </span>
          </div>

        </div>

      </div>

    </section>
  );
}