import React from "react";
import "./About.css";
import { cta } from "./data";

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="container">

        <h2>{cta.title}</h2>

        <p>{cta.description}</p>

        <button className="cta-btn">
          {cta.button}
        </button>

      </div>
    </section>
  );
};

export default CTA;