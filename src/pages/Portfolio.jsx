import '../components/portfolio/Portfolio.css'
import PortfolioHero from '../components/portfolio/PortfolioHero'
import FeaturedProjects from '../components/portfolio/FeaturedProjects'
import CTA from '../components/portfolio/CTA'

const projects = [
  {
    title: 'Northstar Studio',
    category: 'Brand experience',
    description:
      'Reimagined a climate-tech platform with a new content architecture, clearer onboarding, and a calmer visual system.',
    tags: ['UX strategy', 'UI systems', 'Motion'],
    accent: '#5b8cff',
    stat: '12-week sprint',
  },
  {
    title: 'Lumen Commerce',
    category: 'E-commerce redesign',
    description:
      'Elevated a product discovery experience with guided shopping flows, modular cards, and conversion-focused messaging.',
    tags: ['Research', 'Visual design', 'Prototyping'],
    accent: '#ff7a59',
    stat: '8-week sprint',
  },
  {
    title: 'Atlas Health',
    category: 'Patient experience',
    description:
      'Built a compassionate digital journey for care navigation, reducing friction for first-time patients and caregivers.',
    tags: ['Accessibility', 'Journey mapping', 'Figma'],
    accent: '#2e9e7d',
    stat: 'Responsive web',
  },
  {
    title: 'Aster Labs',
    category: 'Product launch',
    description:
      'Delivered a launch-ready landing experience with polished storytelling, richer visuals, and stronger sign-up momentum.',
    tags: ['Landing pages', 'Frontend', 'Content design'],
    accent: '#8d5cf6',
    stat: 'Launch-ready',
  },
]

function Portfolio() {
  return (
    <main className="portfolio-page">
      <PortfolioHero />
      <FeaturedProjects projects={projects} />
      <CTA />
    </main>
  )
}

export default Portfolio
