import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import MusicVideosPage from './pages/MusicVideosPage.jsx';
import EventsPage from './pages/EventsPage.jsx';
import LifestylePage from './pages/LifestylePage.jsx';
import CommercialsPage from './pages/CommercialsPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: '',
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: '/about',
        element: <AboutPage />
      },
      {
        path: '/videos/music',
        element: <MusicVideosPage />
      },
      {
        path: '/videos/events',
        element: <EventsPage />
      },
      {
        path: '/videos/lifestyle',
        element: <LifestylePage />
      },
      {
        path: '/videos/commercials',
        element: <CommercialsPage />
      },
      {
        path: '/contact',
        element: <ContactPage />
      }
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)

