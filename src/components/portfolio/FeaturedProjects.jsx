import ProjectCard from './ProjectCard'

function FeaturedProjects({ projects }) {
  return (
    <section id="projects" className="featured-projects">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Selected work</p>
          <h2>Featured projects</h2>
        </div>
        <p className="section-copy">
          A mix of experience design, product thinking, and thoughtful front-end
          execution.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}

export default FeaturedProjects
