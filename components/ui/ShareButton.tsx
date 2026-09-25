"use client";

import { useEffect, useRef, useState } from "react";

export default function ShareButton() {
  const [feedback, setFeedback] = useState("");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);
  const notify = (text: string) => {
    setFeedback(text);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setFeedback(""), 2500);
  };
  const handleShare = async () => {
    const shareData = {
      title: "Ayaan & Alina — Wedding Invitation",
      text: "You are invited to celebrate the wedding of Ayaan Ashrafi & Alina Belim.",
      url: window.location.href,
    };
    try {
      if (navigator.share) { await navigator.share(shareData); return; }
      await navigator.clipboard.writeText(window.location.href);
      notify("Invitation link copied");
    } catch (error) {
      if (!(error instanceof Error && error.name === "AbortError")) notify("Please copy the link from your address bar.");
    }
  };
  return <>
    <button type="button" onClick={handleShare} aria-label="Share wedding invitation" title="Share invitation" className="utility-button utility-button--share">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        {feedback === "Invitation link copied" ? <path d="m5 12 4 4L19 6" /> : <><circle cx="6" cy="12" r="3" /><circle cx="18" cy="5" r="3" /><circle cx="18" cy="19" r="3" /><path d="m8.6 10.5 6.8-4M8.6 13.5l6.8 4" /></>}
      </svg>
    </button>
    <span role="status" aria-live="polite">{feedback && <span className="utility-feedback">{feedback}</span>}</span>
  </>;
}
