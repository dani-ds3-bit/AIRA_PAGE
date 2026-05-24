import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <nav className="navbar-container">
      {/* Logo */}
      <NavLink to="/vision" className="navbar__brand">
        <img src="/AIRA_PAGE/logo_inicio.png" alt="AIRA" className="navbar__logo" />
      </NavLink>

      {/* Center Pill */}
      <div className="navbar__pill glass-panel hidden-mobile">
        <ul className="navbar__links">
          <li>
            <NavLink
              to="/vision"
              className={({ isActive }) =>
                'navbar__link' + (isActive ? ' navbar__link--active' : '')
              }
            >
              Visión
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/beneficios"
              className={({ isActive }) =>
                'navbar__link' + (isActive ? ' navbar__link--active' : '')
              }
            >
              Beneficios
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/experiencia"
              className={({ isActive }) =>
                'navbar__link' + (isActive ? ' navbar__link--active' : '')
              }
            >
              Experiencia
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/reserva"
              className={({ isActive }) =>
                'navbar__link' + (isActive ? ' navbar__link--active' : '')
              }
            >
              Contacto
            </NavLink>
          </li>
        </ul>
        <button
          className="navbar__cta"
          onClick={() => navigate('/reserva')}
        >
          Conoce Más <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>

      {/* Hamburguesa Mobile */}
      <button
        className="navbar__hamburger"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Abrir menú"
      >
        <span className="material-symbols-outlined">
          {mobileOpen ? 'close' : 'menu'}
        </span>
      </button>

      {/* Menú Mobile */}
      {mobileOpen && (
        <div className="navbar__mobile-drawer glass-panel">
          <NavLink to="/vision" className="navbar__mobile-link" onClick={() => setMobileOpen(false)}>
            Visión
          </NavLink>
          <NavLink to="/beneficios" className="navbar__mobile-link" onClick={() => setMobileOpen(false)}>
            Beneficios
          </NavLink>
          <NavLink to="/experiencia" className="navbar__mobile-link" onClick={() => setMobileOpen(false)}>
            Experiencia
          </NavLink>
          <NavLink to="/reserva" className="navbar__mobile-link" onClick={() => setMobileOpen(false)}>
            Contacto
          </NavLink>
          <button className="navbar__cta" onClick={() => { navigate('/reserva'); setMobileOpen(false) }}>
            Conoce Más <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      )}
    </nav>
  )
}
