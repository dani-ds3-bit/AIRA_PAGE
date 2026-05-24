import { useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer'
import { VIDEOS } from '../../assets/videos'
import './VisionPage.css'

const COMO_FUNCIONA_IMG = '/AIRA_PAGE/imagenes/chatbot_laptop.jpg'
const VID1_IMG = '/AIRA_PAGE/imagenes/reserva_app_in_car.jpg'
const VID2_IMG = '/AIRA_PAGE/imagenes/vision_solucion.jpg'
const VID3_IMG = '/AIRA_PAGE/imagenes/vision_impacto.jpg'

const pilares = [
  {
    img: VID1_IMG,
    title: 'Busca y Reserva',
    label: 'App Móvil',
    body: 'Los conductores abren la app de AIRA, visualizan en el mapa los espacios disponibles cercanos a su destino y reservan con un toque, conociendo el precio por anticipado.',
  },
  {
    img: null,
    title: 'Módulo Inteligente',
    label: 'Video del Proyecto',
    body: 'Al llegar al lugar, el Módulo Físico de AIRA detecta el vehículo registrado mediante su cámara de IA, iluminando su LED en verde para indicar que el espacio es tuyo.',
  },
  {
    img: null,
    title: 'Estaciona Seguro',
    label: 'Video del Proyecto',
    body: 'El conductor se estaciona sin fricciones. Al retirarse, el sistema cobra automáticamente el tiempo exacto de uso y libera el espacio para el siguiente conductor en la red.',
  },
]

export default function VisionPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="vision-page">
      <Navbar />

      <main>
        {/* ── Hero Section ── */}
        <section className="vision-hero">
          <div className="vision-hero__content container">
            <div className="vision-hero__eyebrow">
              <span className="vision-hero__eyebrow-line" />
              <span className="label-sm vision-hero__eyebrow-label">NUESTRA VISIÓN</span>
            </div>
            
            <h1 className="headline-xl vision-hero__title">
              Menos vueltas. <br />
              <span className="vision-hero__title-accent">Más soluciones.</span>
            </h1>
          </div>
        </section>

        {/* ── Chatbot Inclusivo ── */}
        <section className="vision-chatbot container">
          <div className="glass-panel chatbot-banner">
            <div className="chatbot-banner__content">
              <div className="hero-cinematic__badge">
                <span className="hero-cinematic__badge-tag">Innovación Inclusiva</span>
                <span className="hero-cinematic__badge-text">Para todos</span>
              </div>
              <h2 className="headline-lg">Chatbot en WhatsApp</h2>
              <p className="body-lg">
                AIRA integra un chatbot en WhatsApp para que todas las personas, incluyendo quienes tienen dificultad con la tecnología (como personas mayores), puedan usar el servicio de manera fácil y rápida.
              </p>
              <ul className="chatbot-features">
                <li><span className="material-symbols-outlined">chat</span> Habla como siempre, el chatbot te guía.</li>
                <li><span className="material-symbols-outlined">support_agent</span> Atención sencilla 24/7.</li>
                <li><span className="material-symbols-outlined">lock</span> Tus datos siempre protegidos.</li>
              </ul>
            </div>
            <div className="chatbot-banner__image-wrapper">
              <img src={COMO_FUNCIONA_IMG} alt="¿Cómo funciona AIRA?" className="chatbot-banner__image" />
            </div>
          </div>
        </section>

        {/* ── El Sistema en Acción ── */}
        <section className="vision-tech">
          <div className="vision-tech__inner container">
            <div className="vision-tech__header">
              <div>
                <h2 className="headline-lg vision-tech__title">¿Cómo Funciona?</h2>
                <p className="body-md vision-tech__subtitle">
                  Busca, navega, verifica con IA y estaciona de manera segura.
                </p>
              </div>
            </div>

            <div className="vision-tech__grid">
              {pilares.map((p) => (
                <div key={p.title} className="vision-video-card glass-panel">
                  {p.img && (
                    <div style={{ padding: 0, overflow: 'hidden' }}>
                      <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                    </div>
                  )}
                  <div className="vision-video-card__content">
                    <h3 className="headline-md vision-video-card__title">{p.title}</h3>
                    <p className="body-md vision-video-card__desc">{p.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
