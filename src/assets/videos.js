/**
 * AIRA — Configuración central de videos
 *
 * Todos los archivos de video deben estar en: /public/videos/
 * Para agregar un video nuevo:
 *   1. Copia el archivo .mp4 a public/videos/
 *   2. Agrégalo aquí con una clave descriptiva
 *   3. Úsalo en cualquier componente con <VideoPlayer src={VIDEOS.clave} ... />
 */

const BASE = '/videos/'

export const VIDEOS = {
  /** Video principal del proyecto / manifiesto de AIRA */
  manifiesto: BASE + 'manifiesto.mp4',

  /** Pilar 1 — El problema del estacionamiento en México */
  problema: BASE + 'problema.mp4',

  /** Pilar 2 — La solución: app + módulo físico */
  solucion: BASE + 'solucion.mp4',

  /** Pilar 3 — Impacto ambiental y económico */
  impacto: BASE + 'impacto.mp4',

  /** Guía de instalación del módulo físico inteligente */
  instalacion: BASE + 'instalacion.mp4',

  /** Arquitectura del sistema: Sensor → Nube → App */
  arquitectura: BASE + 'arquitectura.mp4',
}
