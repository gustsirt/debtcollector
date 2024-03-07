import { Link, NavLink, Outlet } from 'react-router-dom';
import {
  BiLogoLinkedin,
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoGmail,
  BiLogoWhatsapp,
  BiCaretRight,
  BiCaretDown,
} from 'react-icons/bi';
import './layout.scss'

const Layout = () => {
  return (
    <>
      <header className="header">
        <Link to="/">
          <img src="./img/logo.png" alt="Logotipo" />
        </Link>
        <nav className="nav">
          <ul>
            <li>
              <NavLink to="/">Inicio</NavLink>
            </li>
            <li>
              <NavLink to="products/">Productos</NavLink>
            </li>
            <li>
              <NavLink to="clients/">Clientes</NavLink>
            </li>
            <li>
              <NavLink to="refcolores/">Colores a Usar</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main">
        <Outlet />
      </main>
      <footer className="footer">
        <img src="./img/logo.png" alt="Impronta" />
        <p className="title">debt Collector</p>
        <p className="descrip">
          Web App para la gestion de deudas.
        </p>
        <div className="social-links">
          <a
            href="https://wa.me/5493482410412?text=Hola.%20Me%20gustaría%20contactarme%20contigo%20acerca%20de%20Impronta"
            target="_blank"
            rel="noreferrer"
          >
            <BiLogoWhatsapp />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <BiLogoFacebook />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <BiLogoInstagram />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            <BiLogoLinkedin />
          </a>
          <a
            href="mailto:ojedaamunategui@hotmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <BiLogoGmail />
          </a>
        </div>
        <div className="copyright">
          &copy; Copyright {new Date().getFullYear() + ' - '}
          <strong> Impronta</strong>. Todos los derechos reservados
        </div>
      </footer>
    </>
  )
}

export default Layout