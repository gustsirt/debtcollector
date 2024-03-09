
import { NavLink } from 'react-router-dom';
import { BiLogIn, BiLogOut, BiCart, BiSolidUser, BiCreditCard,BiSolidUserPlus, BiSolidEdit } from "react-icons/bi";
import { useState } from 'react';


const LayoutNav = () => {
  const [isPublic, setIsPublic] = useState(true)
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
    },
  ])

  return (
    <nav className="nav">
      <ul>
        {navItems.map((item) => {
          const showItem = isPublic
            ? (item.visibleFor === undefined || item.onlyPublic === true)
            : (item.onlyPublic === undefined || item.visibleFor !== undefined);
          return showItem ? (
            <li key={item.path}>
              <NavLink to={item.path}>{item.label}</NavLink>
            </li>
          ) : null;
        })}
      </ul>
    </nav>
  )
}

export default LayoutNav