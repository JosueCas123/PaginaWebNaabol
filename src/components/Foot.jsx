import React from "react";

export const Foot = () => {
  return (
    <>
      <section className="py-12 bg-zinc-900 w-full ">
        <div className="w-11/12 mx-auto max-w-screen-2xl text-white flex flex-col justify-center  md:flex-row md:justify-between md:items-center">
          <div className="flex flex-col py-6 lg:py-0">
            <div className="flex1 lg:justify-start">
              <img className="w-32" src="../src/img/logoA.png" alt="" />
            </div>
            <div className="flex1 flex-col lg:items-start ">
              <p>Navegación Aérea y Aeropuetos Bolivianos</p>
              <p>Oficina Central: Calle Reyes Ortiz</p>
              <p> No 74 Esq Federico Suazo</p>
              <p>Edificio: FEDEPETROL Piso 4-5-6-7-8 al 14</p>
              <p>Teléfono: +591 2351305</p>
              <p>Correo electrónico: naabol@naabol.gob.bo</p>
            </div>
          </div>
          <div className="grid grid-cols-1 justify-between items-center lg:grid-cols-2">
            <div className="">
              <div className="flex1 my-4">
                <div className="w-20 mx-3 flex1">
                  <img src="../src/img/foot2.png" alt="" />
                </div>
                <div className="">
                  <p>Ministerio de Obras Públicas, Servicios y Vivienda</p>
                  <a href="">https://www.oopp.gob.bo/</a>
                </div>
              </div>

              <div className="flex1 my-4">
                <div className="w-20 mx-3 flex1">
                  <img src="../src/img/foot1.png" alt="" />
                </div>
                <div className="">
                  <p>Regulacón y Fiscalización de Telecomunicaciones</p>
                  <a href="">https://www.att.gob.bo/</a>
                </div>
              </div>
              <div className="flex1  my-4">
                <div className="w-20 mx-3 flex1">
                  <img src="../src/img/foot3.png" alt="" />
                </div>
                <div className="">
                  <p>DGAC - Dirección Genera, de Aeronautica Civil</p>
                  <a href="">https://www.dgac.gob.bo/</a>
                </div>
              </div>
            </div>

            <div className="">
              <div className="flex1  my-4">
                <div className="w-20 mx-3 flex1">
                  <img src="../src/img/foot5.png" alt="" />
                </div>
                <div className="">
                  <p>Boliviana de Aviación</p>
                  <a href="">https://www.boa.bo/</a>
                </div>
              </div>
              <div className="flex1  my-4">
                <div className="w-20 mx-3  flex1">
                  <img src="../src/img/foot6.png" alt="" />
                </div>
                <div className="">
                  <p>Dirección General de Migración</p>
                  <a href="">https://www.migracion.gob.bo/</a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex1 py-6">
            <img src="../src/img/foot4.png" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};
