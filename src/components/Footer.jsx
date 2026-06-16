export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        background: 'var(--text-dark)',
        color: 'rgba(250,247,242,0.7)',
        padding: '72px 0 36px',
      }}
    >
      <div className="container">
        {/* Top row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: 48,
            paddingBottom: 56,
            borderBottom: '1px solid rgba(201,168,76,0.2)',
            marginBottom: 36,
          }}
        >
          {/* Brand */}
          <div>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontStyle: 'italic',
                fontWeight: 300,
                fontSize: '1.6rem',
                color: 'var(--cream-white)',
                marginBottom: 16,
                lineHeight: 1,
              }}
            >
              Imagine{' '}
              <span style={{ color: 'var(--gold)' }}>Weddings</span>
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                lineHeight: 1.7,
                color: 'rgba(250,247,242,0.55)',
                maxWidth: 240,
              }}
            >
              Crafting timeless celebrations with passion, artistry,
              and meticulous care since 2018.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.68rem',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                marginBottom: 20,
              }}
            >
              Navigate
            </h3>
            {[
              { label: 'Services', href: '/services' },
              { label: 'Stories', href: '#stories' },
              { label: 'About', href: '#about' },
              { label: 'Contact', href: '#contact' },
            ].map(link => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-body)',
                  fontSize: '1rem',
                  color: 'rgba(250,247,242,0.6)',
                  marginBottom: 10,
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={e => (e.target.style.color = 'var(--gold)')}
                onMouseLeave={e => (e.target.style.color = 'rgba(250,247,242,0.6)')}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social + tagline */}
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.68rem',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                marginBottom: 20,
              }}
            >
              Follow Our Journey
            </h3>
            {[
              { label: 'Instagram', href: 'https://www.instagram.com/letsimagineyourwedding/' },
            ].map(s => (
              <a
                key={s.label}
                href={s.href}
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-body)',
                  fontSize: '1rem',
                  color: 'rgba(250,247,242,0.6)',
                  marginBottom: 10,
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={e => (e.target.style.color = 'var(--gold)')}
                onMouseLeave={e => (e.target.style.color = 'rgba(250,247,242,0.6)')}
              >
                {s.label}
              </a>
            ))}

          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 12,
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.82rem',
              color: 'rgba(250,247,242,0.35)',
              letterSpacing: '0.05em',
            }}
          >
            © {year} Imagine Weddings. All rights reserved.
          </p>
          <p
            style={{
              fontFamily: 'var(--font-heading)',
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: '0.95rem',
              color: 'rgba(201,168,76,0.5)',
            }}
          >
            Every love story deserves a perfect chapter.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer .container > div:first-child {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </footer>
  )
}
