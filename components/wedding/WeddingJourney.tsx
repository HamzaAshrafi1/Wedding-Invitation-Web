"use client";

import { motion } from "framer-motion";
import { wedding } from "@/data/wedding";
import RoyalOrnament from "@/components/ui/RoyalOrnament";

const chapterThemes = [
    { accent: "#a8752d", soft: "#d4ae68", bg: "#FAF6F0" },
    { accent: "#315c50", soft: "#769388", bg: "#F4F6F4" },
    { accent: "#91703a", soft: "#bda56d", bg: "#F5F5F0" },
];

export default function WeddingJourney() {
    const events = wedding.events;

    return (
        <section id= "journey" className = "relative overflow-hidden bg-[#FAF7F2] py-12 sm:py-20" >
            <div className="relative mx-auto max-w-4xl px-4 sm:px-6" >
            {/* Section Heading */ }
                < motion.div
    initial = {{ opacity: 0, y: 20 }
}
whileInView = {{ opacity: 1, y: 0 }}
viewport = {{ once: true }}
transition = {{ duration: 0.7 }}
className = "mx-auto mb-10 max-w-xl text-center sm:mb-16"
    >
    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-amber-800" >
        Our Wedding Journey
            </p>

            < div className = "mb-3 flex justify-center" >
                <RoyalOrnament />
                </div>

                < h2 className = "font-serif text-3xl font-semibold text-amber-950 sm:text-5xl" >
                    Three Beautiful Chapters
                        </h2>

                        < p className = "mx-auto mt-3 max-w-md text-xs leading-relaxed text-stone-600 sm:text-sm" >
                            From the first celebration to the sacred union and the evening of togetherness, we would be honoured to have you with us.
          </p>
                            </motion.div>

        {/* Mobile-Friendly Vertical Cards */ }
<div className="space-y-6" >
{
    events.map((event, index) => {
        const theme = chapterThemes[index] ?? chapterThemes[0];

        return (
            <motion.div
                key= { event.id }
        initial = {{ opacity: 0, y: 25 }
    }
                whileInView = {{ opacity: 1, y: 0 }}
viewport = {{ once: true }}
transition = {{ duration: 0.6, delay: index * 0.1 }}
className = "relative overflow-hidden rounded-2xl border border-amber-200/60 p-5 shadow-xs sm:p-8"
style = {{ backgroundColor: theme.bg }}
              >
    <div className="flex items-center justify-between" >
        <span className="font-serif text-2xl font-bold" style = {{ color: theme.accent }}>
        { event.number }
            </span>
            < span className = "text-[9px] font-semibold uppercase tracking-[0.25em]" style = {{ color: theme.accent }}>
            { event.subtitle }
                </span>
                </div>

                < div className = "my-3 h-px w-full bg-amber-200/50" />

                    <h3 className="font-serif text-2xl font-semibold tracking-wide sm:text-3xl" style = {{ color: theme.accent }}>
                    { event.name }
                        </h3>

                        < div className = "mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3" >
                            <div>
                            <p className="text-[9px] uppercase tracking-[0.15em] text-stone-500" > Date </p>
                                < p className = "mt-0.5 text-xs font-semibold text-stone-800" > { event.date } </p>
                                    </div>
                                    < div >
                                    <p className="text-[9px] uppercase tracking-[0.15em] text-stone-500" > Time </p>
                                        < p className = "mt-0.5 text-xs text-stone-800" > { event.time } </p>
                                            </div>
                                            < div className = "col-span-2 sm:col-span-1" >
                                                <p className="text-[9px] uppercase tracking-[0.15em] text-stone-500" > Venue </p>
                                                    < p className = "mt-0.5 text-xs text-stone-800" > { event.venue } </p>
                                                        </div>
                                                        </div>

                                                        < p className = "mt-4 border-t border-black/5 pt-3 text-xs leading-relaxed text-stone-600" >
                                                        { event.description }
                                                            </p>
                                                            </motion.div>
            );
          })}
</div>
    </div>
    </section>
  );
}