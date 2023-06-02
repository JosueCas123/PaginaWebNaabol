import React from "react";
import { Header } from "../components/Header";
import { Foot } from "../components/Foot";

export const SobreNosotros = () => {
  return (
    <>
      <Header />
      <section className="w-full h-64 bg-HomeNosotros bg-cover bg-center sm:h-56  bg-blue-900">
        <div className="max-w-screen-2xl w-11/12 mx-auto h-full py-6 flex flex-col justify-center text-white   ">
          <h2 className=" text-2xl font-bold text-center sm:text-3xl">
            NUESTRA INSTITUCIÓN
          </h2>
          <p className=" text-lg py-4  ">
            NAVEGACIÓN AEREA Y AEROPUERTOS BOLIVIANOS
          </p>
        </div>
      </section>

      <section className="w-full  py-6 ">
        <div className="w-11/12 text-black mx-auto max-w-screen-2xl flex flex-col items-center sm:flex-row sm:justify-between">
          <img
            className="w-36 rounded-full bg-blue-950 p-5 my-5 sm:w-1/4 lg:w-44"
            src="../src/img/logoA.png"
            alt=""
          />
          <p className="text-justify sm:w-3/5 lg:w-3/4 ">
            NAABOL Es una entidad pública descentralizada de derecho público con
            personería jurídica y autonomía, adminstrativa, legal y teoríco bajo
            tuición MOPSV. Tiene por objeto la planificación, de la
            infraestructura aeronáutico, dirección y administración de
            aeropuertos del Estado Plurinacional de Bolivia y la organización
            del espacio aéreo y el control de su tránsito, de acuerdo al art 5
            del DS. 4630 de creación de NAABOL y al Anexo 2 del Convenio de
            Aviación Civil Internacional (convenio de Chicago)
          </p>
        </div>
      </section>

      {/* */}
      <section className="w-full bg-slate-100  py-6 ">
        <div className="w-11/12  mx-auto max-w-screen-2xl ">
          <h4 className="text-center text-2xl font-bold my-4  ">Mision</h4>
          <div className="my-4   sm:flex sm:items-center sm:justify-between md:justify-around ">
            <div className=" flex justify-center items-center my-3 ">
              <img
                className="w-52 lg:w-60"
                src="../src/img/services3.svg"
                alt=""
              />
            </div>
            <div className="text-justify flex flex-col  my-3 sm:w-3/6 ">
              <p>
                NAABOL brinda servicios de accesibilidad al transporte aéreo
                nacional e internacional, con atención de calidad a través de la
                infraestructura aeronáutica moderna y equipamiento para la
                navegación aérea, con tecnología de punta, contribuyendo a la
                integración de los pueblos y en armonía con el medio ambiente,
                en el marco de las normas aeronáuticas y planes de gobierno.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full   py-6 ">
        <div className="w-11/12  mx-auto max-w-screen-2xl ">
          <h4 className="text-center text-2xl font-bold my-4  ">Visión</h4>
          <div className="my-4  flex-row-reverse sm:flex sm:items-center sm:justify-between md:justify-around ">
            <div className=" flex justify-center items-center my-3 ">
              <img
                className="w-72 lg:w-96"
                src="../src/img/services4.svg"
                alt=""
              />
            </div>
            <div className="text-justify flex flex-col  my-3 sm:w-3/6 ">
              <p>
                NAABOL mediante los servicios prestados pretende constituirse en
                empresa líder en el ramo de servicios de navegación aérea y
                aeroportuaria garantizan la seguridad, efectividad y
                responsabilidad social, encargada de manejar y mantener la
                infraestructura y el equipamiento aeronáutico en óptimas
                condiciones de operabilidad a través de planes, programas y
                proyectos, proyectándose como la mejor empresa a nivel nacional
                con proyección y reconocimiento internacional.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* */}

      <section className="w-full bg-slate-100 py-6 ">
        <div className="w-11/12  mx-auto max-w-screen-2xl ">
          <h4 className="text-center text-2xl font-bold my-4  ">
            Servicios de navegación aérea
          </h4>
          <div className="my-4   sm:flex sm:items-center sm:justify-between md:justify-around ">
            <div className="flex justify-center items-center my-3 ">
              <img
                className="w-72 lg:w-96"
                src="../src/img/services.svg"
                alt=""
              />
            </div>
            <div className="text-justify flex flex-col  my-3">
              <li>Servicio de control de tránsito aéreo (ATS)</li>
              <li>Servicios de meteorología aeronáutica (MET)</li>
              <li>Servicios de comunicaciones aeronáuticas (COM)</li>
              <li>Servicios de información aeronáutica (AIS)</li>
              <li>Servicio de salvamento y extinción de incendios (SSEI)</li>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-6 ">
        <div className="w-11/12  mx-auto max-w-screen-2xl ">
          <h4 className="text-center text-2xl font-bold my-4  ">
            Servicios en tierra
          </h4>
          <div className="my-4   sm:flex flex-row-reverse sm:items-center sm:justify-between md:justify-around ">
            <div className="flex justify-center items-center my-3 ">
              <img
                className="w-72 lg:w-96"
                src="../src/img/services1.svg"
                alt=""
              />
            </div>
            <div className="text-justify flex flex-col  my-3">
              <li>Facilitación aeronáutica (FAL).</li>
              <li>
                Seguridad aeroportuaria (AVSEC). Otros servicios auxiliares.
              </li>
              <li>Servicios de rampa y plataforma.</li>
              <li>Servicios de protección al vuelo en ruta.</li>
              <li>Servicio de telecomunicaciones y radio ayudas.</li>
              <li>Servicio de ayudas visuales e iluminación.</li>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-slate-100 py-6 ">
        <div className="w-11/12  mx-auto max-w-screen-2xl ">
          <h4 className="text-center text-2xl font-bold my-4  ">
            SERVICIOS NACIONALES DE NAVEGACIÓN AÉREA
          </h4>
          <div className="my-4   sm:flex sm:items-center sm:justify-between md:justify-around ">
            <div className="flex justify-center items-center my-3 ">
              <img
                className="w-72 lg:w-96"
                src="../src/img/services2.svg"
                alt=""
              />
            </div>
            <div className="text-justify flex flex-col  my-3">
              <li>
                Centro de control aérea La Paz (ACC), se tiene 28 controladores
                de área en ruta.
              </li>
              <li>
                Centro de control aeronáutico de mensajes (CCAM) contamos con 15
                operadores AMHS.
              </li>
              <li>Oficina nacional de información aeronáutica (AIM)</li>
              <li>Especialistas (AIS).</li>
            </div>
          </div>
        </div>
      </section>

      <Foot />
    </>
  );
};
