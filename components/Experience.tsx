import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="section-pad" style={{ background: "var(--bg)" }}>
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">Work Experience</div>
          <h2 className="section-title">Where I&apos;ve built</h2>
        </div>
        <div className="timeline">
          {experience.map((exp) => (
            <div className="timeline-item reveal" key={exp.title}>
              <div className="timeline-dot" />
              <div className="timeline-meta">
                <span className="timeline-date">{exp.date}</span>
                <span className="timeline-company">{exp.company}</span>
              </div>
              <h3 className="timeline-title">{exp.title}</h3>
              <p className="timeline-subtitle">{exp.subtitle}</p>
              <div className="timeline-card">
                <ul>
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
                <div className="timeline-tags">
                  {exp.tags.map((t) => (
                    <span className="tag" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
