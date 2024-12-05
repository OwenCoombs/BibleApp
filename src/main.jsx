import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from 'react-router-dom'

// project styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import About from './About'
import App from './App'
import ErrorPage from './ErrorPage'
import Header from './Header'
import Footer from './Footer'
import Settings from './Settings'
import DarkModeProvider from './DarkModeContext'  // Import DarkModeProvider

function Layout() {
  return (
    <>
      <Header />
      <div id="page-content">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/settings',
        element: <Settings />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <DarkModeProvider> {/* Wrap the RouterProvider with DarkModeProvider */}
    <RouterProvider router={router} />
  </DarkModeProvider>
)
