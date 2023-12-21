import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './MainLayout/Layout'
import Home from './Pages/Home/Home'
import Dashboard from './Pages/Dashboard/Dashboard'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import AuthProvider from './Provider/AuthProvider'
import LoggedIn from './PrivateRoutes/LoggedIn'
import LoggedOut from './PrivateRoutes/LoggedOut'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/dashboard',
        element: <LoggedIn><Dashboard></Dashboard></LoggedIn>
      },
      {
        path: '/login',
        element: <LoggedOut><Login></Login></LoggedOut>
      }
      ,
      {
        path: '/register',
        element: <LoggedOut><Register></Register></LoggedOut>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={Router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
