"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { skills, type Skill } from "@/lib/data";

const cats = [
  { key: "all", label: "All" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "blockchain", label: "Blockchain" },
  { key: "lang", label: "Languages" },
];

export default function Skills() {
  const [active, setActive] = useState("all");
  const [animated, setAnimated] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  const filtered: Skill[] = active === "all" ? skills : skills.filter((s) => s.cat === active);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" className="section-pad" style={{ background: "var(--bg2)" }}>
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">Technical Skills</div>
          <h2 className="section-title">Tools of the trade</h2>
          <p className="section-desc">A curated stack built over years of real-world projects, internships, and hackathons.</p>
        </div>
        <div className="skills-cats reveal">
          {cats.map((c) => (
            <button
              key={c.key}
              className={`skill-cat-btn${active === c.key ? " active" : ""}`}
              onClick={() => setActive(c.key)}
            >
              {c.label}
            </button>
          ))}
        </div>
        <div className="skills-grid reveal reveal-delay-1" ref={gridRef}>
          {filtered.map((skill, i) => (
            <div className="skill-card" key={`${skill.name}-${i}`}>
              <div className="skill-icon">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={36}
                  height={36}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="skill-name">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
