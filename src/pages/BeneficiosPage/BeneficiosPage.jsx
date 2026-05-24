import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer'
import { VIDEOS } from '../../assets/videos'
import './BeneficiosPage.css'

const DATA_VIZ_IMG = 'imagenes/sostenibilidad_ar.jpg'
const VIDEO_IMG = 'imagenes/beneficios_video.jpg'

const statCards = [
  { icon: 'timer', color: 'primary', value: '45%', desc: 'Reducción promedio en el tiempo de tránsito y búsqueda por unidad operativa.' },
  { icon: 'update', color: 'tertiary', value: '2.5x', desc: 'Aumento verificado en la rotación de espacios de alta demanda urbana.' },
  { icon: 'insights', color: 'primary', value: '99.9%', desc: 'Precisión predictiva en la asignación de recursos y tiempos de llegada.' },
]

const featureList = [
  { title: 'Gestión automatizada 24/7', sub: 'Sin fricción operativa ni necesidad de personal dedicado.' },
  { title: 'Precios Dinámicos Inteligentes', sub: 'Ajuste algorítmico basado en la demanda en tiempo real.' },
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

        {/* ── Section: CO2 Reduction ── */}
        <section className="beneficios-co2">
          <div className="beneficios-co2__grid">
            {/* Text */}
            <div className="beneficios-co2__text">
              <div className="beneficios-co2__eyebrow">
                <span className="material-symbols-outlined icon-fill beneficios-co2__eco-icon">eco</span>
                <span className="label-sm beneficios-co2__eyebrow-label">Reducción de CO2</span>
              </div>
              <h2 className="headline-lg beneficios-co2__title">Sostenibilidad Cuantificable</h2>
              <p className="body-md beneficios-co2__body">
                Nuestros algoritmos de enrutamiento y gestión de espacios minimizan el tiempo de
                inactividad y los trayectos innecesarios, logrando una reducción drástica en las
                emisiones de carbono. El sistema inteligente asegura que cada movimiento operativo
                contribuya a un entorno urbano más limpio.
              </p>
            </div>

            {/* Glassmorphism Card */}
            <div className="beneficios-co2__card-wrap">
              <div className="beneficios-co2__card-glow" />
              <div className="beneficios-co2__card">
                <img
                  src={DATA_VIZ_IMG}
                  alt="Data Visualization"
                  className="beneficios-co2__card-img"
                />
                {/* Floating Stats */}
                <div className="beneficios-co2__stats">
                  <div>
                    <div className="label-sm beneficios-co2__stat-label">Emisiones Evitadas</div>
                    <div className="headline-lg-mobile beneficios-co2__stat-value beneficios-co2__stat-value--primary">-42%</div>
                  </div>
                  <div>
                    <div className="label-sm beneficios-co2__stat-label">Eficiencia de Ruta</div>
                    <div className="headline-lg-mobile beneficios-co2__stat-value beneficios-co2__stat-value--secondary">+85%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section: Time Optimization ── */}
        <section className="beneficios-time">
          <h2 className="headline-lg beneficios-time__title">Optimización del Tiempo Operativo</h2>
          <div className="beneficios-time__grid">
            {statCards.map((card) => (
              <div key={card.value} className={`beneficios-stat-card beneficios-stat-card--${card.color}`}>
                <div className="beneficios-stat-card__hover-bg" />
                <span
                  className="material-symbols-outlined icon-fill beneficios-stat-card__icon"
                  style={{ color: `var(--color-${card.color})` }}
                >
                  {card.icon}
                </span>
                <div className={`headline-xl beneficios-stat-card__value`}>{card.value}</div>
                <div className="body-md beneficios-stat-card__desc">{card.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Section: Passive Income ── */}
        <section className="beneficios-income">
          <div className="beneficios-income__grid">
            {/* Circular element */}
            <div className="beneficios-income__circle-wrap">
              <div className="beneficios-income__circle">
                <div className="beneficios-income__circle-glow" />
                <span className="material-symbols-outlined beneficios-income__circle-bg-icon">account_balance</span>
                <div className="beneficios-income__circle-content">
                  <div className="label-sm beneficios-income__circle-eyebrow">Ingresos Pasivos</div>
                  <div className="headline-xl beneficios-income__circle-value">+32%</div>
                  <div className="label-sm beneficios-income__circle-sub">Rendimiento Anual Promedio</div>
                </div>
              </div>
            </div>

            {/* Content panel */}
            <div className="beneficios-income__panel">
              <div className="beneficios-income__panel-eyebrow">
                <span className="material-symbols-outlined" style={{ color: 'var(--color-tertiary)' }}>diamond</span>
                <span className="label-sm" style={{ color: 'var(--color-tertiary)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Para Propietarios</span>
              </div>
              <h3 className="headline-lg beneficios-income__panel-title">Monetización Inteligente de Espacios</h3>
              <p className="body-md beneficios-income__panel-body">
                Convierta sus activos inmobiliarios subutilizados en fuentes de ingresos continuas y pasivas.
                La plataforma AIRA conecta automáticamente espacios premium con una red de usuarios de alto valor.
              </p>
            </div>
          </div>
        </section>

        {/* Se quitó la sección de video de beneficios */}

      </main>

      <Footer />
    </div>
  )
}
