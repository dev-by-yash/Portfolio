"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mx = 0, my = 0, tx = 0, ty = 0;
    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.left = mx + "px";
        cursorRef.current.style.top = my + "px";
      }
    };
    document.addEventListener("mousemove", onMove);
    let raf: number;
    const animTrail = () => {
      tx += (mx - tx) * 0.15;
      ty += (my - ty) * 0.15;
      if (trailRef.current) {
        trailRef.current.style.left = tx + "px";
        trailRef.current.style.top = ty + "px";
      }
      raf = requestAnimationFrame(animTrail);
    };
    animTrail();
    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-trail" ref={trailRef} />
    </>
  );
}
