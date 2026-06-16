import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const PACKAGES = [
  {
    id: 'intimate',
    name: 'Intimate',
    tagline: 'For close family functions and boutique ceremonies.',
    price: '₹1.5L',
    priceLabel: 'Starting from',
    features: [
      '1–2 functions',
      'Décor consultation',
      'Vendor shortlist',
      'Day coordination',
    ],
    cta: 'Enquire Now',
    featured: false,
  },
  {
    id: 'signature',
    name: 'Signature',
    tagline: 'Full wedding planning with design, vendors and day coordination.',
    price: '₹4.5L',
    priceLabel: 'Starting from',
    features: [
      '3–5 functions',
      'Theme and décor direction',
      'Complete vendor handling',
      'Guest flow planning',
    ],
    cta: 'Begin Planning',
    featured: true,
  },
  {
    id: 'destination',
    name: 'Destination',
    tagline: 'For resort weddings, travel planning and multi-day hospitality.',
    price: 'Custom',
    priceLabel: 'Tailored to you',
    features: [
      'Venue and stay planning',
      'Guest logistics',
      'On-site event team',
      'Travel support',
    ],
    cta: "Let's Talk",
    featured: false,
  },
]

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2.5 7L5.5 10L11.5 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function PackageCard({ pkg, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 44 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay: index * 0.13, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        background: pkg.featured ? 'var(--text-dark)' : 'var(--cream-white)',
        border: pkg.featured ? 'none' : '1px solid rgba(201,168,76,0.2)',
        padding: pkg.featured ? '52px 40px 44px' : '44px 36px 40px',
        boxShadow: pkg.featured
          ? '0 24px 72px rgba(26,18,9,0.28)'
          : '0 4px 24px rgba(26,18,9,0.06)',
        transform: pkg.featured ? 'scaleY(1.02)' : 'none',
        transformOrigin: 'center bottom',
      }}
    >
      {/* Featured badge */}
      {pkg.featured && (
        <div
          style={{
            position: 'absolute',
            top: -1,
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'var(--red)',
            color: '#fff',
            fontFamily: 'var(--font-body)',
            fontSize: '0.62rem',
            fontWeight: 500,
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            padding: '6px 20px',
          }}
        >
          Most Popular
        </div>
      )}

      {/* Top gold rule */}
      <div
        style={{
          width: 40,
          height: 2,
          background: 'var(--gold)',
          marginBottom: 28,
        }}
      />

      {/* Package name */}
      <h3
        style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 400,
          fontSize: '2rem',
          lineHeight: 1,
          color: pkg.featured ? 'var(--cream-white)' : 'var(--text-dark)',
          marginBottom: 12,
        }}
      >
        {pkg.name}
      </h3>

      {/* Tagline */}
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '1rem',
          lineHeight: 1.65,
          color: pkg.featured ? 'rgba(250,247,242,0.6)' : 'var(--text-muted)',
          marginBottom: 32,
          flexGrow: 0,
        }}
      >
        {pkg.tagline}
      </p>

      {/* Divider */}
      <div
        style={{
          height: 1,
          background: pkg.featured ? 'rgba(201,168,76,0.25)' : 'rgba(201,168,76,0.2)',
          marginBottom: 28,
        }}
      />

      {/* Price */}
      <div style={{ marginBottom: 28 }}>
        <span
          style={{
            display: 'block',
            fontFamily: 'var(--font-body)',
            fontSize: '0.65rem',
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: pkg.featured ? 'rgba(250,247,242,0.45)' : 'var(--text-light)',
            marginBottom: 6,
          }}
        >
          {pkg.priceLabel}
        </span>
        <span
          style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 300,
            fontSize: '2.4rem',
            lineHeight: 1,
            color: pkg.featured ? 'var(--gold)' : 'var(--text-dark)',
            letterSpacing: '-0.01em',
          }}
        >
          {pkg.price}
        </span>
      </div>

      {/* Features */}
      <ul
        style={{
          listStyle: 'none',
          padding: 0,
          margin: '0 0 36px',
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
          flexGrow: 1,
        }}
      >
        {pkg.features.map(f => (
          <li
            key={f}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              color: pkg.featured ? 'rgba(250,247,242,0.75)' : 'var(--text-muted)',
            }}
          >
            <span style={{ color: 'var(--gold)', flexShrink: 0 }}>
              <CheckIcon />
            </span>
            {f}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="#contact"
        style={{
          display: 'block',
          textAlign: 'center',
          padding: '14px 0',
          fontFamily: 'var(--font-body)',
          fontSize: '0.8rem',
          fontWeight: 500,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          textDecoration: 'none',
          transition: 'var(--transition)',
          ...(pkg.featured
            ? {
                background: 'var(--red)',
                color: '#fff',
              }
            : {
                border: '1px solid var(--gold)',
                color: 'var(--text-dark)',
              }),
        }}
        onMouseEnter={e => {
          if (pkg.featured) {
            e.currentTarget.style.background = 'var(--red-hover)'
          } else {
            e.currentTarget.style.background = 'var(--gold)'
            e.currentTarget.style.color = 'var(--cream-white)'
          }
        }}
        onMouseLeave={e => {
          if (pkg.featured) {
            e.currentTarget.style.background = 'var(--red)'
          } else {
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.color = 'var(--text-dark)'
          }
        }}
      >
        {pkg.cta}
      </a>
    </motion.div>
  )
}

export default function Packages() {
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-60px' })

  return (
    <section
      id="packages"
      style={{
        padding: '120px 0',
        background: 'var(--cream-deep)',
      }}
    >
      <div className="container">
        {/* Header */}
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ textAlign: 'center', marginBottom: 72 }}
        >
          <span className="section-label">Pricing</span>
          <span className="gold-line centered" />
          <h2 className="section-title">
            Planning <em>Packages</em>
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.15rem',
              color: 'var(--text-muted)',
              marginTop: 18,
              fontStyle: 'italic',
            }}
          >
            Choose your celebration style.
          </p>
        </motion.div>

        {/* Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 24,
            alignItems: 'end',
          }}
        >
          {PACKAGES.map((pkg, i) => (
            <PackageCard key={pkg.id} pkg={pkg} index={i} />
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.7 }}
          style={{
            textAlign: 'center',
            fontFamily: 'var(--font-body)',
            fontStyle: 'italic',
            fontSize: '0.95rem',
            color: 'var(--text-light)',
            marginTop: 40,
          }}
        >
          All packages are customisable. GST applicable. Final scope confirmed after your consultation.
        </motion.p>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #packages .container > div:nth-child(2) {
            grid-template-columns: 1fr !important;
            max-width: 480px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  )
}
