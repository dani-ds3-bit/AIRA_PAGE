import { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer'
import { VIDEOS } from '../../assets/videos'
import './ReservaPage.css'

const INSTALL_IMG = '/AIRA_PAGE/imagenes/contacto_instalacion.jpg'


const faqGroups = [
  {
    category: 'Para conductores',
    icon: 'directions_car',
    items: [
      {
        q: '¿Qué necesito para usar AIRA como conductor?',
        a: 'Solo necesitas descargar la aplicación móvil, crear una cuenta y tener conexión a internet. El sistema te mostrará los espacios disponibles cercanos a tu destino.',
      },
      {
        q: '¿Cómo sé que el espacio estará disponible cuando llegue?',
        a: 'La reserva es digital con confirmación en tiempo real. El módulo físico controla el acceso al espacio, por lo que nadie más puede ocuparlo una vez que tienes una reserva activa.',
      },
      {
        q: '¿Qué pasa si alguien invade el espacio que reservé?',
        a: 'El módulo cuenta con alarma activa y registro de placa. AIRA tiene evidencia visual del vehículo no autorizado y puede proporcionar esa información en caso de ser necesario.',
      },
      {
        q: '¿Cómo pago?',
        a: 'El pago se realiza directamente desde la app. Solo se cobra por las horas que realmente uses, sin suscripciones ni cargos ocultos.',
      },
    ],
  },
  {
    category: 'Para arrendadores',
    icon: 'home',
    items: [
      {
        q: '¿Cómo funciona el módulo físico inteligente?',
        a: 'El módulo se instala en el espacio de estacionamiento y cuenta con una cámara de video que, mediante inteligencia artificial, detecta los vehículos registrados. También incluye un sistema de luces LED: verde (disponible), rojo (ocupado) y ámbar (en espera).',
      },
      {
        q: '¿Daña el módulo mi portón o fachada?',
        a: 'No. El módulo se instala sin afectar la estructura del inmueble, el portón ni la fachada. El proceso es no invasivo y reversible.',
      },
      {
        q: '¿Puedo bloquear mi cochera para uso personal cuando quiera?',
        a: 'Sí. Tú controlas tu disponibilidad desde la app en todo momento. Puedes marcarla como no disponible cuando la necesites para uso propio, sin restricciones.',
      },
      {
        q: '¿Puedo rentar mi espacio si no lo uso todo el tiempo?',
        a: 'Sí. Si eres propietario de un espacio, puedes registrarlo en la plataforma. AIRA gestiona automáticamente las reservas, el acceso del vehículo y el pago correspondiente.',
      },
    ],
  },
  {
    category: 'General',
    icon: 'info',
    items: [
      {
        q: '¿El sistema funciona sin internet?',
        a: 'El módulo físico opera con conexión Wi-Fi para sincronizarse con la nube y actualizar la disponibilidad en tiempo real. Sin embargo, el módulo mantiene el estado del LED hasta recibir una nueva señal.',
      },
      {
        q: '¿En qué ciudades está disponible AIRA?',
        a: 'AIRA está enfocado actualmente en zonas urbanas densamente pobladas de México, priorizando áreas con alta demanda de estacionamiento como la Ciudad de México y otras capitales de estado.',
      },
      {
        q: '¿AIRA tiene respaldo legal para operar?',
        a: 'Sí. El modelo de AIRA se basa en el contrato de arrendamiento contemplado en el Código Civil Federal y en el derecho consuetudinario del propietario sobre su acceso vehicular. En la fase piloto se opera con el consentimiento explícito de cada propietario participante.',
      },
    ],
  },
]

// Build flat index map: [groupIdx, itemIdx] per global index
const flatFaqs = faqGroups.flatMap((g) => g.items)

export default function ContactoPage() {
  const [openFaqs, setOpenFaqs] = useState(flatFaqs.map(() => false))
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
              {(() => {
                let globalIdx = 0
                return faqGroups.map((group) => (
                  <div key={group.category} className="contacto-faq__group">
                    {/* Category header */}
                    <div className="contacto-faq__group-header">
                      <span className="material-symbols-outlined contacto-faq__group-icon">{group.icon}</span>
                      <span className="label-sm contacto-faq__group-label">{group.category}</span>
                    </div>
                    {group.items.map((faq) => {
                      const idx = globalIdx++
                      return (
                        <div key={faq.q} className="contacto-faq__item contacto-faq__item--border">
                          <button className="contacto-faq__question" onClick={() => toggleFaq(idx)}>
                            <span className="label-sm contacto-faq__q-text">{faq.q}</span>
                            <span className="material-symbols-outlined contacto-faq__q-icon">
                              {openFaqs[idx] ? 'remove' : 'add'}
                            </span>
                          </button>
                          {openFaqs[idx] && (
                            <p className="body-md contacto-faq__answer">{faq.a}</p>
                          )}
                        </div>
                      )
                    })}
                  </div>
                ))
              })()}
            </div>

            {/* Contacto */}
            <div className="contacto-faq__contact">
              <p className="label-sm contacto-faq__contact-label">Síguenos en Redes Sociales</p>
              <div className="contacto-faq__contact-links">
                <div className="contacto-faq__contact-item">
                  <span className="material-symbols-outlined">public</span>
                  <div>
                    <div className="label-sm contacto-faq__contact-sublabel">Facebook</div>
                    <span className="body-md">facebook.com/Aira ByteNova</span>
                  </div>
                </div>
                <div className="contacto-faq__contact-item">
                  <span className="material-symbols-outlined">photo_camera</span>
                  <div>
                    <div className="label-sm contacto-faq__contact-sublabel">Instagram</div>
                    <span className="body-md">@aira_bytenova</span>
                  </div>
                </div>
                <div className="contacto-faq__contact-item">
                  <span className="material-symbols-outlined">alternate_email</span>
                  <div>
                    <div className="label-sm contacto-faq__contact-sublabel">X (Twitter)</div>
                    <span className="body-md">@aira_bytenova</span>
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
