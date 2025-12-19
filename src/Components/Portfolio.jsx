import React, { useState } from "react";
import Sidebar from "./Sidebar";
import "./css/Portfolio.css";    // change CSS to css
import "./css/Responsive.css";
import ProjectCard from "./ProjectCard";

const Portfolio = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showHireForm, setShowHireForm] = useState(false);

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

        {/* ===== MAIN CONTENT ===== */}
        <div
          className="hero-section"
          style={{
            marginLeft: "210px",
            padding: "40px",
            paddingBottom: "10px",
            width: "100%",
          }}
        >
          {/* Best Projects Section */}
          <div className="best-projects-section">
            <h2 className="best-title">A Collection of My Best Projects</h2>
            <p className="best-description">
              Explore my projects highlighting my web development and design
              expertise. From interactive applications to visually appealing
              websites, each project demonstrates my commitment to creating
              innovative, user-friendly solutions.
            </p>

            <button className="hire-btn" onClick={() => setShowHireForm(true)}>
              Hire Me
            </button>
          </div>

          <hr />

          {/* Project Cards */}
          <div className="projects-grid">
            {[1, 2, 3, 4, 5].map((id) => (
              <ProjectCard key={id} id={id} />
            ))}
          </div>
        </div>
      </div>

      {/* ================= Hire Me Popup ================= */}
      {showHireForm && (
        <div className="hire-popup-overlay">
          <div className="hire-popup-box">
            <button
              className="hire-popup-close"
              onClick={() => setShowHireForm(false)}
            >
              ✖
            </button>

            <h2 className="hire-popup-title">Hire Me</h2>
            <p className="hire-popup-text">
              Please share your hiring or project requirements below.
            </p>

            <form className="hire-popup-form">
              <input
                type="text"
                placeholder="Company / Client Name"
                required
                className="hire-popup-input"
              />

              <input
                type="email"
                placeholder="Email Address"
                required
                className="hire-popup-input"
              />

              <input
                type="tel"
                placeholder="Contact Number"
                className="hire-popup-input"
              />

              <select required className="hire-popup-input">
                <option value="">Hiring Type</option>
                <option>Full-time Job</option>
                <option>Freelance Project</option>
                <option>Contract</option>
              </select>

              <textarea
                rows="4"
                placeholder="Project details or job description"
                required
                className="hire-popup-textarea"
              ></textarea>

              <button type="submit" className="hire-popup-submit">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Portfolio;