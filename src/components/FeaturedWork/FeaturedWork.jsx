import styles from "./FeaturedWork.module.css";
import projects from "../../data/project";

import {
  FaGithub,
  FaExternalLinkAlt,
  FaCheckCircle,
  FaFolderOpen,
  FaFileCode,
} from "react-icons/fa";

export default function FeaturedWork() {
  return (
    <section id="projects" className={styles.projects}>

      <div className={styles.heading}>
        <h2>Featured Projects</h2>

        <p>
          A collection of projects showcasing my expertise in
          Full Stack Development, Artificial Intelligence,
          Machine Learning and Software Engineering.
        </p>
      </div>

      <div className={styles.grid}>

        {projects.map((project, index) => (

          <div className={styles.card} key={index}>

            {/* VS CODE HEADER */}

            <div className={styles.editor}>

              <div className={styles.editorTop}>

                <div className={styles.dots}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <p>{project.title}</p>

              </div>

              <div className={styles.editorBody}>

                <div className={styles.folder}>
                  <FaFolderOpen />
                  <span>{project.title}</span>
                </div>

                {project.tech.slice(0, 5).map((tech, i) => (

                  <div className={styles.file} key={i}>
                    <FaFileCode />
                    <span>{tech}</span>
                  </div>

                ))}

              </div>

            </div>

            {/* CONTENT */}

            <div className={styles.content}>

              <div className={styles.header}>

                <h3>{project.title}</h3>

                <div className={styles.links}>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub />
                  </a>

                  {project.live && (

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaExternalLinkAlt />
                    </a>

                  )}

                </div>

              </div>

              <p>{project.description}</p>

              {/* TECH STACK */}

              <div className={styles.tech}>

                {project.tech.map((item, i) => (

                  <span key={i}>{item}</span>

                ))}

              </div>

              {/* FEATURES */}

              <ul>

                {project.features.map((feature, i) => (

                  <li key={i}>
                    <FaCheckCircle />
                    {feature}
                  </li>

                ))}

              </ul>

              {/* FOOTER */}

              <div className={styles.footer}>

                <div className={styles.stats}>
                  <span>📁 {project.tech.length} Modules</span>
                  <span>⚡ Optimized</span>
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.button}
                >
                  <FaGithub />
                  View Repository
                </a>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}