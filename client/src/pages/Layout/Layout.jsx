import { Link, Outlet } from 'react-router-dom';
import './layout.scss'
import { useContext, useEffect } from 'react';
import { ContextUser } from '../../context/ContextUser.jsx';

import useSessionService from '../../services/useSessionService.jsx';
import useSwalAlert from "../../hook/useSwalAlert.jsx";
import LayoutNav from './LayoutNav.jsx';
import LayoutFooter from './LayoutFooter.jsx';


const Layout = () => {
  const { sessionUser } = useSessionService()
  const { messageAndRedirect } = useSwalAlert()
  const { token, setToken, user, setUser } = useContext(ContextUser);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (token) {
          // console.log("si token");
          const resp = await sessionUser(token);
          // console.log(resp);
          if (!resp.isError) {
            setUser(resp.data);
          } else {
            messageAndRedirect("Error al iniciar el usuario, refresque la pagina", "error");
          }
        } else {
          // console.log("no token");
          setUser(null);
        }
      } catch (error) {
        setUser(null);
        setToken(null);
        localStorage.removeItem('token');
        messageAndRedirect("Se ha producido un error, vuelva a iniciar session", "error", "/login");
      }
    };
  
    fetchUser();
  }, [token, user, setUser, setToken]);


  return (
    <>
      <header className="header">
        <Link to="/">
          <img className="drop-shadow" src="./img/LogoColor.png" alt="Logotipo" />
        </Link>
        <LayoutNav user={user}/>
      </header>
      <main className="main">
          <Outlet />
      </main>
      <LayoutFooter/>
    </>
  )
}

export default Layout