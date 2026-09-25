"use client";

import { motion } from "framer-motion";

import IslamicPattern from "@/components/ui/IslamicPattern";
import RoyalOrnament from "@/components/ui/RoyalOrnament";

interface WeddingDateProps {
    displayDate: string;
    day: string;
    month: string;
    year: string;
}

export default function WeddingDate({
    displayDate,
    day,
    month,
    year,
}: WeddingDateProps) {
    return (
        <section className= "cinematic-section relative overflow-hidden bg-[#f1e6d4] px-6 py-32 text-[#44372a] sm:px-10 sm:py-44" >
        <IslamicPattern opacity={ 0.025 } />

            < div className = "relative mx-auto max-w-4xl text-center" >
                <motion.p
          initial={ { opacity: 0, y: 15 } }
    whileInView = {{ opacity: 1, y: 0 }
}
viewport = {{ once: true }}
className = "text-[9px] uppercase tracking-[0.5em] text-[#9a783b] sm:text-xs"
    >
    The date is written
        </motion.p>

        < motion.div
initial = {{ opacity: 0, scale: 0.94 }}
whileInView = {{ opacity: 1, scale: 1 }}
viewport = {{ once: true }}
transition = {{ duration: 1 }}
className = "relative mx-auto mt-12 max-w-2xl border border-[#a98545]/30 bg-[#fffaf0]/80 px-7 py-12 shadow-[0_20px_60px_rgba(90,65,35,.06)] sm:px-16 sm:py-16"
    >
    <div className="absolute left-4 top-4 h-8 w-8 border-l border-t border-[#a98545]/35" />
        <div className="absolute bottom-4 right-4 h-8 w-8 border-b border-r border-[#a98545]/35" />

            <RoyalOrnament size="sm" className = "mx-auto" />

                <p className="gold-text mt-8 font-serif text-3xl sm:text-5xl" >
                { displayDate }
                    </p>

                    < div className = "mx-auto my-7 h-px w-16 bg-[#a98545]/35" />

                        <div className="grid grid-cols-3" >
                            <div>
                            <p className="font-serif text-xl text-[#294b42] sm:text-2xl" >
                            { day }
                                </p>
                                < p className = "mt-2 text-[7px] uppercase tracking-[0.35em] text-[#8b7b68]" >
                                    Day
                                    </p>
                                    </div>

                                    < div className = "border-x border-[#a98545]/20" >
                                        <p className="font-serif text-xl text-[#294b42] sm:text-2xl" >
                                        { month }
                                            </p>
                                            < p className = "mt-2 text-[7px] uppercase tracking-[0.35em] text-[#8b7b68]" >
                                                Month
                                                </p>
                                                </div>

                                                < div >
                                                <p className="font-serif text-xl text-[#294b42] sm:text-2xl" >
                                                { year }
                                                    </p>
                                                    < p className = "mt-2 text-[7px] uppercase tracking-[0.35em] text-[#8b7b68]" >
                                                        Year
                                                        </p>
                                                        </div>
                                                        </div>
                                                        </motion.div>
                                                        </div>
                                                        </section>
  );
}