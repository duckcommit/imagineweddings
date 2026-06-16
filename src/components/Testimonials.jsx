import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const TESTIMONIALS = [
  {
    id: 1,
    quote:
      'Imagine Weddings turned our chaotic vision into something beyond our wildest dreams. Every detail was perfect — every moment felt like magic. We still can\'t believe how seamlessly everything flowed.',
    name: 'Aisha & Rohan',
    event: 'Garden Estate Wedding · March 2024',
    photo: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=120&h=120&fit=crop&auto=format',
  },
  {
    id: 2,
    quote:
      'From the first consultation, we knew we were in the most capable hands. The florals, the lighting, the flow of the day — it was poetic. Our guests still talk about it as the most beautiful wedding they\'ve ever attended.',
    name: 'Sophie & Daniel',
    event: 'Coastal Ceremony · September 2023',
    photo: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=120&h=120&fit=crop&auto=format',
  },
  {
    id: 3,
    quote:
      'Choosing Imagine Weddings was the single best decision of our entire planning process. They handle everything with such grace and passion. We were able to be fully present on our day — completely in love, without a single worry.',
    name: 'Meera & James',
    event: 'Heritage Ballroom · December 2023',
    photo: 'https://images.unsplash.com/photo-1591604021695-0c69b7c05981?w=120&h=120&fit=crop&auto=format',
  },
]

function QuoteMark({ style }) {
  return (
    <svg
      viewBox="0 0 40 30"
      fill="none"
      width="40"
      height="30"
      style={style}
    >
      <path
        d="M0 30V18C0 8.059 5.373 2.12 16.12 0l2.88 4.32C13.307 5.84 10.48 8.973 10.08 14H18V30H0zm22 0V18C22 8.059 27.373 2.12 38.12 0L41 4.32C35.307 5.84 32.48 8.973 32.08 14H40V30H22z"
        fill="currentColor"
      />
    </svg>
  )
}

function TestimonialCard({ t, active }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{
        background: 'var(--cream-white)',
        padding: '52px 48px',
        position: 'relative',
        maxWidth: 720,
        margin: '0 auto',
        boxShadow: '0 16px 64px rgba(26,18,9,0.09)',
      }}
    >
      {/* Gold corner accent */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: 40,
          height: 40,
          borderTop: '2px solid var(--gold)',
          borderLeft: '2px solid var(--gold)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: 40,
          height: 40,
          borderBottom: '2px solid var(--gold)',
          borderRight: '2px solid var(--gold)',
        }}
      />

      <QuoteMark
        style={{
          color: 'var(--gold-light)',
          marginBottom: 28,
          display: 'block',
        }}
      />

      <p
        style={{
          fontFamily: 'var(--font-heading)',
          fontStyle: 'italic',
          fontWeight: 300,
          fontSize: 'clamp(1.15rem, 2.2vw, 1.45rem)',
          lineHeight: 1.7,
          color: 'var(--text-dark)',
          marginBottom: 36,
        }}
      >
        {t.quote}
      </p>

      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <div
          style={{
            width: 52,
            height: 52,
            borderRadius: '50%',
            overflow: 'hidden',
            border: '2px solid var(--gold-light)',
            flexShrink: 0,
            background: 'var(--cream-deep)',
          }}
        >
          <img
            src={t.photo}
            alt={t.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div>
          <div
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 500,
              fontSize: '1.1rem',
              color: 'var(--text-dark)',
              lineHeight: 1.2,
            }}
          >
            {t.name}
          </div>
          <div
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.78rem',
              letterSpacing: '0.1em',
              color: 'var(--text-light)',
              marginTop: 4,
            }}
          >
            {t.event}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      id="testimonials"
      style={{
        padding: '120px 0',
        background: 'var(--cream-deep)',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ textAlign: 'center', marginBottom: 60 }}
        >
          <span className="section-label">Love Letters</span>
          <span className="gold-line centered" />
          <h2 className="section-title">
            Words from Our <em>Couples</em>
          </h2>
        </motion.div>

        <AnimatePresence mode="wait">
          <TestimonialCard key={active} t={TESTIMONIALS[active]} active={active} />
        </AnimatePresence>

        {/* Dots */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 12,
            marginTop: 40,
          }}
        >
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Testimonial ${i + 1}`}
              style={{
                width: i === active ? 28 : 8,
                height: 8,
                borderRadius: 4,
                background: i === active ? 'var(--gold)' : 'var(--gold-light)',
                border: 'none',
                cursor: 'pointer',
                transition: 'width 0.35s ease, background 0.35s ease',
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
