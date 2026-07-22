import { useState } from 'react';
import './footer.css';

export default function Footer() {
  const [active, setActive] = useState(null);
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <h2 className="footer-logo">ViworkTech</h2>
          <p className="footer-tagline">
            Architecting digital futures through intellectual clarity and sophisticated engineering.
          </p>
          <p className="footer-copy">© 2024 ViworkTech. All rights reserved.</p>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <h4 className="footer-col-title">Services</h4>
            <ul>
              <li><a href="#" onClick={() => setActive('web')} style={active === 'web' ? { color: 'red' } : {}}>Web Development</a></li>
              <li><a href="#" onClick={() => setActive('mobile')} style={active === 'mobile' ? { color: 'red' } : {}}>Mobile Apps</a></li>
              <li><a href="#" onClick={() => setActive('cloud')} style={active === 'cloud' ? { color: 'red' } : {}}>Cloud Infrastructure</a></li>
              <li><a href="#" onClick={() => setActive('ai')} style={active === 'ai' ? { color: 'red' } : {}}>AI Consulting</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Company</h4>
            <ul>
              <li><a href="#" onClick={() => setActive('story')} style={active === 'story' ? { color: 'red' } : {}}>Our Story</a></li>
              <li><a href="#" onClick={() => setActive('team')} style={active === 'team' ? { color: 'red' } : {}}>Team</a></li>
              <li><a href="#" onClick={() => setActive('careers')} style={active === 'careers' ? { color: 'red' } : {}}>Careers</a></li>
              <li><a href="#" onClick={() => setActive('privacy')} style={active === 'privacy' ? { color: 'red' } : {}}>Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
