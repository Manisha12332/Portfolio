import React, { useState } from "react";
import Sidebar from "./Sidebar";
import "./CSS/Contact.css";
import "./CSS/Responsive.css";

const Contact = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      {/* ===== MOBILE HEADER ===== */}
      <div className="mobile-header">
        <h3 className="mobile-logo">Manisha</h3>
        <button
          className="hamburger-btn"
          onClick={() => {
            console.log("Hamburger clicked!"); // Debug log
            setShowMenu(true);
          }}
          aria-label="Open menu"
        >
          ☰
        </button>
      </div>

      <div className="contact-wrapper">
        {/* ===== SIDEBAR ===== */}
        <Sidebar showMenu={showMenu} setShowMenu={setShowMenu} />

        {/* ===== MAIN CONTENT ===== */}
        <div className="contact-container">
          <div className="contact-card">

            {/* Left Info */}
            <div className="contact-info">
              <h2>Contact Me</h2>
              <p>
                Feel free to reach out for job opportunities, collaborations, or
                freelance work. I'd love to connect with you.
              </p>

              <div className="info-item">
                <span>📧</span>
                <p>manishakumari7549maa@gmail.com</p>
              </div>

              <div className="info-item">
                <span>📞</span>
                <p>+91 6206494630</p>
              </div>

              <div className="info-item">
                <span>📍</span>
                <p>Noida, India</p>
              </div>

              <div className="social-links">
                <a href="https://www.linkedin.com/in/manisha-kumari-a4218827a/" target="_blank" rel="noreferrer">LinkedIn</a>
                <a href="https://github.com/Manisha12332" target="_blank" rel="noreferrer">GitHub</a>
                <a href="/" target="_blank" rel="noreferrer">Portfolio</a>
              </div>
            </div>

            {/* Right Form */}
            <div className="contact-form">
              <h3>Send a Message</h3>

              <form>
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email" />
                <input type="text" placeholder="Job Type" />
                <textarea placeholder="Your Message"></textarea>

                <button type="submit">Send Message</button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;