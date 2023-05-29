import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { HomeNaabol } from "../paginas/HomeNaabol";
import { Header } from "../components/Header";
import { Noticias } from "../paginas/Noticias";
import { LoginPage } from "../auth/paginas/LoginPage";
import { SobreNosotros } from "../paginas/SobreNosotros";

export const AppRouter = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="HomeNaabol" element={<HomeNaabol />} />
        <Route path="/Noticias" element={<Noticias />} />
        <Route path="/SobreNosotros" element={<SobreNosotros />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/" element={<Navigate to="/HomeNaabol" />} />
      </Routes>
    </>
  );
};
