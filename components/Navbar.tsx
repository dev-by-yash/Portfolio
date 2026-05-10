"use client";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = ["hero", "about", "skills", "experience", "projects", "education", "achievements", "contact"];
      const navH = 80;
      let current = "hero";
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - navH) current = id;
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
  };

  return (
    <>
      <div className={`mobile-menu${mobileOpen ? " open" : ""}`}>
        {navLinks.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)}>{l.label}</a>
        ))}
      </div>

      <nav className={scrolled ? "scrolled" : ""}>
        <a href="#hero" className="nav-logo">YM<span>.</span></a>
        <ul className="nav-links">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className={activeSection === l.href.replace("#", "") ? "active" : ""}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-right">
          <button className="theme-btn" onClick={toggleTheme}>
            ◐ {theme === "dark" ? "Light" : "Dark"}
          </button>
          <a href="/YASH _Resume (1) (1).pdf" download="Yash_Mehta_Resume.pdf" className="nav-cta">Resume ↓</a>
        </div>
        <button
          className={`hamburger${mobileOpen ? " open" : ""}`}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>
    </>
  );
}
