import React from 'react';

const featuredData = {
  large: {
    tag: 'SYSTEMS ARCHITECTURE',
    year: '2024',
    title: 'Ethereal Cloud Infrastructure',
    description:
      'A complete overhaul of the global server distribution network for a leading SaaS provider, focused on reducing latency by 40% while maintaining a carbon-neutral footprint.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    link: '#',
  },
  secondary: [
    {
      tag: 'FINTECH',
      title: 'Lumina Banking Experience',
      description:
        'Designing a sophisticated wealth management portal for private equity clients, emphasizing data clarity and architectural rigor.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
      link: '#',
    },
    {
      tag: 'ARTIFICIAL INTELLIGENCE',
      title: 'Cerebro AI Deployment',
      description:
        'Implementing a bespoke machine learning model for predictive logistics in the Scandinavian manufacturing sector.',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
      link: '#',
    },
  ],
};

export default function FeaturedProjects() {
  return (
    <div className="featured-projects">
      {/* Top Main Featured Item */}
      <div className="project-large">
        <div className="project-img-wrapper">
          <img src={featuredData.large.image} alt={featuredData.large.title} />
        </div>
        <div>
          <div className="meta-info">
            {featuredData.large.tag} • {featuredData.large.year}
          </div>
          <h2 className="project-title">{featuredData.large.title}</h2>
          <p className="project-desc">{featuredData.large.description}</p>
          <a href={featuredData.large.link} className="case-study-link">
            Read Case Study <span style={{ marginLeft: '4px' }}>→</span>
          </a>
        </div>
      </div>

      {/* 2-Column Grid Below */}
      <div className="projects-grid-2">
        {featuredData.secondary.map((item, idx) => (
          <div key={idx}>
            <div className="project-img-wrapper" style={{ height: '240px' }}>
              <img src={item.image} alt={item.title} />
            </div>
            <div className="meta-info" style={{ marginTop: '1rem' }}>{item.tag}</div>
            <h3 className="project-title">{item.title}</h3>
            <p className="project-desc">{item.description}</p>
            <a href={item.link} className="case-study-link">
              Read Case Study <span style={{ marginLeft: '4px' }}>→</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}