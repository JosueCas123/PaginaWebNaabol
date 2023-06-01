import React from "react";
import { Header } from "../components/Header";

export const SobreNosotros = () => {
  return (
    <>
      <Header />
      <section className="w-full h-64 bg-HomeNosotros bg-cover bg-center sm:h-56 ">
        <div className="max-w-screen-2xl w-11/12 mx-auto h-full py-6 flex flex-col justify-center text-white sm:items-start ">
k
          <h2 className=" text-2xl font-bold text-center sm:text-3xl">
            NUESTRA INSTITUCIÓN
          </h2>
          <p className=" text-base py-4">
            NAVEGACIÓN AEREA Y AEROPUERTOS BOLIVIANOS
          </p>
        </div>
      </section>

      <section className="w-11/12 mx-auto max-w-screen-2xl">
        <div className="my-6 ">
          <div className="my-3">
            <ul className="font-bold w-full  ">
              <a href="">
                <li>Misión y Visión</li>
              </a>
              <a href="">
                <li>Objetivos Institucionales</li>
              </a>
              <a href="">
                <li>Organigrama Institucional</li>
              </a>
              <a href="">
                <li>Principios y Valores Institucionales</li>
              </a>
              <a href="">
                <li>Director Ejecutivo General</li>
              </a>
            </ul>
          </div>
          <hr className="bg-black h-" />
          <div className="">
            <p>
              NAABOL Es una entidad pública descentralizada de derecho público
              con personería jurídica y autonomía, adminstrativa, legal y
              teoríco bajo tuición MOPSV. Tiene por objeto la planificación, de
              la infraestructura aeronáutico, dirección y administración de
              aeropuertos del Estado Plurinacional de Bolivia y la organización
              del espacio aéreo y el control de su tránsito, de acuerdo al art 5
              del DS. 4630 de creación de NAABOL y al Anexo 2 del Convenio de
              Aviación Civil Internacional (convenio de Chicago)
            </p>
            <h4>
              Esta responsabilidad ha sido ejercida desde su creación el 30 de
              noviembre de 2021, mediante decreto supremo N°4630.
            </h4>
            <div className="">
              <h6>Servicios de navegación aérea</h6>
              <ul>
                <li>Servicio de control de tránsito aéreo (ATS)</li>
                <li>Servicios de meteorología aeronáutica (MET)</li>
                <li>Servicios de comunicaciones aeronáuticas (COM)</li>
                <li>Servicio de salvamento y extinción de incendios (SSEI)</li>
              </ul>
              <h6>Servicios en tierra</h6>
              <ul>
                <li>Facilitación aeronáutica (FAL)</li>
                <li>
                  Seguridad aeroportuaria (AVSEC). Otros servicios auxiliares.
                </li>
                <li>Servicios de rampa y plataforma.</li>
                <li>Servicio de telecomunicaciones y radio ayudas.</li>
                <li>Servicio de ayudas visuales e iluminación.</li>
              </ul>
              <h6>
                Asimismo, se cuenta con los SERVICIOS NACIONALES DE NAVEGACIÓN
                AÉREA, estructurado de la siguiente manera:
              </h6>
              <ul>
                <li>
                  Centro de control aérea La Paz (ACC), se tiene 28
                  controladores de área en ruta.
                </li>
                <li>
                  Centro de control aeronáutico de mensajes (CCAM) contamos con
                  15 operadores AMHS.
                </li>
                <li>Oficina nacional de información aeronáutica (AIM)</li>
                <li>Especialistas (AIS)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
