import styles from "./Navbar.module.css";
import { Link } from "react-scroll";
import { FaFileDownload } from "react-icons/fa";

export default function Navbar() {

  const links = [
    "home",
    "about",
    "skills",
    "projects",
    "achievements",
    "contact"
  ];

  return (
    <header className={styles.header}>

      <div className={styles.logo}>
        <span>O</span>viyalakshmi.K
      </div>

      <nav>

        <ul className={styles.navLinks}>

          {links.map((item) => (

            <li key={item}>

              <Link
                to={item}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                activeClass={styles.active}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>

            </li>

          ))}

        </ul>

      </nav>

      <a
        href="/resume.pdf"
        target="_blank"
        rel="noreferrer"
        className={styles.resumeBtn}
      >
        <FaFileDownload />
        Resume
      </a>

    </header>
  );
}