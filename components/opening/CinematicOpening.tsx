"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { wedding } from "@/data/wedding";
import { AmbientBackground } from "@/components/ui/InvitationMotion";

type OpeningPhase = "waiting" | "opening" | "finished";
const sceneImages = ["/images/events/haldi.webp", "/images/events/nikah.webp", "/images/events/walima.webp"];

export default function CinematicOpening({ children }: { children: ReactNode }) {
  const [phase, setPhase] = useState<OpeningPhase>("waiting");
  const content = useRef<HTMLDivElement>(null);
  const beginButton = useRef<HTMLButtonElement>(null);
  const { couple } = wedding;

  useEffect(() => {
    if (phase !== "opening") return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const timeout = window.setTimeout(() => setPhase("finished"), preference.matches ? 50 : 2100);
    const finishIfReduced = () => { if (preference.matches) setPhase("finished"); };
    preference.addEventListener("change", finishIfReduced);
    return () => { window.clearTimeout(timeout); preference.removeEventListener("change", finishIfReduced); };
  }, [phase]);

  useEffect(() => {
    if (phase === "finished") return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, [phase]);

  useEffect(() => {
    if (phase === "waiting") beginButton.current?.focus({ preventScroll: true });
    if (phase === "finished") {
      const target = window.location.hash && document.getElementById(decodeURIComponent(window.location.hash.slice(1)));
      const heading = content.current?.querySelector<HTMLElement>("#wedding-heading");
      heading?.focus({ preventScroll: true });
      if (target) target.scrollIntoView();
    }
  }, [phase]);

  const begin = () => {
    if (phase !== "waiting") return;
    window.dispatchEvent(new Event("wedding:begin"));
    setPhase("opening");
   };

  return <div className="invitation-experience" data-phase={phase}>
    <AmbientBackground />
    <div ref={content} className="invitation-content" inert={phase !== "finished"}>{children}</div>
    {phase !== "finished" && <section className={`cinematic-opening ${phase === "opening" ? "cinematic-opening--active" : ""}`}
      role="dialog" aria-modal="true" aria-label="Wedding invitation entrance"
      onKeyDown={(event) => {
        if (event.key === "Escape") begin();
        if (event.key === "Tab") { event.preventDefault(); beginButton.current?.focus(); }
      }}>
      <div className="opening-ambient" aria-hidden="true" />
      <div className="opening-topline"><span className="monogram" aria-hidden="true">A<span>&</span>A</span><span>{wedding.wedding.displayDate}</span></div>
      <div className="opening-layout">
        <div className="opening-art" aria-hidden="true">
          <div className="opening-orbit" />
          <div className="opening-photo-frame">
            {sceneImages.map((src, index) => <div className={`opening-slide opening-slide--${index}`} key={src}>
              <Image src={src} alt="" fill sizes="(max-width: 700px) 90vw, 45vw" preload={index === 0} loading={index === 0 ? undefined : "eager"} />
            </div>)}
            <div className="opening-photo-glaze" />
            <span className="opening-photo-caption">Faith. Love. Forever.</span>
          </div>
          <div className="opening-photo-tag"><span>بِسْمِ اللَّهِ</span><small>A beautiful beginning</small></div>
          <span className="opening-spark opening-spark--one">✧</span><span className="opening-spark opening-spark--two">✧</span>
        </div>
        <div className="opening-copy">
          <p className="arabic opening-arabic" lang="ar" dir="rtl">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
          <p className="eyebrow">With the blessings of Allah</p>
          <div className="opening-names"><span>{couple.groom}</span><em>&</em><span>{couple.bride}</span></div>
          <p className="opening-subtitle">A celebration of faith, love<br />&amp; togetherness</p>
          <button ref={beginButton} type="button" className="begin-button" onClick={begin} aria-disabled={phase !== "waiting"}>
            <span>Begin the Celebration</span><span className="button-arrow" aria-hidden="true">↗</span>
          </button>
          <p className="opening-hint">A royal invitation awaits</p>
        </div>
      </div>
      <div className="opening-bottomline" aria-hidden="true"><span>Ayaan &amp; Alina</span><span className="opening-dots"><i /><i /><i /></span><span>A new chapter · 2026</span></div>
      <div className="opening-light-wash" aria-hidden="true" />
    </section>}
  </div>;
}
