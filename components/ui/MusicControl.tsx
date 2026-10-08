"use client";

import { useEffect, useRef, useState } from "react";

export default function MusicControl({ src }: { src: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const messageTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [playing, setPlaying] = useState(false);
  const [unavailable, setUnavailable] = useState(false);


  useEffect(() => {
    const startMusic = () => {
      const audio = audioRef.current;
      if (!audio || !audio.paused) return;

      audio.volume = 0.35;

      audio.play()
        .then(() => setUnavailable(false))
        .catch(() => showUnavailable());
    };

    window.addEventListener("wedding:begin", startMusic);

    return () => {
      window.removeEventListener("wedding:begin", startMusic);
    };
  }, []);


  const showUnavailable = () => {
    setPlaying(false); setUnavailable(true);
    if (messageTimer.current) clearTimeout(messageTimer.current);
    messageTimer.current = setTimeout(() => setUnavailable(false), 3500);
  };
  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (!audio.paused) { audio.pause(); return; }
    try { await audio.play(); setUnavailable(false); } catch { showUnavailable(); }
  };
  return <>
    <audio ref={audioRef} src={src} loop preload="none" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onError={showUnavailable} />
    <button type="button" onClick={toggleMusic} aria-label={playing ? "Pause wedding music" : "Play wedding music"} title={playing ? "Pause music" : "Play music"} aria-pressed={playing} className="utility-button utility-button--music">
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        {playing ? <><path d="M9 5v14M15 5v14" strokeWidth="2.5" /></> : <><path d="M9 18V5l11-2v13M9 9l11-2" /><ellipse cx="6" cy="18" rx="3" ry="2.5" /><ellipse cx="17" cy="16" rx="3" ry="2.5" /></>}
      </svg>
    </button>
    <span role="status" aria-live="polite">{unavailable && <span className="utility-feedback utility-feedback--music">Music is currently unavailable.</span>}</span>
  </>;
}
