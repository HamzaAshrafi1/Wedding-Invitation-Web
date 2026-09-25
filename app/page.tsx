import Image from "next/image";
import CinematicOpening from "@/components/opening/CinematicOpening";
import InvitationMotion from "@/components/ui/InvitationMotion";
import MusicControl from "@/components/ui/MusicControl";
import ShareButton from "@/components/ui/ShareButton";
import ScrollProgress from "@/components/ui/ScrollProgress";
import InvitationCountdown from "@/components/wedding/InvitationCountdown";
import { wedding } from "@/data/wedding";

const { couple, events, rsvp } = wedding;
const whatsappUrl = `https://wa.me/${rsvp.whatsappNumber}?text=${encodeURIComponent(rsvp.whatsappMessage)}`;
const imageSource = (path: string) => path.replace(/\.(png|jpg)$/, ".webp");

function Flourish() { return <span className="flourish" aria-hidden="true"><i />✧<i /></span>; }

function DetailIcon({ type }: { type: "date" | "time" | "place" }) {
  return <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
    {type === "date" ? <><rect x="4" y="5" width="16" height="16" rx="2" /><path d="M8 3v5m8-5v5M4 11h16" /></> : type === "time" ? <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></> : <><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" /><circle cx="12" cy="10" r="2.5" /></>}
  </svg>;
}

export default function Home() {
  return <CinematicOpening>
    <main className="invitation-site" id="top">
      <ScrollProgress /><MusicControl src={wedding.music.src} /><ShareButton />
      <InvitationMotion>
        <header className="invitation-hero" id="invitation" aria-labelledby="wedding-heading">
          <div className="hero-topline"><a href="#top" className="monogram" aria-label="Ayaan and Alina, back to top">A<span>&</span>A</a><span className="hero-top-date">{wedding.wedding.displayDate}</span><a href="#rsvp" className="text-link">RSVP <span aria-hidden="true">↗</span></a></div>
          <div className="hero-layout">
            <div className="hero-copy">
              <p className="arabic" lang="ar" dir="rtl">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
              <p className="hero-translation">In the name of Allah, the Most Merciful,<br />the Especially Merciful</p>
              <p className="eyebrow hero-eyebrow">The wedding celebration of</p>
              <h1 id="wedding-heading" tabIndex={-1}><span>{couple.groom}</span><em>&</em><span>{couple.bride}</span></h1>
              <p className="hero-tagline">Two hearts united in faith, love<br />and the blessings of Allah</p>
              <p className="hero-date">{wedding.wedding.displayDate}</p>
              <a href="#dates" className="explore-link">Explore the celebrations <span aria-hidden="true">↓</span></a>
            </div>
            <div className="hero-gallery" aria-label="A glimpse of our wedding celebrations">
              <span className="hero-gallery-orbit" aria-hidden="true" />
              {events.map((event, index) => <a className={`hero-photo hero-photo--${index}`} href={`#${event.id}`} key={event.id} aria-label={`View ${event.name} details`}>
                <div className="hero-photo-inner"><Image src={imageSource(event.image)} alt={`${event.name} wedding celebration preview`} fill sizes="(max-width: 700px) 65vw, 32vw" loading="eager" /></div>
                <span className="hero-photo-label">{event.name}</span>
              </a>)}
              <span className="hero-gallery-seal" aria-hidden="true">8—10<small>DECEMBER</small></span>
              <span className="hero-gallery-star" aria-hidden="true">✧</span>
              <p className="hero-gallery-caption">A journey of faith &amp; love</p>
            </div>
          </div>
          <div className="hero-bottom"><span>With love, with faith, with you.</span><span className="hero-bottom-line" /><span>Three celebrations. One blessed union.</span></div>
        </header>

        <section className="invitation-intro section-shell" aria-labelledby="intro-heading" data-reveal>
          <Flourish /><p className="eyebrow">You are cordially invited</p>
          <h2 id="intro-heading" className="section-heading">To Celebrate<br /><em>Our Wedding</em></h2>
          <p className="intro-copy">{wedding.invitation.message}</p><Flourish />
        </section>

        <section className="dates-section section-shell" id="dates" aria-labelledby="dates-heading" data-reveal>
          <p className="eyebrow">December 2026</p><h2 id="dates-heading" className="section-heading">Save the <em>dates</em></h2>
          <div className="date-grid">{events.map((event) => <a className="date-item" key={event.id} href={`#${event.id}`}>
            <span className="date-day" aria-hidden="true">{event.date.split(" ")[0].padStart(2, "0")}</span><h3>{event.name}</h3><p>{event.date}</p><span className="date-link">View celebration <span aria-hidden="true">↗</span></span>
          </a>)}</div>
        </section>

        <section className="journey-section section-shell" id="journey" aria-labelledby="journey-heading">
          <div className="journey-visual" data-reveal data-parallax><div className="journey-image"><Image src="/images/events/nikah.webp" alt="White flowers and a sunlit setting for the Nikah celebration" fill sizes="(max-width: 700px) 85vw, 40vw" /></div><span className="journey-image-note">Written in faith.<br /><em>Sealed with love.</em></span></div>
          <div className="journey-copy" data-reveal><p className="eyebrow">Our beautiful</p><h2 id="journey-heading" className="section-heading">Journey<br /><em>Together</em></h2><p>From two different paths, to one beautiful destination. A journey written in faith, sealed with love, and guided by Allah.</p><Flourish /></div>
        </section>

        <InvitationCountdown targetDate="2026-12-08T18:00:00+05:30" />

        <section className="events-section section-shell" id="events" aria-labelledby="events-heading">
          <div className="events-heading" data-reveal><p className="eyebrow">Wedding events</p><h2 id="events-heading" className="section-heading">A celebration<br /><em>to remember</em></h2><p className="section-subtitle">Three Beautiful Celebrations · One Blessed Union</p></div>
          <div className="event-grid">{events.map((event, index) => <article className={`event-card event-card--${event.id}`} id={event.id} key={event.id} data-reveal style={{ transitionDelay: `${index * 100}ms` }}>
            <div className="event-image"><Image src={imageSource(event.image)} alt={`${event.name} celebration`} fill sizes="(max-width: 700px) 90vw, 33vw" /><span className="event-number">{event.number}</span></div>
            <div className="event-body"><p className="event-subtitle">{event.subtitle}</p><h3>{event.name}</h3><dl>
              <div><dt><DetailIcon type="date" /><span className="sr-only">Date</span></dt><dd>{event.date}</dd></div>
              <div><dt><DetailIcon type="time" /><span className="sr-only">Time</span></dt><dd>{event.time}</dd></div>
              <div><dt><DetailIcon type="place" /><span className="sr-only">Venue</span></dt><dd>{event.venue}</dd></div>
            </dl><Flourish /></div>
          </article>)}</div>
        </section>

        <section className="rsvp-section section-shell" id="rsvp" aria-labelledby="rsvp-heading" data-reveal>
          <div className="rsvp-orbit" aria-hidden="true" /><Flourish /><p className="eyebrow">Kindly</p><h2 id="rsvp-heading" className="section-heading">Be part of <em>our joy.</em></h2><p className="rsvp-label">RSVP</p>
          <p>Your presence will make our celebration more special.<br />Kindly let us know if you will be joining us.</p>
          <div className="rsvp-actions"><a className="button-primary" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Confirm attendance <span aria-hidden="true">↗</span></a><a className="button-outline" href={`tel:${rsvp.phone.replace(/\s+/g, "")}`}>Contact us <span aria-hidden="true">↗</span></a></div>
        </section>

        <footer className="final-section section-shell" id="dua" data-reveal><Flourish /><p className="eyebrow">A final dua</p><p className="dua-copy">May Allah bless our union, fill our home with love,<br />our hearts with faith and our life with endless barakah.</p><p className="footer-names">{couple.groom} <em>&amp;</em> {couple.bride}</p><span className="footer-date">{wedding.wedding.displayDate}</span><a className="back-to-top" href="#top">Back to top <span aria-hidden="true">↑</span></a></footer>
      </InvitationMotion>
    </main>
  </CinematicOpening>;
}
