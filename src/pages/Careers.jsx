import '../components/careers/Careers.css';
import CareersHero from '../components/careers/CareersHero';
import Benefits from '../components/careers/Benefits';
import OpenPositions from '../components/careers/OpenPositions';
import ApplicationForm from '../components/careers/ApplicationForm';

export default function Careers() {
  return (
    <div className="careers-page">
      <nav className="careers-nav">
        <a href="/" className="nav-logo">ViworkTech</a>
        <span className="nav-page-title">Careers</span>
      </nav>

      <CareersHero />
      <Benefits />
      <OpenPositions />
      <ApplicationForm />
    </div>
  );
}
