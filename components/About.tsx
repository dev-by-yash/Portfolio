import { aboutCards } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="section-pad" style={{ background: "var(--bg)" }}>
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">About Me</div>
          <h2 className="section-title">Developer by passion,<br />Builder by nature</h2>
        </div>
        <div className="about-grid">
          <div className="about-text reveal">
            <p>
              I&apos;m <strong>Yash Mehta</strong>, a Full Stack &amp; Blockchain Developer from{" "}
              <strong>Vadodara, Gujarat</strong>. Currently pursuing my Bachelor&apos;s in Information Technology at{" "}
              <span className="">SVIT Vasad</span>, I build products that live at the intersection of web and blockchain.
            </p>
            <p>
              My journey started with crafting beautiful frontends with React and Tailwind, and evolved into building
              decentralized applications using <strong>Solidity, Web3.js, and Rust/Anchor on Solana</strong>. I believe
              the future of the web is decentralized and I&apos;m actively building toward it.
            </p>
            <p>
              Beyond code, I&apos;m a competitive programmer with <strong>200+ LeetCode problems</strong> solved and a
              hackathon participant who has shipped real dApps under pressure at ETHGlobal and Smart India Hackathon.
            </p>
          </div>
          <div className="about-right reveal reveal-delay-2">
            {aboutCards.map((card) => (
              <div className="about-card" key={card.title}>
                <div className="about-card-icon" style={{ color: card.color }}>
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
                    <circle cx="12" cy="12" r="10" stroke={card.color} strokeWidth="1.5" />
                    <path d="M8 12h8M12 8v8" stroke={card.color} strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <h4>{card.title}</h4>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
