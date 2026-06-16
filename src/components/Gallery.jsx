import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const ROW1 = [
  'https://i.ibb.co/JwvgpzHQ/IMG-0682.webp',
  'https://i.ibb.co/prjGSmWg/IMG-0747.webp',
  'https://i.ibb.co/VWSzVLD6/IMG-2061.webp',
  'https://i.ibb.co/YTcL6jt9/IMG-2187.webp',
  'https://i.ibb.co/cS8tGq3g/IMG20241204171344.webp',
  'https://i.ibb.co/svzQ4D1V/IMG-20250725-WA0002.jpg',
]
const ROW2 = [
  'https://i.ibb.co/wNSPmVB0/IMG-0732.webp',
  'https://i.ibb.co/G42kbfrF/IMG-1977.webp',
  'https://i.ibb.co/0VK7wKCw/IMG-2166.webp',
  'https://i.ibb.co/Xrw1G6FZ/IMG-2200.webp',
  'https://i.ibb.co/rfvJpCns/IMG20241204171649.webp',
  'https://i.ibb.co/7tGXxLq3/847b4a5206ca8e3037a9565d18db563c.jpg',
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

      <MarqueeRow images={ROW1} reverse={false} speed={38} />
      <div style={{ height: 12 }} />
      <MarqueeRow images={ROW2} reverse={true}  speed={44} />

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
