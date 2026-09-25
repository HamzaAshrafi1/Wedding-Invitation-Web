"use client";

import { motion } from "framer-motion";
import RoyalOrnament from "@/components/ui/RoyalOrnament";
import { wedding } from "@/data/wedding";

export default function RoyalFooter() {
    return (
        <footer className= "relative overflow-hidden bg-[#102f29] px-5 py-20 text-[#f5efe2] sm:px-8 sm:py-24" >
        {/* Islamic pattern */ }
        < div className = "pointer-events-none absolute inset-0 opacity-[0.045]" >
            <svg
          className="h-full w-full"
    xmlns = "http://www.w3.org/2000/svg"
        >
        <defs>
        <pattern
              id="footer-pattern"
    width = "90"
    height = "90"
    patternUnits = "userSpaceOnUse"
        >
        <path
                d="M45 5 L85 45 L45 85 L5 45 Z"
    fill = "none"
    stroke = "currentColor"
    strokeWidth = "1"
        />

        <path
                d="M45 20 L70 45 L45 70 L20 45 Z"
    fill = "none"
    stroke = "currentColor"
    strokeWidth = "1"
        />

        <circle
                cx="45"
    cy = "45"
    r = "6"
    fill = "none"
    stroke = "currentColor"
    strokeWidth = "1"
        />
        </pattern>
        </defs>

        < rect
    width = "100%"
    height = "100%"
    fill = "url(#footer-pattern)"
    className = "text-[#d5b875]"
        />
        </svg>
        </div>

    {/* Ambient glow */ }
    <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#d5b875]/8 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center" >
            <motion.div
          initial={ { opacity: 0, y: 18 } }
    whileInView = {{ opacity: 1, y: 0 }
}
viewport = {{ once: true }}
transition = {{ duration: 0.8 }}
        >
    <p className="text-[9px] font-semibold uppercase tracking-[0.4em] text-[#d5b875]" >
        With love & gratitude
            </p>

            < div className = "mt-5 flex justify-center" >
                <RoyalOrnament />
                </div>

                < p className = "mx-auto mt-7 max-w-xl font-serif text-2xl italic leading-relaxed text-[#f5efe2] sm:text-3xl" >
                    May this beginning be filled with barakah.
          </p>

                    < div className = "mx-auto mt-7 flex items-center justify-center gap-4" >
                        <span className="h-px w-14 bg-[#d5b875]/35" />
                            <span className="h-1.5 w-1.5 rotate-45 bg-[#d5b875]" />
                                <span className="h-px w-14 bg-[#d5b875]/35" />
                                    </div>

                                    < p className = "mt-7 text-[9px] font-semibold uppercase tracking-[0.32em] text-[#c8c0b1]" >
                                        A celebration of love, family & togetherness
                                            </p>

                                            < p className = "mt-4 font-serif text-lg text-[#d5b875] sm:text-xl" >
                                            { wedding.couple.groom }
                                                < span className = "mx-3 text-[#f5efe2]/60" >×</span>
{ wedding.couple.bride }
</p>
    </motion.div>

    < div className = "mt-12 border-t border-[#d5b875]/15 pt-6" >
        <p className="text-[8px] uppercase tracking-[0.28em] text-[#9eaa9f]" >
            With prayers, blessings & beautiful memories
                </p>
                </div>
                </div>
                </footer>
  );
}