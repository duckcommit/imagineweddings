import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const ROW1 = [
  'https://i.ibb.co/JwvgpzHQ/IMG-0682.webp',
  'https://i.ibb.co/prjGSmWg/IMG-0747.webp',
  'https://i.ibb.co/VWSzVLD6/IMG-2061.webp',
  'https://i.ibb.co/YTcL6jt9/IMG-2187.webp',
  'https://i.ibb.co/cS8tGq3g/IMG20241204171344.webp',
  'https://i.ibb.co/svzQ4D1V/IMG-20250725-WA0002.jpg',
  'https://i.ibb.co/0W6vctm/Whats-App-Image-2026-06-19-at-15-52-35-1.jpg',
  'https://i.ibb.co/mrjQ298K/Whats-App-Image-2026-06-19-at-15-52-35-2.jpg',
  'https://i.ibb.co/Ld0tHhfN/Whats-App-Image-2026-06-19-at-15-52-35.jpg',
  'https://i.ibb.co/x8DY9YLq/Whats-App-Image-2026-06-19-at-15-52-36-1.jpg',
  'https://i.ibb.co/tPqMsqjg/Whats-App-Image-2026-06-19-at-15-52-36.jpg',
  'https://i.ibb.co/hRSn4vzL/Whats-App-Image-2026-06-19-at-15-52-37-1.jpg',
  'https://i.ibb.co/fsqL3rx/Whats-App-Image-2026-06-19-at-15-52-37.jpg',
  'https://i.ibb.co/LXWgzTNF/Whats-App-Image-2026-06-19-at-15-52-38-1.jpg',
  'https://i.ibb.co/RGZF9GSL/Whats-App-Image-2026-06-19-at-15-52-38.jpg',
  'https://i.ibb.co/bMCZpFmZ/Whats-App-Image-2026-06-19-at-15-52-39-1.jpg',
  'https://i.ibb.co/Pv95gtnw/Whats-App-Image-2026-06-19-at-15-52-39.jpg',
  'https://i.ibb.co/CfD9rbS/Whats-App-Image-2026-06-19-at-15-52-40-1.jpg',
  'https://i.ibb.co/LdVgJQpc/Whats-App-Image-2026-06-19-at-15-52-40.jpg',
  'https://i.ibb.co/VWKH5MNG/Whats-App-Image-2026-06-19-at-15-52-41-1.jpg',
  'https://i.ibb.co/gM81W2Rn/Whats-App-Image-2026-06-19-at-15-52-41.jpg',
  'https://i.ibb.co/0yZQqhTz/Whats-App-Image-2026-06-19-at-15-52-42-1.jpg',
  'https://i.ibb.co/JFv1Tj4m/Whats-App-Image-2026-06-19-at-15-52-42-2.jpg',
  'https://i.ibb.co/hJZvLm8F/Whats-App-Image-2026-06-19-at-15-52-42-3.jpg',
]

const ROW2 = [
  'https://i.ibb.co/wNSPmVB0/IMG-0732.webp',
  'https://i.ibb.co/G42kbfrF/IMG-1977.webp',
  'https://i.ibb.co/0VK7wKCw/IMG-2166.webp',
  'https://i.ibb.co/Xrw1G6FZ/IMG-2200.webp',
  'https://i.ibb.co/rfvJpCns/IMG20241204171649.webp',
  'https://i.ibb.co/7tGXxLq3/847b4a5206ca8e3037a9565d18db563c.jpg',
  'https://i.ibb.co/Xxdt1MBx/Whats-App-Image-2026-06-19-at-15-52-42.jpg',
  'https://i.ibb.co/v4vhBBd2/Whats-App-Image-2026-06-19-at-15-52-43-1.jpg',
  'https://i.ibb.co/84Qs5fY2/Whats-App-Image-2026-06-19-at-15-52-43-2.jpg',
  'https://i.ibb.co/XkydN7m9/Whats-App-Image-2026-06-19-at-15-52-43.jpg',
  'https://i.ibb.co/7tBy1dYy/Whats-App-Image-2026-06-19-at-15-52-44-1.jpg',
  'https://i.ibb.co/jKgrMNx/Whats-App-Image-2026-06-19-at-15-52-44-2.jpg',
  'https://i.ibb.co/Q1rNPv0/Whats-App-Image-2026-06-19-at-15-52-44.jpg',
  'https://i.ibb.co/qLcPzh8s/Whats-App-Image-2026-06-19-at-15-52-45-1.jpg',
  'https://i.ibb.co/237vr6Ym/Whats-App-Image-2026-06-19-at-15-52-45-2.jpg',
  'https://i.ibb.co/vCq9n8hN/Whats-App-Image-2026-06-19-at-15-52-45.jpg',
  'https://i.ibb.co/gZpFFJLK/Whats-App-Image-2026-06-19-at-15-52-46-1.jpg',
  'https://i.ibb.co/C5bpnvWy/Whats-App-Image-2026-06-19-at-15-52-46-2.jpg',
  'https://i.ibb.co/PRKTjH6/Whats-App-Image-2026-06-19-at-15-52-46-3.jpg',
  'https://i.ibb.co/Qwf5hV1/Whats-App-Image-2026-06-19-at-15-52-46.jpg',
  'https://i.ibb.co/G1dpB3W/Whats-App-Image-2026-06-19-at-15-52-47-1.jpg',
  'https://i.ibb.co/n87sfmVj/Whats-App-Image-2026-06-19-at-15-52-47-2.jpg',
  'https://i.ibb.co/CpKNgCMf/Whats-App-Image-2026-06-19-at-15-52-47.jpg',
  'https://i.ibb.co/B5VtHcnC/Whats-App-Image-2026-06-19-at-15-52-48-1.jpg',
  'https://i.ibb.co/chwh2TMr/Whats-App-Image-2026-06-19-at-15-52-48-2.jpg',
  'https://i.ibb.co/hR9PDcZL/Whats-App-Image-2026-06-19-at-15-52-48.jpg',
  'https://i.ibb.co/xS411JZZ/Whats-App-Image-2026-06-19-at-15-52-49-1.jpg',
  'https://i.ibb.co/QSjX8m2/Whats-App-Image-2026-06-19-at-15-52-49-2.jpg',
  'https://i.ibb.co/KjjTqXjX/Whats-App-Image-2026-06-19-at-15-52-49-3.jpg',
  'https://i.ibb.co/xVNRkqJ/Whats-App-Image-2026-06-19-at-15-52-49.jpg',
  'https://i.ibb.co/yn1y3bfY/Whats-App-Image-2026-06-19-at-15-52-50-1.jpg',
  'https://i.ibb.co/ksj0rhBB/Whats-App-Image-2026-06-19-at-15-52-50-2.jpg',
  'https://i.ibb.co/b5s5N0gL/Whats-App-Image-2026-06-19-at-15-52-50.jpg',
  'https://i.ibb.co/RTwmNm3j/Whats-App-Image-2026-06-19-at-15-52-51-1.jpg',
  'https://i.ibb.co/RWdHQP9/Whats-App-Image-2026-06-19-at-15-52-51.jpg',
  'https://i.ibb.co/kskLvRFb/Whats-App-Image-2026-06-19-at-15-52-34.jpg',
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
