import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const ROW1 = [
  '/gallery/g01.jpg', '/gallery/g02.jpg', '/gallery/g03.jpg',
  '/gallery/g04.jpg', '/gallery/g05.jpg', '/gallery/g06.jpg',
  '/gallery/g07.jpg', '/gallery/g08.jpg', '/gallery/g09.jpg',
  '/gallery/g10.jpg', '/gallery/g11.jpg', '/gallery/g12.jpg',
  '/gallery/g13.jpg', '/gallery/g14.jpg', '/gallery/g15.jpg',
  '/gallery/g16.jpg', '/gallery/g17.jpg', '/gallery/g18.jpg',
  '/gallery/g19.jpg', '/gallery/g20.jpg', '/gallery/g21.jpg',
  '/gallery/g22.jpg', '/gallery/g23.jpg', '/gallery/g24.jpg',
]

const ROW2 = [
  '/gallery/g25.jpg', '/gallery/g26.jpg', '/gallery/g27.jpg',
  '/gallery/g28.jpg', '/gallery/g29.jpg', '/gallery/g30.jpg',
  '/gallery/g31.jpg', '/gallery/g32.jpg', '/gallery/g33.jpg',
  '/gallery/g34.jpg', '/gallery/g35.jpg', '/gallery/g36.jpg',
  '/gallery/g37.jpg', '/gallery/g38.jpg', '/gallery/g39.jpg',
  '/gallery/g40.jpg', '/gallery/g41.jpg', '/gallery/g42.jpg',
  '/gallery/g43.jpg', '/gallery/g44.jpg', '/gallery/g45.jpg',
  '/gallery/g46.jpg', '/gallery/g47.jpg', '/gallery/g48.jpg',
]

function MarqueeRow({ images, reverse = false, speed = 40 }) {
  // doubled array → translate -50% = one full set = seamless loop
  const doubled = [...images, ...images]

  return (
    <div style={{ overflow: 'hidden', width: '100%', contain: 'layout style' }}>
      <div
        className={reverse ? 'marquee-track-r' : 'marquee-track-l'}
        style={{
          display: 'flex',
          gap: 12,
          width: 'max-content',
          animationDuration: `${speed}s`,
          willChange: 'transform',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
        }}
      >
        {doubled.map((src, i) => (
          <div
            key={i}
            style={{
              width: 260,
              height: 360,
              flexShrink: 0,
              overflow: 'hidden',
            }}
          >
            <img
              src={src}
              alt=""
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                transition: 'transform 0.6s ease',
              }}
              onError={e => { e.currentTarget.parentElement.style.display = 'none' }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Gallery() {
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-60px' })

  return (
    <section id="stories" style={{ background: 'var(--text-dark)', overflow: 'hidden' }}>

      <motion.div
        ref={headRef}
        initial={{ opacity: 0, y: 24 }}
        animate={headInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ textAlign: 'center', padding: '72px 24px 52px' }}
      >
        <span
          style={{
            display: 'block',
            fontFamily: 'var(--font-body)',
            fontSize: '0.65rem',
            letterSpacing: '0.38em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            marginBottom: 16,
          }}
        >
          Our Portfolio
        </span>
        <h2
          style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 300,
            fontSize: 'clamp(2.6rem, 5vw, 4.2rem)',
            lineHeight: 1.08,
            color: 'var(--cream-white)',
          }}
        >
          Stories
        </h2>
      </motion.div>

      <MarqueeRow images={ROW1} reverse={false} speed={80} />
      <div style={{ height: 12 }} />
      <MarqueeRow images={ROW2} reverse={true}  speed={90} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        style={{ textAlign: 'center', padding: '52px 24px 72px' }}
      >
        <a href="#contact" className="btn-primary">
          Plan Your Wedding Story
        </a>
      </motion.div>

      <style>{`
        @keyframes marquee-l {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes marquee-r {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
        .marquee-track-l {
          animation: marquee-l linear infinite;
        }
        .marquee-track-r {
          animation: marquee-r linear infinite;
        }
      `}</style>

    </section>
  )
}
