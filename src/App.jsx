import { useEffect, useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Services from './components/Services'
import Platform from './components/Platform'
import Sectors from './components/Sectors'
import About from './components/About'
import Insights from './components/Insights'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
      const el = document.documentElement
      setProgress((window.scrollY / (el.scrollHeight - el.clientHeight)) * 100)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <div style={{
        position: 'fixed', top: 0, left: 0, height: '2px',
        width: `${progress}%`, background: 'linear-gradient(90deg,#2563eb,#06b6d4)',
        zIndex: 9999, transition: 'width 0.1s linear'
      }} />
      <Nav scrolled={scrolled} />
      <main style={{ paddingTop: '180px' }}>
        <Hero />
        <Services />
        <Platform />
        <Sectors />
        <About />
        <Insights />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
