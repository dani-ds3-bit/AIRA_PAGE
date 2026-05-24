import './Footer.css'

const footerLinks = [
  { label: 'Aviso de Privacidad', href: '#' },
  { label: 'Términos de Servicio', href: '#' },
  { label: 'Prensa',              href: '#' },
  { label: 'Contacto',            href: '#' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        {/* Marca y Copyright */}
        <div className="footer__brand">
          <img src="/logo_inicio.png" alt="AIRA" className="footer__logo" />
          <p className="body-md footer__brand-copy">
            © 2026 Proyecto AIRA.
          </p>
        </div>

        {/* Links */}
        <ul className="footer__links">
          {footerLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="footer__link label-sm">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
