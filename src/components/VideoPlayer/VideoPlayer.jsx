import { useState, useRef, useEffect } from 'react'
import './VideoPlayer.css'

/**
 * VideoPlayer — Componente reutilizable de AIRA
 *
 * Props:
 *   src         {string}  Ruta al video (usa VIDEOS.xxx de src/assets/videos.js)
 *   poster      {string}  URL de imagen de portada (opcional)
 *   title       {string}  Título que se muestra sobre el botón de play
 *   subtitle    {string}  Subtítulo (opcional)
 *   label       {string}  Etiqueta pequeña arriba del título (ej. "Video del Proyecto")
 *   aspectRatio {string}  "16/9" | "4/3" (default: "16/9")
 *   className   {string}  Clases adicionales para el contenedor
 *
 * Uso:
 *   import { VIDEOS } from '../../assets/videos'
 *   import VideoPlayer from '../../components/VideoPlayer/VideoPlayer'
 *
 *   <VideoPlayer
 *     src={VIDEOS.manifiesto}
 *     title="Ver Manifiesto de AIRA"
 *     label="Video Principal"
 *   />
 */
export default function VideoPlayer({
  src,
  poster = null,
  title = 'Reproducir Video',
  subtitle = null,
  label = null,
  aspectRatio = '16/9',
  className = '',
}) {
  const [modalOpen, setModalOpen] = useState(false)
  const videoRef = useRef(null)

  // Pausa y resetea el video al cerrar el modal
  useEffect(() => {
    if (!modalOpen && videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
    // Bloquea scroll del body mientras el modal está abierto
    document.body.style.overflow = modalOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [modalOpen])

  // Cierra el modal con Escape
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') setModalOpen(false) }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  return (
    <>
      {/* ── Thumbnail con botón de play ── */}
      <div
        className={`vp-thumb ${className}`}
        style={{ aspectRatio }}
        onClick={() => setModalOpen(true)}
        role="button"
        tabIndex={0}
        aria-label={`Reproducir: ${title}`}
        onKeyDown={(e) => e.key === 'Enter' && setModalOpen(true)}
      >
        {/* Poster / imagen de portada */}
        {poster && (
          <img src={poster} alt={title} className="vp-thumb__poster" />
        )}

        {/* Overlay oscuro */}
        <div className="vp-thumb__overlay" />

        {/* Botón de play centrado */}
        <div className="vp-thumb__center">
          <div className="vp-thumb__play-btn">
            <span className="material-symbols-outlined icon-fill vp-thumb__play-icon">
              play_arrow
            </span>
          </div>
        </div>

        {/* Etiqueta inferior izquierda */}
        {(label || title) && (
          <div className="vp-thumb__label">
            {label && (
              <div className="vp-thumb__label-eyebrow">
                <span className="vp-thumb__label-dot animate-pulse" />
                <span className="label-sm vp-thumb__label-tag">{label}</span>
              </div>
            )}
            <div className="headline-lg-mobile vp-thumb__label-title">{title}</div>
            {subtitle && (
              <div className="label-sm vp-thumb__label-sub">{subtitle}</div>
            )}
          </div>
        )}
      </div>

      {/* ── Modal de reproducción ── */}
      {modalOpen && (
        <div
          className="vp-modal"
          onClick={(e) => { if (e.target === e.currentTarget) setModalOpen(false) }}
          role="dialog"
          aria-modal="true"
          aria-label={title}
        >
          <div className="vp-modal__inner">
            {/* Botón cerrar */}
            <button
              className="vp-modal__close"
              onClick={() => setModalOpen(false)}
              aria-label="Cerrar video"
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            {/* Título */}
            <div className="vp-modal__header">
              {label && <span className="label-sm vp-modal__label">{label}</span>}
              <h2 className="headline-lg-mobile vp-modal__title">{title}</h2>
            </div>

            {/* Reproductor */}
            <div className="vp-modal__player-wrap">
              <video
                ref={videoRef}
                className="vp-modal__video"
                src={src}
                poster={poster || undefined}
                controls
                autoPlay
                playsInline
              >
                Tu navegador no soporta reproducción de video HTML5.
              </video>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
