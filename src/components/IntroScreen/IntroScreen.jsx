import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import './IntroScreen.css'

export default function IntroScreen({ onComplete }) {
  const containerRef = useRef(null)
  const logoRef = useRef(null)
  const glowRef = useRef(null)
  const revealRef = useRef(null)
  const taglineRef = useRef(null)
  const subtitleRef = useRef(null)
  const descRef = useRef(null)
  const dividerRef = useRef(null)
  const [isDone, setIsDone] = useState(false)
  const tlRef = useRef(null)

  const handleSkip = () => {
    if (isDone) return
    tlRef.current?.kill()
    gsap.killTweensOf(logoRef.current)
    gsap.to(containerRef.current, {
      opacity: 0,
      duration: 0.4,
      ease: 'power2.inOut',
      onComplete: () => {
        setIsDone(true)
        onComplete()
      },
    })
  }

  useEffect(() => {
    const tl = gsap.timeline({
      delay: 0.5,
      onComplete: () => {
        setIsDone(true)
        onComplete()
      }
    })
    tlRef.current = tl

    // 1. Entrada del logo
    tl.fromTo(logoRef.current,
      { opacity: 0, scale: 1.1, filter: 'blur(10px)' },
      { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 1.5, ease: 'power3.out' }
    )
    tl.fromTo(glowRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5, ease: 'power2.out' },
      '-=1'
    )

    // Animación sutil de flotación mientras esperamos
    gsap.to(logoRef.current, {
      y: -10,
      duration: 2,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
    })

    // Mantenemos el logo en pantalla unos segundos
    tl.to({}, { duration: 1.8 })

    // 2. Simulamos el "scroll down" automático (el logo sube y desaparece)
    tl.to([logoRef.current, glowRef.current], {
      y: -120,
      opacity: 0,
      scale: 0.9,
      duration: 1.2,
      ease: 'power3.inOut'
    })

    // 3. Aparece el texto de revelación
    tl.fromTo(revealRef.current,
      { display: 'none' },
      { display: 'flex', duration: 0 }
    )
    
    tl.fromTo(taglineRef.current,
      { opacity: 0, y: 40, filter: 'blur(8px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1, ease: 'power3.out' }
    )
    tl.fromTo(subtitleRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      '-=0.6'
    )
    tl.fromTo(descRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      '-=0.6'
    )
    tl.fromTo(dividerRef.current,
      { scaleX: 0, opacity: 0 },
      { scaleX: 1, opacity: 1, duration: 0.8, ease: 'power3.out', transformOrigin: 'center' },
      '-=0.4'
    )

    // Tiempo para que el usuario lea el texto
    tl.to({}, { duration: 4.0 })

    // 4. Salida de toda la pantalla de intro
    tl.to(containerRef.current, {
      opacity: 0,
      duration: 1,
      ease: 'power2.inOut'
    })

    return () => {
      tl.kill()
      gsap.killTweensOf(logoRef.current)
    }
  }, [onComplete])

  if (isDone) return null

  return (
    <div ref={containerRef} className="intro-screen" id="intro-screen" onClick={handleSkip}>
      {/* Fondo de partículas */}
      <div className="intro-particles">
        {Array.from({ length: 28 }).map((_, i) => (
          <span key={i} className="intro-particle" style={{
            '--x': `${Math.random() * 100}%`,
            '--y': `${Math.random() * 100}%`,
            '--d': `${2 + Math.random() * 4}s`,
            '--s': `${1 + Math.random() * 2}px`,
          }} />
        ))}
      </div>

      {/* Contenedor del Logo */}
      <div className="intro-logo-container">
        <div ref={glowRef} className="intro-glow" />
        <img
          ref={logoRef}
          src="/AIRA_PAGE/logo_inicio.png"
          alt="AiRA"
          className="intro-logo-img"
        />
      </div>

      {/* Textos Automáticos */}
      <div ref={revealRef} className="intro-reveal-auto">
        <img
          ref={taglineRef}
          src="/AIRA_PAGE/logo_inicio.png"
          alt="AiRA"
          className="intro-tagline-logo"
        />
        <h2 ref={subtitleRef} className="intro-subtitle-auto">Artificial Intelligence Rental Assistant</h2>
        <p ref={descRef} className="intro-desc-auto">
          Rentabilidad más inteligente. Un salto enorme respecto a modelos convencionales. Este sistema es capaz de detectar, gestionar y asegurar tu espacio de forma instantánea.
        </p>
        <div ref={dividerRef} className="intro-divider-auto" />
      </div>
    </div>
  )
}
