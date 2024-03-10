import { createHashRouter } from 'react-router-dom';

import Layout from './pages/Layout/Layout.jsx';
//import Home from './pages/Home.jsx';
import LogIn from './pages/UserAccess/LogIn.jsx';
import Register from './pages/UserAccess/Register.jsx';
import Colores from './pages/temporal/Colores.jsx';
import Products from './pages/Products.jsx';
import Product from './pages/Product.jsx';
import Clients from './pages/Clients.jsx';
import Client from './pages/Client.jsx';

const router = createHashRouter([
  // createBrowserRouter reemplazaria --> createHashRouter (se pone hash para que lo tome github pages)
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <LogIn /> },
      { path: 'login/', element: <LogIn /> },
      { path: 'register/', element: <Register /> },
      { path: 'products/', element: <Products /> },
      { path: 'product/:pid', element: <Product /> },
      { path: 'clients/', element: <Clients /> },
      { path: 'client/:cid', element: <Client /> },
      { path: 'refcolores/', element: <Colores /> },
    ],
  },
]);

export default router