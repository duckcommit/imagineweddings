import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const WHY_ITEMS = [
  'Customized Wedding Planning & Management',
  'Luxury & Theme-Based Decor Concepts',
  'Royal Baraat & Grand Entry Experiences',
  'End-to-End Event Coordination',
  'Experienced Professional Team',
  'Premium Quality Production & Execution',
  'Attention to Every Detail',
  'Stress-Free Planning Experience',
]

const PILLARS = [
  {
    label: 'Vision',
    numeral: 'I',
    body: 'To create extraordinary weddings that blend elegance, creativity, and unforgettable experiences, making every celebration a timeless memory.',
  },
  {
    label: 'Mission',
    numeral: 'II',
    body: "To transform our clients’ dreams into seamless, personalized celebrations through innovative planning, exceptional execution, and attention to every detail.",
  },
  {
    label: 'Our Promise',
    numeral: 'III',
    body: "We don't just plan weddings; we design moments, create emotions, and build memories that last a lifetime.",
  },
]

const ease = [0.25, 0.46, 0.45, 0.94]

function GoldCheck() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" style={{ flexShrink: 0, marginTop: 3 }}>
      <circle cx="9" cy="9" r="8.5" stroke="#C9A84C" strokeWidth="1"/>
      <path d="M5 9.2l2.8 2.8L13 6.5" stroke="#C9A84C" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function OrnamentDivider() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 20, margin: '80px 0' }}>
      <div style={{ flex: 1, height: 1, background: 'linear-gradient(to right, transparent, var(--gold-light))' }} />
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M16 2 L18 14 L30 16 L18 18 L16 30 L14 18 L2 16 L14 14 Z" fill="var(--gold)" opacity="0.6"/>
      </svg>
      <div style={{ flex: 1, height: 1, background: 'linear-gradient(to left, transparent, var(--gold-light))' }} />
    </div>
  )
}

export default function About() {
  const headerRef = useRef(null)
  const storyRef = useRef(null)
  const whyRef = useRef(null)
  const pillarsRef = useRef(null)

  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })
  const storyInView = useInView(storyRef, { once: true, margin: '-80px' })
  const whyInView = useInView(whyRef, { once: true, margin: '-60px' })
  const pillarsInView = useInView(pillarsRef, { once: true, margin: '-60px' })

  return (
    <section id="about" style={{ padding: '120px 0 100px', background: 'var(--cream)', overflow: 'hidden' }}>
      <div className="container">

        {/* ── Section Header ── */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease }}
          style={{ textAlign: 'center', maxWidth: 820, margin: '0 auto 80px' }}
        >
          <span className="section-label">About Us</span>
          <span className="gold-line centered" />
          <h2 className="section-title" style={{ marginBottom: 0 }}>
            From Dreams to &lsquo;I Do&rsquo; —<br />
            <em>We Create Celebrations That Tell Your Story</em>
          </h2>
        </motion.div>

        {/* ── Story Grid ── */}
        <div
          ref={storyRef}
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}
          className="about-story-grid"
        >
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={storyInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease }}
          >
            <p style={paraStyle}>
              At Imagine Weddings, we believe every love story deserves a celebration as unique and
              beautiful as the journey behind it. With years of expertise in luxury wedding planning
              and event management, we transform dreams into breathtaking realities through
              creativity, precision, and flawless execution.
            </p>
            <p style={paraStyle}>
              From intimate ceremonies to grand destination weddings, our team specialises in
              designing bespoke experiences that reflect your personality, traditions, and vision.
              Every detail — from stunning décor concepts and elegant venue styling to entertainment,
              hospitality, and logistics — is thoughtfully curated to create unforgettable moments
              for you and your guests.
            </p>
            <p style={{ ...paraStyle, marginBottom: 40 }}>
              Our passion lies in turning emotions into experiences. Whether it&apos;s a vibrant Haldi
              celebration, a glamorous Sangeet night, a royal Baraat procession, or a timeless
              wedding ceremony, we ensure every event is seamless, sophisticated, and truly magical.
              With a commitment to excellence, innovation, and personalised service, we don&apos;t just
              plan weddings — we create stories that will be cherished for generations.
            </p>

            <blockquote style={{ borderLeft: '2px solid var(--gold)', paddingLeft: 24, marginBottom: 40 }}>
              <p style={{
                fontFamily: 'var(--font-heading)',
                fontStyle: 'italic',
                fontWeight: 300,
                fontSize: '1.35rem',
                color: 'var(--text-dark)',
                lineHeight: 1.55,
              }}>
                "We don&apos;t just plan weddings — we design moments,<br />
                create emotions, and build memories that last a lifetime."
              </p>
            </blockquote>

            <a href="#contact" className="btn-primary">Begin Your Journey</a>
          </motion.div>

          {/* Right — image + stat */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={storyInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease }}
            style={{ position: 'relative' }}
          >
            <div style={{ aspectRatio: '4/5', overflow: 'hidden', background: 'var(--cream-deep)' }}>
              <img
                src="https://images.unsplash.com/photo-1606800052052-a08af7148866?w=700&h=875&fit=crop&auto=format"
                alt="Imagine Weddings team crafting a celebration"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={storyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.45, ease }}
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
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 300,
                fontStyle: 'italic',
                fontSize: '2.6rem',
                lineHeight: 1,
                marginBottom: 6,
              }}>
                350+
              </div>
              <div style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.72rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                opacity: 0.85,
              }}>
                Love Stories<br />Celebrated
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* ── Ornament Divider ── */}
        <OrnamentDivider />

        {/* ── Why Choose Us ── */}
        <div ref={whyRef}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={whyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease }}
            style={{ textAlign: 'center', marginBottom: 52 }}
          >
            <span className="section-label">The Imagine Difference</span>
            <span className="gold-line centered" />
            <h3 style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 300,
              fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
              color: 'var(--text-dark)',
              lineHeight: 1.3,
            }}>
              Why Choose <em>Imagine Weddings?</em>
            </h3>
          </motion.div>

          <div className="why-grid">
            {WHY_ITEMS.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={whyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.07, ease }}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 14,
                  padding: '20px 24px',
                  border: '1px solid var(--gold-light)',
                  background: 'var(--cream-white)',
                }}
              >
                <GoldCheck />
                <span style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1.05rem',
                  color: 'var(--text-dark)',
                  lineHeight: 1.5,
                }}>
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Ornament Divider ── */}
        <OrnamentDivider />

        {/* ── Vision / Mission / Promise ── */}
        <div ref={pillarsRef}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={pillarsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease }}
            style={{ textAlign: 'center', marginBottom: 52 }}
          >
            <span className="section-label">Our Foundation</span>
            <span className="gold-line centered" />
          </motion.div>

          <div className="pillars-grid">
            {PILLARS.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 32 }}
                animate={pillarsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: i * 0.15, ease }}
                style={{
                  padding: '48px 40px',
                  background: 'var(--cream-white)',
                  borderTop: '3px solid var(--gold)',
                  boxShadow: 'var(--shadow-soft)',
                  textAlign: 'center',
                  position: 'relative',
                }}
              >
                <div style={{
                  fontFamily: 'var(--font-heading)',
                  fontStyle: 'italic',
                  fontWeight: 300,
                  fontSize: '3.5rem',
                  color: 'var(--gold-light)',
                  lineHeight: 1,
                  marginBottom: 16,
                  userSelect: 'none',
                }}>
                  {p.numeral}
                </div>
                <h4 style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 400,
                  fontSize: '1.35rem',
                  letterSpacing: '0.08em',
                  color: 'var(--text-dark)',
                  marginBottom: 20,
                  textTransform: 'uppercase',
                }}>
                  {p.label}
                </h4>
                <div style={{ width: 32, height: 1, background: 'var(--gold)', margin: '0 auto 20px' }} />
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1.08rem',
                  lineHeight: 1.8,
                  color: 'var(--text-muted)',
                }}>
                  {p.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        .about-story-grid { }

        .why-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        @media (max-width: 1024px) {
          .pillars-grid { grid-template-columns: 1fr 1fr; }
        }

        @media (max-width: 900px) {
          .about-story-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .about-story-grid > div:first-child > div:last-child {
            right: 0 !important;
            bottom: -20px !important;
          }
        }

        @media (max-width: 640px) {
          .why-grid { grid-template-columns: 1fr; }
          .pillars-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}

const paraStyle = {
  fontFamily: 'var(--font-body)',
  fontSize: '1.12rem',
  lineHeight: 1.9,
  color: 'var(--text-muted)',
  marginBottom: 24,
}
