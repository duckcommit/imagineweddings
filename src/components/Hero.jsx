import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import heroImg from '../assets/hero.webp'

const WORDS = ['Legend', 'Legacy', 'Forever']
const TYPE_SPEED  = 80
const DELETE_SPEED = 50
const PAUSE_MS    = 1800

function useTypewriter(words) {
  const [display, setDisplay] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIdx]
    let timeout

    if (!deleting && display === current) {
      timeout = setTimeout(() => setDeleting(true), PAUSE_MS)
    } else if (deleting && display === '') {
      setDeleting(false)
      setWordIdx(i => (i + 1) % words.length)
    } else {
      timeout = setTimeout(() => {
        setDisplay(deleting
          ? current.slice(0, display.length - 1)
          : current.slice(0, display.length + 1)
        )
      }, deleting ? DELETE_SPEED : TYPE_SPEED)
    }

    return () => clearTimeout(timeout)
  }, [display, deleting, wordIdx, words])

  return display
}

export default function Hero({ visible = true }) {
  const typedWord = useTypewriter(WORDS)
  return (
    <motion.section
      id="hero"
      initial={{ scale: 1.08 }}
      animate={visible ? { scale: 1 } : { scale: 1.08 }}
      transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
      style={{
        minHeight: '100dvh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background — slow Ken Burns zoom */}
      <motion.div
        initial={{ scale: 1.12 }}
        animate={{ scale: 1.0 }}
        transition={{ duration: 14, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${heroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: '55% center',
          backgroundRepeat: 'no-repeat',
          filter: 'contrast(1.05) saturate(1.08)',
        }}
      />

      {/* Cream overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(100deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.75) 35%, rgba(0,0,0,0.35) 58%, rgba(0,0,0,0.08) 80%, rgba(0,0,0,0.0) 100%)',
        }}
      />

      {/* Decorative gold ring — right side, fades in slowly */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 0.18, scale: 1 }}
        transition={{ duration: 2.2, delay: 0.8, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          right: '10%',
          top: '50%',
          transform: 'translateY(-50%)',
          width: 440,
          height: 440,
          borderRadius: '50%',
          border: '1px solid var(--gold)',
          pointerEvents: 'none',
        }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 2.4, delay: 1.0, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          right: 'calc(10% - 36px)',
          top: '50%',
          transform: 'translateY(-50%)',
          width: 512,
          height: 512,
          borderRadius: '50%',
          border: '1px solid var(--gold)',
          pointerEvents: 'none',
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: 600,
          padding: '120px 0 140px 80px',
        }}
      >
        {/* Label — clips in from left */}
        <motion.span
          initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 1 }}
          animate={{ clipPath: 'inset(0 0% 0 0)', opacity: 1 }}
          transition={{ duration: 0.75, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            display: 'block',
            fontFamily: 'var(--font-body)',
            fontSize: '0.68rem',
            fontWeight: 500,
            letterSpacing: '0.38em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            marginBottom: 20,
          }}
        >
          India's Finest Wedding Studio
        </motion.span>

        {/* Heading — words stagger up */}
        <div
          style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 300,
            fontSize: 'clamp(3rem, 6vw, 5.2rem)',
            lineHeight: 1.06,
            color: 'rgba(255,255,255,0.95)',
            marginBottom: 24,
            overflow: 'hidden',
          }}
        >
          {[
            { word: 'Where', delay: 0.35 },
            { word: 'Love',  delay: 0.48 },
          ].map(({ word, delay }) => (
            <span key={word} style={{ display: 'inline-block', overflow: 'hidden', marginRight: '0.25em' }}>
              <motion.span
                display="block"
                initial={{ y: '105%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] }}
                style={{ display: 'block' }}
              >
                {word}
              </motion.span>
            </span>
          ))}
          <br />
          <span style={{ display: 'inline-block', overflow: 'hidden', marginRight: '0.25em' }}>
            <motion.span
              initial={{ y: '105%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 0.85, delay: 0.61, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: 'block' }}
            >
              Becomes
            </motion.span>
          </span>
          <br />
          <motion.em
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.76 }}
            style={{ fontStyle: 'italic', color: 'var(--gold)', display: 'inline-block' }}
          >
            {typedWord}
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity, ease: 'steps(1)' }}
              style={{ display: 'inline-block', marginLeft: 2, color: 'var(--gold)' }}
            >
              |
            </motion.span>
          </motion.em>
        </div>

        {/* Gold line — draws in */}
        <motion.div
          initial={{ width: 0, opacity: 1 }}
          animate={{ width: 52, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            height: 1,
            background: 'var(--gold)',
            marginBottom: 26,
          }}
        />

        {/* Body text */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(1.05rem, 1.8vw, 1.3rem)',
            fontWeight: 400,
            lineHeight: 1.8,
            color: 'rgba(255,255,255,0.7)',
            maxWidth: 460,
            marginBottom: 44,
          }}
        >
          Creating timeless celebrations where every detail whispers
          the story of your love. From intimate gatherings to grand
          affairs — crafted with intention.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}
        >
          <a href="#contact" className="btn-primary">
            Begin Your Journey
          </a>
          <a href="#stories" className="btn-outline">
            View Our Work
          </a>
        </motion.div>
      </div>

      {/* Organic wave bottom */}
      <div
        style={{
          position: 'absolute',
          bottom: -2,
          left: 0,
          right: 0,
          lineHeight: 0,
          pointerEvents: 'none',
        }}
      >
        <svg
          viewBox="0 0 1440 88"
          preserveAspectRatio="none"
          style={{ display: 'block', width: '100%', height: 88 }}
        >
          <path
            d="M-10,54 C28,38 55,72 95,52 C135,32 162,66 205,48 C248,30 275,63 318,44
              C361,25 390,60 432,42 C474,24 505,64 548,46 C591,28 622,66 665,50
              C708,34 740,70 782,52 C824,34 858,68 900,50 C942,32 978,64 1018,47
              C1058,30 1090,65 1132,49 C1174,33 1208,68 1252,52 C1296,36 1328,66 1370,50
              C1400,38 1428,60 1450,52 L1450,90 L-10,90 Z"
            fill="#FAF7F2"
          />
          <path
            d="M-10,62 C40,48 70,76 115,58 C160,40 185,72 230,56 C275,40 295,68 342,54
              C389,40 410,70 458,56 C506,42 528,72 576,58 C624,44 648,74 695,60
              C742,46 768,74 814,60 C860,46 882,72 928,58 C974,44 998,72 1046,58
              C1094,44 1118,72 1164,58 C1210,44 1236,72 1282,58 C1328,44 1355,70 1395,58
              C1420,50 1440,62 1450,58 L1450,90 L-10,90 Z"
            fill="#FAF7F2"
            opacity="0.65"
          />
        </svg>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        style={{
          position: 'absolute',
          bottom: 100,
          left: 80,
          display: 'flex',
          alignItems: 'center',
          gap: 12,
        }}
      >
        <motion.div
          animate={{ x: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            width: 36,
            height: 1,
            background: 'linear-gradient(to right, var(--gold), transparent)',
          }}
        />
        <motion.span
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.63rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.5)',
          }}
        >
          Scroll
        </motion.span>
      </motion.div>
    </motion.section>
  )
}
