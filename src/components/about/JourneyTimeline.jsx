import React from "react";
import "./About.css";
import { timeline } from "./data";

const JourneyTimeline = () => {
  return (
    <section className="timeline-section">
      <div className="container">

        <div className="section-title">
          <h2>Our Journey</h2>
          <p>
            Milestones that shaped VivorkTech.
          </p>
        </div>

        <div className="timeline">

          {timeline.map((item, index) => (
            <div
              className={`timeline-item ${
                index % 2 === 0 ? "left" : "right"
              }`}
              key={item.year}
            >
              <div className="timeline-dot"></div>

              <div className="timeline-card">
                <span className="timeline-year">
                  {item.year}
                </span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default JourneyTimeline;