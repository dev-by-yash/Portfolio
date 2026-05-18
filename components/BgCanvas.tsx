"use client";
import { useEffect, useRef } from "react";

export default function BgCanvas() {
  const svgRef = useRef<SVGSVGElement>(null);
  const glowRef = useRef<SVGCircleElement>(null);
  const glowDivRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    const glowCircle = glowRef.current;
    const glowDiv = glowDivRef.current;
    const wrap = wrapRef.current;
    if (!svg || !glowCircle || !glowDiv || !wrap) return;

    const SPACING = 34;
    const INFLUENCE = 120;
    const BASE_R = 1.4;
    const MAX_R = 5.5;
    const BASE_OPACITY = 0.1;
    // accent color: grey = rgb(180,180,180)
    const [gR, gG, gB] = [180, 180, 180];

    let dotsG = svg.querySelector<SVGGElement>("#dots-g");
    if (!dotsG) {
      dotsG = document.createElementNS("http://www.w3.org/2000/svg", "g");
      dotsG.setAttribute("id", "dots-g");
      svg.insertBefore(dotsG, glowCircle);
    }

    type Dot = { el: SVGCircleElement; cx: number; cy: number; r: number; tr: number; gi: number; tgi: number };
    let dots: Dot[] = [];
    let mouse = { x: -9999, y: -9999 };
    let rafId: number;

    function buildDots() {
      dotsG!.innerHTML = "";
      dots = [];
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      svg!.setAttribute("viewBox", `0 0 ${vw} ${vh}`);
      const cols = Math.ceil(vw / SPACING) + 1;
      const rows = Math.ceil(vh / SPACING) + 1;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const cx = c * SPACING;
          const cy = r * SPACING;
          const el = document.createElementNS("http://www.w3.org/2000/svg", "circle");
          el.setAttribute("cx", String(cx));
          el.setAttribute("cy", String(cy));
          el.setAttribute("r", String(BASE_R));
          el.setAttribute("fill", `rgba(255,255,255,${BASE_OPACITY})`);
          dotsG!.appendChild(el);
          dots.push({ el, cx, cy, r: BASE_R, tr: BASE_R, gi: 0, tgi: 0 });
        }
      }
    }

    function lerp(a: number, b: number, t: number) { return a + (b - a) * t; }

    function onMove(clientX: number, clientY: number) {
      mouse.x = clientX;
      mouse.y = clientY;
      glowCircle!.setAttribute("cx", String(clientX));
      glowCircle!.setAttribute("cy", String(clientY));
      glowDiv!.style.left = clientX + "px";
      glowDiv!.style.top = clientY + "px";
    }

    const onMouseMove = (e: MouseEvent) => onMove(e.clientX, e.clientY);
    const onMouseLeave = () => {
      mouse.x = -9999; mouse.y = -9999;
      glowCircle!.setAttribute("cx", "-999");
      glowCircle!.setAttribute("cy", "-999");
      glowDiv!.style.left = "-9999px";
    };
    const onTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      onMove(e.touches[0].clientX, e.touches[0].clientY);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("touchmove", onTouchMove, { passive: false });

    const ir2 = INFLUENCE * INFLUENCE;

    function tick() {
      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];
        const dx = d.cx - mouse.x;
        const dy = d.cy - mouse.y;
        const dist2 = dx * dx + dy * dy;

        if (dist2 < ir2) {
          const t = 1 - Math.sqrt(dist2) / INFLUENCE;
          const e = t * t * (3 - 2 * t);
          d.tr = BASE_R + (MAX_R - BASE_R) * e;
          d.tgi = e;
        } else {
          d.tr = BASE_R;
          d.tgi = 0;
        }

        d.r  = lerp(d.r,  d.tr,  0.14);
        d.gi = lerp(d.gi, d.tgi, 0.14);

        d.el.setAttribute("r", Math.max(0.1, d.r).toFixed(2));

        if (d.gi > 0.015) {
          const g = d.gi;
          const rr = Math.round(gR * g + 255 * (1 - g));
          const gg = Math.round(gG * g + 255 * (1 - g));
          const bb = Math.round(gB * g + 255 * (1 - g));
          const op = (BASE_OPACITY + (1 - BASE_OPACITY) * g).toFixed(2);
          d.el.setAttribute("fill", `rgba(${rr},${gg},${bb},${op})`);
        } else {
          d.el.setAttribute("fill", `rgba(255,255,255,${BASE_OPACITY})`);
        }
      }
      rafId = requestAnimationFrame(tick);
    }

    buildDots();
    rafId = requestAnimationFrame(tick);

    const onResize = () => buildDots();
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div ref={wrapRef} style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden" }}>
      {/* cursor glow div */}
      <div
        ref={glowDivRef}
        style={{
          position: "absolute",
          width: 340, height: 340,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(180,180,180,0.12) 0%, transparent 70%)",
          transform: "translate(-50%,-50%)",
          pointerEvents: "none",
          zIndex: 1,
          left: -9999, top: -9999,
          transition: "left 0.06s ease, top 0.06s ease",
        }}
      />
      <svg
        ref={svgRef}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="rg-accent" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#b4b4b4" stopOpacity="1" />
            <stop offset="100%" stopColor="#b4b4b4" stopOpacity="0" />
          </radialGradient>
        </defs>
        <g id="dots-g" />
        <circle ref={glowRef} id="cursor-glow" cx="-999" cy="-999" r="110" fill="url(#rg-accent)" opacity="0.18" />
      </svg>
    </div>
  );
}
