import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="nav-top">
          <div className="nav-left">
            <NavLink to="/" className="nav-title-link">
              <h1 className="nav-title">ViworkTech</h1>
            </NavLink>
          </div>
          <div className="nav-right">
            <NavLink to="/home" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
            <NavLink to="/services" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Services</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>About</NavLink>
            <NavLink to="/portfolio" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Portfolio</NavLink>
            <NavLink to="/careers" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Careers</NavLink>
            <NavLink to="/blogs" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Blog</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Contact</NavLink>
          </div>
          <div className="Category-bar">
            <button className="Category-button">Get In Touch</button>

          </div>
            
        </div>
        
    </nav>
  );
};

export default Navbar;