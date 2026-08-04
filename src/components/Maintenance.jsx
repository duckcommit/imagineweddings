import logo from '../assets/logo.jpeg'

export default function Maintenance() {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: 'var(--cream)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem',
      }}
    >
      <img
        src={logo}
        alt="Imagine Weddings"
        style={{ width: 96, height: 96, borderRadius: '50%', objectFit: 'cover', marginBottom: '1.5rem' }}
      />
      <h1
        style={{
          fontFamily: 'var(--font-heading)',
          color: 'var(--gold-dark)',
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          marginBottom: '0.75rem',
        }}
      >
        We'll Be Right Back
      </h1>
      <p
        style={{
          fontFamily: 'var(--font-body)',
          color: '#6b5f4a',
          fontSize: '1.05rem',
          maxWidth: 480,
          lineHeight: 1.6,
        }}
      >
        Our website is currently undergoing scheduled maintenance. Please check back shortly, or reach out to us directly on WhatsApp.
      </p>
    </div>
  )
}
