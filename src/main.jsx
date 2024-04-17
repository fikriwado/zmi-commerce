import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Cart, Checkout, Home, ProductDetail } from './pages'

const routes = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/product/:slug',
    element: <ProductDetail />
  },
  {
    path: '/cart',
    element: <Cart />
  },
  {
    path: '/checkout',
    element: <Checkout />
  }
]

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
