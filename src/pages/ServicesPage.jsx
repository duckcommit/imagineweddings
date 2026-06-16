import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const CATEGORIES = [
  {
    key: 'decor',
    num: '01',
    label: 'Décor & Styling',
    tagline: 'Every space transformed into a memory',
    services: [
      'Mandap Decor', 'Mehendi Brunch', 'Sangeet Night', 'Royal Entry',
      'Cocktail Lounge', 'Guest Welcome', 'Haldi Decor', 'Floral Stage',
      'Bride Entry', 'Groom Entry', 'Reception Decor', 'Wedding Stage',
      'Table Styling', 'Catering Setup', 'Welcome Hampers', 'Invitation Styling',
      'Theme Planning',
    ],
  },
  {
    key: 'entertainment',
    num: '02',
    label: 'Entertainment & Production',
    tagline: 'The stage is set, the energy is yours',
    services: [
      'Photo Booth', 'Lighting Design', 'Sound Setup', 'DJ Night',
      'Live Band', 'Choreography', 'Photography', 'Cinematography', 'Drone Shoot',
    ],
  },
  {
    key: 'logistics',
    num: '03',
    label: 'Logistics & Coordination',
    tagline: 'Every detail, every guest, every move — handled',
    services: [
      'Venue Selection', 'Destination Wedding', 'Resort Booking',
      'Guest Transport', 'Hospitality Desk', 'Room Management',
    ],
  },
  {
    key: 'rituals',
    num: '04',
    label: 'Rituals & Management',
    tagline: 'Traditions honoured, moments made sacred',
    services: [
      'Ritual Planning', 'Pandit Coordination', 'Bar Setup', 'Dessert Counter',
      'Bridal Lounge', 'Groom Lounge', 'Kids Zone', 'Security Management', 'Valet Service',
    ],
  },
  {
    key: 'extras',
    num: '05',
    label: 'Special Effects & Extras',
    tagline: 'The magic that makes guests gasp',
    services: [
      'Fireworks', 'Cold Pyros', 'Flower Shower', 'Luxury Car',
      'Wedding Cake', 'Return Gifts', 'Budget Planning', 'Full Wedding Management',
    ],
  },
]

function ServiceCard({ name, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-20px' })
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.04, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: '22px 24px',
        border: `1px solid ${hovered ? 'rgba(201,168,76,0.55)' : 'rgba(201,168,76,0.15)'}`,
        background: hovered ? 'rgba(201,168,76,0.04)' : 'transparent',
        cursor: 'default',
        transition: 'all 0.28s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 12,
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '1.05rem',
          color: hovered ? 'var(--text-dark)' : 'var(--text-muted)',
          transition: 'color 0.28s ease',
          lineHeight: 1.2,
        }}
      >
        {name}
      </span>
      <motion.div
        animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -6 }}
        transition={{ duration: 0.22 }}
        style={{ color: 'var(--gold)', flexShrink: 0 }}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>
    </motion.div>
  )
}

function CategorySection({ cat, index }) {
  const headRef = useRef(null)
  const inView = useInView(headRef, { once: true, margin: '-60px' })
  const isDark = index % 2 !== 0

  return (
    <div
      style={{
        background: isDark ? 'var(--cream-deep)' : 'var(--cream-white)',
        padding: '80px 0',
        borderTop: '1px solid rgba(201,168,76,0.12)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '280px 1fr',
            gap: 64,
            alignItems: 'start',
          }}
          className="services-cat-grid"
        >
          {/* Left: category info */}
          <motion.div
            ref={headRef}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ position: 'sticky', top: 120 }}
          >
            <span
              style={{
                display: 'block',
                fontFamily: 'var(--font-heading)',
                fontWeight: 300,
                fontSize: '5rem',
                lineHeight: 1,
                color: 'rgba(201,168,76,0.15)',
                marginBottom: 4,
                letterSpacing: '-0.02em',
              }}
            >
              {cat.num}
            </span>
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 400,
                fontSize: '1.7rem',
                color: 'var(--text-dark)',
                lineHeight: 1.2,
                marginBottom: 12,
              }}
            >
              {cat.label}
            </h3>
            <div
              style={{
                width: 32,
                height: 2,
                background: 'var(--gold)',
                marginBottom: 14,
              }}
            />
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontStyle: 'italic',
                fontSize: '0.95rem',
                color: 'var(--text-light)',
                lineHeight: 1.6,
              }}
            >
              {cat.tagline}
            </p>
          </motion.div>

          {/* Right: service cards grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
              gap: 10,
            }}
          >
            {cat.services.map((s, i) => (
              <ServiceCard key={s} name={s} index={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ServicesPage() {
  return (
    <div style={{ background: 'var(--cream-white)', minHeight: '100dvh' }}>
      <Navbar />

      {/* Hero */}
      <div
        style={{
          background: 'var(--text-dark)',
          padding: '160px 0 80px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at 60% 50%, rgba(201,168,76,0.08) 0%, transparent 65%)',
            pointerEvents: 'none',
          }}
        />
        <div className="container" style={{ position: 'relative' }}>
          <Link
            to="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              fontFamily: 'var(--font-body)',
              fontSize: '0.75rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'rgba(201,168,76,0.7)',
              textDecoration: 'none',
              marginBottom: 32,
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(201,168,76,0.7)')}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span
              style={{
                display: 'block',
                fontFamily: 'var(--font-body)',
                fontSize: '0.68rem',
                letterSpacing: '0.38em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                marginBottom: 18,
              }}
            >
              What We Do
            </span>
            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 300,
                fontSize: 'clamp(2.8rem, 6vw, 5rem)',
                lineHeight: 1.06,
                color: 'var(--cream-white)',
                marginBottom: 20,
              }}
            >
              All{' '}
              <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Services</em>
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontStyle: 'italic',
                fontSize: '1.1rem',
                color: 'rgba(250,247,242,0.45)',
              }}
            >
              Har function ka apna mood, apni memory.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Category sections */}
      {CATEGORIES.map((cat, i) => (
        <CategorySection key={cat.key} cat={cat} index={i} />
      ))}

      {/* Bottom CTA */}
      <div
        style={{
          background: 'var(--text-dark)',
          padding: '80px 0',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontStyle: 'italic',
            fontSize: '1.1rem',
            color: 'rgba(250,247,242,0.45)',
            marginBottom: 28,
          }}
        >
          Every service is tailored to your wedding — nothing off-the-shelf.
        </p>
        <a href="/#contact" className="btn-primary">
          Start Planning Together
        </a>
      </div>

      <Footer />

      <style>{`
        @media (max-width: 760px) {
          .services-cat-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .services-cat-grid > div:first-child {
            position: static !important;
          }
        }
      `}</style>
    </div>
  )
}
