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
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('flahtik-theme')
    if (saved === 'dark') setDark(true)
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
    localStorage.setItem('flahtik-theme', dark ? 'dark' : 'light')
  }, [dark])

  useEffect(() => {
    document.body.style.background = dark ? '#080f1e' : '#ffffff'
    document.body.style.color = dark ? '#cbd5e1' : '#1e293b'
  }, [dark])

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
      <Nav scrolled={scrolled} dark={dark} setDark={setDark} />
      <main style={{ paddingTop: '180px' }}>
        <Hero dark={dark} />
        <Services dark={dark} />
        <Platform dark={dark} />
        <Sectors dark={dark} />
        <About dark={dark} />
        <Insights dark={dark} />
        <Contact dark={dark} />
      </main>
      <Footer dark={dark} />
    </>
  )
}
