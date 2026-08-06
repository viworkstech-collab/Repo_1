import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';


const footerLinks = {
    Services: [
        { label: 'Cloud Engineering', to: '/services' },
        { label: 'Security Audits', to: '/services' },
        { label: 'Data Pipelines', to: '/services' },
    ],
    Company: [
        { label: 'About', to: '/about' },
        { label: 'Careers', to: '/careers' },
        { label: 'Contact', to: '/contact' },
    ],
    
    Legal: [
        { label: 'Privacy Policy', to: '/privacy-policy' },
        { label: 'Terms of Service', to: '/terms-of-service' },
    ],
};


const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="footer-section">
            <div className="footer-inner">
                <div className="footer-top">
                    <div className="footer-brand">
                    <h3 className="footer-brand-title">ViworkTech</h3>
                    <p className="footer-brand-text">
                        Engineering excellence since 2018.
                    </p>
                </div>

                <nav className="footer-col" aria-label="Services">
                    <h4 className="footer-col-title">Services</h4>
                    <ul>
                        {footerLinks.Services.map(({ label, to }) => (
                            <li key={label}><Link to={to}>{label}</Link></li>
                        ))}
                    </ul>
                </nav>

                <nav className="footer-col" aria-label="Company">
                    <h4 className="footer-col-title">Company</h4>
                    <ul>
                        {footerLinks.Company.map(({ label, to }) => (
                            <li key={label}><Link to={to}>{label}</Link></li>
                        ))}
                    </ul>
                </nav>

                <nav className="footer-col" aria-label="Legal">
                    <h4 className="footer-col-title">Legal</h4>
                    <ul>
                        {footerLinks.Legal.map(({ label, to }) => (
                            <li key={label}><Link to={to}>{label}</Link></li>
                        ))}
                    </ul>
                    <p className="footer-copyright">
                     © {year} ViworkTech. All rights reserved.
                    </p>
                </nav> 
            </div>
        </div>
    </footer>
    );
};

export default Footer;