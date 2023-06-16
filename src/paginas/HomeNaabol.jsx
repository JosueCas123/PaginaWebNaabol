import React from "react";

import { CardGerencia } from "../components/CardGerencia";
import { CardNoticias } from "../components/CardNoticias";
import { Header } from "../components/Header";

import { Foot } from "../components/Foot";
import { Link } from "react-router-dom";
import { NoticiaDestacada } from "../components/NoticiaDestacada";
import useUser from "../hooks/useUser";
import { RedesSociales } from "../components/RedesSociales";
import { ClimaHora } from "../components/ClimaHora";

export const HomeNaabol = () => {
  const {dataNoticia} =useUser()
  return (
    <>
      <Header />
      <section className="w-full  ">
        <div className="w-full flex flex-col- justify-evenly h-full bg-HomeImg bg-cover object-cover bg-center  lg:bg-cover lg:bg-center lg:bg-no-repet ">
          <div className=" w-10/12 h-full  mx-auto flex flex-col justify-evenly py-10 mb-40 mt-40">
            <div className=" flex  text-white  flex-col sm:flex-row sm:justify-between  sm:items-center  ">
              <div className=" ">
                <p className="my-3 text-2xl  sm:text-3xl  lg:text-4xl ">
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
                <Link to="">
                  <a
                    href=""
                    className="w-36  bg-black rounded-xl h-16 flex  items-center justify-evenly m-3 p-2  sm:w-44 sm:h-24 sm:justify-around lg:w-52 lg:h-24"
                  >
                    <div className=" ">
                      <i className=" text-2xl p-1   bx bx-world  sm:text-4xl lg:text-6xl"></i>
                    </div>
                    <div className=" text-xs w-24  flex   flex-col  rounded-xl    sm:p-2 sm:w-28 lg:w-32">
                      <p
                        className="text-xs sm:text-sm lg:text-base
                      "
                      >
                        AERONÁUTICA
                      </p>
                      <p className="text-cyan-400 text-center lg:text-sm">
                        Ver mas <i className="   bx bx-chevron-right"></i>
                      </p>
                    </div>
                  </a>
                </Link>

                <Link to="/Administrativa">
                  <a
                    href=""
                    className="w-36  bg-black  rounded-xl h-16 flex  items-center justify-evenly m-3 p-2  sm:w-44 sm:h-24 sm:justify-around lg:w-52 lg:h-24"
                  >
                    <div className=" ">
                      <i className=" text-2xl p-1    bx bx-building-house  sm:text-4xl lg:text-6xl"></i>
                    </div>
                    <div className=" text-xs w-24  flex   flex-col  rounded-xl    sm:p-2 sm:w-28 lg:w-32">
                      <p
                        className="text-xs sm:text-sm lg:text-base
                      "
                      >
                        ADMINISTRATIVA
                      </p>
                      <p className="text-cyan-400 text-center lg:text-sm">
                        Ver mas <i className="   bx bx-chevron-right"></i>
                      </p>
                    </div>
                  </a>
                </Link>
                <Link to="/Legal">
                  <a
                    href=""
                    className="w-36  bg-black rounded-xl h-16 flex  items-center justify-evenly m-3 p-2  sm:w-44 sm:h-24 sm:justify-around lg:w-52 lg:h-24"
                  >
                    <div className=" ">
                      <i className=" text-2xl p-1   bx bx-file  sm:text-4xl lg:text-6xl"></i>
                    </div>
                    <div className=" text-xs w-24  flex   flex-col  rounded-xl    sm:p-2 sm:w-28 lg:w-32">
                      <p
                        className="text-xs text-center sm:text-sm lg:text-base
                      "
                      >
                        LEGAL
                      </p>
                      <p className="text-cyan-400 text-center lg:text-sm">
                        Ver mas <i className="   bx bx-chevron-right"></i>
                      </p>
                    </div>
                  </a>
                </Link>

                <Link to="/Transparencias">
                  <a
                    href=""
                    className="w-36  bg-black  rounded-xl h-16 flex  items-center justify-evenly m-3 p-2  sm:w-44 sm:h-24 sm:justify-around lg:w-52 lg:h-24"
                  >
                    <div className=" ">
                      <i className=" text-2xl p-1   bx bx-file-find  sm:text-4xl lg:text-6xl"></i>
                    </div>
                    <div className=" text-xs w-24  flex   flex-col  rounded-xl    sm:p-2 sm:w-28 lg:w-32">
                      <p
                        className="text-xs sm:text-sm lg:text-base
                      "
                      >
                        TRANSPARENCIA
                      </p>
                      <p className="text-cyan-400 text-center lg:text-sm">
                        Ver mas <i className="   bx bx-chevron-right"></i>
                      </p>
                    </div>
                  </a>
                </Link>

                <Link to="">
                  <a
                    href=""
                    className="w-36  bg-black rounded-xl h-16 flex  items-center justify-evenly m-3 p-2  sm:w-44 sm:h-24 sm:justify-around lg:w-52 lg:h-24"
                  >
                    <div className=" ">
                      <i className=" text-2xl p-1   bx bxs-plane-alt sm:text-4xl lg:text-6xl"></i>
                    </div>
                    <div className=" text-xs w-24  flex   flex-col  rounded-xl    sm:p-2 sm:w-28 lg:w-32">
                      <p
                        className="text-xs sm:text-sm lg:text-base
                      "
                      >
                        AERONÁUTICA
                      </p>
                      <p className="text-cyan-400 text-center lg:text-sm">
                        Ver mas <i className="   bx bx-chevron-right"></i>
                      </p>
                    </div>
                  </a>
                </Link>
                <Link to="">
                  <a
                    href=""
                    className="w-36  bg-black rounded-xl h-16 flex  items-center justify-evenly m-3 p-2  sm:w-44 sm:h-24 sm:justify-around lg:w-52 lg:h-24"
                  >
                    <div className=" ">
                      <i className=" text-2xl p-1   bx bx-id-card  sm:text-4xl lg:text-6xl"></i>
                    </div>
                    <div className=" text-xs w-24  flex   flex-col  rounded-xl    sm:p-2 sm:w-28 lg:w-32">
                      <p
                        className="text-xs sm:text-sm lg:text-base
                      "
                      >
                        CREDENCIALES
                      </p>
                      <p className="text-cyan-400 text-center lg:text-sm">
                        Ver mas <i className="   bx bx-chevron-right"></i>
                      </p>
                    </div>
                  </a>
                </Link>
                <Link to="">
                  <a
                    href=""
                    className="w-36  bg-black rounded-xl h-16 flex  items-center justify-evenly m-3 p-2  sm:w-44 sm:h-24 sm:justify-around lg:w-52 lg:h-24"
                  >
                    <div className=" ">
                      <i className=" text-2xl p-1  bx bx-map-alt   sm:text-4xl lg:text-6xl"></i>
                    </div>
                    <div className=" text-xs w-24  flex   flex-col  rounded-xl    sm:p-2 sm:w-28 lg:w-32">
                      <p
                        className="text-xs sm:text-sm lg:text-base
                      "
                      >
                        PLANIFICA TU VIAJE
                      </p>
                      <p className="text-cyan-400 text-center lg:text-sm">
                        Ver mas <i className="   bx bx-chevron-right"></i>
                      </p>
                    </div>
                  </a>
                </Link>
                <Link to="/Aeropuerto">
                  <a
                    href=""
                    className="w-36  bg-black rounded-xl h-16 flex  items-center justify-evenly m-3 p-2  sm:w-44 sm:h-24 sm:justify-around lg:w-52 lg:h-24"
                  >
                    <div className=" ">
                      <i className=" text-2xl p-1  bx bx-user-voice sm:text-4xl lg:text-6xl"></i>
                    </div>
                    <div className=" text-xs w-24  flex   flex-col  rounded-xl    sm:p-2 sm:w-28 lg:w-32">
                      <p
                        className="text-xs sm:text-sm lg:text-base
                      "
                      >
                        INFO PASAJEROS
                      </p>
                      <p className="text-cyan-400 text-center lg:text-sm">
                        Ver mas <i className="   bx bx-chevron-right"></i>
                      </p>
                    </div>
                  </a>
                </Link>
                <Link to="/Facturacion">
                  <a
                    href=""
                    className="w-36  bg-black rounded-xl h-16 flex  items-center justify-evenly m-3 p-2  sm:w-44 sm:h-24 sm:justify-around lg:w-52 lg:h-24"
                  >
                    <div className=" ">
                      <i className=" text-2xl p-1  bx bxs-user-detail sm:text-4xl lg:text-6xl"></i>
                    </div>
                    <div className=" text-xs w-24  flex   flex-col  rounded-xl    sm:p-2 sm:w-28 lg:w-32">
                      <p
                        className="text-xs sm:text-sm lg:text-base
                      "
                      >
                        FACTURACION
                      </p>
                      <p className="text-cyan-400 text-center lg:text-sm">
                        Ver mas <i className="   bx bx-chevron-right"></i>
                      </p>
                    </div>
                  </a>
                </Link>
              </div>

              <div className="flex justify-center flex-wrap  text-white  items-center fle my-6 sm:my-8"></div>
            </div>

          </div>
        </div>

        <div className="relative">
          <Link
            to="http://sare.naabol.gob.bo/ifis-appv3/public/metar"
            target="_blanck"
          >
            <button
              className="fixed bottom-40 right-0
              p-3 bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500 from-indigo-500 via-purple-500 to-pink-500  text-white rounded-tl-lg z-10 text-lg md:text-2xl"
            >
              <i className="bx bx-cloud-lightning "></i> Meta
            </button>
          </Link>
        </div>

        <section className="lg:w-11/12 lg:mx-auto max-w-screen-2xl">
          <CardGerencia />
          <div>
            <button>Ver mas..</button>
          </div>
          <div className='w-auto md:w-11/12 mt-5 mx-auto'>
                <h2 className="text-xl font-semibold">Noticias destacadas</h2>
            <div className=" w-auto h-80 items-center my-10 overflow-x-auto overscroll-x-contain  space-x-6  flex justify-center md:flex md:space-x-5 box-border mx-auto hidden:space-y-5 overflow-hidden" id='Noticias_descatadas'>
            {
                        dataNoticia.map(noticia  => (
                            <NoticiaDestacada
                              key={noticia.id}
                              noticia={noticia}
                            />
                        ))
                    }
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
                  className="w-96 h-72"
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
