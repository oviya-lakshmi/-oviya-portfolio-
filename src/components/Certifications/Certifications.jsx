import styles from "./Certifications.module.css";
import { FaExternalLinkAlt } from "react-icons/fa";

import nptel from "../../assets/logos/nptel.jpeg";
import udemy from "../../assets/logos/udemy.png";

function Certifications() {

  const certificates = [
    {
      logo: nptel,
      title: "Python for Data Science",
      issuer: "NPTEL",
      description: "Elite Score - 78%",
      link: "https://drive.google.com/file/d/1E0lABovDsHHfwj6n-ThyuExTV-Lue-Qx/view?usp=drivesdk",
    },
    {
      logo: udemy,
      title: "Advanced Excel Training",
      issuer: "Udemy",
      description: "Dashboards, Functions & Financial Modeling",
      link: "https://drive.google.com/file/d/1enYVbpa6zsfquGWOTHd61goVD5edxRHV/view?usp=drivesdk",
    },
  ];

  return (
    <section className={styles.certifications} id="certifications">

      <h2>Certifications</h2>

      <div className={styles.grid}>

        {certificates.map((certificate) => (

          <div className={styles.card} key={certificate.title}>

            <div className={styles.logoContainer}>
              <img
                src={certificate.logo}
                alt={certificate.issuer}
                className={styles.logo}
              />
            </div>

            <h3>{certificate.title}</h3>

            <h4>{certificate.issuer}</h4>

            <p>{certificate.description}</p>

            <a
              href={certificate.link}
              target="_blank"
              rel="noreferrer"
            >
              View Certificate
              <FaExternalLinkAlt />
            </a>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Certifications;