import React, { useState } from "react";
import Sidebar from "./Sidebar";
import "./css/Services.css";
import "./css/Sidebar.css";
import "./css/Responsive.css";

const Services = () => {
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

      <div style={{ display: "flex" }}>
        {/* ===== SIDEBAR ===== */}
        <Sidebar showMenu={showMenu} setShowMenu={setShowMenu} />

        {/* ===== SERVICES CONTENT ===== */}
        <div
          className="services-section"
        >
          <div className="services-header">
            <h2>Services</h2>
            <p>What I Can Do For You</p>
            <span className="line"></span>
          </div>

          <div className="services-grid">
            {/* Card 1 */}
            <div className="service-card">
              <div className="icon blue">🌐</div>
              <h3>Website Development</h3>
              <p>
                Modern and responsive websites built with latest web technologies.
              </p>
              <ul>
                <li>Responsive Design</li>
                <li>Clean UI</li>
                <li>SEO Friendly</li>
              </ul>
              <a href="/contact"><button>Contact Me</button></a>
            </div>

            {/* Card 2 */}
            <div className="service-card">
              <div className="icon purple">⚛️</div>
              <h3>React Frontend Development</h3>
              <p>
                Interactive and dynamic frontend applications using React.js.
              </p>
              <ul>
                <li>React Hooks</li>
                <li>Reusable Components</li>
                <li>API Integration</li>
              </ul>
              <a href="/contact"><button>Contact Me</button></a>
            </div>

            {/* Card 3 */}
            <div className="service-card">
              <div className="icon green">🗄️</div>
              <h3>Full-Stack MERN Applications</h3>
              <p>
                Complete MERN stack applications from frontend to backend.
              </p>
              <ul>
                <li>Node & Express</li>
                <li>MongoDB</li>
                <li>Authentication</li>
              </ul>
              <a href="/contact"><button>Contact Me</button></a>
            </div>

            {/* Card 4 */}
            <div className="service-card">
              <div className="icon yellow">🎨</div>
              <h3>Website Redesign</h3>
              <p>
                Redesign and optimize existing websites for better performance.
              </p>
              <ul>
                <li>Modern UI</li>
                <li>Speed Optimization</li>
                <li>Mobile Responsive</li>
              </ul>
              <a href="/contact"><button>Contact Me</button></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;