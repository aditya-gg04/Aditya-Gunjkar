import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Layout from './Layout.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Events from '../events/events.jsx'
import Sponsor from '../sponcers/sponsors.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[

    {path:"", element: <App />},
    {path:"events", element:<Events/>},
    {path:"sponsors", element:<Sponsor/>}
    ]
  }
])




ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
