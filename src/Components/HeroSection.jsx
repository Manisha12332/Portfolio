import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import Sidebar from "./Sidebar";
import ProjectCard from "./ProjectCard";

import "./CSS/HeroSection.css";
import "./CSS/Sidebar.css";
import "./CSS/Responsive.css";

import profileImage from "../assets/images/pro.jpeg";

const HeroSection = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

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

      <div style={{ display: "flex" }}>
        {/* ===== SIDEBAR ===== */}
        <Sidebar showMenu={showMenu} setShowMenu={setShowMenu} />

        {/* ===== HERO CONTENT ===== */}
        <div className="hero-section">
          {/* Hero Top */}
          <div className="mainnn">
            <div className="first">
              <p>HI, I'M A FREELANCER</p>

              <h1>
                <TypeAnimation
                  sequence={["Frontend Developer", 1000, "Web Developer", 1000]}
                  wrapper="span"
                  speed={80}
                  repeat={Infinity}
                />
              </h1>

              <p>
                I'm a software engineer specializing in scalable websites.
                <br />
                Explore my <a href="#">blog</a>,{" "}
                <a href="/portfolio">project portfolio</a>, and{" "}
                <a
                  href="/Manisha_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  online resume
                </a>.
              </p>

              <div className="buttons">
                <a href="/portfolio" className="portfolio-btn">
                  → Portfolio
                </a>

                <a
                  href="/Manisha_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-btn"
                >
                  📄 Resume
                </a>
              </div>
            </div>

            <div className="second">
              <img src={profileImage} alt="Profile" />
            </div>
          </div>

          {/* Stats */}
          <div className="stats">
            <div>
              <h2>0.6</h2>
              <p>Years of Experience</p>
            </div>
            <div>
              <h2>20</h2>
              <p>Projects Completed</p>
            </div>
            <div>
              <h2>50</h2>
              <p>Clients Worldwide</p>
            </div>
          </div>

          {/* What I Do */}
          <div className="what-i-do-section">
            <h2 className="section-title">What I do</h2>
            <p className="section-description">
              With over 6 months of experience in building software solutions,
              below is a quick overview of my primary technical skill sets and
              the technologies I use. Check out my{" "}
              <a href="/resume">resume</a> and{" "}
              <a href="/portfolio">portfolio</a>.
            </p>
          </div>

          {/* Work Together */}
          <div className="work-together-section">
            <h2 className="work-title">
              Let's work together on <br /> your next project
            </h2>
            <p className="work-description">
              I am available for full-time opportunities and freelance projects.
              Hire me to get your project done efficiently.
            </p>

            <button
              className="contact-btn"
              onClick={() => setShowPopup(true)}
            >
              → Let's Get In Touch
            </button>
          </div>

          {/* Featured Projects */}
          <div className="featured-projects-section">
            <div className="featured-left">
              <h2 className="section-title">Featured Projects</h2>
              <p className="section-description">
                These projects highlight my hands-on experience in designing
                and developing complete web applications.
              </p>
            </div>
            <div className="featured-right">
              <a href="/portfolio" className="portfolio-btnn">
                → View Portfolio
              </a>
            </div>
          </div>

          <div className="project-gallery">
            {[1, 2].map((id) => (
              <ProjectCard key={id} id={id} />
            ))}
          </div>

          {/* Footer */}
          <div className="footerr">
            <p>Copyright © 2025 Manisha.CV. All Rights Reserved.</p>
          </div>
        </div>
      </div>

      {/* ===== POPUP FORM ===== */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-form">
            <span className="close-btn" onClick={() => setShowPopup(false)}>
              ✕
            </span>

            <h3>Let's discuss your project requirements</h3>

            <form>
              <input type="text" placeholder="Company Name" />
              <input type="text" placeholder="HR / Recruiter Name" />
              <input type="email" placeholder="Your Email" />
              <input type="number" placeholder="Contact Number" />
              <input
                type="text"
                placeholder="Job Type (Full-time / Freelance)"
              />
              <textarea placeholder="Message / Job Details"></textarea>

              <button type="submit">Hire Me</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroSection;