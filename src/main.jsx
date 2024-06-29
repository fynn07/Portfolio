import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, ScrollRestoration } from 'react-router-dom'
import UndergroundCaveProject from './pages/UndergroundCaveProject.jsx'
import MessagingBoardProject from './pages/MessagingBoardProject.jsx'
import GleamProject from './pages/GleamProject.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/cebu-underground-cave',
    element: <UndergroundCaveProject />
  },
  {
    path: '/messaging-board',
    element: <MessagingBoardProject />
  },
  {
    path: '/gleam',
    element: <GleamProject />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
