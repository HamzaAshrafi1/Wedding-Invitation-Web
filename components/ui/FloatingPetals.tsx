"use client";

import { motion } from "framer-motion";

const petals = [
    { left: "8%", delay: 0, duration: 11, size: 5 },
    { left: "18%", delay: 3, duration: 14, size: 4 },
    { left: "31%", delay: 1, duration: 12, size: 3 },
    { left: "47%", delay: 5, duration: 15, size: 5 },
    { left: "62%", delay: 2, duration: 13, size: 4 },
    { left: "76%", delay: 6, duration: 16, size: 3 },
    { left: "89%", delay: 4, duration: 12, size: 5 },
];

export default function FloatingPetals() {
    return (
        <div
      aria-hidden= "true"
    className = "pointer-events-none fixed inset-0 z-30 overflow-hidden"
        >
    {
        petals.map((petal, index) => (
            <motion.span
          key= { index }
          initial = {{
            opacity: 0,
            y: "105vh",
            rotate: 0,
            x: 0,
        }}
    animate = {{
        opacity: [0, 0.28, 0.16, 0],
            y: "-10vh",
                rotate: 220,
                    x: [0, 25, -20, 10],
          }
}
transition = {{
    duration: petal.duration,
        delay: petal.delay,
            repeat: Infinity,
                ease: "linear",
          }}
className = "absolute rounded-full border border-[#a98545]/30"
style = {{
    left: petal.left,
        width: petal.size,
            height: petal.size * 1.7,
          }}
        />
      ))}
</div>
  );
}