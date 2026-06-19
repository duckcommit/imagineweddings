import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logoImg from '../assets/logo.jpeg'

const NAV_LINKS = [
  { label: 'Services', to: '/services', isRoute: true },
  { label: 'Stories',  href: '#stories'               },
  { label: 'About',    to: '/about', isRoute: true       },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkColor = scrolled ? 'var(--text-muted)' : 'rgba(255,255,255,0.88)'

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: scrolled ? '10px 48px' : '18px 48px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: scrolled
          ? 'rgba(250,247,242,0.95)'
          : 'linear-gradient(to bottom, rgba(26,18,9,0.42) 0%, transparent 100%)',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(201,168,76,0.2)' : 'none',
        transition: 'all 0.4s cubic-bezier(0.25,0.46,0.45,0.94)',
      }}
    >
      {/* Logo — oval image */}
      <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
        <img
          src={logoImg}
          alt="Imagine Weddings"
          style={{
            height: scrolled ? 52 : 60,
            width: scrolled ? 52 : 60,
            objectFit: 'cover',
            borderRadius: '50%',
            border: scrolled
              ? '1.5px solid rgba(201,168,76,0.45)'
              : '1.5px solid rgba(201,168,76,0.6)',
            boxShadow: scrolled ? 'none' : '0 2px 16px rgba(26,18,9,0.18)',
            transition: 'all 0.4s ease',
          }}
        />
      </a>

      {/* Desktop Nav */}
      <nav style={{ display: 'flex', alignItems: 'center', gap: 40 }} aria-label="Main navigation">
        {NAV_LINKS.map(link =>
          link.isRoute ? (
            <Link
              key={link.label}
              to={link.to}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.82rem',
                fontWeight: 500,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: linkColor,
                textDecoration: 'none',
                transition: 'color 0.3s ease',
                display: 'none',
                position: 'relative',
              }}
              className="nav-link"
            >
              {link.label}
            </Link>
          ) : (
            <a
              key={link.label}
              href={link.href}
              onClick={link.scroll ? (e) => {
                e.preventDefault()
                document.getElementById(link.scroll)?.scrollIntoView({ behavior: 'smooth' })
              } : undefined}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.82rem',
                fontWeight: 500,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: linkColor,
                textDecoration: 'none',
                transition: 'color 0.3s ease',
                display: 'none',
                position: 'relative',
              }}
              className="nav-link"
            >
              {link.label}
            </a>
          )
        )}

        <style>{`
          @media (min-width: 768px) {
            .nav-link { display: inline !important; }
            .nav-link::after {
              content: '';
              position: absolute;
              left: 0; bottom: -4px;
              width: 0; height: 1px;
              background: var(--gold);
              transition: width 0.3s ease;
            }
            .nav-link:hover::after { width: 100%; }
          }
        `}</style>

        <a
          href="#contact"
          className="btn-primary"
          style={{ fontSize: '0.75rem', padding: '12px 28px' }}
        >
          Contact Us
        </a>
      </nav>
    </header>
  )
}
