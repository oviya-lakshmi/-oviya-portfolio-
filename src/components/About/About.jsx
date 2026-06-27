import styles from "./About.module.css";

import {
  FaCode,
  FaGraduationCap,
  FaAward,
  FaLaptopCode,
  FaBrain,
  FaUsers,
  FaLightbulb
} from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className={styles.about}>

      <div className={styles.title}>
        <p>WHO I AM</p>
        <h2>What I Bring</h2>
      </div>

      <div className={styles.grid}>

        {/* Large About Card */}

        <div className={`${styles.card} ${styles.large}`}>

          <h3>Hello! 👋 I'm Oviyalakshmi</h3>

          <p>
            I'm an Information Technology undergraduate at
            <strong> Madras Institute of Technology </strong>
            passionate about building AI-powered solutions,
            scalable web applications and solving real-world
            problems through technology.
          </p>

          <p>
            I enjoy working with React, Spring Boot,
            Machine Learning and modern web technologies.
            My goal is to build software that is both useful
            and impactful while continuously improving my
            problem-solving and development skills.
          </p>

          <p>
            Apart from academics, I actively solve coding
            challenges on LeetCode, contribute to projects,
            and enjoy learning emerging technologies.
          </p>

        </div>

        {/* Right Side Cards */}

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
          <span>B.Tech Information Technology</span>
        </div>

        <div className={styles.card}>
          <FaUsers className={styles.icon}/>
          <h4>Leadership</h4>
          <span>Volunteer & Team Member</span>
        </div>

        <div className={styles.card}>
          <FaLightbulb className={styles.icon}/>
          <h4>Passionate About</h4>
          <span>AI • Full Stack • ML • Problem Solving</span>
        </div>

      </div>

    </section>
  );
}