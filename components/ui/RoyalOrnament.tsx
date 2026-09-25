"use client";

import { motion } from "framer-motion";

interface RoyalOrnamentProps {
    size?: "sm" | "md" | "lg";
    className?: string;
}

export default function RoyalOrnament({
    size = "md",
    className = "",
}: RoyalOrnamentProps) {
    const dimensions = {
        sm: "h-10 w-10",
        md: "h-16 w-16",
        lg: "h-24 w-24",
    };

    return (
        <motion.div
      initial= {{ opacity: 0, scale: 0.7, rotate: -15 }
}
whileInView = {{ opacity: 1, scale: 1, rotate: 0 }}
viewport = {{ once: true }}
transition = {{ duration: 1 }}
className = {`relative flex items-center justify-center ${dimensions[size]} ${className}`}
    >
    <div className="absolute inset-[18%] rotate-45 border border-[#b89555]/45" />

        <div className="absolute inset-[30%] rotate-45 border border-[#d8c08d]/35" />

            <div className="absolute left-1/2 top-0 h-1/2 w-px -translate-x-1/2 bg-[#b89555]/30" />

                <div className="absolute bottom-0 left-1/2 h-1/2 w-px -translate-x-1/2 bg-[#b89555]/30" />

                    <div className="absolute left-0 top-1/2 h-px w-1/2 -translate-y-1/2 bg-[#b89555]/30" />

                        <div className="absolute right-0 top-1/2 h-px w-1/2 -translate-y-1/2 bg-[#b89555]/30" />

                            <div className="h-2 w-2 rotate-45 bg-[#d8c08d]/70" />
                                </motion.div>
  );
}