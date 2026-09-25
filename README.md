# Ayaan & Alina — Wedding Invitation

A light, animated wedding invitation built on the supplied Next.js project. The names, dates, event timings, venues, phone number, WhatsApp message, and countdown target have been preserved.

## Run locally

Use Node.js 20.9 or later and npm.

```bash
npm ci
npm run dev
```

Open http://localhost:3000. The cinematic entrance is shown on each page load.

For a production build:

```bash
npm run build
npm start
```

## Visual improvements

- Pearl, champagne, soft blush, and pale blue backgrounds.
- The supplied event photographs crossfade with slow camera movement in the entrance.
- “Begin the Celebration” triggers a short photographic zoom, soft light wash, and upward reveal of the invitation.
- An arched photographic collage, floating details, and gentle background motion continue inside the invitation.
- Scroll-triggered section reveals, staggered event cards, subtle image parallax, and hover transitions.
- Responsive layouts for desktop, phone, and landscape screens.
- Reduced-motion preferences disable continuous animation and shorten entry to an immediate reveal.
- Keyboard focus stays within the opening until entry, then moves to the wedding heading; Escape also opens the invitation.

## Existing interactions

- Live countdown to the original target: 8 December 2026, 18:00, India time.
- WhatsApp RSVP with the original recipient and message.
- Tap-to-call contact link with the original phone number.
- Native invitation sharing where supported, with clipboard copying as the fallback.
- Music play/pause control, scroll progress, event anchors, and back-to-top navigation.

**Music:** the uploaded `public/audio/wedding-ambient.mp3` was an empty, zero-byte file. It has been retained. Replace it with a playable MP3 at the same path to enable music. Until then the button displays “Music is currently unavailable.” No new music or automatic audio playback was added.

## Files to edit

- `data/wedding.ts`: all existing wedding details; unchanged from the uploaded project.
- `app/page.tsx`: invitation layout and sections.
- `app/globals.css`: palette, layout, animation timing, and responsive styles.
- `components/opening/CinematicOpening.tsx`: entry screen and transition.
- `components/ui/InvitationMotion.tsx`: viewport-based reveals, image parallax, and ambient background.
- `components/wedding/InvitationCountdown.tsx`: original countdown behavior.
- `components/ui/MusicControl.tsx` and `ShareButton.tsx`: the existing controls with styling and feedback improvements.

The original images remain in `public/images/events`. Smaller WebP copies are used by the updated page. The original Amiri, Cormorant Garamond, and Jost fonts are now included locally, so building and visiting the invitation do not require Google Fonts requests. Existing dependencies have been retained; the lockfile has been repaired so `npm ci` works.

The ZIP excludes generated build output, installed dependencies, and editor caches. It contains the complete source project and its assets.
