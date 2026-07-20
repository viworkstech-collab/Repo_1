function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div
        className="project-media"
        style={{
          '--card-accent': project.accent,
          background: `linear-gradient(135deg, ${project.accent}22 0%, #ffffff 100%)`,
        }}
      >
        <span className="project-badge">{project.category}</span>
        <div className="project-visual" aria-hidden="true">
          <span className="visual-swatch" />
          <span className="visual-bar" />
          <span className="visual-bar short" />
        </div>
      </div>

      <div className="project-content">
        <div className="project-topline">
          <h3>{project.title}</h3>
          <span className="project-stat">{project.stat}</span>
        </div>
        <p>{project.description}</p>
        <ul className="tag-list">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default ProjectCard
