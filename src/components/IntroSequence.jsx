import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const POLAROIDS = [
  { id: 1, src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=750&fit=crop&auto=format', rotate: -13, xOffset: -8  },
  { id: 2, src: 'https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?w=600&h=750&fit=crop&auto=format', rotate:   8, xOffset:  6  },
  { id: 3, src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=750&fit=crop&auto=format', rotate:  -3, xOffset: -4  },
  { id: 4, src: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=600&h=750&fit=crop&auto=format', rotate:  16, xOffset:  10 },
  { id: 5, src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=750&fit=crop&auto=format', rotate:  -7, xOffset: -5  },
]

// card: 460 × 620  |  polaroid frame: 280 × 350
const CARD_W = 460
const CARD_H = 620
const POLAR_W = 280
const POLAR_H = 350

export default function IntroSequence({ onComplete }) {
  const [cardFlipped, setCardFlipped] = useState(false)
  const [polaroidIndex, setPolaroidIndex] = useState(-1)

  useEffect(() => {
    const t1 = setTimeout(() => setCardFlipped(true), 1100)

    const dropTimers = POLAROIDS.map((_, i) =>
      setTimeout(() => setPolaroidIndex(i), 2600 + i * 340)
    )

    const burnTimer = setTimeout(() => onComplete(), 5800)

    return () => {
      clearTimeout(t1)
      dropTimers.forEach(clearTimeout)
      clearTimeout(burnTimer)
    }
  }, [onComplete])

  return (
    <motion.div
      key="intro"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9000,
        background: 'var(--cream)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Soft radial glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 65% 65% at 50% 52%, rgba(201,168,76,0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Card + polaroid stack */}
      <motion.div
        initial={{ y: 70, opacity: 0, scale: 0.91 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        style={{ position: 'relative', width: CARD_W, height: CARD_H }}
      >
        {/* 3-D card flip */}
        <div style={{ width: CARD_W, height: CARD_H, perspective: '1600px' }}>
          <motion.div
            animate={{ rotateY: cardFlipped ? 180 : 0 }}
            transition={{ duration: 1.55, ease: [0.4, 0, 0.2, 1] }}
            style={{
              width: '100%',
              height: '100%',
              position: 'relative',
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Front */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
              }}
            >
              <CardFace variant="front" />
            </div>

            {/* Inside */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
              }}
            >
              <CardFace variant="inside" />
            </div>
          </motion.div>
        </div>

        {/* Polaroids stacked on card */}
        {POLAROIDS.map((p, i) => (
          <AnimatePresence key={p.id}>
            {polaroidIndex >= i && (
              <motion.div
                key={`p-${p.id}`}
                initial={{
                  y: -560,
                  opacity: 0,
                  rotate: p.rotate * 0.25,
                  x: p.xOffset * 0.4,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                  rotate: p.rotate,
                  x: p.xOffset,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 105,
                  damping: 17,
                  mass: 1.25,
                  opacity: { duration: 0.18, ease: 'easeIn' },
                }}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  width: POLAR_W,
                  height: POLAR_H,
                  marginLeft: -(POLAR_W / 2),
                  marginTop: -(POLAR_H / 2) - 18,
                  zIndex: i + 10,
                  willChange: 'transform',
                }}
              >
                <Polaroid src={p.src} />
              </motion.div>
            )}
          </AnimatePresence>
        ))}
      </motion.div>
    </motion.div>
  )
}

/* Card face */
function CardFace({ variant }) {
  const isInside = variant === 'inside'
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: isInside ? '#FFF9F0' : '#FFFDF8',
        boxShadow:
          '0 40px 100px rgba(26,18,9,0.28), 0 8px 24px rgba(26,18,9,0.14)',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 14,
          border: '1px solid rgba(201,168,76,0.55)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 22,
          border: '1px solid rgba(201,168,76,0.22)',
          pointerEvents: 'none',
        }}
      />

      {[
        { top: 8,    left: 8,    rotate: 0   },
        { top: 8,    right: 8,   rotate: 90  },
        { bottom: 8, right: 8,   rotate: 180 },
        { bottom: 8, left: 8,    rotate: 270 },
      ].map((pos, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            ...pos,
            width: 38,
            height: 38,
            transform: `rotate(${pos.rotate}deg)`,
          }}
        >
          <CornerSVG />
        </div>
      ))}

      {isInside ? <InsideMotif /> : <FrontMotif />}
    </div>
  )
}

function FrontMotif() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18 }}>
      <LotusSVG size={100} />
      <GoldRule />
      <KalashSVG size={46} />
      <GoldRule />
    </div>
  )
}

function InsideMotif() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14, width: '100%', height: '100%', justifyContent: 'space-between', padding: '48px 32px 52px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
        <MandalaSVG size={108} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 32, height: 1, background: 'rgba(201,168,76,0.5)' }} />
          <div style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--gold)' }} />
          <div style={{ width: 32, height: 1, background: 'rgba(201,168,76,0.5)' }} />
        </div>
      </div>
      <p
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: 'italic',
          fontWeight: 300,
          fontSize: '1.55rem',
          color: 'rgba(201,168,76,0.8)',
          letterSpacing: '0.05em',
          textAlign: 'center',
          lineHeight: 1.2,
        }}
      >
        Dreams to Life
      </p>
    </div>
  )
}

function GoldRule() {
  return (
    <div
      style={{
        width: 56,
        height: 1,
        background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.7), transparent)',
      }}
    />
  )
}

/* Polaroid frame */
function Polaroid({ src }) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: '#fff',
        padding: '11px 11px 44px',
        boxShadow:
          '0 18px 56px rgba(26,18,9,0.3), 0 4px 14px rgba(26,18,9,0.16)',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #e8d5a3 0%, #d4af3720 100%)',
        }}
      >
        <img
          src={src}
          alt=""
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          onError={e => { e.currentTarget.style.display = 'none' }}
        />
      </div>
    </div>
  )
}

/* SVG decorations */
function CornerSVG() {
  return (
    <svg viewBox="0 0 38 38" fill="none" width="38" height="38">
      <path d="M3 35 L3 3 L35 3" stroke="rgba(201,168,76,0.65)" strokeWidth="1.3" fill="none" strokeLinecap="round" />
      <path d="M3 13 Q8 8 13 3" stroke="rgba(201,168,76,0.4)" strokeWidth="0.9" fill="none" />
      <circle cx="3" cy="3" r="1.8" fill="rgba(201,168,76,0.75)" />
    </svg>
  )
}

function LotusSVG({ size = 100 }) {
  const cx = size / 2, cy = size / 2
  return (
    <svg viewBox={`0 0 ${size} ${size}`} fill="none" width={size} height={size}>
      {Array.from({ length: 8 }).map((_, i) => (
        <ellipse
          key={i}
          cx={cx} cy={cy - size * 0.26}
          rx={size * 0.065} ry={size * 0.22}
          fill="rgba(201,168,76,0.12)"
          stroke="rgba(201,168,76,0.65)"
          strokeWidth="0.9"
          transform={`rotate(${i * 45} ${cx} ${cy})`}
        />
      ))}
      <circle cx={cx} cy={cy} r={size * 0.11} fill="none" stroke="rgba(201,168,76,0.75)" strokeWidth="1" />
      <circle cx={cx} cy={cy} r={size * 0.045} fill="rgba(201,168,76,0.9)" />
    </svg>
  )
}

function KalashSVG({ size = 46 }) {
  return (
    <svg viewBox="0 0 40 52" fill="none" width={size} height={size * 1.3}>
      <path d="M8 40 Q4 30 6 20 Q9 10 20 8 Q31 10 34 20 Q36 30 32 40 Z"
        stroke="rgba(201,168,76,0.6)" strokeWidth="1.1" fill="rgba(201,168,76,0.07)" />
      <rect x="14" y="4" width="12" height="6" rx="1.5"
        stroke="rgba(201,168,76,0.6)" strokeWidth="1" fill="none" />
      <rect x="11" y="40" width="18" height="5" rx="1.5"
        stroke="rgba(201,168,76,0.5)" strokeWidth="1" fill="none" />
      <line x1="14" y1="20" x2="26" y2="20" stroke="rgba(201,168,76,0.3)" strokeWidth="0.7" />
      <line x1="13" y1="27" x2="27" y2="27" stroke="rgba(201,168,76,0.3)" strokeWidth="0.7" />
    </svg>
  )
}

function MandalaSVG({ size = 108 }) {
  const cx = size / 2, cy = size / 2, r = size / 2
  return (
    <svg viewBox={`0 0 ${size} ${size}`} fill="none" width={size} height={size}>
      <circle cx={cx} cy={cy} r={r * 0.92} stroke="rgba(201,168,76,0.2)" strokeWidth="0.7" />
      <circle cx={cx} cy={cy} r={r * 0.72} stroke="rgba(201,168,76,0.3)" strokeWidth="0.8" />
      {Array.from({ length: 12 }).map((_, i) => (
        <ellipse key={i}
          cx={cx} cy={cy - r * 0.52}
          rx={r * 0.07} ry={r * 0.18}
          fill="rgba(201,168,76,0.22)"
          stroke="rgba(201,168,76,0.5)"
          strokeWidth="0.6"
          transform={`rotate(${i * 30} ${cx} ${cy})`}
        />
      ))}
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (i / 8) * Math.PI * 2 - Math.PI / 2
        return (
          <circle key={i}
            cx={cx + Math.cos(a) * r * 0.42}
            cy={cy + Math.sin(a) * r * 0.42}
            r={r * 0.03} fill="rgba(201,168,76,0.65)"
          />
        )
      })}
      <circle cx={cx} cy={cy} r={r * 0.13} stroke="rgba(201,168,76,0.65)" strokeWidth="0.9" fill="none" />
      <circle cx={cx} cy={cy} r={r * 0.045} fill="rgba(201,168,76,0.9)" />
    </svg>
  )
}
