import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.scss';

import { RouterProvider, createHashRouter } from 'react-router-dom';

import Root from './pages/root.jsx';
import Home from './pages/home.jsx';
import Colores from './pages/temporal/Colores.jsx';
import Products from './pages/products.jsx';
import Product from './pages/product.jsx';
import Clients from './pages/clients.jsx';
import Client from './pages/client.jsx';

const router = createHashRouter([
  // createBrowserRouter reemplazaria --> createHashRouter (se pone hash para que lo tome github pages)
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: 'products/', element: <Products /> },
      { path: 'product/:pid', element: <Product /> },
      { path: 'clients/', element: <Clients /> },
      { path: 'client/:cid', element: <Client /> },
      { path: 'refcolores/', element: <Colores /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(

    <RouterProvider router={router} />

  );
