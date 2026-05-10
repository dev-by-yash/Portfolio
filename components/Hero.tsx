import Image from "next/image";
import { stats } from "@/lib/data";

export default function Hero() {
  return (
    <section id="hero">
      <div style={{ width: "100%" }}>
        <div className="hero-inner">
          {/* Left */}
          <div className="hero-left">
            <div className="hero-badge">Available for opportunities</div>
            <h1 className="hero-title">
              <span className="line">Yash</span>
              <span className="line"><span className="accent">Mehta</span></span>
            </h1>
            <p style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.85rem", color: "var(--text2)", marginTop: 4, opacity: 0, animation: "fadeUp 0.9s 0.42s forwards", letterSpacing: "0.06em", textTransform: "uppercase" }}>
              Full Stack &amp; Blockchain Developer
            </p>
            <p className="hero-tagline">
              &ldquo;Building scalable web experiences and decentralized applications that make an impact.&rdquo;
            </p>
            <div className="hero-cta-group">
              <a href="#projects" className="btn-primary">View Projects ↓</a>
              <a href="mailto:yashm13114@gmail.com" className="btn-secondary">Get In Touch</a>
            </div>
            <div className="hero-socials">
              <a href="https://github.com/dev-by-yash" target="_blank" rel="noreferrer" className="social-link" title="GitHub">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/yash-mehta-a41ab6242/" target="_blank" rel="noreferrer" className="social-link" title="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="mailto:yashm13114@gmail.com" className="social-link" title="Email">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </a>
            </div>
          </div>

          {/* Right - Profile */}
          <div className="hero-visual">
            <div className="profile-frame">
              <div className="profile-glow" />
              <div className="profile-img-wrap">
                <Image src="/profile.jpeg" alt="Yash Mehta" width={340} height={400} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} priority />
              </div>
              <div className="profile-card card-1">
                <div className="card-icon">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none"><rect x="3" y="8" width="5" height="5" rx="1.5" stroke="#111" strokeWidth="1.5"/><rect x="10" y="3" width="5" height="5" rx="1.5" stroke="#111" strokeWidth="1.5"/><rect x="16" y="8" width="5" height="5" rx="1.5" stroke="#111" strokeWidth="1.5"/><path d="M5.5 13v2a1 1 0 001 1h9a1 1 0 001-1v-2M12.5 8V5.5" stroke="#111" strokeWidth="1.5" strokeLinecap="round"/></svg>
                </div>
                <div className="card-text">
                  <strong>Web3 Builder</strong>
                  <span>Ethereum · Solana</span>
                </div>
              </div>
              <div className="profile-card card-2">
                <div className="card-stat">200+</div>
                <div className="card-label">LeetCode solved</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div style={{ padding: "0 24px", marginTop: 72 }}>
          <div className="hero-stats">
            {stats.map((s) => (
              <div className="stat-item" key={s.label}>
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
