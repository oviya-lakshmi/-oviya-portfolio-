import styles from "./Contact.module.css";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className={styles.contact}>

      <h2>Let's Connect</h2>

      <p className={styles.subtitle}>
        Looking for internships, collaborations, or exciting opportunities?
        Feel free to reach out. I'd love to connect with you!
      </p>

      <div className={styles.container}>

        {/* LEFT CARD */}

        <div className={styles.info}>

          <div className={styles.infoCard}>
            <FaEnvelope className={styles.icon} />

            <div>
              <h4>Email</h4>

              <a href="mailto:oviyalakshmikumar06@gmail.com">
                oviyalakshmikumar06@gmail.com
              </a>
            </div>
          </div>

          <div className={styles.infoCard}>
            <FaPhoneAlt className={styles.icon} />

            <div>
              <h4>Phone</h4>

              <p>+91 91235 71624</p>
            </div>
          </div>

          <div className={styles.infoCard}>
            <FaMapMarkerAlt className={styles.icon} />

            <div>
              <h4>Location</h4>

              <p>Tamil Nadu, India</p>
            </div>
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
              href="https://www.linkedin.com/in/oviyalakshmi-k/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

          </div>

        </div>

        {/* FORM */}

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

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Write your message..."
            required
          ></textarea>

          <button type="submit">
            <FaPaperPlane />
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;