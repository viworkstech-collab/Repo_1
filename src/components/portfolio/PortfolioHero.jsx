function PortfolioHero() {
  return (
    <section className="portfolio-hero">
      <div className="hero-copy">
        <p className="eyebrow">Portfolio • 2026</p>
        <h1>Designing thoughtful digital experiences that feel human.</h1>
        <p className="hero-description">
          I blend UX strategy, visual design, and front-end craft to create calm,
          high-impact interfaces for teams that care about the details.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="button primary">
            Explore projects
          </a>
          <a href="mailto:hello@example.com" className="button secondary">
            Let&apos;s talk
          </a>
        </div>

        <div className="metrics-row" aria-label="Highlights">
          <div className="metric">
            <strong>6+</strong>
            <span>Years shaping digital products</span>
          </div>
          <div className="metric">
            <strong>30+</strong>
            <span>Launches across web and product</span>
          </div>
          <div className="metric">
            <strong>100%</strong>
            <span>Focus on clarity and usability</span>
          </div>
        </div>
      </div>

      <div className="hero-media">
        <div className="hero-card">
          <p className="hero-card-title">Current focus</p>
          <h2>Design systems, product storytelling, and polished interactions.</h2>
          <p>
            I help early-stage teams turn complex ideas into elegant, usable
            experiences that feel consistent from first click to final handoff.
          </p>
          <div className="hero-card-chip">Available for select collaborations</div>
        </div>
      </div>
    </section>
  )
}

export default PortfolioHero
