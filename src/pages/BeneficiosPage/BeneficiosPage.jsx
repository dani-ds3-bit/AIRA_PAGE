import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer'
import { VIDEOS } from '../../assets/videos'
import './BeneficiosPage.css'

const DATA_VIZ_IMG = '/AIRA_PAGE/REDUCCION_DE_TRAFICO.png'
const VIDEO_IMG = '/AIRA_PAGE/imagenes/beneficios_video.jpg'

const statCards = [
  { icon: 'timer', color: 'primary', value: '15–20 min', desc: 'promedio que tarda encontrar lugar sin AIRA (dato ITDP, respaldado)' },
  { icon: 'lens', color: 'tertiary', value: '3 LEDs', desc: 'indican en tiempo real si el espacio está libre, ocupado o reservado' },
  { icon: 'smartphone', color: 'primary', value: '1 app', desc: 'controla tu espacio como arrendador desde donde estés' },
]

export default function BeneficiosPage() {
  return (
    <div className="beneficios-page">
      <Navbar />

      <main className="beneficios-main container">

        {/* ── Hero Header ── */}
        <header className="beneficios-hero">
          <div className="beneficios-hero__glow" />
          <h1 className="headline-xl">Impacto y Beneficios</h1>
          <p className="body-md beneficios-hero__subtitle">
            Redefiniendo la eficiencia operativa en el ecosistema de movilidad. Descubra cómo el
            núcleo computacional de AIRA transforma el espacio y el tiempo en ventajas cuantificables,
            sostenibles y altamente rentables.
          </p>
        </header>

        {/* ── Section: Para Conductores (Bloque 1) ── */}
        <section className="beneficios-co2" style={{ marginBottom: '96px' }}>
          <div className="beneficios-co2__grid">
            {/* Text */}
            <div className="beneficios-co2__text">
              <div className="beneficios-co2__eyebrow">
                <span className="material-symbols-outlined icon-fill" style={{ color: 'var(--color-primary)' }}>directions_car</span>
                <span className="label-sm beneficios-co2__eyebrow-label">PARA CONDUCTORES</span>
              </div>
              <h2 className="headline-lg beneficios-co2__title">Tu lugar, antes de salir de casa</h2>
              <p className="body-md beneficios-co2__body">
                Buscar estacionamiento en una ciudad puede consumir hasta 20 minutos de tu tiempo en cada salida. Con AIRA reservas tu espacio desde la app y llegas directo, sin dar vueltas ni perder tiempo.
              </p>
            </div>

            {/* Glassmorphism Card */}
            <div className="beneficios-co2__card-wrap">
              <div className="beneficios-co2__card-glow" />
              <div className="beneficios-co2__card">
                <img
                  src="/AIRA_PAGE/Beneficios_Para conductores.png"
                  alt="Reserva desde tu auto"
                  className="beneficios-co2__card-img"
                />
                {/* Floating Stats */}
                <div className="beneficios-co2__stats">
                  <div>
                    <div className="headline-lg-mobile beneficios-co2__stat-value beneficios-co2__stat-value--primary" style={{ textAlign: 'center', fontSize: '2.5rem', lineHeight: 1 }}>−20 min</div>
                    <div className="label-sm" style={{ color: 'var(--color-on-surface-muted)', fontSize: '0.75rem', marginTop: '4px', textAlign: 'center', letterSpacing: '0.05em' }}>promedio ahorrado por reserva</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section: Sostenibilidad (Bloque 2) ── */}
        <section className="beneficios-co2" style={{ marginBottom: '96px' }}>
          <div className="beneficios-co2__grid">
            {/* Text */}
            <div className="beneficios-co2__text">
              <div className="beneficios-co2__eyebrow">
                <span className="material-symbols-outlined icon-fill" style={{ color: 'var(--color-primary)' }}>traffic</span>
                <span className="label-sm beneficios-co2__eyebrow-label">REDUCCIÓN DE TRÁFICO</span>
              </div>
              <h2 className="headline-lg beneficios-co2__title">Menos vueltas, ciudad más fluida</h2>
              <p className="body-md beneficios-co2__body">
                Cada conductor que reserva con AIRA es un auto menos dando vueltas en la calle. Menos circulación innecesaria significa menos tráfico, menos combustible desperdiciado y calles más libres para todos.
              </p>
            </div>

            {/* Glassmorphism Card */}
            <div className="beneficios-co2__card-wrap">
              <div className="beneficios-co2__card-glow" />
              <div className="beneficios-co2__card">
                <img
                  src={DATA_VIZ_IMG}
                  alt="Sostenibilidad y Tránsito"
                  className="beneficios-co2__card-img"
                />
                {/* Floating Stats - No number, just big icon and label */}
                <div className="beneficios-co2__stats" style={{ padding: '16px 24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <span className="material-symbols-outlined icon-fill" style={{ fontSize: '2.5rem', color: 'var(--color-primary)' }}>eco</span>
                  <div>
                    <div className="label-sm" style={{ color: 'var(--color-on-surface)', fontWeight: 600, letterSpacing: '0.05em' }}>Tránsito Fluido</div>
                    <div className="label-sm" style={{ color: 'var(--color-on-surface-muted)', fontSize: '0.75rem', marginTop: '2px' }}>Movilidad Sostenible</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section: Reserva en segundos, estaciona con certeza (Bloque 3) ── */}
        <section className="beneficios-time" style={{ marginBottom: '96px' }}>
          <h2 className="headline-lg beneficios-time__title">Reserva en segundos, estaciona con certeza</h2>
          <div className="beneficios-time__grid">
            {statCards.map((card, index) => (
              <div key={index} className={`beneficios-stat-card beneficios-stat-card--${card.color}`}>
                <div className="beneficios-stat-card__hover-bg" />
                <span
                  className="material-symbols-outlined icon-fill beneficios-stat-card__icon"
                  style={{ color: `var(--color-${card.color})` }}
                >
                  {card.icon}
                </span>
                <div className="headline-xl beneficios-stat-card__value" style={{ fontSize: '2.75rem', fontWeight: 400 }}>{card.value}</div>
                <div className="body-md beneficios-stat-card__desc">{card.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Section: Para propietarios (Bloque 4) ── */}
        <section className="beneficios-income" style={{ marginBottom: '64px' }}>
          <div className="beneficios-income__grid">
            {/* Circular element */}
            <div className="beneficios-income__circle-wrap">
              <div className="beneficios-income__circle">
                <div className="beneficios-income__circle-glow" />
                <span className="material-symbols-outlined beneficios-income__circle-bg-icon">account_balance</span>
                <div className="beneficios-income__circle-content" style={{ padding: '0 24px' }}>
                  <div className="label-sm beneficios-income__circle-eyebrow">PARA PROPIETARIOS</div>
                  <div className="headline-xl beneficios-income__circle-value" style={{ fontSize: '2.15rem', margin: '4px 0', whiteSpace: 'nowrap' }}>desde $250/mes</div>
                  <div className="label-sm beneficios-income__circle-sub" style={{ fontSize: '0.75rem', lineHeight: 1.3 }}>recupera tu inversión desde el primer mes</div>
                </div>
              </div>
            </div>

            {/* Content panel */}
            <div className="beneficios-income__panel">
              <div className="beneficios-income__panel-eyebrow">
                <span className="material-symbols-outlined" style={{ color: 'var(--color-tertiary)' }}>diamond</span>
                <span className="label-sm" style={{ color: 'var(--color-tertiary)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>PARA PROPIETARIOS</span>
              </div>
              <h3 className="headline-lg beneficios-income__panel-title">Tu cochera genera ingresos mientras no la usas</h3>
              <p className="body-md beneficios-income__panel-body">
                Activa tu espacio cuando quieras y desactívalo cuando lo necesites. AIRA se encarga del control, la seguridad y la reserva — tú solo recibes el ingreso.
              </p>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
