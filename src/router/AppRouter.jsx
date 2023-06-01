import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { HomeNaabol } from '../paginas/HomeNaabol'
import { Header } from '../components/Header'
import { Noticias } from '../paginas/Noticias'
import { LoginPage } from '../auth/paginas/LoginPage'
import { SobreNosotros } from '../paginas/SobreNosotros'
import { Administrador } from '../administrador/Administrador'
import { NotiaPage } from '../paginas/NotiaPage'
import { Formulario } from '../administrador/components/Formulario'

export const AppRouter = () => {
  return (
    <>
   
        <Routes>
            <Route path='HomeNaabol' element={<HomeNaabol/>} />
            <Route path='/Noticias' element={<Noticias/>} />
            <Route path="PageNoticia/:id" element={<NotiaPage/>} />
            <Route path='/SobreNosotros' element={<SobreNosotros/>} />
            <Route path='/Login' element={<LoginPage/>} />
            <Route path='/Administrador' element={<Administrador/>} />
            <Route path='/Formulario' element={<Formulario/>} />
            <Route path='/' element={<Navigate to="/HomeNaabol"/>} />

        </Routes>
    
    </>
  )
}
