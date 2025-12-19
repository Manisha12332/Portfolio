import React, { useState } from "react";
import Sidebar from "./Sidebar";
import "./CSS/Resume.css";
import "./CSS/Responsive.css";

const Resume = () => {
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

      <div className="resume-wrapper">
        {/* ===== SIDEBAR ===== */}
        <Sidebar showMenu={showMenu} setShowMenu={setShowMenu} />

        {/* ===== RESUME CONTENT ===== */}
        <div className="resume-container">
          <div className="resume-page">

            {/* Header */}
            <div className="resume-header">
              <h1>Manisha Kumari</h1>
              <p className="role">MERN Stack Developer | Frontend Developer | FullStack  Developer</p>
              <p className="contact">
                🌍 Noida (Uttar Pradesh) | 📞 +91 6206494630 |  📧 manishakumari7549maa@gmail.com
              </p>
            </div>

            {/* Summary */}
            <section className="resume-section">
              <h2>Professional Summary</h2>
              <p>
                A highly motivated and solutions-oriented Frontend Developer with <strong>6 month</strong>  of experience at Labtron
                Equipment Ltd, where I contributed to building scalable, responsive, and user-focused web applications. Skilled
                in technologies such as <strong>HTML5, CSS3, JavaScript, ReactJS, and SQL</strong> Strong in creating high-performance
                interfaces with clean, maintainable code and seamless user experiences.

              </p>
            </section>

            {/* Skills */}
            <section className="resume-section">
              <h2>Technical Skills</h2>
              <div className="skills-grid">
                <span>HTML5</span>
                <span>CSS3</span>
                <span>JavaScript</span>
                <span>React.js</span>
                <span>Node.js</span>
                <span>Express.js</span>
                <span>MongoDB</span>
                <span>JIRA</span>
                <span>SDLC</span>
                <span>STLC</span>
                <span>Git & GitHub</span>
              </div>
            </section>

            {/* Experience */}
            <section className="resume-section">
              <h2>Experience</h2>
              <h3>React.js Developer</h3>
              <p className="company">
                Labtron Equipment Pvt Ltd (02 June 2025 - Present)
              </p>
              <ul>
                <li>Developed and maintained more than 10 web applications using ReactJS and JavaScript, SQL.</li>
                <li>Created scalable and reusable components to improve development efficiency</li>
                <li>Built responsive interfaces with a focus on performance, accessibility, and cross-browser
                  compatibility.</li>
                <li>Worked closely with backend and design teams to implement API integrations and dynamic UI
                  features</li>
              </ul>
            </section>

            {/* Projects */}
            <section className="resume-section">
              <h2>Projects</h2>

              <div className="project-item">
                <h3>Bid Venchure</h3>
                <ul>
                  <li>
                    A bidding platform connecting event organizers with restaurants to find
                    competitive venues.
                  </li>
                  <li>
                    <strong>Website:</strong>{" "}
                    <a
                      href="https://bidvenchure.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Project
                    </a>
                  </li>
                  <li>
                    <strong>Technologies:</strong> HTML5, CSS3, React.js, SQL, Node.js
                  </li>
                </ul>
              </div>

              <div className="project-item">
                <h3>Labotemp</h3>
                <ul>
                  <li>
                    Developed a laboratory-based e-commerce website offering a wide range
                    of laboratory equipment.
                  </li>
                  <li>
                    Implemented dynamic product listings, responsive UI, and integrated
                    APIs for real-time product data.
                  </li>
                  <li>
                    <strong>Website:</strong>{" "}
                    <a
                      href="https://labotemp.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Project
                    </a>
                  </li>
                  <li>
                    <strong>Technologies:</strong> HTML5, CSS3, Bootstrap
                  </li>
                </ul>
              </div>

              <div className="project-item">
                <h3>OurMicroLife</h3>
                <ul>
                  <li>
                    A web-based e-commerce platform designed to provide an interactive shopping experience.
                  </li>
                  <li>
                    Created reusable React components with product filtering and responsive
                    design.
                  </li>
                  <li>
                    <strong>Website:</strong>{" "}
                    <a
                      href="https://www.ourmicrolife.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Project
                    </a>
                  </li>
                  <li>
                    <strong>Technologies:</strong> HTML5, CSS3, React.js, Node.js, SQL
                  </li>
                </ul>
              </div>

              <div className="project-item">
                <h3>MedicalDeals</h3>
                <ul>
                  <li>
                    Built an e-commerce platform for laboratory supplies targeting research
                    labs.
                  </li>
                  <li>
                    Implemented reusable components, product filtering, and responsive
                    layouts.
                  </li>
                  <li>
                    <strong>Website:</strong>{" "}
                    <a
                      href="https://www.medicaldeals.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Project
                    </a>
                  </li>
                  <li>
                    <strong>Technologies:</strong> HTML5, CSS3, Bootstrap
                  </li>
                </ul>
              </div>
            </section>


            {/* Education */}
            <section className="resume-section">
              <h2>Education</h2>

              <div className="education-item">
                <h3>Master in Computer Application</h3>
                <ul>
                  <li>Lovely Professional University</li>
                  <li>Phagwara, India (2022 – 2024)</li>
                  <li>71%</li>
                </ul>
              </div>

              <div className="education-item">
                <h3>Bachelor in Computer Application</h3>
                <ul>
                  <li>Patliputra University</li>
                  <li>Patna, IN (2018 – 2021)</li>
                  <li>61%</li>
                </ul>
              </div>
            </section>

          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;