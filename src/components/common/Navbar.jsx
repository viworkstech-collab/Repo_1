import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="nav-top">
          <div className="nav-left">
            <a href="/" className="nav-title-link">
              <h1 className="nav-title">ViworkTech</h1>
            </a>
          </div>
          <div className="nav-right">
            <Link to="/home" className="nav-link">Home</Link>
            <Link to="/services" className="nav-link">Services</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/Portfolio" className="nav-link">Portfolio</Link>
            <Link to="/careers" className="nav-link">Careers</Link>
            <Link to="/blogs" className="nav-link">Blog</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </div>
          <div className="Category-bar">
            <button className="Category-button">Get Started</button>

          </div>
            
        </div>
        
    </nav>
  );
};

export default Navbar;