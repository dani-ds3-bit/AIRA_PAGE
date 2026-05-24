import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer'
import { VIDEOS } from '../../assets/videos'
import './ExperienciaPage.css'

const RESERVATION_IMG = 'imagenes/experiencia_app.jpg'
const DASHBOARD_IMG = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'

// Pasos del flujo de uso (tal como está en la memoria)
const pasos = [
  { icon: 'search',        num: '01', title: 'Buscar',    desc: 'Abre la app y encuentra los espacios disponibles más cercanos a tu destino en tiempo real.' },
  { icon: 'event_available', num: '02', title: 'Reservar', desc: 'Selecciona el espacio que más te convenga por precio o distancia y confirma tu reserva.' },
  { icon: 'directions_car', num: '03', title: 'Llegar',   desc: 'Dirígete al espacio con la guía de la app. El módulo físico valida tu llegada automáticamente.' },
  { icon: 'local_parking',  num: '04', title: 'Estacionar', desc: 'El LED verde confirma que el espacio es tuyo. Estaciona sin fricciones ni intermediarios.' },
]

export default function ExperienciaPage() {
  return (
    <div className="exp-page">
      <Navbar />

      <main className="exp-main">

        {/* ── Hero ── */}
        <section className="exp-hero container">
          <div className="exp-hero__deco exp-hero__deco--left" />
          <div className="exp-hero__deco exp-hero__deco--right" />
          <h1 className="headline-xl exp-hero__title">
            La solución <br />
            <span className="exp-hero__title-accent">en tus manos</span>
          </h1>
          <p className="body-md exp-hero__subtitle">
            AIRA transforma la búsqueda de estacionamiento en un proceso de 4 pasos: simple,
            seguro y disponible desde tu teléfono. Diseñada para cualquier conductor en zonas
            urbanas de México.
          </p>
        </section>

        {/* ── Flujo de uso: 4 pasos ── */}
        <section className="exp-steps container">
          <h2 className="headline-lg exp-steps__title">¿Cómo se usa AIRA?</h2>
          <div className="exp-steps__grid">
            {pasos.map((paso) => (
              <div key={paso.num} className="exp-step-card">
                <div className="exp-step-card__num label-sm">{paso.num}</div>
                <span className="material-symbols-outlined icon-fill exp-step-card__icon">{paso.icon}</span>
                <h3 className="headline-lg-mobile exp-step-card__title">{paso.title}</h3>
                <p className="body-md exp-step-card__desc">{paso.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Componentes de AIRA (Diseño Ultra-Premium) ── */}
        <section className="exp-components container">
          <h2 className="headline-lg exp-components__title">Los dos componentes de AIRA</h2>
          
          <div className="exp-components__grid">
            {/* Card 1: App Móvil */}
            <div className="exp-component-card glass-panel">
              <div className="exp-component-card__header">
                <span className="material-symbols-outlined exp-component-card__icon">smartphone</span>
                <h3 className="headline-md">Aplicación Móvil</h3>
              </div>
              <p className="body-md exp-component-card__desc">
                Disponible para conductores y arrendadores. Los conductores pueden buscar, comparar precios y reservar espacios cercanos. Los arrendadores gestionan su disponibilidad, horarios y reciben pagos automáticos sin intervención manual.
              </p>
              
              <ul className="exp-component-card__features">
                <li><span className="material-symbols-outlined">check_circle</span> Mapa de disponibilidad en tiempo real</li>
                <li><span className="material-symbols-outlined">check_circle</span> Reservas con confirmación instantánea</li>
                <li><span className="material-symbols-outlined">check_circle</span> Panel de control para arrendadores</li>
              </ul>

              <div className="exp-component-card__visual">
                 <div className="phone-frame-wrapper">
                   <img src="vista_telefono.png" alt="AiRA App Móvil" className="exp-component-card__phone-mockup" />
                 </div>
              </div>
            </div>

            {/* Card 2: Módulo Físico Inteligente */}
            <div className="exp-component-card glass-panel">
              <div className="exp-component-card__header">
                <span className="material-symbols-outlined exp-component-card__icon">developer_board</span>
                <h3 className="headline-md">Módulo Físico Inteligente</h3>
              </div>
              <p className="body-md exp-component-card__desc">
                Se instala en el espacio de estacionamiento. Incluye una cámara con IA que detecta vehículos registrados y LEDs de estado visibles que guían al conductor.
              </p>

              <ul className="exp-component-card__leds">
                <li className="led-item">
                  <span className="led-indicator led-indicator--green"></span>
                  <strong>VERDE</strong> — DISPONIBLE
                </li>
                <li className="led-item">
                  <span className="led-indicator led-indicator--red"></span>
                  <strong>ROJO</strong> — OCUPADO
                </li>
                <li className="led-item">
                  <span className="led-indicator led-indicator--amber"></span>
                  <strong>ÁMBAR</strong> — EN ESPERA
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Se quitó la sección de Arquitectura del Sistema */}

      </main>

      <Footer />
    </div>
  )
}
