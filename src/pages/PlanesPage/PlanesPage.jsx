import { useNavigate } from 'react-router-dom'

const CONTACT_EMAIL = 'aira.bytenova@gmail.com'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import './PlanesPage.css'

const planes = [
  {
    id: 'conductor',
    icon: 'directions_car',
    title: 'Conductor',
    subtitle: 'Encuentra y reserva un lugar seguro cerca de ti. Sin suscripción.',
    price: '$25',
    currency: 'MXN',
    period: '/ hora',
    prefix: 'desde',
    recommended: false,
    features: [
      { icon: 'verified_user', text: 'Espacio verificado con seguridad real' },
      { icon: 'photo_camera', text: 'Cámara con IA + registro de placa' },
      { icon: 'notifications_active', text: 'Alarma ante intrusos activa' },
      { icon: 'schedule', text: 'Pagas solo las horas que usas' },
      { icon: 'smartphone', text: 'Reserva desde la app en segundos' },
    ],
    cta: 'Ver cómo reservar',
    ctaIcon: 'north_east',
    ctaAction: '/reserva',
  },
  {
    id: 'renta',
    icon: 'smartphone',
    title: 'Arrendador — Renta',
    subtitle: 'Módulo AIRA en tu cochera sin inversión inicial.',
    price: '$250',
    currency: 'MXN',
    period: '/ mes',
    prefix: null,
    recommended: false,
    features: [
      { icon: 'check_circle', text: 'Sin pago inicial — empieza hoy' },
      { icon: 'build_circle', text: 'Mantenimiento incluido siempre' },
      { icon: 'percent', text: 'Solo 5% de comisión por renta' },
      { icon: 'photo_camera', text: 'Módulo con cámara IA + alarma' },
      { icon: 'cancel', text: 'Cancela cuando quieras' },
    ],
    cta: 'Me interesa',
    ctaIcon: 'mail',
    ctaAction: 'scroll',  // scroll to contact section
  },
  {
    id: 'compra',
    icon: 'domain',
    title: 'Arrendador — Compra',
    subtitle: 'Adquiere tu módulo. La opción más rentable a largo plazo.',
    price: '$1,823',
    currency: 'MXN',
    period: 'pago único',
    prefix: null,
    recommended: true,
    features: [
      { icon: 'lock', text: 'El módulo es tuyo para siempre' },
      { icon: 'verified_user', text: '1 año de garantía incluida' },
      { icon: 'percent', text: '15% de comisión por transacción' },
      { icon: 'photo_camera', text: 'Cámara IA, registro de placa + alarma' },
      { icon: 'trending_up', text: 'Recupera tu inversión desde el primer mes' },
    ],
    cta: 'Adquirir módulo',
    ctaIcon: 'mail',
    ctaAction: 'scroll',  // scroll to contact section
  },
]

function scrollToContact() {
  document.getElementById('planes-contacto')?.scrollIntoView({ behavior: 'smooth' })
}

export default function PlanesPage() {
  const navigate = useNavigate()

  return (
    <div className="planes-page">
      <Navbar />

      <main className="planes-main container">

        {/* ── Hero ── */}
        <header className="planes-hero">
          <div className="planes-hero__glow" />
          <p className="label-sm planes-hero__eyebrow">Planes &amp; Precios</p>
          <h1 className="headline-xl">
            Elige tu <em>plan</em>
          </h1>
          <p className="body-md planes-hero__subtitle">
            Contrato formal presencial. Empieza como conductor o genera ingresos
            poniendo tu cochera a trabajar con tecnología AIRA.
          </p>
        </header>

        {/* ── Cards Grid ── */}
        <section className="planes-grid">
          {planes.map((plan) => (
            <div
              key={plan.id}
              className={`planes-card${plan.recommended ? ' planes-card--recommended' : ''}`}
            >
              {plan.recommended && (
                <div className="planes-card__badge">Recomendado</div>
              )}

              {/* Header */}
              <div className="planes-card__header">
                <span className="material-symbols-outlined planes-card__icon">
                  {plan.icon}
                </span>
                <h2 className="planes-card__title">{plan.title}</h2>
                <p className="planes-card__subtitle">{plan.subtitle}</p>
              </div>

              {/* Price */}
              <div className="planes-card__price-block">
                {plan.prefix && (
                  <span className="planes-card__price-prefix">{plan.prefix}</span>
                )}
                <span className="planes-card__price-amount">{plan.price}</span>
                <div className="planes-card__price-meta">
                  <span className="planes-card__price-currency">{plan.currency}</span>
                  <span className="planes-card__price-period">{plan.period}</span>
                </div>
              </div>

              {/* Divider */}
              <div className="planes-card__divider" />

              {/* Features */}
              <ul className="planes-card__features">
                {plan.features.map((f, i) => (
                  <li key={i} className="planes-card__feature">
                    <span className="material-symbols-outlined planes-card__feature-icon">
                      {f.icon}
                    </span>
                    <span>{f.text}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className="planes-card__cta"
                onClick={() =>
                  plan.ctaAction === 'scroll' ? scrollToContact() : navigate(plan.ctaAction)
                }
              >
                {plan.cta}
                <span className="material-symbols-outlined">{plan.ctaIcon}</span>
              </button>
            </div>
          ))}
        </section>

        {/* ── Contact Section ── */}
        <section id="planes-contacto" className="planes-contacto">
          <div className="planes-contacto__glow" />
          <span className="material-symbols-outlined planes-contacto__icon">mail</span>
          <h2 className="headline-lg planes-contacto__title">¿Te interesa?</h2>
          <p className="body-md planes-contacto__body">
            Escríbenos directamente y un asesor AIRA te contactará
            en menos de 24 horas para guiarte sin costo.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Me%20interesa%20un%20plan%20AIRA`}
            className="planes-contacto__email-btn"
          >
            <span className="material-symbols-outlined">send</span>
            {CONTACT_EMAIL}
          </a>
          <p className="label-sm planes-contacto__disclaimer">
            Sin compromiso · Contrato presencial · Respuesta en &lt;24 h
          </p>
        </section>

      </main>

      <Footer />
    </div>
  )
}
