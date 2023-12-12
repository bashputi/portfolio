import React from 'react'
import ReactDOM from 'react-dom/client'
import myRouter from '../src/Router'
import './index.css'
import {RouterProvider} from "react-router-dom";
import { ThemeProvider } from '@material-tailwind/react'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
    <RouterProvider router={myRouter} />
    </ThemeProvider>
  </React.StrictMode>,
)
