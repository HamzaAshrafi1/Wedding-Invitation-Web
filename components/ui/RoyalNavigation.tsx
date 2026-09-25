"use client";

import { useEffect, useState } from "react";

const sections = [
    { id: "couple", label: "Couple" },
    { id: "journey", label: "Journey" },
    { id: "haldi", label: "Haldi" },
    { id: "nikah", label: "Nikah" },
    { id: "walima", label: "Walima" },
    { id: "rsvp", label: "RSVP" },
    { id: "dua", label: "Dua" },
] as const;

const quietSections = new Set(["rsvp", "dua"]);

export default function RoyalNavigation() {
    const [visible, setVisible] = useState(false);
    const [active, setActive] = useState("couple");

    useEffect(() => {
        const update = () => {
            setVisible(window.scrollY > window.innerHeight * 0.7);

            let current = "couple";
            let closestDistance = Number.POSITIVE_INFINITY;

            for (const section of sections) {
                const element = document.getElementById(section.id);
                if (!element) continue;

                const rect = element.getBoundingClientRect();

                if (rect.top <= window.innerHeight * 0.58) {
                    const distance = Math.abs(rect.top - 110);
                    if (distance < closestDistance) {
                        closestDistance = distance;
                        current = section.id;
                    }
                }
            }

            setActive(current);
        };

        update();

        window.addEventListener("scroll", update, { passive: true });
        window.addEventListener("resize", update);

        return () => {
            window.removeEventListener("scroll", update);
            window.removeEventListener("resize", update);
        };
    }, []);

    if (!visible || quietSections.has(active)) {
        return null;
    }

    return (
        <nav
      aria-label= "Wedding sections"
    className = "fixed left-1/2 top-3 z-50 w-[calc(100%-24px)] max-w-4xl -translate-x-1/2"
        >
        <div className="overflow-hidden rounded-full border border-[#a98545]/30 bg-[#fffaf0]/95 p-1.5 shadow-[0_12px_40px_rgba(23,61,53,0.12)] backdrop-blur-xl" >
            <div className="royal-nav-scroll flex min-w-0 items-center gap-1.5 overflow-x-auto px-0.5" >
            {
                sections.map((section) => {
                    const isActive = active === section.id;

                    return (
                        <a
                key= { section.id }
                    href = {`#${section.id}`
                }
                onClick = {() => setActive(section.id)}
    className = {`flex h-9 shrink-0 snap-start items-center justify-center whitespace-nowrap rounded-full px-3 text-[9px] font-semibold uppercase tracking-[0.15em] transition-all duration-300 sm:px-4 sm:text-[10px] ${isActive
            ? "bg-[#173d35] text-[#f5efe2] shadow-sm"
            : "text-[#6f6253] hover:bg-[#173d35]/5 hover:text-[#173d35]"
        }`
}
              >
{ section.label }
    </a>
            );
          })}
</div>
    </div>
    </nav>
  );
}