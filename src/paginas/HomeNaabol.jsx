import React from "react";

import { CardGerencia } from "../components/CardGerencia";
import { CardNoticias } from "../components/CardNoticias";
import { Header } from "../components/Header";

import { Foot } from "../components/Foot";
import { Link } from "react-router-dom";
import { NoticiaDestacada } from "../components/NoticiaDestacada";
import useUser from "../hooks/useUser";
import { RedesSociales } from "../components/RedesSociales";
import { Meta } from "../components/meta";

export const HomeNaabol = () => {
  const { noticias } = useUser();
  return (
    <>
      <Header />
      <section className="w-full  ">
        <div className="w-full flex flex-col- justify-evenly h-full bg-HomeImg bg-cover object-cover bg-center  lg:bg-cover lg:bg-center lg:bg-no-repet ">
          <div className=" w-10/12 h-full  mx-auto flex flex-col justify-evenly py-10 mb-40 mt-40">
            <div className=" flex  text-white  flex-col sm:flex-row sm:justify-between  sm:items-center  ">
              <div className=" ">
                <p className="my-3 text-2xl sm:text-3xl  lg:text-4xl">
                  Bienvenidos a
                </p>
                <h1 className=" font-bold text-xl sm:text-2xl lg:text-3xl  ">
                  Navegacion Aerea de Aeropuertos Bolivianos
                </h1>
              </div>
              <div className="w-full flex  justify-center my-3 sm:my-0 sm:m-20 sm:w-24  lg:w-40">
                <img
                  src="../src/img/logoA.png"
                  alt=""
                  className=" w-20 sm:w-28 lg:w-32"
                />
              </div>
            </div>

            <div className="flex  flex-wrap  text-white  items-center flex-col ">
              <div className="flex justify-center flex-wrap  text-white  items-center sm:my-6 lg:my-8 ">
                <Link to="/Administrativa">
                  <a
                    href=""
                    className="  w-28 h-24 flex flex-col items-center justify-between m-3 sm:w-32 sm:h-32 sm:justify-around lg:w-40 lg:h-40"
                  >
                    <div className=" ">
                      <i className="rounded-full  text-4xl p-1 border-4 border-blue-900 bx bx-world bg-black sm:text-6xl lg:text-6xl"></i>
                    </div>
                    <div className="bg-blue-950 w-24 text-center rounded-xl  font-bold p-1 sm:p-2 sm:w-28 lg:w-32">
                      <p className="text-xs sm:text-sm">AERONÁUTICA</p>
                    </div>
                  </a>
                </Link>
                <Link to="/Administrativo">
                  <a
                    href=""
                    className="  w-28 h-24 flex flex-col items-center justify-between m-3 sm:w-32 sm:h-32 sm:justify-around lg:w-40 lg:h-40"
                  >
                    <div className="">
                      <i className="rounded-full  text-4xl p-1 border-4 border-blue-900 bx bx-building-house  bg-black sm:text-6xl lg:text-6xl"></i>
                    </div>
                    <div className="bg-blue-950 w-24 text-center rounded-xl  font-bold p-1 sm:p-2 sm:w-28 lg:w-32">
                      <p className="text-xs sm:text-sm">ADMINISTRATIVA</p>
                    </div>
                  </a>
                </Link>

                <Link to="/Legal">
                  <a
                    href=""
                    className="  w-28 h-24 flex flex-col items-center justify-between m-3 sm:w-32 sm:h-32 sm:justify-around lg:w-40 lg:h-40"
                  >
                    <div className="">
                      <i className="bx bx-file rounded-full  text-4xl p-1 border-4 border-blue-900  bg-black sm:text-6xl lg:text-6xl"></i>
                    </div>
                    <div className="bg-blue-950 w-24 text-center rounded-xl  font-bold p-1 sm:p-2 sm:w-28 lg:w-32">
                      <p className="text-xs sm:text-sm">LEGAL</p>
                    </div>
                  </a>
                </Link>
                <a
                  href=""
                  className="  w-28 h-24 flex flex-col items-center justify-between m-3 sm:w-32 sm:h-32 sm:justify-around lg:w-40 lg:h-40"
                >
                  <div className="">
                    <i class="bx bx-file-find rounded-full  text-4xl p-1 border-4 border-blue-900  bg-black sm:text-6xl lg:text-6xl"></i>
                  </div>
                  <div className="bg-blue-950 w-24 text-center rounded-xl  font-bold p-1 sm:p-2 sm:w-28 lg:w-32">
                    <p className="text-xs sm:text-sm">TRANSPARENCIA</p>
                  </div>
                </a>
                <a
                  href=""
                  className="  w-28 h-24 flex flex-col items-center justify-between m-3 sm:w-32 sm:h-32 sm:justify-around lg:w-40 lg:h-40"
                >
                  <div className="">
                    <i class="bx bxs-plane-alt rounded-full  text-4xl p-1 border-4 border-blue-900  bg-black sm:text-6xl lg:text-6xl"></i>
                  </div>
                  <div className="bg-blue-950 w-24 text-center rounded-xl  font-bold p-1 sm:p-2 sm:w-28 lg:w-32">
                    <p className="text-xs sm:text-sm">AERONÁUTICA</p>
                  </div>
                </a>
                <a
                  href=""
                  className="  w-28 h-24 flex flex-col items-center justify-between m-3 sm:w-32 sm:h-32 sm:justify-around lg:w-40 lg:h-40"
                >
                  <div className="">
                    <i class="bx bx-id-card rounded-full  text-4xl p-1 border-4 border-blue-900  bg-black sm:text-6xl lg:text-6xl"></i>
                  </div>
                  <div className="bg-blue-950 w-24 text-center rounded-xl  font-bold p-1 sm:p-2 sm:w-28 lg:w-32">
                    <p className="text-xs sm:text-sm">CREDENCIALES</p>
                  </div>
                </a>
                <Link to="/Aeropuerto">
                  <a
                    to="/Pasajeros"
                    className="  w-28 h-24 flex flex-col items-center justify-between m-3 sm:w-32 sm:h-32 sm:justify-around lg:w-40 lg:h-40"
                  >
                    <div className="">
                      <i class="bx bx-map-alt rounded-full  text-4xl p-1 border-4 border-blue-900  bg-black sm:text-6xl lg:text-6xl"></i>
                    </div>
                    <div className="bg-blue-950 w-24 text-center rounded-xl  font-bold p-1 sm:p-2 sm:w-28 lg:w-32">
                      <p className="text-xs sm:text-sm">PLANIFICA TU VIAJE</p>
                    </div>
                  </a>
                </Link>
                <Link to="">
                  <a
                    href=""
                    className="  w-28 h-24 flex flex-col items-center justify-between m-3 sm:w-32 sm:h-32 sm:justify-around lg:w-40 lg:h-40"
                  >
                    <div className="">
                      <i class="bx bx-user-voice rounded-full  text-4xl p-1 border-4 border-blue-900  bg-black sm:text-6xl lg:text-6xl"></i>
                    </div>
                    <div className="bg-blue-950 w-24 text-center rounded-xl  font-bold p-1 sm:p-2 sm:w-28 lg:w-32">
                      <p className="text-xs sm:text-sm">INFO PASAJEROS</p>
                    </div>
                  </a>
                </Link>
              </div>

              <div className="flex justify-center flex-wrap  text-white  items-center fle my-6 sm:my-8"></div>
            </div>
          </div>
        </div>
        <Meta />
        <section className="lg:w-11/12 lg:mx-auto">
          <CardGerencia />
          <div>
            <button>Ver mas..</button>
          </div>
          <div className="max-w-screen-2xl ">
            <h2 className="text-xl font-semibold  ">Noticias destacadas</h2>
            <div
              className=" w-auto h-80 items-center my-10 overflow-x-auto overscroll-x-contain  space-x-6  flex justify-center md:flex md:space-x-5 box-border mx-auto hidden:space-y-5 overflow-hidden"
              id="Noticias_descatadas"
            >
              {noticias.map((noticia) => (
                <NoticiaDestacada key={noticia.id} noticia={noticia} />
              ))}
            </div>
          </div>

          <section className=" mb-20 md:w-11/12 mx-auto">
            <h2 className="text-xl font-bold my-4 text-center">
              Redes Sociales
            </h2>
            <div className="flex flex-col justify-center items-center sm:flex-row justify-around">
              <div className="my-8">
                <RedesSociales />
              </div>
              <div className="flex items-center justify-center my-5">
                <iframe
                  width="350"
                  height="250"
                  src="https://www.youtube.com/embed/Z2XE8DJuoZA"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </section>
        </section>
      </section>
      <Foot />
    </>
  );
};
