import { process } from "./data";

const ProcessSection = () => {
  return (
    <section className="process">

      <h2>A framework of absolute precision.</h2>

      <div className="process-grid">

        {process.map((item, index) => (
          <div className="process-card" key={index}>

            <span>Phase 0{index + 1}</span>

            <h3>{item.title}</h3>

            <p>{item.description}</p>

          </div>
        ))}

      </div>

    </section>
  );
};

export default ProcessSection;