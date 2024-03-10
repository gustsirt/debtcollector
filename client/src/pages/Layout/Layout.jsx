import { Link, Outlet } from 'react-router-dom';
import LayoutNav from './LayoutNav.jsx';
import LayoutFooter from './LayoutFooter.jsx';
import './layout.scss'

const Layout = () => {
  return (
    <>
      <header className="header">
        <Link to="/">
          <img className="drop-shadow" src="./img/LogoColor.png" alt="Logotipo" />
        </Link>
        <LayoutNav/>
      </header>
      <main className="main">
        <Outlet />
      </main>
      <LayoutFooter/>
    </>
  )
}

export default Layout