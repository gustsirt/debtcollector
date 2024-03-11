import { Link, Outlet } from 'react-router-dom';
import LayoutNav from './LayoutNav.jsx';
import LayoutFooter from './LayoutFooter.jsx';
import './layout.scss'
import { useContext } from 'react';
import { ContextUser } from '../../context/ContextUser.jsx';


const Layout = () => {
  //const { user, setUser, token, setToken } = useContext(ContextUser);

  // const getUser = async () => {
  //   try {
  //     const resp = await sessionService.userSession()
  //     if (resp?.isError === false) {
  //       setUser(resp.payload);
  //     } else {
  //       throw new Error()
  //     }
  //   } catch (error) {
  //     setUser(null);
  //     setToken(null);
  //     localStorage.removeItem('token');
  //     Swal.fire({ icon: "error", text: "Error de usuario" }).then((res) => { navigate("/login/", {replace: true}) });
  //   }
  // }

  // useEffect( () => {
  //   if (token) {
  //     getUser()
  //   } else {
  //     setUser(null);
  //   }
  // }, [token])


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