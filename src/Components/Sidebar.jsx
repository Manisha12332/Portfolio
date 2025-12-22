import React from "react";
import profileImg from "../assets/images/pro.jpeg";
import { NavLink } from "react-router-dom";

import './css/Sidebar.css'
import "./css/Responsive.css";

const Sidebar = ({ showMenu, setShowMenu }) => {
  return (
    <div className={`sidebar ${showMenu ? "open" : ""}`}>
      
      {/* ===== Close button (Mobile Only) ===== */}
      <button
        className="close-menu"
        onClick={() => {
          console.log("Close button clicked!"); // Debug log
          setShowMenu(false);
        }}
        aria-label="Close menu"
      >
        ✕
      </button>

      {/* ===== Profile ===== */}
      <div className="profileImg">
        <img src={profileImg} alt="Profile" />
      </div>

      <h3 className="titlee">Manisha Kumari</h3>
      <p className="jobprofile">Frontend Developer</p>

      {/* ===== Social Icons ===== */}
      <div className="socialicons">
        <a
          href="https://www.linkedin.com/in/manisha-kumari-a4218827a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>

        <a
          href="https://github.com/Manisha12332"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github"></i>
        </a>

        <a href="#">
          <i className="fa-brands fa-x-twitter"></i>
        </a>

        <a href="#">
          <i className="fa-brands fa-facebook-f"></i>
        </a>
      </div>

      <hr className="line" />

      {/* ===== Menu ===== */}
      <div className="menu">
        <NavLink
          to="/"
          onClick={() => setShowMenu(false)}
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <i className="fa-solid fa-user"></i> About Me
        </NavLink>

        <NavLink
          to="/portfolio"
          onClick={() => setShowMenu(false)}
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <i className="fa-regular fa-folder"></i> Portfolio
        </NavLink>

        <NavLink
          to="/services"
          onClick={() => setShowMenu(false)}
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <i className="fa-solid fa-tags"></i> Services
        </NavLink>

        <NavLink
          to="/resume"
          onClick={() => setShowMenu(false)}
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <i className="fa-regular fa-file-lines"></i> Resume
        </NavLink>

        <NavLink
          to="/contact"
          onClick={() => setShowMenu(false)}
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <i className="fa-regular fa-envelope"></i> Contact
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;