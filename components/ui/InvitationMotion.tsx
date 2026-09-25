"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

/** Scroll work is scoped to visible elements and disabled for reduced motion. */
export default function InvitationMotion({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = root.current;
    if (!element) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let cleanup = () => {};
    const setup = () => {
      cleanup();
      const reveals = [...element.querySelectorAll<HTMLElement>("[data-reveal]")];
      if (preference.matches) {
        element.removeAttribute("data-motion");
        return;
      }
      element.dataset.motion = "ready";
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08, rootMargin: "0px 0px -25px 0px" });
      reveals.forEach((item) => observer.observe(item));
      const moving = new Set<HTMLElement>();
      const parallax = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) moving.add(entry.target as HTMLElement);
          else moving.delete(entry.target as HTMLElement);
        });
        schedule();
      });
      let frame = 0;
      const update = () => {
        frame = 0;
        moving.forEach((item) => {
          const rect = item.getBoundingClientRect();
          const progress = (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight;
          item.style.setProperty("--parallax", `${Math.max(-22, Math.min(22, progress * -28))}px`);
        });
      };
      const schedule = () => { if (!frame) frame = window.requestAnimationFrame(update); };
      element.querySelectorAll<HTMLElement>("[data-parallax]").forEach((item) => parallax.observe(item));
      window.addEventListener("scroll", schedule, { passive: true });
      window.addEventListener("resize", schedule);
      cleanup = () => {
        observer.disconnect(); parallax.disconnect();
        window.removeEventListener("scroll", schedule);
        window.removeEventListener("resize", schedule);
        window.cancelAnimationFrame(frame);
        element.querySelectorAll<HTMLElement>("[data-parallax]").forEach((item) => item.style.removeProperty("--parallax"));
      };
    };
    setup();
    preference.addEventListener("change", setup);
    return () => { cleanup(); preference.removeEventListener("change", setup); };
  }, []);

  return <div ref={root} className="motion-content">{children}</div>;
}

export function AmbientBackground() {
  return <div className="ambient-background" aria-hidden="true">
    <div className="ambient-halo ambient-halo--rose" />
    <div className="ambient-halo ambient-halo--gold" />
    <div className="ambient-halo ambient-halo--blue" />
    <div className="ambient-grain" />
    {Array.from({ length: 12 }, (_, i) => <i key={i} className="light-mote" style={{ "--i": i } as CSSProperties} />)}
  </div>;
}
