import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { HomeNaabol } from "../paginas/HomeNaabol";
import { Header } from "../components/Header";
import { Noticias } from "../paginas/Noticias";
import { LoginPage } from "../auth/paginas/LoginPage";
import { SobreNosotros } from "../paginas/SobreNosotros";
import { Administrador } from "../administrador/Administrador";
import { Aeropuerto } from "../paginas/Aeropuerto";
import { NotiaPage } from "../paginas/NotiaPage";
import { Formulario } from "../administrador/components/comunicacion/Formulario";
import { Administrativo } from "../paginas/Administrativo";

import { Transparencias } from "../paginas/Transparencias";
import { Facturacion } from "../paginas/Facturacion";
import { Navegacion } from "../paginas/Navegacion";
import { Maleta } from "../paginas/Maleta";

import { HomeCominicacion } from "../administrador/components/comunicacion/HomeCominicacion";
import { HomeLegal } from "../administrador/components/legal/HomeLegal.jsx";
import { Legal } from "../paginas/Legal";
import { HomeRecursosHumanos } from "../administrador/components/RecursosHumanos/HomeRecursosHumanos";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="HomeNaabol" element={<HomeNaabol />} />
        <Route path="/Noticias" element={<Noticias />} />
        <Route path="PageNoticia/:id" element={<NotiaPage />} />
        <Route path="/SobreNosotros" element={<SobreNosotros />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Administrador" element={<Administrador />} />
        <Route path="/Administrativa" element={<Administrativo />} />
        <Route path="/Legal" element={<Legal/>} />
      
        <Route path="/Formulario" element={<Formulario/>} />
        <Route path="/Comunicacion" element={<HomeCominicacion/>} />
        <Route path="/LegalAdmin" element={<HomeLegal/>} />
        <Route path="RRHH" element={<HomeRecursosHumanos/>} />


        <Route path="/Aeropuerto" element={<Aeropuerto />} />
        <Route path="/Administrativo" element={<Administrativo />} />
        <Route path="//Pasajeros" element={<Administrativo />} />
        <Route path="/Legal" element={<Legal />} />
        <Route path="/Maleta" element={<Maleta />} />

        <Route path="/Transparencias" element={<Transparencias />} />
        <Route path="/Facturacion" element={<Facturacion />} />
        <Route path="/Navegacion" element={<Navegacion />} />

        <Route path="/" element={<Navigate to="/HomeNaabol" />} />
        <Route path="/Aeropuerto" element={<Aeropuerto />} />
      </Routes>
    </>
  );
};
