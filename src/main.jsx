import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AppNaabol from './AppNaabol'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
       <AppNaabol />
    </BrowserRouter>
  </React.StrictMode>
)
