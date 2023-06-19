import React from "react";
import { Header } from "../components/Header";
import { Foot } from "../components/Foot";
import useRecHumanos from "../hooks/useRecHumanos";


export const Administrativo = () => {

 const {dataNoticia} =useRecHumanos()
 
 {/* */}
 const regionalNaNacional = dataNoticia.filter(Destacadas => Destacadas.prioridad === 1).map(Destacadas => Destacadas)
//  console.log(regionalNaNacional)

 {/* */}
 const regionalSantaCruz = dataNoticia.filter(Destacadas => Destacadas.prioridad === 2).map(Destacadas => Destacadas)

 const regionalLaPaz = dataNoticia.filter(Destacadas => Destacadas.prioridad === 3).map(Destacadas => Destacadas)


//  console.log(regionalNaNacional)
//  console.log(regionalSantaCruz)
//  console.log(regionalLaPaz)

 const {titulo, descripcion, prioridad} = dataNoticia
//  console.log(dataNoticia)

  return (
    <>
      <Header />

      <section className="w-full p-12 bg-Admi bg-cover bg-center ">
        <div className="w-11/12 mx-auto max-w-screen-2xl text-white text-3xl text-center font-bold my-6 lg:text-left lg:text-4xl">
          <h2>Organización</h2>
        </div>
      </section>
      {/* */}
      <section className="w-full py-8 bg-slate-100">
        <div className="w-11/12 mx-auto max-w-screen-2xl">
          <div className="">
            <h3 className="text-center font-bold my-3 text-3xl">Direccion Regional</h3>
            <hr className="bg-slate-600 h-2 my-4 w-1/4 mx-auto lg:w-1/5" />
          </div>
          {/* */}
          <div className="flex justify-center flex-wrap">
           
          {
            regionalNaNacional.map(nacional => {
              return(
                <div className="border-2 w-52 h-68 rounded-2xl   flex flex-col m-5">
              <div className=" bg-slate-600 w-full h-20 rounded-t-2xl "></div>

              <div className="flex justify-center ">
                <img
                  className="w-32 h-32 rounded-full -translate-y-14"
                  src={nacional.imagen}
                  alt=""
                />
              </div>
              <div className=" flex flex-col  p-2 items-center -translate-y-10">
                <h6 className="w-full text-center text-violet-600">{nacional.detalle}</h6>
                <p className="text-center">
                  {nacional.titulo}
                </p>
              </div>
            </div>
              
              )
            })
          }
          </div>
        </div>
      </section>

      <section className="w-full py-8">
        <div className="w-11/12 mx-auto max-w-screen-2xl">
          <div className="">
            <h3 className="text-center font-bold my-3 text-3xl">Regional Santa Cruz</h3>
            <hr className="bg-green-600 h-2 my-4 w-1/4 mx-auto lg:w-1/5" />
          </div>
          {/* */}
          <div className="flex justify-center flex-wrap">
          {
            regionalSantaCruz.map(nacional => {
              return(
                <div className="border-2 w-52 h-68 rounded-2xl   flex flex-col m-5">
              <div className=" bg-slate-600 w-full h-20 rounded-t-2xl "></div>

              <div className="flex justify-center ">
                <img
                  className="w-32 h-32 rounded-full -translate-y-14"
                  src={nacional.imagen}
                  alt=""
                />
              </div>
              <div className=" flex flex-col  p-2 items-center -translate-y-10">
                <h6 className="w-full text-center text-violet-600">{nacional.detalle}</h6>
                <p className="text-center">
                  {nacional.titulo}
                </p>
              </div>
            </div>
              
              )
            })
          }
          </div>
        </div>
        <div className="w-11/12 mx-auto max-w-screen-2xl">
          <div className="">
            <h3 className="text-center font-bold my-3 text-3xl">Regional La Paz</h3>
            <hr className="bg-green-600 h-2 my-4 w-1/4 mx-auto lg:w-1/5" />
          </div>
          {/* */}
          <div className="flex justify-center flex-wrap">
          {
            regionalLaPaz.map(nacional => {
              return(
                <div className="border-2 w-52 h-68 rounded-2xl   flex flex-col m-5">
              <div className=" bg-slate-600 w-full h-20 rounded-t-2xl "></div>

              <div className="flex justify-center ">
                <img
                  className="w-32 h-32 rounded-full -translate-y-14"
                  src={nacional.imagen}
                  alt=""
                />
              </div>
              <div className=" flex flex-col  p-2 items-center -translate-y-10">
                <h6 className="w-full text-center text-violet-600">{nacional.detalle}</h6>
                <p className="text-center">
                  {nacional.titulo}
                </p>
              </div>
            </div>
              
              )
            })
          }
          </div>
        </div>
      </section>
      <Foot />
    </>
  );
};
