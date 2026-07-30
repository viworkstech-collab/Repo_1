import React from "react";
import "./About.css";
import { missionVision } from "./data";

const MissionVision = () => {
  return (
    <section className="mission-section">
      <div className="container">

        <div className="section-title">
          <h2>Mission & Vision</h2>
          <p>
            Everything we build is driven by purpose,
            innovation, and long-term value.
          </p>
        </div>

        <div className="mission-grid">
          {missionVision.map((item) => (
            <div className="mission-card" key={item.id}>
              <div className="mission-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MissionVision;