import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="footer-logo">
          <h2>VivorkTech</h2>

          <p>
            We engineer intelligent digital systems that scale with
            your business.
          </p>
        </div>

        <div>
          <h4>Services</h4>
          <p>Web Development</p>
          <p>Mobile Apps</p>
          <p>Cloud Solutions</p>
          <p>UI/UX Design</p>
        </div>

        <div>
          <h4>Company</h4>
          <p>About</p>
          <p>Portfolio</p>
          <p>Careers</p>
          <p>Blog</p>
        </div>

        <div>
          <h4>Legal</h4>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>

      </div>

      <hr />

      <div className="footer-bottom">
        <p>© 2024 VivorkTech. All rights reserved.</p>

        <div className="social-links">
          <span>LinkedIn</span>
          <span>GitHub</span>
          <span>Twitter</span>
        </div>
      </div>

    </footer>
  );
};

export default Footer;