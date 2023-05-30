import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AppNaabol from './AppNaabol'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContex'
import { UsersProvider } from './context/UsersContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <UsersProvider>
          <AppNaabol />
        </UsersProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
)
