import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AppNaabol from './AppNaabol'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContex'
import { UsersProvider } from './context/UsersContext'
import { LegalAdimnProvider } from './context/LegalAdimn'
import { RecursoProvider } from './context/RecursosHContext'
import { TransparenciaProvider } from './context/TransparenciaContex'
import { AeronauticaProvider } from './context/AeronauticaContex'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <UsersProvider>
        <LegalAdimnProvider>
          <RecursoProvider>
            <TransparenciaProvider>
              <AeronauticaProvider>
                <AppNaabol/>
              </AeronauticaProvider>
            </TransparenciaProvider>
          </RecursoProvider>
        </LegalAdimnProvider>
        </UsersProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
)
