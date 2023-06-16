import React from "react";
import { Header } from "../components/Header";
import { Foot } from "../components/Foot";
export const Maleta = () => {
  return (
    <>
      <Header />
      <section className="w-full bg-slate-100  py-6 ">
        <div className="w-11/12  mx-auto max-w-screen-2xl ">
          <h4 className="text-center text-2xl font-bold my-4  ">
            Elementos prohibidos
          </h4>
          <div className="my-4   sm:flex sm:items-center sm:justify-between md:justify-around ">
            <div className=" flex justify-center items-center my-3 ">
              <img
                className="w-60 lg:w-80"
                src="../src/img/maleta1.svg"
                alt=""
              />
            </div>
            <div className="text-justify flex flex-col  my-3 sm:w-3/6 ">
              <p>
                De acuerdo al Reglamento Aeronáutico Boliviano, existen
                artículos que no pueden ser transportados en el equipaje de
                mano, razón por la cual el personal de seguridad del filtro de
                control de ingreso a las salas de abordaje no permite su paso.
                Los artículos prohibidos tendrán el manejo y la disposición
                final establecidos en el Plan de seguridad del Aeropuerto
                Internacional de Bolivia .
              </p>
              <p>
                Podrá conocer previamente estas restricciones, a través de las
                ayudas visuales ubicadas antes del ingreso a los filtros de
                seguridad, en las cuales mediante una maleta a escala se exhiben
                los elementos que no están permitidos en el equipaje de mano.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full   py-6 ">
        <div className="w-11/12  mx-auto max-w-screen-2xl ">
          <h4 className="text-center text-2xl font-bold my-4  ">
            Equipaje de mano
          </h4>
          <div className="my-4  flex-row-reverse sm:flex sm:items-center sm:justify-between md:justify-around ">
            <div className=" flex justify-center items-center my-3 ">
              <img
                className="w-72 lg:w-96"
                src="../src/img/Maleta2.svg"
                alt=""
              />
            </div>
            <div className="text-justify flex flex-col  my-3 sm:w-3/6 ">
              <p className="text-left lg:text-center font-bold text-xl lg:text-2xl py-2">
                Vuelos nacionales
              </p>
              <p className=" ">
                Conozca aquí los elementos prohibidos en el equipaje de mano
                para vuelos nacionales.
              </p>
              <p className="text-left lg:text-center font-bold text-xl lg:text-2xl py-2">
                Vuelos Internacionales
              </p>
              <p className=" ">
                Conozca aquí los elementos prohibidos en el equipaje de mano
                para vuelos internaciona
              </p>
              <p className="text-left lg:text-center font-bold text-xl  lg:text-2xl py-2">
                Restricciones especiales
              </p>
              <p className=" ">
                No se permite el ingreso de elementos LAGs (Líquidos, Aerosoles
                y Geles) en envases superiores a 100 ml, 100 gr o 3.4 oz.
              </p>
              <p className=" ">
                Para los vuelos hacia Estados Unidos, no se permite el
                transporte de sustancias en polvo y granulados superiores a 12
                onzas (340 gr)
              </p>
              <p className=" ">
                Si tiene alguna inquietud, no dude en comunicarse con su
                aerolínea. Conozca aquí las aerolíneas que operan en el
                aeropuerto
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-slate-100  py-6 ">
        <div className="w-11/12  mx-auto max-w-screen-2xl ">
          <h4 className="text-center text-2xl font-bold my-4  ">
            Equipaje de bodega
          </h4>
          <div className="my-4   sm:flex sm:items-center sm:justify-between md:justify-around ">
            <div className=" flex justify-center items-center my-3 ">
              <img
                className="w-72 lg:w-96"
                src="../src/img/Maleta3.svg"
                alt=""
              />
            </div>
            <div className="text-justify flex flex-col  my-3 sm:w-3/6 ">
              <p>
                Si su vuelo es nacional o internacional, tenga en cuenta los
                siguientes elementos que no son permitidos en el equipaje de
                bodega. Haga clic aquí para conocerlos.
              </p>
              <p>
                Si tiene alguna inquietud, no dude en comunicarse con su
                aerolínea. Conozca aquí las aerolíneas que operan en el
                aeropuerto El Dorado.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Foot />
    </>
  );
};
