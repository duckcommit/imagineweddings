import Navbar from '../components/Navbar'
import About from '../components/About'
import Footer from '../components/Footer'
import { useEffect } from 'react'

export default function AboutPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div style={{ background: 'var(--cream)', minHeight: '100dvh' }}>
      <Navbar />
      <div style={{ paddingTop: 80 }}>
        <About />
      </div>
      <Footer />
    </div>
  )
}
