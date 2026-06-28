import { useState } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-scroll";
import { FaFileDownload, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    "home",
    "about",
    "skills",
    "projects",
    "achievements",
    "contact",
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.header}>

      {/* ================= BRAND ================= */}

      <div
        className={styles.brand}
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
      >
        <div className={styles.logoBox}>
          <img
            src="/logo.png"
            alt="Logo"
            className={styles.logoImg}
          />
        </div>

        <div className={styles.brandText}>

          <h2>
            <span className={styles.purple}>O</span>viyalakshmi{" "}
            <span className={styles.purple}>K</span>
          </h2>

          <p>SOFTWARE ENGINEER</p>

        </div>
      </div>

      {/* ================= DESKTOP MENU ================= */}

      <nav
        className={`${styles.nav} ${
          menuOpen ? styles.showMenu : ""
        }`}
      >
        <ul className={styles.navLinks}>
          {links.map((item) => (
            <li key={item}>
              <Link
                to={item}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                activeClass={styles.active}
                onClick={closeMenu}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* ================= RESUME BUTTON ================= */}

      <a
        href="/oviyalakshmi_k-IT_resume.pdf"
        target="_blank"
        rel="noreferrer"
        className={styles.resumeBtn}
      >
        <FaFileDownload />
        Resume
      </a>

      {/* ================= MOBILE BUTTON ================= */}

      <button
        className={styles.menuBtn}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

    </header>
  );
}