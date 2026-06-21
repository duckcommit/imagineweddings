import { useRef } from 'react'
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion'
import { Link } from 'react-router-dom'

const FEATURED = [
  {
    num: '01',
    title: 'Vidhi Mandap Elegance',
    category: 'Ceremony & Décor',
    desc: 'Sacred rituals brought to life through timeless décor and floral artistry.',
    image: '/gallery/mandap.webp',
  },
  {
    num: '02',
    title: 'Sangeet Cocktail Soirée',
    category: 'Entertainment',
    desc: 'An unforgettable evening of music, dance, entertainment, and celebration.',
    image: '/gallery/cocktail.webp',
  },
  {
    num: '03',
    title: 'Haldi Carnival Vibes',
    category: 'Celebrations',
    desc: 'A vibrant blend of color, culture, fun, and joyful wedding festivities.',
    image: '/gallery/haldi.webp',
  },
  {
    num: '04',
    title: 'Destination Wedding Escapes',
    category: 'Destination',
    desc: 'Breathtaking venues, seamless travel planning, and celebrations beyond borders.',
    image: '/gallery/destination.webp',
  },
  {
    num: '05',
    title: 'Cinematic Love Stories',
    category: 'Photography & Film',
    desc: 'Photography and films that preserve every emotion and cherished moment.',
    image: '/gallery/cinema.webp',
  },
  {
    num: '06',
    title: 'Wedding Concierge',
    category: 'Full Planning',
    desc: 'End-to-end planning, coordination, and flawless execution of your celebration.',
    image: '/gallery/wedding.webp',
  },
]

const N = FEATURED.length
const CARD_VW = 58
const CTA_VW = 52
const GAP_VW = 3
const T = 1 / (N + 1)

function ServiceCard({ item }) {
  return (
    <motion.div
      whileHover={{ scale: 1.025 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{
        flexShrink: 0,
        width: `${CARD_VW}vw`,
        height: '78vh',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'default',
      }}
    >
      <img
        src={item.image}
        alt={item.title}
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover', display: 'block',
        }}
        onError={e => { e.currentTarget.style.background = '#2a1f10' }}
      />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(10,7,3,0.95) 0%, rgba(10,7,3,0.45) 50%, rgba(10,7,3,0.08) 100%)',
      }} />
      <span style={{
        position: 'absolute', top: 24, right: 28,
        fontFamily: 'var(--font-heading)',
        fontSize: 'clamp(5rem, 9vw, 9rem)',
        fontWeight: 300,
        color: 'rgba(255,255,255,0.06)',
        lineHeight: 1,
        userSelect: 'none', pointerEvents: 'none',
      }}>
        {item.num}
      </span>
      <div style={{
        position: 'absolute', top: 32, left: 36,
        display: 'flex', alignItems: 'center', gap: 10,
      }}>
        <div style={{ width: 20, height: 1, background: 'var(--gold)', opacity: 0.8 }} />
        <span style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.8rem', letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: 'rgba(201,168,76,0.85)', fontWeight: 600,
        }}>
          {item.category}
        </span>
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '0 36px 36px' }}>
        <div style={{ width: 32, height: 1, background: 'var(--gold)', marginBottom: 16, opacity: 0.6 }} />
        <h3 style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 400,
          fontSize: 'clamp(2.6rem, 4vw, 3.8rem)',
          color: 'rgba(255,255,255,0.95)',
          lineHeight: 1.1, marginBottom: 12,
        }}>
          {item.title}
        </h3>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '1.15rem', lineHeight: 1.75,
          color: 'rgba(255,255,255,0.55)', maxWidth: 400,
        }}>
          {item.desc}
        </p>
      </div>
    </motion.div>
  )
}

function CtaCard() {
  return (
    <div style={{
      flexShrink: 0,
      width: '52vw',
      height: '78vh',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '0 6vw',
      border: '1px solid rgba(201,168,76,0.18)',
      background: 'linear-gradient(135deg, rgba(201,168,76,0.05) 0%, rgba(13,9,6,0.6) 100%)',
    }}>
      <div style={{ position: 'absolute', top: 24, left: 24, width: 22, height: 22, borderTop: '1px solid rgba(201,168,76,0.45)', borderLeft: '1px solid rgba(201,168,76,0.45)' }} />
      <div style={{ position: 'absolute', top: 24, right: 24, width: 22, height: 22, borderTop: '1px solid rgba(201,168,76,0.45)', borderRight: '1px solid rgba(201,168,76,0.45)' }} />
      <div style={{ position: 'absolute', bottom: 24, left: 24, width: 22, height: 22, borderBottom: '1px solid rgba(201,168,76,0.45)', borderLeft: '1px solid rgba(201,168,76,0.45)' }} />
      <div style={{ position: 'absolute', bottom: 24, right: 24, width: 22, height: 22, borderBottom: '1px solid rgba(201,168,76,0.45)', borderRight: '1px solid rgba(201,168,76,0.45)' }} />

      <span style={{
        fontFamily: 'var(--font-body)',
        fontSize: '0.6rem', letterSpacing: '0.32em',
        textTransform: 'uppercase',
        color: 'rgba(201,168,76,0.65)',
        marginBottom: 18,
      }}>
        And So Much More
      </span>
      <div style={{ width: 36, height: 1, background: 'var(--gold)', marginBottom: 28, opacity: 0.35 }} />
      <h2 style={{
        fontFamily: "'BrittanySignature', cursive",
        fontSize: 'clamp(2.6rem, 4.8vw, 4.2rem)',
        fontWeight: 400,
        color: 'rgba(255,255,255,0.92)',
        lineHeight: 1.2,
        marginBottom: 22,
      }}>
        Your Dream Wedding<br />
        <span style={{ color: 'var(--gold)' }}>Awaits</span>
      </h2>
      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: '0.95rem',
        lineHeight: 1.85,
        color: 'rgba(255,255,255,0.48)',
        maxWidth: 320,
        marginBottom: 40,
      }}>
        From intimate ceremonies to grand celebrations — explore our full range of 40+ curated services.
      </p>
      <Link to="/services" className="btn-primary">
        Explore All Services
      </Link>
    </div>
  )
}

function ProgressBar({ scrollYProgress }) {
  const scaleX = useTransform(scrollYProgress, [T, 1], [0, 1])
  return (
    <div style={{
      position: 'absolute', bottom: 32,
      left: '50%', transform: 'translateX(-50%)',
      width: 200, height: 1,
      background: 'rgba(255,255,255,0.12)',
    }}>
      <motion.div style={{
        height: '100%', background: 'var(--gold)',
        transformOrigin: 'left center', scaleX,
      }} />
    </div>
  )
}

export default function FeaturedServices() {
  const wrapperRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ['start start', 'end end'],
  })

  // ── Heading transition (0 → T) ──
  const headScale   = useTransform(scrollYProgress, [0, T], [1, 1.5])
  const headOpacity = useTransform(scrollYProgress, [0, T * 0.6, T], [1, 1, 0])
  const headBlurRaw = useTransform(scrollYProgress, [T * 0.5, T], [0, 16])
  const headFilter  = useMotionTemplate`blur(${headBlurRaw}px)`
  // Hide heading element once done so its compositing layer is fully removed
  const headDisplay = useTransform(scrollYProgress, v => v > T + 0.01 ? 'none' : 'flex')

  // ── Cards horizontal scroll (T → 1) — no opacity transition, just scroll ──
  const startX = (100 - CARD_VW) / 2
  // endX centers the CTA card at scroll end
  const endX = 50 - N * (CARD_VW + GAP_VW) - CTA_VW / 2
  const x = useTransform(scrollYProgress, [T, 1], [`${startX}vw`, `${endX}vw`])

  return (
    <section id="featured-services">
      <div ref={wrapperRef} style={{ height: `${(N + 1) * 100}vh`, background: '#0D0906' }}>
        <div style={{
          position: 'sticky', top: 0, height: '100vh',
          overflow: 'hidden', background: '#0D0906',
        }}>

          {/* ── Cards layer — always fully visible, no fade ── */}
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', alignItems: 'center',
            zIndex: 1,
          }}>
            <motion.div style={{ display: 'flex', gap: `${GAP_VW}vw`, alignItems: 'center', x }}>
              {FEATURED.map((item) => (
                <ServiceCard key={item.num} item={item} />
              ))}
              <CtaCard />
            </motion.div>

            {/* Scroll hint */}
            <div style={{
              position: 'absolute', top: 36, left: 48,
              display: 'flex', alignItems: 'center', gap: 10,
            }}>
              <motion.div
                animate={{ x: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                style={{ display: 'flex', alignItems: 'center', gap: 6 }}
              >
                <svg width="28" height="1" viewBox="0 0 28 1">
                  <line x1="0" y1="0.5" x2="28" y2="0.5" stroke="rgba(201,168,76,0.5)" strokeWidth="1" />
                </svg>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 5h6M5 2l3 3-3 3" stroke="rgba(201,168,76,0.5)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.div>
              <span style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.6rem', letterSpacing: '0.28em',
                textTransform: 'uppercase',
                color: 'rgba(201,168,76,0.45)',
              }}>
                Scroll to explore
              </span>
            </div>

            <ProgressBar scrollYProgress={scrollYProgress} />
          </div>

          {/* ── Cream background — plain opacity fade, no filter ── */}
          <motion.div
            style={{
              position: 'absolute', inset: 0,
              background: 'var(--cream-white)',
              display: headDisplay,
              opacity: headOpacity,
              zIndex: 2,
              pointerEvents: 'none',
            }}
          />

          {/* ── Heading content — blur + scale on text only ── */}
          <motion.div
            style={{
              position: 'absolute', inset: 0,
              display: headDisplay, flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              textAlign: 'center',
              scale: headScale,
              opacity: headOpacity,
              filter: headFilter,
              zIndex: 3,
              pointerEvents: 'none',
            }}
          >
            <span className="section-label">Our Specialties</span>
            <span className="gold-line centered" />
            <h2 style={{
              fontFamily: "'BrittanySignature', cursive",
              fontSize: 'clamp(2.8rem, 5vw, 4.4rem)',
              fontWeight: 400, lineHeight: 1.2,
              color: 'var(--text-dark)',
            }}>
              What We <span style={{ color: 'var(--gold-dark)' }}>Do Best</span>
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.05rem', lineHeight: 1.8,
              color: 'var(--text-muted)',
              maxWidth: 420, marginTop: 14,
            }}>
              Every detail thoughtfully planned, every celebration flawlessly executed.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
