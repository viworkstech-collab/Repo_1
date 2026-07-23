import React from 'react';
import PortfolioHero from '../components/portfolio/PortfolioHero';
import FeaturedProjects from '../components/portfolio/FeaturedProjects';
import ProjectCard from '../components/portfolio/ProjectCard';
import CTA from '../components/portfolio/CTA';

import '../components/portfolio/Portfolio.css';

export default function Portfolio() {
  return (
    <div className="portfolio-container">
      <PortfolioHero />
      <FeaturedProjects />
      <ProjectCard />
      <CTA />
    </div>
  );
}