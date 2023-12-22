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
import Profile from './Pages/Dashboard/Profile.'
import CreateTask from './Pages/Dashboard/CreateTask'
import ToDoList from './Pages/Dashboard/ToDoList'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
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
        path: '/dashboard/',
        element: <LoggedIn><Dashboard></Dashboard></LoggedIn>,
        children: [
          {
            path: '/dashboard/create-task',
            element: <LoggedIn><CreateTask></CreateTask></LoggedIn>
          },
          {
            path: '/dashboard/profile',
            element: <LoggedIn><Profile></Profile></LoggedIn>
          },
          {
            path: '/dashboard/todo-list',
            element: <LoggedIn><ToDoList></ToDoList></LoggedIn>
          }
        ]
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

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>


    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={Router}></RouterProvider>
      </AuthProvider>
    </QueryClientProvider>
  // </React.StrictMode>,
)
