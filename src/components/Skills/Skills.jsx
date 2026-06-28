import styles from "./Skills.module.css";

import {
  FaReact,
  FaHtml5,
  FaNodeJs,
  FaPython,
  FaJava,
  FaGitAlt,
  FaDatabase,
  FaFileExcel,
  FaCode,
  FaLaptopCode,
  FaBrain,
  FaTools,
} from "react-icons/fa";

const skillData = [
  {
    title: "Programming",
    icon: <FaCode />,
    skills: [
      { name: "C", img: "/logos/c.png" },
      { name: "C++", img: "/logos/c++.png" },
      { name: "Java", icon: <FaJava className={styles.java} /> },
      { name: "Python", icon: <FaPython className={styles.python} /> },
      { name: "JavaScript", img: "/logos/javascript.png" },
    ],
  },

  {
    title: "Web Development",
    icon: <FaLaptopCode />,
    skills: [
      { name: "React", icon: <FaReact className={styles.react} /> },
      { name: "HTML5", icon: <FaHtml5 className={styles.html} /> },
      { name: "CSS3", img: "/logos/css.png" },
      { name: "Node.js", icon: <FaNodeJs className={styles.node} /> },
    ],
  },

  {
    title: "Database",
    icon: <FaDatabase />,
    skills: [
      { name: "SQL", icon: <FaDatabase className={styles.sql} /> },
      { name: "MySQL", img: "/logos/mysql.png" },
      { name: "SQLite", img: "/logos/sqlite.png" },
    ],
  },

  {
    title: "AI / ML",
    icon: <FaBrain />,
    skills: [
      { name: "Scikit-Learn", img: "/logos/sklearn.png" },
      { name: "NLP", icon: <FaPython className={styles.python} /> },
    ],
  },

  {
    title: "Tools",
    icon: <FaTools />,
    skills: [
      { name: "Git", icon: <FaGitAlt className={styles.git} /> },
      { name: "VS Code", img: "/logos/vsc.png" },
      { name: "Excel", icon: <FaFileExcel className={styles.excel} /> },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>

      <div className={styles.heading}>
        <p>MY EXPERTISE</p>
        <h2>Technical Skills</h2>
        <span>
          Technologies I use to build scalable web applications,
          AI solutions and modern software.
        </span>
      </div>

      <div className={styles.grid}>
        {skillData.map((category) => (
          <div className={styles.card} key={category.title}>

            <div className={styles.cardHeader}>
              {category.icon}
              <h3>{category.title}</h3>
            </div>

            <div className={styles.skillsGrid}>
              {category.skills.map((skill) => (
                <div className={styles.skillCard} key={skill.name}>

                  <div className={styles.logoBox}>
                    {skill.img ? (
                      <img
                        src={skill.img}
                        alt={skill.name}
                        className={styles.logo}
                      />
                    ) : (
                      skill.icon
                    )}
                  </div>

                  <span>{skill.name}</span>

                </div>
              ))}
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}