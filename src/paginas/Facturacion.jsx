import React from "react";
import { Header } from "../components/Header";
import { Foot } from "../components/Foot";

export const Facturacion = () => {
  return (
    <>
      <Header />
      <section className=" bg-Facturacion w-full py-5 bg-cover bg-center bg-no-repeat flex justify-center items-center sm:py-36 ">
        <div className="w-11/12 max-w-screen-2xl p-4 bg-gray-900 bg-opacity-50 lg:w-3/5">
          <div className="text-white text-3xl text-center font-bold  m-2">
            <h2>FACTURACION POR CICLOS WEB</h2>
          </div>
          <div className="sm:flex sm:items-center">
            <div className="my-7 sm:w-2/4 sm:p-4">
              <h4 className="text-center text-xl py-4 text-white">
                Ingrese información del pasajero
              </h4>
              <form action="" className="flex flex-col">
                <label htmlFor="" className="my-2  text-lg  text-white">
                  Nombre del pasajero
                </label>
                <input type="text" className="text-center h-8" />
                <label htmlFor="" className="my-2 text-lg text-white">
                  Número de vuelo:
                </label>
                <input
                  type="number"
                  className="text-center h-8"
                  placeholder="Ej: Si su vuelo es OB536 solo digite 536"
                />
                <label htmlFor="" className="my-2 text-lg text-white">
                  Número de asiento:
                </label>
                <input type="text" className="text-center h-8" />
                <label htmlFor="" className="my-2 text-lg text-white">
                  Fecha del vuelo:
                </label>
                <input type="date" className="text-center h-8" />
                <button className="bg-blue-900 text-white my-5 h-10 w-32 ">
                  Buscar
                </button>
              </form>
            </div>
            <div className=" text-white sm:w-2/4 sm:p-4">
              <h4 className="py-4">
                Estimado Usuario: Se consideran válidas para declaración de
                RC-IVA, (para personas naturales o jurídicas) a todas aquellas
                facturas con NIT '0' y Razón Social 'S/N' emitidas por concepto
                de Tasa de Aeropuerto bajo la modalidad Facturación Electrónica
                por Ciclos.
              </h4>
              <img className="" src="../src/img/fac1.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
      <Foot />
    </>
  );
};
