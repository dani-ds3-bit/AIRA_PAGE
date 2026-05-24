import { useState, useEffect } from 'react'
import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import BeneficiosPage from './pages/BeneficiosPage/BeneficiosPage'
import ExperienciaPage from './pages/ExperienciaPage/ExperienciaPage'
import ReservaPage from './pages/ReservaPage/ReservaPage'
import VisionPage from './pages/VisionPage/VisionPage'
import IntroScreen from './components/IntroScreen/IntroScreen'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default function App() {
  const [introVisible, setIntroVisible] = useState(true)

  return (
    <>
      {introVisible && (
        <IntroScreen onComplete={() => setIntroVisible(false)} />
      )}
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Navigate to="/vision" replace />} />
          <Route path="/vision" element={<VisionPage />} />
          <Route path="/beneficios" element={<BeneficiosPage />} />
          <Route path="/experiencia" element={<ExperienciaPage />} />
          <Route path="/reserva" element={<ReservaPage />} />
        </Routes>
      </HashRouter>
    </>
  )
}
