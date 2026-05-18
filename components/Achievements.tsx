import { achievements } from "@/lib/data";

const icons = [
  // SIH - Indian flag colors
  <svg key="sih" viewBox="0 0 24 24" width="36" height="36" fill="none"><rect x="2" y="10" width="20" height="4" fill="#FF9933"/><rect x="2" y="14" width="20" height="4" fill="white"/><rect x="2" y="18" width="20" height="4" rx="2" fill="#138808"/><circle cx="12" cy="14" r="2.5" stroke="#000080" strokeWidth="1" fill="none"/></svg>,
  // ETHGlobal - globe
  <svg key="eth" viewBox="0 0 24 24" width="36" height="36" fill="none"><circle cx="12" cy="12" r="10" stroke="#47c8ff" strokeWidth="1.5" fill="none" opacity="0.3"/><path d="M2 12h20M12 2C8 7 8 17 12 22M12 2c4 5 4 15 0 20" stroke="#47c8ff" strokeWidth="1.2" fill="none"/></svg>,
  // LeetCode - star
  <svg key="lc" viewBox="0 0 24 24" width="36" height="36" fill="none"><path d="M12 3L14.5 8.5H20L15.5 11.5L17.5 17L12 13.5L6.5 17L8.5 11.5L4 8.5H9.5L12 3Z" stroke="var(--accent)" strokeWidth="1.5" fill="var(--accent)" fillOpacity="0.2" strokeLinejoin="round"/></svg>,
];

export default function Achievements() {
  return (
    <section id="achievements" className="section-pad">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">Achievements</div>
          <h2 className="section-title">Highlights</h2>
        </div>
        <div className="achievements-grid">
          {achievements.map((a, i) => (
            <div className={`achievement-card reveal${i > 0 ? ` reveal-delay-${i}` : ""}`} key={a.title}>
              <div className="achievement-icon">{icons[i]}</div>
              <h4 className="achievement-title">{a.title}</h4>
              <div className="achievement-date">{a.date}</div>
              <p className="achievement-desc">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
