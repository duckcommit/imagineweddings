import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'

const FEATURED = [
  {
    num: '01',
    title: 'Mandap Decor',
    category: 'Décor & Styling',
    desc: 'Sacred ceremony spaces crafted with flowers, fabric and light that honour your traditions.',
  },
  {
    num: '02',
    title: 'Sangeet Night',
    category: 'Entertainment',
    desc: 'Stage, lights, sound, choreography — a full production for the night everyone remembers.',
  },
  {
    num: '03',
    title: 'Photography & Cinematography',
    category: 'Production',
    desc: 'Candid storytelling and cinematic films that capture every tear, laugh and glance.',
  },
  {
    num: '04',
    title: 'Destination Wedding',
    category: 'Logistics',
    desc: 'Venue scouting, resort bookings, travel planning and on-ground coordination — far from home, flawlessly run.',
  },
  {
    num: '05',
    title: 'Full Wedding Management',
    category: 'Complete Planning',
    desc: 'Every function, every vendor, every timeline — handled entirely so you arrive as a guest at your own wedding.',
  },
]

function FeaturedRow({ item, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.09, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{
        display: 'grid',
        gridTemplateColumns: '56px 1fr auto',
        alignItems: 'center',
        gap: '0 32px',
        padding: '28px 0',
        borderBottom: '1px solid rgba(201,168,76,0.15)',
        cursor: 'default',
      }}
      whileHover={{ x: 6 }}
    >
      <span
        style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 300,
          fontSize: '1.5rem',
          color: 'rgba(201,168,76,0.6)',
          lineHeight: 1,
        }}
      >
        {item.num}
      </span>

      <div>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.63rem',
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: 'var(--gold-dark)',
            marginBottom: 6,
          }}
        >
          {item.category}
        </p>
        <h3
          style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 400,
            fontSize: '1.55rem',
            color: 'var(--text-dark)',
            marginBottom: 8,
            lineHeight: 1.1,
          }}
        >
          {item.title}
        </h3>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            lineHeight: 1.7,
            color: 'var(--text-dark)',
            fontWeight: 400,
            maxWidth: 500,
          }}
        >
          {item.desc}
        </p>
      </div>

      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        style={{ color: 'rgba(201,168,76,0.7)', flexShrink: 0 }}
      >
        <path d="M5 10h10M11 6l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </motion.div>
  )
}

export default function FeaturedServices() {
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-60px' })

  return (
    <section
      id="featured-services"
      style={{
        padding: '100px 0',
        background: 'var(--cream-white)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            gap: 80,
            alignItems: 'start',
          }}
          className="featured-services-grid"
        >
          {/* Left: heading */}
          <motion.div
            ref={headRef}
            initial={{ opacity: 0, y: 30 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ position: 'sticky', top: 120 }}
          >
            <span className="section-label">Our Specialties</span>
            <span className="gold-line" />
            <h2 className="section-title" style={{ textAlign: 'left' }}>
              What We <em>Do Best</em>
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.05rem',
                lineHeight: 1.8,
                color: 'var(--text-dark)',
                marginTop: 18,
                marginBottom: 40,
              }}
            >
              Har function ka apna mood, apni memory.
            </p>
            <Link to="/services" className="btn-primary">
              View All 40+ Services
            </Link>
          </motion.div>

          {/* Right: list */}
          <div>
            {FEATURED.map((item, i) => (
              <FeaturedRow key={item.num} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .featured-services-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .featured-services-grid > div:first-child {
            position: static !important;
          }
        }
      `}</style>
    </section>
  )
}
