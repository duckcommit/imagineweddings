import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="about"
      style={{
        padding: '120px 0',
        background: 'var(--cream)',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        <div
          ref={ref}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 80,
            alignItems: 'center',
          }}
        >
          {/* Left — image + quote block */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ position: 'relative' }}
          >
            {/* Main photo */}
            <div
              style={{
                aspectRatio: '4/5',
                overflow: 'hidden',
                background: 'var(--cream-deep)',
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1606800052052-a08af7148866?w=700&h=875&fit=crop&auto=format"
                alt="Imagine Weddings team at work"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>

            {/* Floating accent card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                position: 'absolute',
                bottom: -28,
                right: -28,
                background: 'var(--red)',
                color: '#fff',
                padding: '28px 32px',
                maxWidth: 200,
                boxShadow: '0 16px 48px rgba(139,26,26,0.3)',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 300,
                  fontStyle: 'italic',
                  fontSize: '2.4rem',
                  lineHeight: 1,
                  marginBottom: 6,
                }}
              >
                350+
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  opacity: 0.85,
                }}
              >
                Love Stories<br />Celebrated
              </div>
            </motion.div>
          </motion.div>

          {/* Right — text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="section-label">Our Story</span>
            <span className="gold-line" />
            <h2 className="section-title" style={{ marginBottom: 28 }}>
              Born from a Passion for<br />
              <em>Beautiful Beginnings</em>
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.15rem',
                lineHeight: 1.85,
                color: 'var(--text-muted)',
                marginBottom: 24,
              }}
            >
              Imagine Weddings was founded on a simple belief — that your
              wedding day should feel effortless, joyful, and entirely
              like you. We are a boutique studio of planners, designers,
              and dreamers who pour their hearts into each celebration.
            </p>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.15rem',
                lineHeight: 1.85,
                color: 'var(--text-muted)',
                marginBottom: 40,
              }}
            >
              Every couple who trusts us with their day becomes part of
              our story. We honour that privilege through creativity,
              transparency, and an unwavering commitment to excellence.
            </p>

            {/* Signature quote */}
            <blockquote
              style={{
                borderLeft: '2px solid var(--gold)',
                paddingLeft: 24,
                marginBottom: 40,
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontStyle: 'italic',
                  fontWeight: 300,
                  fontSize: '1.35rem',
                  color: 'var(--text-dark)',
                  lineHeight: 1.5,
                }}
              >
                "We don't just plan weddings.<br />We craft the moments you'll
                relive forever."
              </p>
              <footer
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.82rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--gold-dark)',
                  marginTop: 14,
                }}
              >
                — Priya Sharma, Founder
              </footer>
            </blockquote>

            <a href="#contact" className="btn-primary">
              Meet the Team
            </a>
          </motion.div>
        </div>
      </div>

      {/* Responsive override */}
      <style>{`
        @media (max-width: 900px) {
          #about .container > div {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          #about .container > div > div:first-child > div:last-child {
            right: 0 !important;
            bottom: -20px !important;
          }
        }
      `}</style>
    </section>
  )
}
