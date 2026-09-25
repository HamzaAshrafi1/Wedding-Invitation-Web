"use client";

import { motion } from "framer-motion";

import IslamicPattern from "@/components/ui/IslamicPattern";
import RoyalOrnament from "@/components/ui/RoyalOrnament";

interface InvitationIntroProps {
    groom: string;
    bride: string;
    title: string;
    message: string;
}

export default function InvitationIntro({
    groom,
    bride,
    title,
    message,
}: InvitationIntroProps) {
    return (
        <section className= "cinematic-section relative overflow-hidden bg-[#fbf7ee] px-6 py-36 text-[#44372a] sm:px-10 sm:py-52" >
        <IslamicPattern opacity={ 0.025 } />

            < div className = "relative mx-auto max-w-4xl text-center" >
                <motion.p
          initial={ { opacity: 0, y: 15 } }
    whileInView = {{ opacity: 1, y: 0 }
}
viewport = {{ once: true }}
className = "text-[9px] uppercase tracking-[0.5em] text-[#9a783b] sm:text-xs"
    >
    A celebration of love, family & togetherness
        </motion.p>

        < motion.div
initial = {{ opacity: 0, scale: 0.8 }}
whileInView = {{ opacity: 1, scale: 1 }}
viewport = {{ once: true }}
transition = {{ duration: 1 }}
className = "mt-10"
    >
    <RoyalOrnament size="md" className = "mx-auto" />
        </motion.div>

        < motion.h2
initial = {{ opacity: 0, y: 25 }}
whileInView = {{ opacity: 1, y: 0 }}
viewport = {{ once: true }}
transition = {{ delay: 0.15, duration: 0.9 }}
className = "gold-text mt-10 font-serif text-4xl leading-tight sm:text-6xl"
    >
{ title }
    </motion.h2>

    < motion.div
initial = {{ opacity: 0, scaleX: 0 }}
whileInView = {{ opacity: 1, scaleX: 1 }}
viewport = {{ once: true }}
transition = {{ delay: 0.3, duration: 0.8 }}
className = "mx-auto my-9 h-px w-20 bg-gradient-to-r from-transparent via-[#a98545]/55 to-transparent"
    />

    <motion.p
          initial={ { opacity: 0, y: 15 } }
whileInView = {{ opacity: 1, y: 0 }}
viewport = {{ once: true }}
transition = {{ delay: 0.4, duration: 0.8 }}
className = "mx-auto max-w-2xl text-sm leading-8 text-[#766957] sm:text-base"
    >
{ message }
    </motion.p>

    < motion.div
initial = {{ opacity: 0, y: 20 }}
whileInView = {{ opacity: 1, y: 0 }}
viewport = {{ once: true }}
transition = {{ delay: 0.6, duration: 0.8 }}
className = "mt-12"
    >
    <p className="font-serif text-2xl text-[#294b42] sm:text-3xl" >
    { groom }
        </p>

        < div className = "my-3 flex items-center justify-center gap-4" >
            <span className="h-px w-10 bg-[#a98545]/35" />
                <span className="font-serif text-lg text-[#a98545]" >& </span>
                    < span className = "h-px w-10 bg-[#a98545]/35" />
                        </div>

                        < p className = "font-serif text-2xl text-[#294b42] sm:text-3xl" >
                        { bride }
                            </p>
                            </motion.div>
                            </div>
                            </section>
  );
}