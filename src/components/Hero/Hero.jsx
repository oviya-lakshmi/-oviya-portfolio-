import styles from "./Hero.module.css";
import profile from "../../assets/images/profile.jpg";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaArrowRight,
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>

      {/* ================= LEFT ================= */}

      <motion.div
        className={styles.left}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >

        <p className={styles.greeting}>
          👋 Hi, I'm
        </p>

        {/* NAME */}

        <h1 className={styles.name}>
          <span className={styles.primary}>O</span>
          VIYALAKSHMI
          <span className={styles.primary}> K</span>
        </h1>

        {/* TYPING */}

        <div className={styles.typingContainer}>

          <TypeAnimation
            sequence={[
              "Information Technology Student",
              2200,
              "Full Stack Developer",
              2200,
              "AI & Machine Learning Enthusiast",
              2200,
              "Problem Solver",
              2200,
            ]}
            speed={45}
            repeat={Infinity}
            className={styles.typing}
          />

        </div>

        {/* DESCRIPTION */}

        <p className={styles.description}>

          Passionate about building AI-powered applications,
          scalable web solutions and intelligent software that
          solve real-world problems.

          <br /><br />

          I enjoy transforming innovative ideas into impactful
          digital products while continuously learning emerging
          technologies and strengthening my development skills.

        </p>

        {/* HIGHLIGHTS */}

        <div className={styles.highlights}>

          <span>🚀 220+ LeetCode</span>

          <span>🎓 FFE Scholar</span>

          <span>📈 8.52 CGPA</span>

          <span>💻 5+ Projects</span>

        </div>

        {/* BUTTONS */}

        <div className={styles.buttons}>

          <a
            href="/oviyalakshmi_k-IT_resume.pdf"
            download
            className={styles.primaryBtn}
          >
            <FaDownload />
            Resume
          </a>

          <a
            href="#projects"
            className={styles.secondaryBtn}
          >
            View Projects
            <FaArrowRight />
          </a>

        </div>

        {/* SOCIAL LINKS */}

        <div className={styles.socials}>

          <a
            href="https://github.com/oviya-lakshmi"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/oviyalakshmi-k/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://leetcode.com/u/oviyalakshmi/"
            target="_blank"
            rel="noreferrer"
            aria-label="LeetCode"
          >
            <SiLeetcode />
          </a>

        </div>

      </motion.div>

      {/* ================= RIGHT ================= */}

      <motion.div
        className={styles.right}
        initial={{ opacity: 0, scale: .85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: .8 }}
      >

        <div className={styles.imageWrapper}>

          <div className={styles.imageCircle}>

            <img
              src={profile}
              alt="Oviyalakshmi K"
            />

          </div>

        </div>

      </motion.div>

    </section>
  );
}