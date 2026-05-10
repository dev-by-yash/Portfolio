import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="section-pad" style={{ background: "var(--bg2)" }}>
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">Featured Projects</div>
          <h2 className="section-title">Things I&apos;ve built</h2>
          <p className="section-desc">A selection of projects ranging from AI-powered tools to fully decentralized Web3 protocols.</p>
        </div>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <div
              className={`project-card reveal${i > 0 ? ` reveal-delay-${i}` : ""}`}
              key={p.title}
            >
              {p.featured && <div className="project-feature">Featured</div>}
              <div className="project-card-top">
                <div className="project-number">{p.num}</div>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>
              </div>
              <div className="project-card-bot">
                <div className="project-stack">
                  {p.tags.map((t) => (
                    <span className="tag" key={t}>{t}</span>
                  ))}
                </div>
                <a href={p.link} target="_blank" rel="noreferrer" className="project-link">↗</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
