import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">

      <div className="logo">
        <span className="logo-circle">V</span>
        <span className="logo-text">VivorkTech</span>
      </div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Services</li>
        <li>About</li>
        <li>Portfolio</li>
        <li>Careers</li>
        <li className="active">Blog</li>
        <li>Contact</li>
      </ul>

      <button className="touch-btn">
        Get in Touch
      </button>

    </header>
  );
};

export default Navbar;