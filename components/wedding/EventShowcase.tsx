"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import RoyalOrnament from "@/components/ui/RoyalOrnament";

type WeddingEvent = {
    id: string;
    number: string;
    name: string;
    subtitle: string;
    date: string;
    time: string;
    venue: string;
    description: string;
    image: string;
    accent: string;
};

type EventShowcaseProps = {
    event: WeddingEvent;
};

const themes = {
    haldi: {
        section: "bg-[#FAF7F2]",
        panel: "bg-[#F5EFE6]",
        text: "text-[#493522]",
        muted: "text-[#76634c]",
        accent: "#a8752d",
        soft: "#d4ae68",
        label: "A golden beginning",
    },
    nikah: {
        section: "bg-[#FAF7F2]",
        panel: "bg-[#EFEFEA]",
        text: "text-[#24443a]",
        muted: "text-[#68776f]",
        accent: "#315c50",
        soft: "#769388",
        label: "The sacred union",
    },
    walima: {
        section: "bg-[#FAF7F2]",
        panel: "bg-[#EBF0EA]",
        text: "text-[#24382f]",
        muted: "text-[#68766c]",
        accent: "#91703a",
        soft: "#bda56d",
        label: "The celebration",
    },
} as const;

export default function EventShowcase({ event }: EventShowcaseProps) {
    const theme = themes[event.id as keyof typeof themes] ?? themes.haldi;

    return (
        <section className= {`relative overflow-hidden py-12 sm:py-20 ${theme.section}`
}>
    <div className="relative mx-auto max-w-4xl px-4 sm:px-6" >
    {/* Chapter Heading */ }
        < motion.div
initial = {{ opacity: 0, y: 20 }}
whileInView = {{ opacity: 1, y: 0 }}
viewport = {{ once: true }}
transition = {{ duration: 0.7 }}
className = "mb-8 text-center"
    >
    <p
            className="mb-2 text-[10px] font-semibold uppercase tracking-[0.35em]"
style = {{ color: theme.accent }}
          >
    Chapter { event.number }
</p>

    < div className = "mb-3 flex justify-center" >
        <RoyalOrnament />
        </div>

        < h2 className = {`font-serif text-3xl font-semibold sm:text-5xl ${theme.text}`}>
        { event.name }
            </h2>

            < p className = {`mt-1 text-xs italic sm:text-sm ${theme.muted}`}>
            { event.subtitle }
                </p>
                </motion.div>

{/* Image Card */ }
<motion.div
          initial={ { opacity: 0, y: 25 } }
whileInView = {{ opacity: 1, y: 0 }}
viewport = {{ once: true }}
transition = {{ duration: 0.8 }}
className = "relative mx-auto max-w-3xl"
    >
    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-amber-200/50 shadow-sm sm:rounded-3xl" >
        <Image
              src={ event.image }
alt = {`${event.name} celebration`}
fill
sizes = "(max-width: 768px) 100vw, 800px"
className = "object-cover"
priority = { event.id === "haldi" }
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        <div className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5" >
            <span className="rounded-full border border-white/30 bg-black/30 px-3 py-1 text-[9px] font-medium uppercase tracking-[0.2em] text-white backdrop-blur-md sm:text-[10px]" >
            { theme.label }
                </span>
                </div>
                </div>
                </motion.div>

{/* Details Panel */ }
<motion.div
          initial={ { opacity: 0, y: 20 } }
whileInView = {{ opacity: 1, y: 0 }}
viewport = {{ once: true }}
transition = {{ duration: 0.7, delay: 0.15 }}
className = "mx-auto mt-6 max-w-3xl"
    >
    <div className={ `rounded-2xl border border-amber-200/50 p-5 shadow-xs sm:p-8 ${theme.panel}` }>
        <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:items-center" >
        {/* When & Where Details */ }
            < div className = "space-y-3" >
                <p
                  className="text-[10px] font-semibold uppercase tracking-[0.25em]"
style = {{ color: theme.accent }}
                >
    When & Where
    </p>
    < div className = "h-px w-10 bg-amber-300/50" />

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-1" >
            <div>
            <p className={ `text-[9px] uppercase tracking-[0.15em] ${theme.muted}` }> Date </p>
                < p className = {`mt-0.5 font-serif text-sm font-medium ${theme.text}`}> { event.date } </p>
                    </div>

                    < div >
                    <p className={ `text-[9px] uppercase tracking-[0.15em] ${theme.muted}` }> Time </p>
                        < p className = {`mt-0.5 text-xs ${theme.text}`}> { event.time } </p>
                            </div>

                            < div className = "col-span-2 sm:col-span-1" >
                                <p className={ `text-[9px] uppercase tracking-[0.15em] ${theme.muted}` }> Venue </p>
                                    < p className = {`mt-0.5 text-xs leading-relaxed ${theme.text}`}> { event.venue } </p>
                                        </div>
                                        </div>
                                        </div>

{/* Description */ }
<div className="border-t border-black/10 pt-4 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-6" >
    <p className={ `text-xs leading-relaxed sm:text-sm ${theme.text}` }>
    { event.description }
        </p>
        </div>
        </div>
        </div>
        </motion.div>
        </div>
        </section>
  );
}