import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.scss';

import { RouterProvider, createHashRouter } from 'react-router-dom';

import router from './router';
import ContextProvider from './context/ContextProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <RouterProvider router={router} fallbackElement={<p>Loading...</p>}/>
  </ContextProvider>
);
