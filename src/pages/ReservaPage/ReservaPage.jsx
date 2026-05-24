import { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer'
import { VIDEOS } from '../../assets/videos'
import './ReservaPage.css'

const INSTALL_IMG = '/imagenes/contacto_instalacion.jpg'


const faqs = [
  {
    q: '¿Qué necesito para usar AIRA como conductor?',
    a: 'Solo necesitas descargar la aplicación móvil, crear una cuenta y tener conexión a internet. El sistema te mostrará los espacios disponibles cercanos a tu destino.',
  },
  {
    q: '¿Cómo funciona el módulo físico inteligente?',
    a: 'El módulo se instala en el espacio de estacionamiento y cuenta con una cámara de video que, mediante inteligencia artificial, detecta los vehículos registrados. También incluye un sistema de luces LED: verde (disponible), rojo (ocupado) y ámbar (en espera).',
  },
  {
    q: '¿Puedo rentar mi espacio si no lo uso todo el tiempo?',
    a: 'Sí. Si eres propietario de un espacio, puedes registrarlo en la plataforma como arrendador. AIRA gestiona automáticamente las reservas, el acceso del vehículo y el pago correspondiente.',
  },
  {
    q: '¿El sistema funciona sin internet?',
    a: 'El módulo físico opera con conexión Wi-Fi para sincronizarse con la nube y actualizar la disponibilidad en tiempo real. Sin embargo, el módulo mantiene el estado del LED hasta recibir una nueva señal.',
  },
  {
    q: '¿En qué ciudades está disponible AIRA?',
    a: 'AIRA está enfocado actualmente en zonas urbanas densamente pobladas de México, priorizando áreas con alta demanda de estacionamiento como la Ciudad de México y otras capitales de estado.',
  },
]

export default function ContactoPage() {
  const [openFaqs, setOpenFaqs] = useState(faqs.map((_, i) => i === 0))
  const toggleFaq = (i) => setOpenFaqs((prev) => prev.map((v, idx) => (idx === i ? !v : v)))

  return (
    <div className="contacto-page">
      <div className="contacto-page__ambient" aria-hidden="true">
        <div className="contacto-page__glow contacto-page__glow--top" />
        <div className="contacto-page__glow contacto-page__glow--bottom" />
        <div className="contacto-page__dot-grid" />
      </div>

      <Navbar />

      <main className="contacto-main container">

        {/* ── Encabezado ── */}
        <header className="contacto-header">
          <div className="contacto-header__eyebrow">
            <span className="contacto-header__eyebrow-line" />
            <span className="label-sm contacto-header__eyebrow-label">Soporte e Información</span>
          </div>
          <h1 className="headline-xl contacto-header__title">
            ¿Tienes dudas? <br />
            <span className="contacto-header__title-accent">Estamos para ayudarte</span>
          </h1>
          <p className="body-md contacto-header__subtitle">
            Encuentra respuestas a las preguntas más comunes sobre AIRA, conoce cómo se instala el
            módulo físico y contacta al equipo del proyecto.
          </p>
        </header>


        {/* ── Guía de instalación + FAQ ── */}
        <section className="contacto-bottom">

          {/* Video de instalación */}
          <div className="contacto-install glass-panel">
            <div className="contacto-install__top-line" />
            <div className="contacto-install__header">
              <div>
                <h3 className="headline-lg-mobile contacto-install__title">¿Cómo se instala el módulo?</h3>
                <p className="body-md contacto-install__sub">Proceso de integración física del dispositivo</p>
              </div>
            </div>
            <VideoPlayer
              src={VIDEOS.instalacion}
              poster={INSTALL_IMG}
              title="Guía de Instalación"
              label="Módulo Físico Inteligente"
              subtitle="Cámara IA + LEDs de señalización"
            />
            <p className="body-md contacto-install__caption">
              El módulo físico inteligente de AIRA se instala en la entrada del espacio de
              estacionamiento. Incluye una cámara de IA para detección vehicular y luces LED
              de señalización. La instalación se conecta vía Wi-Fi al servidor en la nube.
            </p>
          </div>

          {/* FAQ */}
          <div className="contacto-faq glass-panel">
            <div className="contacto-faq__heading">
              <span className="material-symbols-outlined" style={{ color: 'var(--color-secondary)' }}>quiz</span>
              <h3 className="headline-lg-mobile">Preguntas Frecuentes</h3>
            </div>

            <div className="contacto-faq__list">
              {faqs.map((faq, i) => (
                <div key={faq.q} className={`contacto-faq__item ${i < faqs.length - 1 ? 'contacto-faq__item--border' : ''}`}>
                  <button className="contacto-faq__question" onClick={() => toggleFaq(i)}>
                    <span className="label-sm contacto-faq__q-text">{faq.q}</span>
                    <span className="material-symbols-outlined contacto-faq__q-icon">
                      {openFaqs[i] ? 'remove' : 'add'}
                    </span>
                  </button>
                  {openFaqs[i] && (
                    <p className="body-md contacto-faq__answer">{faq.a}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Contacto */}
            <div className="contacto-faq__contact">
              <p className="label-sm contacto-faq__contact-label">Síguenos en Redes Sociales</p>
              <div className="contacto-faq__contact-links">
                <div className="contacto-faq__contact-item">
                  <span className="material-symbols-outlined">public</span>
                  <div>
                    <div className="label-sm contacto-faq__contact-sublabel">Facebook</div>
                    <span className="body-md">facebook.com/AIRAMobility</span>
                  </div>
                </div>
                <div className="contacto-faq__contact-item">
                  <span className="material-symbols-outlined">photo_camera</span>
                  <div>
                    <div className="label-sm contacto-faq__contact-sublabel">Instagram</div>
                    <span className="body-md">@AIRA_oficial</span>
                  </div>
                </div>
                <div className="contacto-faq__contact-item">
                  <span className="material-symbols-outlined">alternate_email</span>
                  <div>
                    <div className="label-sm contacto-faq__contact-sublabel">X (Twitter)</div>
                    <span className="body-md">@AIRA_smart</span>
                  </div>
                </div>
                <div className="contacto-faq__contact-item">
                  <span className="material-symbols-outlined">work</span>
                  <div>
                    <div className="label-sm contacto-faq__contact-sublabel">LinkedIn</div>
                    <span className="body-md">AIRA Smart Mobility</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>
      </main>

      <Footer />
    </div>
  )
}
