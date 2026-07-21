import "../components/services/Services.css";

import ServicesHero from "../components/services/ServicesHero";
import ServiceSection from "../components/services/ServiceSection";
import ProcessSection from "../components/services/ProcessSection";
import CTA from "../components/services/CTA";

const Services = () => {
  return (
    <main className="services-page">
      <ServicesHero />
      <ServiceSection />
      <ProcessSection />
      <CTA />
    </main>
  );
};

export default Services;