import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, ScrollRestoration } from 'react-router-dom'
import UndergroundCaveProject from './pages/UndergroundCaveProject.jsx'
import MessagingBoardProject from './pages/MessagingBoardProject.jsx'
import GleamProject from './pages/GleamProject.jsx'
import BookTrackerProject from './pages/BookTrackerProject.jsx'
import TrackTroveProject from './pages/TrackTroveProject.jsx'
import VisualizerProject from './pages/VisualizerProject.jsx'
import GameProject from './pages/GameProject.jsx'
import LeetcodeProject from './pages/LeetcodeProject.jsx'

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
  },
  {
    path: '/book-tracker',
    element: <BookTrackerProject />
  },
  {
    path: '/tracktrove',
    element: <TrackTroveProject />
  },
  {
    path: '/visualizer',
    element: <VisualizerProject />
  },
  {
    path: '/exiled',
    element: <GameProject/>
  },
  {
    path: '/leetcode',
    element: <LeetcodeProject/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
