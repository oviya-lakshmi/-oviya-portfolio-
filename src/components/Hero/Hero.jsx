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

      {/* LEFT */}

      <div className={styles.left}>

        <motion.p
          className={styles.greeting}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          👋 Hi, I'm
        </motion.p>

        <motion.h1
          className={styles.name}
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          OV<span>I</span>YALAKSHMI K
        </motion.h1>

        <div className={styles.typingContainer}>
          <TypeAnimation
            sequence={[
              "Information Technology Student",
              2000,
              "Full Stack Developer",
              2000,
              "AI & Machine Learning Enthusiast",
              2000,
              "Problem Solver",
              2000,
            ]}
            wrapper="span"
            speed={45}
            repeat={Infinity}
            className={styles.typing}
          />
        </div>

        <motion.p
          className={styles.description}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Passionate about building AI-powered applications,
          scalable web solutions and intelligent software that
          solve real-world problems. I enjoy transforming ideas
          into impactful products while continuously learning
          emerging technologies.
        </motion.p>

        <div className={styles.highlights}>
          <span>🚀 220+ LeetCode</span>
          <span>🎓 FFE Scholar</span>
          <span>📈 8.46 CGPA</span>
          <span>💻 5+ Projects</span>
        </div>

        <div className={styles.buttons}>

          <a
            href="/resume.pdf"
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

      </div>

      {/* RIGHT */}

      <motion.div
        className={styles.right}
        initial={{ opacity: 0, scale: .85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: .8 }}
      >

        <div className={styles.imageCircle}>

          <img
            src={profile}
            alt="Oviyalakshmi"
          />

        </div>

      </motion.div>

    </section>
  );
}