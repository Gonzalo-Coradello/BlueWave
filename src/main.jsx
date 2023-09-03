import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/css/index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Services from './pages/Services/Services.jsx'
import Prices from './pages/Prices/Prices.jsx'
import Contact from './pages/Contact/Contact.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/services',
    element: <Services />,
  },
  {
    path: '/prices',
    element: <Prices />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

