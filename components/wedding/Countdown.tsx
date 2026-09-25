"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CountdownProps {
    targetDate: string;
}

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const EMPTY_TIME: TimeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
};

function calculateTimeLeft(targetDate: string): TimeLeft {
    const difference = new Date(targetDate).getTime() - new Date().getTime();

    if (difference <= 0) return EMPTY_TIME;

    return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
    };
}

export default function Countdown({ targetDate }: CountdownProps) {
    const [mounted, setMounted] = useState(false);
    const [timeLeft, setTimeLeft] = useState<TimeLeft>(EMPTY_TIME);

    useEffect(() => {
        setMounted(true);

        const updateCountdown = () => {
            setTimeLeft(calculateTimeLeft(targetDate));
        };

        updateCountdown();

        const timer = window.setInterval(updateCountdown, 1000);

        return () => {
            window.clearInterval(timer);
        };
    }, [targetDate]);

    return (
        <section className= "relative overflow-hidden bg-[#FAF7F2] px-4 py-12 text-[#44372a] sm:px-8 sm:py-20" >
        <div className="relative mx-auto max-w-3xl text-center" >
            <motion.p
          initial={ { opacity: 0, y: 12 } }
    whileInView = {{ opacity: 1, y: 0 }
}
viewport = {{ once: true }}
className = "text-[10px] uppercase tracking-[0.35em] text-amber-800/80 sm:text-xs"
    >
    The Big Day Is Coming
        </motion.p>

        < motion.h2
initial = {{ opacity: 0, y: 15 }}
whileInView = {{ opacity: 1, y: 0 }}
viewport = {{ once: true }}
transition = {{ delay: 0.1 }}
className = "mt-2 font-serif text-3xl font-normal text-amber-950 sm:text-4xl"
    >
    Qubool Hai
        </motion.h2>

        < div className = "mx-auto my-6 h-px w-20 bg-gradient-to-r from-transparent via-amber-300 to-transparent" />

            <div className="grid grid-cols-4 gap-2 sm:gap-4" >
                <TimeBox value={ timeLeft.days } label = "Days" mounted = { mounted } />
                    <TimeBox value={ timeLeft.hours } label = "Hours" mounted = { mounted } />
                        <TimeBox value={ timeLeft.minutes } label = "Minutes" mounted = { mounted } />
                            <TimeBox value={ timeLeft.seconds } label = "Seconds" mounted = { mounted } />
                                </div>
                                </div>
                                </section>
  );
}

interface TimeBoxProps {
    value: number;
    label: string;
    mounted: boolean;
}

function TimeBox({ value, label, mounted }: TimeBoxProps) {
    return (
        <motion.div
      initial= {{ opacity: 0, y: 15 }
}
whileInView = {{ opacity: 1, y: 0 }}
viewport = {{ once: true }}
className = "rounded-xl border border-amber-200/60 bg-white/70 px-2 py-4 text-center shadow-xs sm:px-4 sm:py-6"
    >
    <motion.p
        key={ mounted ? value : "initial" }
initial = {{ opacity: 0.5, y: -3 }}
animate = {{ opacity: 1, y: 0 }}
className = "font-serif text-2xl font-semibold text-amber-950 sm:text-4xl"
    >
{ mounted? String(value).padStart(2, "0") : "--"}
    </motion.p>

    < p className = "mt-1 text-[8px] uppercase tracking-[0.2em] text-amber-800/70 sm:text-[10px]" >
    { label }
        </p>
        </motion.div>
  );
}