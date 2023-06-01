import React from "react";

import { CardGerencia } from "../components/CardGerencia";
import { CardNoticias } from "../components/CardNoticias";
import { Header } from "../components/Header";
import { Foot } from "../components/Foot";
import { Link } from "react-router-dom";

export const HomeNaabol = () => {
  return (
    <>
      <Header />
      <section className="w-full  ">
        <div className="w-full flex flex-col- justify-evenly h-full bg-HomeImg bg-cover bg-center sm:py-12 md:py-20 lg:bg-HomeImg lg:bg-cover lg:bg-center lg:bg-no-repet lg:py-40">
          <div className=" w-10/12 h-full  mx-auto flex flex-col justify-evenly py-10">
            <div className=" flex  text-white  flex-col sm:flex-row sm:justify-between  sm:items-center  ">
              <div className=" ">
                <p className="my-3 text-2xl sm:text-3xl  lg:text-4xl">
                  Bien venidos a
                </p>
                <h1 className=" font-bold text-xl sm:text-2xl lg:text-3xl  ">
                  Naavegacion Aerea de Aeropuertos Bolivianos
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
                <Link to="/Aeropuerto">
                  <a
                    href=""
                    className="  w-28 h-24 flex flex-col items-center justify-between m-3 sm:w-32 sm:h-32 sm:justify-around lg:w-40 lg:h-40"
                  >
                    <div className="">
                      <img
                        src="../src/img/icon1.png"
                        alt=""
                        className="w-14 rounded-full p-1 border-4  border-blue-900 bg-black sm:w-20 lg:w-20"
                      />
                    </div>
                    <div className="bg-blue-950 w-24 text-center rounded-xl  font-bold p-1 sm:p-2 sm:w-28 lg:w-32">
                      <p className="text-xs sm:text-sm">AERONÁUTICA</p>
                    </div>
                  </a>
                </Link>
                <a
                  href=""
                  className="  w-28 h-24 flex flex-col items-center justify-between m-3 sm:w-32 sm:h-32 sm:justify-around lg:w-40 lg:h-40"
                >
                  <div className="">
                    <img
                      src="../src/img/icon2.png"
                      alt=""
                      className="w-14 rounded-full p-1 border-4  border-blue-900 bg-black sm:w-20 lg:w-20"
                    />
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
                    <img
                      src="../src/img/icon3.png"
                      alt=""
                      className="w-14 rounded-full p-1 border-4  border-blue-900 bg-black sm:w-20 lg:w-20"
                    />
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
                    <img
                      src="../src/img/icon4.png"
                      alt=""
                      className="w-14 rounded-full p-1 border-4  border-blue-900 bg-black sm:w-20 lg:w-20"
                    />
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
                    <img
                      src="../src/img/icon5.png"
                      alt=""
                      className="w-14 rounded-full p-1 border-4  border-blue-900 bg-black sm:w-20 lg:w-20"
                    />
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
                    <img
                      src="../src/img/icon6.png"
                      alt=""
                      className="w-14 rounded-full p-1 border-4  border-blue-900 bg-black sm:w-20 lg:w-20"
                    />
                  </div>
                  <div className="bg-blue-950 w-24 text-center rounded-xl  font-bold p-1 sm:p-2 sm:w-28 lg:w-32">
                    <p className="text-xs sm:text-sm">AERONÁUTICA</p>
                  </div>
                </a>
                <a
                  to="/Pasajeros"
                  className="  w-28 h-24 flex flex-col items-center justify-between m-3 sm:w-32 sm:h-32 sm:justify-around lg:w-40 lg:h-40"
                >
                  <div className="">
                    <img
                      src="../src/img/icon7.png"
                      alt=""
                      className="w-14 rounded-full p-1 border-4  border-blue-900 bg-black sm:w-20 lg:w-20"
                    />
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
                    <img
                      src="../src/img/icon8.png"
                      alt=""
                      className="w-14 rounded-full p-1 border-4  border-blue-900 bg-black sm:w-20 lg:w-20"
                    />
                  </div>
                  <div className="bg-blue-950 w-24 text-center rounded-xl  font-bold p-1 sm:p-2 sm:w-28 lg:w-32">
                    <p className="text-xs sm:text-sm">AERONÁUTICA</p>
                  </div>
                </a>
              </div>
              <div className="flex justify-center flex-wrap  text-white  items-center fle my-6 sm:my-8">
                <div className="w-52  h-16 bg-neutral-800  rounded-3xl flex justify-around items-center text-xl   shadow-inner m-3 sm:w-72  sm:h-20 sm:text-2xl lg:">
                  <div className="flex items-center">
                    <p>La paz</p>
                  </div>
                  <div className="flex justify-between items-center ">
                    <p className="mx-3 sm:mx-5">13 c</p>
                    <img
                      className="mx-4 sm:mx-5"
                      src="../src/img/icon8.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="w-52  h-16 bg-neutral-800  rounded-3xl flex justify-around items-center text-xl   shadow-inner m-3 sm:w-72  sm:h-20 sm:text-2xl lg:">
                  <div className="flex items-center">
                    <p>La paz</p>
                  </div>
                  <div className="flex justify-between items-center ">
                    <p className="mx-3 sm:mx-5">13 c</p>
                    <img
                      className="mx-4 sm:mx-5"
                      src="../src/img/icon8.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="w-52  h-16 bg-neutral-800  rounded-3xl flex justify-around items-center text-xl   shadow-inner m-3 sm:w-72  sm:h-20 sm:text-2xl lg:">
                  <div className="flex items-center">
                    <p>La paz</p>
                  </div>
                  <div className="flex justify-between items-center ">
                    <p className="mx-3 sm:mx-5">13 c</p>
                    <img
                      className="mx-4 sm:mx-5"
                      src="../src/img/icon8.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="lg:w-11/12 lg:mx-auto">
          <CardGerencia />
          <CardNoticias />
        </section>
      </section>
      <Foot />
    </>
  );
};
