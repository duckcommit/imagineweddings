import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const SERVICES = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3L3 8v12l11 5 11-5V8L14 3z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
        <path d="M3 8l11 5 11-5" stroke="currentColor" strokeWidth="1.2" />
        <path d="M14 13v10" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
    title: 'Full Planning',
    subtitle: 'From Vision to Reality',
    desc: 'A comprehensive end-to-end experience. We guide you from the very first concept through every vendor, timeline, and unforgettable detail of your day.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.2" />
        <path d="M14 8v6l4 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Day-of Coordination',
    subtitle: 'Seamless Execution',
    desc: "You've planned it beautifully. We ensure it unfolds flawlessly — managing vendors, timelines and every moving part so you can simply be present.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="4" width="20" height="20" rx="1" stroke="currentColor" strokeWidth="1.2" />
        <path d="M4 10h20M10 4v20" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="17" cy="17" r="3" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
    title: 'Décor & Design',
    subtitle: 'Atmosphere Perfected',
    desc: 'Tablescapes, lighting, florals, stationery — every visual element curated into a cohesive, breathtaking aesthetic that is unmistakably you.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4C9 4 5 8 5 13c0 3.8 2.2 7.1 5.4 8.8L14 25l3.6-3.2C20.8 20.1 23 16.8 23 13c0-5-4-9-9-9z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
        <path d="M10 13c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
    title: 'Floral Artistry',
    subtitle: 'Living Beauty',
    desc: 'From bridal bouquets to grand ceremony installations — our floral designers craft lush, intentional arrangements that elevate every moment.',
  },
]

function ServiceCard({ service, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{
        padding: '44px 36px',
        background: 'var(--cream-white)',
        borderTop: '2px solid var(--gold)',
        position: 'relative',
        transition: 'transform 0.35s ease, box-shadow 0.35s ease',
        cursor: 'default',
      }}
      whileHover={{ y: -6, boxShadow: '0 20px 56px rgba(26,18,9,0.1)' }}
    >
      <div style={{ color: 'var(--gold-dark)', marginBottom: 24 }}>
        {service.icon}
      </div>
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.68rem',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: 'var(--gold-dark)',
          marginBottom: 10,
        }}
      >
        {service.subtitle}
      </p>
      <h3
        style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 400,
          fontSize: '1.6rem',
          color: 'var(--text-dark)',
          marginBottom: 16,
          lineHeight: 1.1,
        }}
      >
        {service.title}
      </h3>
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '1.05rem',
          lineHeight: 1.75,
          color: 'var(--text-muted)',
        }}
      >
        {service.desc}
      </p>
    </motion.div>
  )
}

export default function Services() {
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-60px' })

  return (
    <section
      id="services"
      style={{
        padding: '120px 0',
        background: 'var(--cream)',
      }}
    >
      <div className="container">
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ textAlign: 'center', marginBottom: 72 }}
        >
          <span className="section-label">What We Offer</span>
          <span className="gold-line centered" />
          <h2 className="section-title">
            Crafting <em>Unforgettable</em> Days
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.1rem',
              color: 'var(--text-muted)',
              maxWidth: 520,
              margin: '20px auto 0',
              lineHeight: 1.8,
            }}
          >
            Every service is delivered with meticulous attention to detail,
            warm personal care, and the artistry your story deserves.
          </p>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 24,
          }}
        >
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
