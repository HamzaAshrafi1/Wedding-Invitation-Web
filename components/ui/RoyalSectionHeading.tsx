"use client";

import { motion } from "framer-motion";

interface RoyalSectionHeadingProps {
    eyebrow: string;
    title: string;
    description?: string;
    light?: boolean;
}

export default function RoyalSectionHeading({
    eyebrow,
    title,
    description,
    light = false,
}: RoyalSectionHeadingProps) {
    return (
        <div className= "mx-auto max-w-3xl text-center" >
        <motion.p
        initial={ { opacity: 0, y: 15 } }
    whileInView = {{ opacity: 1, y: 0 }
}
viewport = {{ once: true }}
transition = {{ duration: 0.7 }}
className = {`text-[8px] uppercase tracking-[0.5em] sm:text-[9px] ${light ? "text-[#d8c08d]" : "text-[#9a783b]"
    }`}
      >
{ eyebrow }
    </motion.p>

    < motion.h2
initial = {{ opacity: 0, y: 20 }}
whileInView = {{ opacity: 1, y: 0 }}
viewport = {{ once: true }}
transition = {{ delay: 0.1, duration: 0.8 }}
className = {`gold-text mt-5 font-serif text-4xl leading-tight sm:text-6xl ${light ? "drop-shadow-[0_2px_15px_rgba(216,192,141,.12)]" : ""
    }`}
      >
{ title }
    </motion.h2>

{
    description && (
        <motion.p
          initial={ { opacity: 0, y: 15 } }
    whileInView = {{ opacity: 1, y: 0 }
}
viewport = {{ once: true }}
transition = {{ delay: 0.2, duration: 0.8 }}
className = {`mx-auto mt-6 max-w-2xl text-sm leading-8 sm:text-base ${light ? "text-[#d5d0c3]" : "text-[#766957]"
    }`}
        >
{ description }
    </motion.p>
      )}

<motion.div
        initial={ { opacity: 0, scaleX: 0 } }
whileInView = {{ opacity: 1, scaleX: 1 }}
viewport = {{ once: true }}
transition = {{ delay: 0.35, duration: 0.8 }}
className = {`mx-auto mt-8 h-px w-20 ${light
        ? "bg-gradient-to-r from-transparent via-[#d8c08d]/60 to-transparent"
        : "bg-gradient-to-r from-transparent via-[#a98545]/50 to-transparent"
    }`}
      />
    </div>
  );
}