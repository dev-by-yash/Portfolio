import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="section-pad">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">Education</div>
          <h2 className="section-title">Academic foundation</h2>
        </div>
        <div className="edu-grid">
          {education.map((edu, i) => (
            <div className={`edu-card reveal${i > 0 ? " reveal-delay-2" : ""}`} key={edu.degree}>
              <div className="edu-year">{edu.year}</div>
              <h3 className="edu-degree">{edu.degree}</h3>
              <p className="edu-inst">{edu.inst}</p>
              <div className="edu-score">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none">
                  <path d="M12 2L14.5 8.5H21L15.7 12.3L17.8 19L12 15.3L6.2 19L8.3 12.3L3 8.5H9.5L12 2Z" fill="var(--accent)" stroke="var(--accent)" strokeWidth="1" strokeLinejoin="round" />
                </svg>
                {edu.score}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
