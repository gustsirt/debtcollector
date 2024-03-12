import { Navigate, createHashRouter } from 'react-router-dom';

import Layout from './pages/Layout/Layout.jsx';
import Home from './pages/Home.jsx';
import LogIn from './pages/UserAccess/LogIn.jsx';
import Register from './pages/UserAccess/Register.jsx';
import Logout from './pages/UserAccess/LogOut.jsx';
import Colores from './pages/temporal/Colores.jsx';
import Products from './pages/Products.jsx';
import Product from './pages/Product.jsx';
import Clients from './pages/Clients.jsx';
import Client from './pages/Client.jsx';
import ErrorPage from './pages/Error/Error.jsx';

const router = createHashRouter([
  // createBrowserRouter reemplazaria --> createHashRouter (se pone hash para que lo tome github pages)
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage/>,
    children: [ 
      { index: true, element: <Home />},
      { path: 'login/', element: <LogIn /> },
      { path: 'register/', element: <Register /> },
      { path: 'logout/', element: <Logout /> },
      { path: 'products/', element: <Products /> },
      { path: 'product/:pid', element: <Product /> },
      { path: 'clients/', element: <Clients /> },
      { path: 'client/:cid', element: <Client /> },
      { path: 'refcolores/', element: <Colores /> },
      { path: '*', element: <ErrorPage/> },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  }
]);

export default router