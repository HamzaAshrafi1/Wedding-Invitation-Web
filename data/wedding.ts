export const wedding = {
    couple: {
        groom: "Ayaan Ashrafi",
        bride: "Alina Belim",
    },

    invitation: {
        eyebrow: "A celebration of love, family & togetherness",
        title: "With the blessings of our families",
        message:
            "We invite you to join us as we celebrate the beginning of a beautiful new chapter and share in the joy of our wedding celebrations.",
    },

    wedding: {
        displayDate: "8 — 10 December 2026",
        day: "8 — 10",
        month: "December",
        year: "2026",
    },

    events: [
        {
            id: "haldi",
            number: "01",
            name: "Haldi",
            subtitle: "A golden beginning",
            date: "8 December 2026",
            time: "After Isha",
            venue: "Taj Bagichi, Unkala Road, Ratlam",
            description:
                "An intimate celebration filled with laughter, colour and the warmth of family as we begin the wedding festivities.",
            image: "/images/events/haldi.png",
            accent: "gold",
        },
        {
            id: "nikah",
            number: "02",
            name: "Nikah",
            subtitle: "The sacred union",
            date: "9 December 2026",
            time: "After Asr",
            venue: "Lavanya Palace, Mhow Road, Ratlam",
            description:
                "A sacred gathering where two souls are joined in marriage, surrounded by the prayers and blessings of their loved ones.",
            image: "/images/events/nikah.jpg",
            accent: "ivory",
        },
        {
            id: "walima",
            number: "03",
            name: "Walima",
            subtitle: "The celebration",
            date: "10 December 2026",
            time: "After Maghrib till your arrival",
            venue: "Lavanya Palace, Mhow Road, Ratlam",
            description:
                "An evening of celebration, gratitude and togetherness as we gather with our family and friends to celebrate this new beginning.",
            image: "/images/events/walima.png",
            accent: "gold",
        },
    ],

    rsvp: {
        phone: "+91 87199 75919",
        whatsappNumber: "918719975919",
        whatsappMessage:
            "Assalamu Alaikum! I would like to RSVP for the wedding celebration of Ayaan Ashrafi and Alina Belim.",
    },

    music: {
        enabled: true,
        src: "/audio/chubina.mp3",
    },
} as const