import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { HomeNaabol } from "../paginas/HomeNaabol";
import { Header } from "../components/Header";
import { Noticias } from "../paginas/Noticias";
import { LoginPage } from "../auth/paginas/LoginPage";
import { SobreNosotros } from "../paginas/SobreNosotros";
import { Administrador } from "../administrador/Administrador";
import { Aeropuerto } from "../paginas/Aeropuerto";
import { Administrativo } from "../paginas/Administrativo";
import { Legal } from "../paginas/Legal";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="HomeNaabol" element={<HomeNaabol />} />
        <Route path="/Noticias" element={<Noticias />} />
        <Route path="/SobreNosotros" element={<SobreNosotros />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Administrador" element={<Administrador />} />
        <Route path="/Aeropuerto" element={<Aeropuerto />} />
        <Route path="/Administrativa" element={<Administrativo />} />
        <Route path="/Legal" element={<Legal />} />

        <Route path="/" element={<Navigate to="/HomeNaabol" />} />
      </Routes>
    </>
  );
};
