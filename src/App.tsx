import './index.css'
import { useEffect, useRef, useState } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import ASHWINI_gallery from './pages/ASHWINI_gallery'
import { Hero } from './pages/Hero'
import { About } from './pages/About'
import { Skills } from './pages/Skills'
import { Projects } from './pages/Projects'
import { Certifications } from './pages/Certifications'
import { Contact } from './pages/Contact'

function App() {
  const cursorRef = useRef<HTMLDivElement | null>(null)

  const [showGallery, setShowGallery] = useState(false)

  useEffect(() => {
    // when gallery is shown we don't have the main sections mounted
    if (showGallery) return

    const sections = document.querySelectorAll('main section')
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active')
          }
        })
      },
      { threshold: 0.15 }
    )

    sections.forEach(section => observer.observe(section))
    return () => observer.disconnect()
  }, [showGallery])

  useEffect(() => {
    if (typeof window === 'undefined') return
    const checkHash = () => setShowGallery(window.location.hash === '#ASHWINI_gallery')
    checkHash()
    window.addEventListener('hashchange', checkHash)
    return () => window.removeEventListener('hashchange', checkHash)
  }, [])

  useEffect(() => {
    const cursorEl = cursorRef.current
    if (!cursorEl) return

    let mouseX = 0
    let mouseY = 0
    let ringX = 0
    let ringY = 0
    let animationFrame = 0
    const cursorSize = 36
    const damping = 0.18

    const updateCursor = () => {
      ringX += (mouseX - ringX) * damping
      ringY += (mouseY - ringY) * damping
      cursorEl.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`
      animationFrame = requestAnimationFrame(updateCursor)
    }

    const setCursorHover = (isHovering: boolean) => {
      cursorEl.classList.toggle('custom-cursor-hover', isHovering)
    }

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType === 'touch') return
      mouseX = event.clientX - cursorSize / 2
      mouseY = event.clientY - cursorSize / 2
      if (cursorEl.style.opacity !== '1') {
        cursorEl.style.opacity = '1'
      }
    }

    const handlePointerLeave = () => {
      cursorEl.style.opacity = '0'
    }

    const handleMouseOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null
      if (!target) return
      const interactive = target.closest(
        'a, button, input, textarea, select, label, [role="button"], [data-cursor-hover]'
      )
      setCursorHover(Boolean(interactive))
    }

    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerleave', handlePointerLeave)
    window.addEventListener('mouseover', handleMouseOver)

    animationFrame = requestAnimationFrame(updateCursor)

    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerleave', handlePointerLeave)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [])

  return (
    <>
      {showGallery ? (
        <ASHWINI_gallery />
      ) : (
        <>
          <Header />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Certifications />
            <Contact />
          </main>
          <Footer />
        </>
      )}
      <div className="custom-cursor" ref={cursorRef}>
        <div className="custom-cursor-dot" />
      </div>
    </>
  )
}

export default App
