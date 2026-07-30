import React from "react";
import "./About.css";
import { heroData } from "./data";

const AboutHero = () => {
  return (
    <section className="about-hero">
      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-tag">ABOUT US</span>

          <h1>{heroData.title}</h1>

          <p>{heroData.subtitle}</p>

          <button className="hero-btn">
            {heroData.button}
          </button>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900"
            alt="About VivorkTech"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutHero;