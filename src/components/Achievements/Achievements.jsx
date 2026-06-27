import styles from "./Achievements.module.css";

import {
  FaAward,
  FaCode,
  FaCertificate,
  FaProjectDiagram,
  FaLaptopCode,
  FaExternalLinkAlt,
} from "react-icons/fa";

function Achievements() {
  const achievements = [
    {
      icon: <FaAward />,
      value: "FFE",
      title: "Scholarship Recipient",
      subtitle:
        "Recipient of Foundation For Excellence Scholarship for academic excellence.",
    },
    {
      icon: <FaCode />,
      value: "220+",
      title: "LeetCode Problems",
      subtitle:
        "Solved 220+ Data Structures & Algorithms problems with consistent practice.",
      link: "https://leetcode.com/u/oviyalakshmi/",
    },
    {
      icon: <FaLaptopCode />,
      value: "98.6%",
      title: "Higher Secondary",
      subtitle:
        "Completed Higher Secondary with distinction and outstanding academic performance.",
    },
    {
      icon: <FaCertificate />,
      value: "NPTEL",
      title: "Elite Certified",
      subtitle:
        "Earned Elite certification from NPTEL in professional technical courses.",
    },
    {
      icon: <FaProjectDiagram />,
      value: "5+",
      title: "Major Projects",
      subtitle:
        "Developed AI, MERN Stack, Web Development and Machine Learning projects.",
    },
  ];

  return (
    <section className={styles.achievements} id="achievements">
      <h2>Achievements</h2>

      <div className={styles.grid}>
        {achievements.map((item, index) =>
          item.link ? (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.card} ${styles.clickable}`}
            >
              <div className={styles.icon}>{item.icon}</div>

              <div className={styles.value}>{item.value}</div>

              <div className={styles.title}>{item.title}</div>

              <div className={styles.subtitle}>{item.subtitle}</div>

              <span className={styles.link}>
                View Profile <FaExternalLinkAlt />
              </span>
            </a>
          ) : (
            <div className={styles.card} key={index}>
              <div className={styles.icon}>{item.icon}</div>

              <div className={styles.value}>{item.value}</div>

              <div className={styles.title}>{item.title}</div>

              <div className={styles.subtitle}>{item.subtitle}</div>
            </div>
          )
        )}
      </div>
    </section>
  );
}

export default Achievements;