import { services } from "./data";

const ServiceSection = () => {
  return (
    <section className="services-section">
      {services.map((service, index) => (
        <div key={index}>

          <div className="service-card">

            <div className="left">

              <h2>{service.title}</h2>

              <p>{service.description}</p>

              <div className="tags">
                {service.tags.map((tag, i) => (
                  <button key={i}>{tag}</button>
                ))}
              </div>

            </div>

            <div className="right">

              <ul>
                {service.checklist.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

            </div>

          </div>

          {index === 1 && (
            <img
              src={service.image}
              alt={service.title}
              className="service-image"
            />
          )}

        </div>
      ))}
    </section>
  );
};

export default ServiceSection;