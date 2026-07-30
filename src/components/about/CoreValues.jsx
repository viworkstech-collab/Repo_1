import React from "react";
import "./About.css";
import { coreValues } from "./data";

const CoreValues = () => {
  return (
    <section className="values-section">
      <div className="container">

        <div className="section-title">
          <h2>Our Core Values</h2>
          <p>
            The principles that guide every project we build.
          </p>
        </div>

        <div className="values-grid">
          {coreValues.map((value) => (
            <div className="value-card" key={value.id}>
              <div className="value-icon">
                {value.icon}
              </div>

              <h3>{value.title}</h3>

              <p>{value.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CoreValues;