import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BiLogOut } from "react-icons/bi";

const LayoutNav = ({user}) => {

  const [isPublic, setIsPublic] = useState(!user)
  const [navItems, setNavItems] = useState([
    {
      path: "/",
      label: "Inicio",
    },
    {
      path: "products/",
      label: "Productos",
      visibleFor: {
        user: true,
      }
    },
    {
      path: "clients/",
      label: "Clientes",
      visibleFor: {
        user: true,
      }
    },
    {
      path: "refcolores/",
      label: "Colores a Usar",
    },
    {
      path: "login/",
      label: "LogIn",
      onlyPublic: true,
    },
    {
      path: "register/",
      label: "Registrarse",
      onlyPublic: true,
    }
  ])

  useEffect(() => {
    setIsPublic(!user);
  }, [user]);
  
  return (
    <nav className="nav">
      <ul>
        {navItems.map((item) => {
          const showItem = 
            (isPublic && (item.visibleFor === undefined || item.onlyPublic === true)) ||
            (!isPublic && (item.onlyPublic === undefined || item.visibleFor !== undefined));
          return showItem ? (
            <li key={item.path}>
              <NavLink to={item.path}>{item.label}</NavLink>
            </li>
          ) : null;
        })}
      </ul>
      { user && (
        <div className="user-widget">
          <div className="user-area">
            <div>
              <NavLink to="user/">{user.name}</NavLink>
              <NavLink to="logout/"><BiLogOut/></NavLink>
            </div>
            <p>Rol: {user.role}</p>
          </div>
        </div>)}
    </nav>
  )
}

export default LayoutNav