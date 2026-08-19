import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const [form, setForm] = useState({
    name: '', email: '', date: '', message: '',
  })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setSending(true)
    setError(null)

    const templateParams = {
      name: form.name,
      time: new Date().toLocaleString('en-IN', { dateStyle: 'long', timeStyle: 'short' }),
      message: `Email: ${form.email}\nWedding Date: ${form.date || 'Not specified'}\n\nMessage:\n${form.message}`,
    }

    emailjs.send('service_n5em86m', 'template_oaddlxi', templateParams, 'Z6VGZtrDmhfsyQPSE')
      .then(() => {
        setSent(true)
        setSending(false)
      })
      .catch(() => {
        setError('Something went wrong. Please try again or email us directly.')
        setSending(false)
      })
  }

  return (
    <section
      id="contact"
      style={{
        padding: '120px 0',
        background: 'var(--cream)',
      }}
    >
      <div className="container">
        <div
          ref={ref}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.3fr',
            gap: 80,
            alignItems: 'start',
          }}
        >
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="section-label">Let's Connect</span>
            <span className="gold-line" style={{ marginBottom: 32 }} />
            <h2 style={{
              fontFamily: "'BrittanySignature', cursive",
              fontWeight: 400,
              fontSize: 'clamp(2.8rem, 4vw, 4rem)',
              lineHeight: 1.2,
              color: 'var(--text-dark)',
              marginBottom: 24,
            }}>
              Build Your<br />
              <span style={{ color: 'var(--gold-dark)' }}>Dream Wedding</span>
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.25rem',
                lineHeight: 1.8,
                color: 'var(--text-muted)',
                marginBottom: 44,
              }}
            >
              Every great love story deserves a perfect stage. Share a
              few details and we'll reach out within 24 hours to begin
              crafting yours.
            </p>

            {/* Contact details */}
            {[
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                    <path d="M4 4h16v16H4z" rx="2" />
                    <path d="M4 8l8 5 8-5" />
                  </svg>
                ),
                label: 'Email',
                value: 'weddingsimagine@gmail.com',
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                    <path d="M22 16.9v3a2 2 0 01-2.2 2A19.8 19.8 0 012.1 5.2 2 2 0 014.1 3h3a2 2 0 012 1.7 12.7 12.7 0 00.7 2.8 2 2 0 01-.5 2.1L8.1 10.9a16 16 0 006 6l1.2-1.2a2 2 0 012.1-.5c.9.3 1.8.5 2.8.7A2 2 0 0122 17z" />
                  </svg>
                ),
                label: 'Phone',
                value: (
                  <>
                  +91 9112756626 <br/>
                  +91 9325204096
                  </>
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                    <path d="M12 2C8.1 2 5 5.1 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.9-3.1-7-7-7z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                ),
                label: 'Address',
                value: 'Pune, Maharashtra',
              },
            ].map(item => (
              <div
                key={item.label}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 16,
                  marginBottom: 24,
                }}
              >
                <div
                  style={{
                    color: 'var(--gold-dark)',
                    marginTop: 3,
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.68rem',
                      letterSpacing: '0.25em',
                      textTransform: 'uppercase',
                      color: 'var(--text-light)',
                      marginBottom: 2,
                    }}
                  >
                    {item.label}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '1.15rem',
                      color: 'var(--text-muted)',
                    }}
                  >
                    {item.value}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              background: 'var(--cream-white)',
              padding: '52px 48px',
              boxShadow: 'var(--shadow-card)',
              borderTop: '2px solid var(--gold)',
            }}
          >
            {sent ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: '50%',
                    border: '2px solid var(--gold)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 24px',
                    color: 'var(--gold)',
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 12l5 5 9-9" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontStyle: 'italic',
                    fontWeight: 300,
                    fontSize: '1.8rem',
                    color: 'var(--text-dark)',
                    marginBottom: 12,
                  }}
                >
                  Message Received
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '1.05rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.7,
                  }}
                >
                  Thank you for reaching out. We'll be in touch within 24 hours
                  to begin planning your perfect day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontStyle: 'italic',
                    fontWeight: 300,
                    fontSize: '1.6rem',
                    color: 'var(--text-dark)',
                    marginBottom: 36,
                  }}
                >
                  Tell Us About Your Day
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 24 }}>
                  <FormField
                    label="Your Names"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                  <FormField
                    label="Email Address"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <FormField
                  label="Wedding Date (if known)"
                  name="date"
                  type="date"
                  value={form.date}
                  onChange={handleChange}
                  style={{ marginBottom: 24 }}
                />

                <FormField
                  label="Tell us about your vision"
                  name="message"
                  type="textarea"
                  value={form.message}
                  onChange={handleChange}
                  required
                  style={{ marginBottom: 32 }}
                />

                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', opacity: sending ? 0.7 : 1 }} disabled={sending}>
                  {sending ? 'Sending…' : 'Send Your Enquiry'}
                </button>
                {error && (
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: '#c0392b', marginTop: 12 }}>
                    {error}
                  </p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #contact .container > div {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  )
}

function FormField({ label, name, type, value, onChange, required, style: extraStyle }) {
  const [focused, setFocused] = useState(false)

  const inputStyle = {
    width: '100%',
    background: 'transparent',
    border: 'none',
    borderBottom: `1px solid ${focused ? 'var(--gold)' : 'rgba(107,91,69,0.25)'}`,
    padding: '10px 0',
    fontFamily: 'var(--font-body)',
    fontSize: '1rem',
    color: 'var(--text-dark)',
    outline: 'none',
    transition: 'border-color 0.3s ease',
    resize: 'none',
    display: 'block',
    marginTop: 6,
  }

  return (
    <div style={{ ...extraStyle }}>
      <label
        htmlFor={name}
        style={{
          display: 'block',
          fontFamily: 'var(--font-body)',
          fontSize: '0.72rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: focused ? 'var(--gold-dark)' : 'var(--text-light)',
          transition: 'color 0.3s ease',
        }}
      >
        {label}
        {required && <span style={{ color: 'var(--red)', marginLeft: 2 }}>*</span>}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          rows={4}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          required={required}
          style={inputStyle}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          required={required}
          style={inputStyle}
        />
      )}
    </div>
  )
}
