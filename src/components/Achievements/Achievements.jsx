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
      icon:<FaAward/>,
      value:"FFE",
      title:"Scholarship Recipient",
      subtitle:"Recipient of Foundation For Excellence Scholarship for academic excellence.",
    },

    {
      icon:<FaCode/>,
      value:"220+",
      title:"LeetCode Problems",
      subtitle:"Solved 220+ Data Structures & Algorithms problems with consistent practice.",
      link:"https://leetcode.com/u/oviyalakshmi/",
    },

    {
      icon:<FaLaptopCode/>,
      value:"98.6%",
      title:"Higher Secondary",
      subtitle:"Completed Higher Secondary with distinction and outstanding academic performance.",
    },

    {
      icon:<FaProjectDiagram/>,
      value:"5+",
      title:"Major Projects",
      subtitle:"Developed AI, MERN Stack and Machine Learning applications.",
    }

  ];

  return(

    <section id="achievements" className={styles.achievements}>

      <div className={styles.heading}>

        <h2>Achievements</h2>

        <p>
          Milestones that reflect my learning journey,
          dedication and passion for technology.
        </p>

      </div>

      <div className={styles.grid}>

        {achievements.map((item,index)=>

          item.link ?

          (

          <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noreferrer"
          className={`${styles.card} ${styles.clickable}`}
          >

            <div className={styles.icon}>
              {item.icon}
            </div>

            <h3>{item.value}</h3>

            <h4>{item.title}</h4>

            <p>{item.subtitle}</p>

            <span className={styles.profile}>

              View Profile

              <FaExternalLinkAlt/>

            </span>

          </a>

          )

          :

          (

          <div className={styles.card} key={index}>

            <div className={styles.icon}>
              {item.icon}
            </div>

            <h3>{item.value}</h3>

            <h4>{item.title}</h4>

            <p>{item.subtitle}</p>

          </div>

          )

        )}

      </div>

    </section>

  );

}

export default Achievements;