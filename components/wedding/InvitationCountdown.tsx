"use client";

import { useEffect, useState } from "react";

export default function InvitationCountdown({ targetDate }: { targetDate: string }) {
  const [remaining, setRemaining] = useState<number | null>(null);
  useEffect(() => {
    const update = () => setRemaining(Math.max(0, new Date(targetDate).getTime() - Date.now()));
    update();
    const timer = window.setInterval(update, 1000);
    return () => window.clearInterval(timer);
  }, [targetDate]);
  const values = remaining === null ? null : [
    Math.floor(remaining / 86400000),
    Math.floor(remaining / 3600000) % 24,
    Math.floor(remaining / 60000) % 60,
    Math.floor(remaining / 1000) % 60,
  ];
  return <section className="countdown-section section-shell" aria-labelledby="countdown-heading" data-reveal>
    <span className="moon-symbol" aria-hidden="true">☾</span>
    <h2 id="countdown-heading" className="eyebrow">The big day is coming</h2>
    <div className="countdown-grid" role="timer" aria-label="Time remaining until the first wedding celebration">
      {["Days", "Hours", "Minutes", "Seconds"].map((label, index) => <div className="countdown-cell" key={label}>
        <strong>{values === null ? "--" : String(values[index]).padStart(2, "0")}</strong><span>{label}</span>
      </div>)}
    </div><span className="countdown-rule"><span>✦</span></span>
  </section>;
}
