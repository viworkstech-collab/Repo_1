import React from 'react';

const miniProjects = [
  {
    tag: 'RETAIL',
    title: 'Vesta E-Commerce',
    description:
      'Scalable headless commerce solution for a premium furniture brand, focusing on high-speed transitions and editorial product display.',
    link: '#',
  },
  {
    tag: 'HEALTHCARE',
    title: 'Pulse Med-Tech',
    description:
      'A HIPAA-compliant data platform that streamlines patient records and diagnostic workflows using real-time sync.',
    link: '#',
  },
  {
    tag: 'ENERGY',
    title: 'Nordic Grid Analytics',
    description:
      'Visualizing energy consumption patterns across urban centers to optimize sustainable power distribution.',
    link: '#',
  },
];

export default function ProjectCard() {
  return (
    <div className="projects-grid-3">
      {miniProjects.map((item, index) => (
        <div key={index} className="mini-card">
          <div>
            <span className="badge">{item.tag}</span>
            <h4 className="project-title" style={{ fontSize: '1.125rem' }}>
              {item.title}
            </h4>
            <p className="project-desc" style={{ fontSize: '0.75rem' }}>
              {item.description}
            </p>
          </div>
          <a href={item.link} className="case-study-link">
            Read Case Study <span style={{ marginLeft: '4px' }}>→</span>
          </a>
        </div>
      ))}
    </div>
  );
}