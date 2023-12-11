import React from 'react'
import ReactDOM from 'react-dom/client'
import myRouter from '../src/Router'
import './index.css'
import {RouterProvider} from "react-router-dom";



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={myRouter} />
  </React.StrictMode>,
)
