"use client";

import { motion } from "framer-motion";
import { wedding } from "@/data/wedding";
import RoyalOrnament from "@/components/ui/RoyalOrnament";

export default function RSVPContact() {
    const { phone, whatsappNumber, whatsappMessage } = wedding.rsvp;
    const cleanPhone = phone.replace(/\s+/g, "");
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        whatsappMessage
    )}`;

    return (
        <section id= "rsvp" className = "relative overflow-hidden bg-[#FAF7F2] px-4 py-12 text-[#4a392b] sm:px-8 sm:py-20" >
            <div className="relative mx-auto max-w-xl rounded-2xl border border-amber-200/60 bg-white/60 p-6 text-center shadow-xs sm:p-10" >
                <motion.div
          initial={ { opacity: 0, y: 15 } }
    whileInView = {{ opacity: 1, y: 0 }
}
viewport = {{ once: true }}
transition = {{ duration: 0.7 }}
        >
    <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-amber-800/80" >
        Kindly
        </p>

        < h2 className = "mt-1 font-serif text-3xl font-normal italic text-amber-950 sm:text-4xl" >
            RSVP
            </h2>

            < div className = "mt-3 flex justify-center" >
                <RoyalOrnament />
                </div>

                < p className = "mx-auto mt-4 max-w-md text-xs leading-relaxed text-stone-600 sm:text-sm" >
                    Your presence will make our celebration more special.Kindly let us know if you will be joining us.
          </p>
                        </motion.div>

{/* Buttons */ }
<motion.div
          initial={ { opacity: 0, y: 15 } }
whileInView = {{ opacity: 1, y: 0 }}
viewport = {{ once: true }}
transition = {{ duration: 0.7, delay: 0.15 }}
className = "mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center"
    >
    <motion.a
            href={ whatsappUrl }
target = "_blank"
rel = "noopener noreferrer"
whileTap = {{ scale: 0.98 }}
className = "flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#224239] px-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#FAF7F2] shadow-xs transition-colors hover:bg-[#1a352d]"
    >
    <svg width="15" height = "15" viewBox = "0 0 24 24" fill = "none" aria-hidden="true" >
        <path
                d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.6 4.1 1.6 5.8L.2 24l6.6-1.7a11.8 11.8 0 0 0 5.3 1.3h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.3-6.1-3.5-8.3ZM12.1 21.5c-1.7 0-3.3-.5-4.8-1.3l-.3-.2-3.9 1 1-3.8-.2-.3a9.7 9.7 0 1 1 8.2 4.6Zm5.3-7.3c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.5-1.6-.9-.8-1.6-1.8-1.8-2.1-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.4.3-.6.1-.2 0-.5 0-.6-.1-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.7s1.2 3.1 1.4 3.3c.2.2 2.3 3.5 5.5 4.8.8.3 1.4.5 1.9.6.8.2 1.5.2 2 .1.6-.1 1.8-.7 2.1-1.3.3-.6.3-1.2.2-1.3-.1-.2-.3-.3-.6-.5Z"
fill = "currentColor"
    />
    </svg>
            Confirm Attendance
    </motion.a>

    < motion.a
href = {`tel:${cleanPhone}`}
whileTap = {{ scale: 0.98 }}
className = "flex min-h-12 items-center justify-center gap-2 rounded-lg border border-amber-800/30 bg-transparent px-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-900 transition-colors hover:bg-amber-100/50"
    >
    <svg width="14" height = "14" viewBox = "0 0 24 24" fill = "none" aria-hidden="true" >
        <path
                d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.4 1.9.6 2.9.7A2 2 0 0 1 22 16.9Z"
stroke = "currentColor"
strokeWidth = "1.6"
strokeLinecap = "round"
strokeLinejoin = "round"
    />
    </svg>
            Contact Us
    </motion.a>
    </motion.div>

    < p className = "mt-4 text-xs font-medium text-amber-900/80" > { phone } </p>
        </div>
        </section>
  );
}