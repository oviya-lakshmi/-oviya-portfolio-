import styles from "./Contact.module.css";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>

      {/* Heading */}

      <div className={styles.heading}>

        <p>GET IN TOUCH</p>

        <h2>Let's Connect</h2>

        <span>
          Looking for internships, collaborations or exciting
          opportunities? Feel free to reach out. I'd love to
          connect with you and discuss innovative ideas.
        </span>

      </div>

      {/* Main Layout */}

      <div className={styles.container}>

        {/* ================= LEFT ================= */}

        <div className={styles.info}>

          <h3>Contact Information</h3>

          <p className={styles.infoText}>
            Whether you have an opportunity, project idea,
            or simply want to say hello, I'm always open
            to meaningful conversations.
          </p>

          {/* Email */}

          <div className={styles.infoCard}>

            <div className={styles.icon}>
              <FaEnvelope />
            </div>

            <div>

              <h4>Email</h4>

              <a href="mailto:oviyalakshmikumar06@gmail.com">
                oviyalakshmikumar06@gmail.com
              </a>

            </div>

          </div>

          {/* Phone */}

          <div className={styles.infoCard}>

            <div className={styles.icon}>
              <FaPhoneAlt />
            </div>

            <div>

              <h4>Phone</h4>

              <p>+91 91235 71624</p>

            </div>

          </div>

          {/* Location */}

          <div className={styles.infoCard}>

            <div className={styles.icon}>
              <FaMapMarkerAlt />
            </div>

            <div>

              <h4>Location</h4>

              <p>Tamil Nadu, India</p>

            </div>

          </div>

          {/* Social */}

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

          </div>

        </div>

        {/* ================= FORM ================= */}

        <form
          className={styles.form}
          action="https://formsubmit.co/oviyalakshmikumar06@gmail.com"
          method="POST"
        >

          <input
            type="hidden"
            name="_subject"
            value="New Portfolio Contact"
          />

          <input
            type="hidden"
            name="_captcha"
            value="false"
          />

          <input
            type="hidden"
            name="_template"
            value="table"
          />

          <div className={styles.row}>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />

          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
          />

          <textarea
            name="message"
            rows="7"
            placeholder="Write your message..."
            required
          ></textarea>

          <button type="submit">

            <FaPaperPlane />

            <span>Send Message</span>

          </button>

        </form>

      </div>

    </section>
  );
}