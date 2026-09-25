"use client";

import { motion } from "framer-motion";
import IslamicPattern from "@/components/ui/IslamicPattern";
import RoyalOrnament from "@/components/ui/RoyalOrnament";

interface CoupleHeroProps {
    groom: string;
    bride: string;
}

export default function CoupleHero({ groom, bride }: CoupleHeroProps) {
    return (
        <section
      id= "couple"
    className = "relative overflow-hidden bg-[#FAF7F2] px-4 py-16 text-center sm:px-8 sm:py-24"
        >
        <IslamicPattern opacity={ 0.03 } />

            < div className = "relative mx-auto max-w-3xl" >
            {/* Top Ornament */ }
                < motion.div
    initial = {{ opacity: 0, scale: 0.85 }
}
whileInView = {{ opacity: 1, scale: 1 }}
viewport = {{ once: true }}
transition = {{ duration: 0.8 }}
        >
    <RoyalOrnament size="lg" className = "mx-auto text-amber-800" />
        </motion.div>

{/* Subtitle Header */ }
<motion.p
          initial={ { opacity: 0, y: 15 } }
whileInView = {{ opacity: 1, y: 0 }}
viewport = {{ once: true }}
transition = {{ delay: 0.2, duration: 0.8 }}
className = "mt-6 text-[10px] uppercase tracking-[0.3em] text-amber-800/80 sm:text-xs"
    >
    The Wedding Of
        </motion.p>

{/* Groom & Bride Names */ }
<motion.div
          initial={ { opacity: 0, y: 20 } }
whileInView = {{ opacity: 1, y: 0 }}
viewport = {{ once: true }}
transition = {{ delay: 0.35, duration: 0.9 }}
className = "mt-6 space-y-2"
    >
    <h1 className="font-serif text-4xl font-normal tracking-wide text-amber-950 sm:text-6xl md:text-7xl" >
    { groom }
        </h1>

        < div className = "my-2 flex items-center justify-center gap-3" >
            <span className="h-px w-10 bg-amber-300/60 sm:w-16" />
                <span className="font-serif text-xl italic text-amber-800/90 sm:text-2xl" >
                    and
                    </span>
                    < span className = "h-px w-10 bg-amber-300/60 sm:w-16" />
                        </div>

                        < h1 className = "font-serif text-4xl font-normal tracking-wide text-amber-950 sm:text-6xl md:text-7xl" >
                        { bride }
                            </h1>
                            </motion.div>

{/* Tagline */ }
<motion.p
          initial={ { opacity: 0 } }
whileInView = {{ opacity: 1 }}
viewport = {{ once: true }}
transition = {{ delay: 0.5, duration: 0.8 }}
className = "mt-4 text-[10px] uppercase tracking-[0.25em] text-amber-800/70 sm:text-xs"
    >
    Two Hearts · One Faith · Eternal Journey
        </motion.p>

{/* Decorative Divider */ }
<motion.div
          initial={ { opacity: 0, scaleX: 0 } }
whileInView = {{ opacity: 1, scaleX: 1 }}
viewport = {{ once: true }}
transition = {{ delay: 0.6, duration: 0.8 }}
className = "mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-amber-400/60 to-transparent"
    />

{/* Invitation Text */ }
    < motion.p
initial = {{ opacity: 0, y: 15 }}
whileInView = {{ opacity: 1, y: 0 }}
viewport = {{ once: true }}
transition = {{ delay: 0.7, duration: 0.8 }}
className = "mx-auto mt-6 max-w-lg text-xs leading-relaxed text-stone-600 sm:text-sm"
    >
    Together with their families, they invite you to witness and celebrate
          the beginning of their new journey.
        </motion.p>

{/* Islamic Blessing */ }
<motion.p
          initial={ { opacity: 0 } }
whileInView = {{ opacity: 1 }}
viewport = {{ once: true }}
transition = {{ delay: 0.85, duration: 0.8 }}
className = "mt-6 font-serif text-sm italic text-amber-900 sm:text-base"
    >
    A beautiful beginning, written by Allah
        </motion.p>
        </div>
        </section>
  );
}