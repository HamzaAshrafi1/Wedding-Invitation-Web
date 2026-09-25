"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import RoyalSectionHeading from "@/components/ui/RoyalSectionHeading";

interface GalleryImage {
    id: string;
    image: string;
    alt: string;
}

interface GalleryProps {
    images: readonly GalleryImage[];
}

export default function Gallery({ images }: GalleryProps) {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const selectedImage =
        selectedIndex !== null ? images[selectedIndex] : null;

    function closeLightbox() {
        setSelectedIndex(null);
    }

    function showPrevious() {
        if (selectedIndex === null || images.length === 0) return;
        setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }

    function showNext() {
        if (selectedIndex === null || images.length === 0) return;
        setSelectedIndex((selectedIndex + 1) % images.length);
    }

    useEffect(() => {
        if (selectedIndex === null) {
            document.body.style.overflow = "";
            return;
        }

        document.body.style.overflow = "hidden";

        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") closeLightbox();
            if (event.key === "ArrowLeft") showPrevious();
            if (event.key === "ArrowRight") showNext();
        }

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [selectedIndex]);

    return (
        <>
        <section id= "gallery" className = "relative overflow-hidden bg-[#FAF7F2] px-4 py-12 text-[#44372a] sm:px-8 sm:py-20" >
            <div className="relative mx-auto max-w-4xl" >
                <RoyalSectionHeading
            eyebrow="A Collection Of Memories"
    title = "Moments to Remember"
    description = "A few glimpses of the people, laughter and memories that make this celebration special."
        />

        <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-4" >
        {
            images.map((item, index) => (
                <motion.button
                key= { item.id }
                type = "button"
                onClick = {() => setSelectedIndex(index)}
    initial = {{ opacity: 0, y: 20 }
}
whileInView = {{ opacity: 1, y: 0 }}
viewport = {{ once: true }}
transition = {{ duration: 0.6, delay: Math.min(index * 0.05, 0.3) }}
className = {`group relative overflow-hidden rounded-xl border border-amber-200/50 bg-white p-1 shadow-xs ${index === 0 ? "col-span-2 aspect-[16/10]" : "aspect-square sm:aspect-[4/5]"
    }`}
              >
    <div className="relative h-full w-full overflow-hidden rounded-lg" >
        <img
                    src={ item.image }
alt = { item.alt }
className = "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
loading = { index< 3? "eager" : "lazy"}
    />
    </div>
    </motion.button>
            ))}
</div>
    </div>
    </section>

{/* Lightbox Modal */ }
<AnimatePresence>
    { selectedImage && selectedIndex !== null && (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
initial = {{ opacity: 0 }}
animate = {{ opacity: 1 }}
exit = {{ opacity: 0 }}
onClick = { closeLightbox }
    >
    <motion.div
              initial={ { opacity: 0, scale: 0.95 } }
animate = {{ opacity: 1, scale: 1 }}
exit = {{ opacity: 0, scale: 0.95 }}
className = "relative flex h-full w-full max-w-3xl items-center justify-center"
onClick = {(e) => e.stopPropagation()}
            >
{/* Close Button */ }
    < button
type = "button"
onClick = { closeLightbox }
className = "absolute right-2 top-2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-xl text-white backdrop-blur-xs"
    >
                ✕
</button>

    < img
src = { selectedImage.image }
alt = { selectedImage.alt }
className = "max-h-[80vh] max-w-full rounded-lg object-contain"
    />

{/* Navigation Controls */ }
    < button
type = "button"
onClick = { showPrevious }
className = "absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-2xl text-white backdrop-blur-xs"
    >
                ‹
</button>

    < button
type = "button"
onClick = { showNext }
className = "absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-2xl text-white backdrop-blur-xs"
    >
                ›
</button>
    </motion.div>
    </motion.div>
        )}
</AnimatePresence>
    </>
  );
}