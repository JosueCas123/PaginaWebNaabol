import React from "react";
import { Header } from "../components/Header";
import { Foot } from "../components/Foot";

export const Aeropuerto = () => {
  return (
    <>
      <Header />
      <section className=" h-80 w-full bg-Aeropuerto bg-cover bg-center  ">
        <div className="  h-full max-w-screen-2xl w-11/12 mx-auto text-white flex flex-col justify-center items-center">
          <h2 className="text-3xl my-2 lg:text-5xl text-center">
            Navegacion Aerea de Aerepuertos Bolivianos
          </h2>
          <p className="text- my-2 md: lg:text-3xl text-center">
            Aeropueto Internacional del de Viru Viru
          </p>
        </div>
      </section>
      {/* */}

      <section className="py-5 w-11/12 mx-auto max-w-screen-2xl">
        <div className="font-bold text-sm text-center sm:text-sm  lg:text-xl lg:text-left">
          INFORMACION DEL PASAJERO
        </div>
        <div className="my-9 lg:flex lg:justify-around lg:items-center">
          <div className="my-7 bg-blue-900 w-full h-56 rounded-3xl text-white p-7 flex flex-col justify-around  sm:h-44 lg:w-1/3  ">
            <div className="flex justify-around font text-2xl my-3 ">
              <p className="font-bold text-xl">
                <i className="bx bx-wifi mx-4"></i>WIFI
              </p>
              <p className="font-bold text-xl">
                <i className=" bx bx-home mx-4"> </i> Gratuito
              </p>
            </div>
            <div className="text-center sm:text-sm">
              <p>
                NAABOL proporciona el servicio de internet gratis dentro de sus
                aeropuetos
              </p>
            </div>
          </div>
          <div className="bg-blue-900 w-full h-48 rounded-3xl text-white p-7 my-3 justify-around sm:h-48 lg:w-2/5">
            <h4 className="text-center text-sm my-2 font-bold">TARIFAS</h4>
            <div className="flex items-center justify-between my-2 sm:justify-evenly sm:text-xl">
              <div className="">
                <i className="text-4xl sm:text-4xl bx bxs-car"></i>
              </div>
              <div className="">
                <p className="font-bold text-sm">VEHICULOS DE CUATRO RUEDAS</p>
                <div className="flex ">
                  <p className="font-bold text-sm">PRECIO : </p>
                  <p className="text-sm">BS 10:00</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between my-2 sm:justify-evenly sm:text-xl">
              <div className="">
                <i className="text-4xl sm:text-4xl bx bx-cycling "></i>
              </div>
              <div className="">
                <p className="font-bold text-sm">VEHICULOS DE DOS RUEDAS</p>
                <div className="flex ">
                  <p className="font-bold text-sm">PRECIO : </p>
                  <p>BS 10:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* */}

      <section className="  w-11/12 mx-auto lg:my-20 max-w-screen-2xl">
        <div className=" my-5 lg:flex p-5 lg:justify-around lg:items-center rounded-3xl bg-slate-300 ">
          <div className="lg:w-2/5">
            <h5 className="text-center font-bold">PEAJE</h5>
            <div className="flex items-center flex-col my-3 ">
              <i class="bx bx-building-house text-6xl"></i>
              <p className="text-center lg:text-xl">
                Mismo que debe serpagado a la salida del Aeropuerto  y le da
                derecho al estacionamiento durante 24 horas.
              </p>
            </div>
          </div>
          {/* */}
          <div className="lg:w-2/5">
            <h5 className="font-bold text-center">PARQUEO CERRADO</h5>
            <div className="flex items-center flex-col my-3">
              <i class="bx bxs-car text-6xl"></i>
              <p className="text-cente lg:text-xl ">
                Servicio destinado a personas que desean dejar sus vehículos
                bajo custodia mientas están de viaje. NAABOL cuenta con
                ambientes cubiertos y con seguridad permanente, el costo es de
                Bs. 40, hasta las primeras 24 horas sin fraccionamiento; pasado
                ese tiempo se adiciona un monto de Bs. 10 por cada 6 horas
                adicionales.0
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* */}
      <section className="py-5 w-11/12 mx-auto lg:flex lg:justify-around items-center max-w-screen-2xl">
        <div className="my-7 bg-blue-900 w-full  rounded-3xl h-28 text-lg text-white p-7 flex  justify-around items-center sm:h-30 lg:w-1/3   ">
          <i className="bx bxs-car text-4xl"></i>
          <button className="p-3 bg-slate-500 rounded-3xl">
            VER TARIFARIO DE TAXI
          </button>
        </div>

        <div className="bg-blue-900 w-full h-56 rounded-3xl text-white p-7 flex flex-col  items-center  my-3 justify-around   sm:h-56 lg:w-2/5 ">
          <i className="text-5xl my-1 bx bxs-dollar-circle"></i>
          <div className="text-center">
            <button className="bg-slate-500 rounded-3xl my-2 p-2">
              COTIZACION DE MONEDAS BANCO CENTARL DE BOLIVIA
            </button>
            <p>O visitar la página del Banco central de Bolivia</p>
            <a href="">https://www.bcb.gob.bo</a>
          </div>
        </div>
      </section>

      <Foot />
    </>
  );
};
