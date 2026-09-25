"use client";

import { motion } from "framer-motion";
import RoyalOrnament from "@/components/ui/RoyalOrnament";
import { wedding } from "@/data/wedding";

export default function FinalDua() {
    return (
        <section id= "dua" className = "relative overflow-hidden bg-[#FAF7F2] px-4 py-12 text-[#4a392b] sm:px-8 sm:py-20 text-center" >
            <div className="relative mx-auto max-w-2xl" >
                <motion.div
          initial={ { opacity: 0, y: 15 } }
    whileInView = {{ opacity: 1, y: 0 }
}
viewport = {{ once: true }}
transition = {{ duration: 0.7 }}
        >
    <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-amber-800/80" >
        A Final Dua
            </p>

            < div className = "mt-2 flex justify-center" >
                <RoyalOrnament />
                </div>

                < p className = "mx-auto mt-6 max-w-md text-xs leading-relaxed italic text-stone-700 sm:text-sm" >
                    May Allah bless our union, fill our home with love, our hearts with faith and our life with endless barakah.
          </p>

                        < div className = "mx-auto my-6 h-px w-20 bg-gradient-to-r from-transparent via-amber-300 to-transparent" />

                            <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-amber-800/70" >
                                JazakAllah Khair For Being Part Of Our Joy
                                    </p>
                                    </motion.div>

                                    < motion.div
initial = {{ opacity: 0 }}
whileInView = {{ opacity: 1 }}
viewport = {{ once: true }}
transition = {{ duration: 0.7, delay: 0.2 }}
className = "mt-6 flex items-center justify-center gap-3 text-amber-900"
    >
    <span className="font-serif text-lg font-medium" >
    { wedding.couple.groom } & { wedding.couple.bride }
    </span>
    </motion.div>
    </div>
        </section>
  );
}