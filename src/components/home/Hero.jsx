import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-inner">
                <h1 className="hero-heading">
                    Engineering software that <span className="accent">scales</span> with you.
                </h1>
                <p className="hero-subtext">
                    We build architectural foundations for high-growth enterprises - sophisticated 
                    technical solutions delivered with Nordic precision and editorial clarity.
                </p>
                <div className="hero-actions">
                    <Link to="/" className="hero-btn hero-btn-primary">
                        Start Project
                    </Link>
                    <Link to="/" className="hero-btn hero-btn-secondary">
                        View Portfolio
                    </Link>
                </div>
            </div>    
        </section>
    );
};

export default Hero;
