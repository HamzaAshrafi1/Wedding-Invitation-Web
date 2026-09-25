"use client";

import { motion } from "framer-motion";

interface RoyalDividerProps {
    className?: string;
}

export default function RoyalDivider({
    className = "",
}: RoyalDividerProps) {
    return (
        <motion.div
      initial= {{ opacity: 0, scaleX: 0.4 }
}
whileInView = {{ opacity: 1, scaleX: 1 }}
viewport = {{ once: true }}
transition = {{ duration: 1 }}
className = {`flex items-center justify-center gap-3 ${className}`}
    >
    <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#b89555]/50 sm:w-20" />

        <span className="relative flex h-5 w-5 items-center justify-center" >
            <span className="absolute h-3 w-3 rotate-45 border border-[#b89555]/60" />

                <span className="h-1 w-1 rotate-45 bg-[#d8c08d]" />
                    </span>

                    < span className = "h-px w-12 bg-gradient-to-l from-transparent to-[#b89555]/50 sm:w-20" />
                        </motion.div>
  );
}