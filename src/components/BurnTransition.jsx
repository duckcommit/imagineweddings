import { motion } from 'framer-motion'

export default function BurnTransition({ onComplete }) {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 9999, pointerEvents: 'none', overflow: 'hidden' }}>

      {/* Gold light burst from center — expands and fades */}
      <motion.div
        initial={{ scale: 0, opacity: 1 }}
        animate={{ scale: 9, opacity: 0 }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'absolute',
          top: '50%', left: '50%',
          width: '50vmax', height: '50vmax',
          marginLeft: '-25vmax', marginTop: '-25vmax',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(232,213,163,1) 0%, rgba(201,168,76,0.55) 35%, transparent 65%)',
        }}
      />

      {/* Cream veil — zooms toward viewer and vanishes, like rushing through it */}
      <motion.div
        initial={{ scale: 1, opacity: 1 }}
        animate={{ scale: 1.5, opacity: 0 }}
        transition={{ duration: 0.52, ease: [0.4, 0, 1, 1], delay: 0.06 }}
        onAnimationComplete={onComplete}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'var(--cream)',
          transformOrigin: 'center center',
        }}
      />

    </div>
  )
}
