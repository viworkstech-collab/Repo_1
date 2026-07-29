import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const closeMenu = () => {
    setIsMenuOpen(false);
  };



  return (
    <nav className="navbar">
        <div className="nav-top">
          <div className="nav-left">
            <NavLink to="/" className="nav-title-link">
              <h1 className="nav-title">ViworkTech</h1>
            </NavLink>
          </div>
          
          <div className={isMenuOpen ? "nav-right active" : "nav-right"}>
            <NavLink to="/home" onClick={closeMenu} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
            <NavLink to="/services" onClick={closeMenu} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Services</NavLink>
            <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>About</NavLink>
            <NavLink to="/portfolio" onClick={closeMenu} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Portfolio</NavLink>
            <NavLink to="/careers" onClick={closeMenu} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Careers</NavLink>
            <NavLink to="/blogs" onClick={closeMenu} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Blogs</NavLink>
            <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Contact</NavLink>

            <div className="Category-bar mobile-only">
              <button className="Category-button">Get In Touch</button>
            </div>
          </div>
          <div className="Category-bar desktop-only">
            <button className="Category-button">Get In Touch</button>
          </div>
          
        <button className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? (
            <span className="close-icon">&times;</span>
          ) : (
            <span className="hamburger-icon">
              <span></span>
              <span></span>
              <span></span>
            </span>
          )}
            
        </button>
      </div>
        
    </nav>

  );
};

export default Navbar;