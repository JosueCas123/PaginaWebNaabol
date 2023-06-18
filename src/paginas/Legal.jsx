import React from "react";
import { Header } from "../components/Header";
import { Foot } from "../components/Foot";
import useLegal from "../hooks/useLegal";
import { Document, Page } from 'react-pdf';
import { formatearFecha } from "../helpers/fechaFormateada";

export const Legal = () => {

  const {dataNoticia} = useLegal()
  //console.log(dataNoticia[0].imagen)

  
  return (
    <>
      <Header />
      <section className="w-full p-12 bg-legal bg-cover bg-center  ">
        <div className="w-11/12 mx-auto max-w-screen-2xl text-white text-3xl text-center font-bold my-6 lg:text-left lg:text-4xl">
          <h2>Leyes y Normas</h2>
        </div>
      </section>
      <section className="w-full">
        <div className="w-11/12 mx-auto max-w-screen-2xl my-8">
          <h3 className="font-bold  text-xl text-center lg:text-right lg:text-2xl">
            Constitución Política del Estado Plurinacional de Bolivia
          </h3>
        </div>

        <div className="my-4  overflow-x-auto">
          <table className=" w-11/12  mx-auto max-w-screen-2xl   ">
            <thead className="bg-blue-900 text-white">
              <tr>
                <th>Título</th>
                <th>Publicación</th>
               
                <th>Descargar</th>
              </tr>
            </thead>
            <tbody>
              {
                dataNoticia.map(legal => {
                  console.log(legal.imagen)
                  return(

                  <tr key={legal.id} className="">
                    <td className="py-2  flex items-center">
                      <i className="text-3xl text-red-700 mx-2 bx bxs-file-pdf"></i>
                      {legal.titulo}
                    </td>
                    <td className="text-center">{formatearFecha(legal.fecha)}</td>
                    <td className=" flex items-center justify-center">
                    <object
                        data={legal.imagen}
                        type="application/pdf"
                        width="80%"
                        height="500px"
                     >
                         <p>
                           No se puede mostrar el PDF.{" "}
                           <a href={legal.imagen} target="_blank" rel="noopener noreferrer">
                             Haz clic aquí para descargarlo.
                           </a>
                         </p>
                      </object>
      
                    </td>
                  </tr>
                  )

                })
              }
            </tbody>
          </table>
        </div>

        <div className="w-11/12 mx-auto max-w-screen-2xl my-8">
          <h3 className="font-bold  text-xl text-center lg:text-right lg:text-2xl">
            Leyes
          </h3>
        </div>

        <div className="my-4 overflow-x-auto">
          <table className=" w-11/12 mx-auto max-w-screen-2xl   ">
            <thead className="bg-blue-900 text-white">
              <tr>
                <th>Título</th>
                <th>Publicación</th>
                <th>Descargar</th>
              </tr>
            </thead>
            <tbody>
              <tr className="">
                <td className="py-2  flex items-center">
                  <i className="text-3xl text-red-700 mx-2 bx bxs-file-pdf"></i>
                  Constitucion Politica del Estado
                </td>
                <td className="text-center">26-11-2022</td>
                <td className=" flex items-center justify-center">
                  <a
                    className=" bg-green-600 rounded-3xl px-3 text-white"
                    href="../img/fondo1.jpg"
                    download=""
                  >
                    <button className="flex items-center">
                      <i className="text-2xl  mx-1  bx bxs-cloud-download "></i>
                      Descargar
                    </button>
                  </a>
                </td>
              </tr>
              <tr className="">
                <td className="py-2  flex items-center">
                  <i className="text-3xl text-red-700 mx-2 bx bxs-file-pdf"></i>
                  Constitucion Politica del Estado
                </td>
                <td className="text-center">26-11-2022</td>
                <td className=" flex items-center justify-center">
                  <a
                    className=" bg-green-600 rounded-3xl px-3 text-white"
                    href="../img/fondo1.jpg"
                    download=""
                  >
                    <button className="flex items-center">
                      <i className="text-2xl  mx-1  bx bxs-cloud-download "></i>
                      Descargar
                    </button>
                  </a>
                </td>
              </tr>
              <tr className="">
                <td className="py-2  flex items-center">
                  <i className="text-3xl text-red-700 mx-2 bx bxs-file-pdf"></i>
                  Constitucion Politica del Estado
                </td>
                <td className="text-center">26-11-2022</td>
                <td className=" flex items-center justify-center">
                  <a
                    className=" bg-green-600 rounded-3xl px-3 text-white"
                    href="../img/fondo1.jpg"
                    download=""
                  >
                    <button className="flex items-center">
                      <i className="text-2xl  mx-1  bx bxs-cloud-download "></i>
                      Descargar
                    </button>
                  </a>
                </td>
              </tr>
              <tr className="">
                <td className="py-2  flex items-center">
                  <i className="text-3xl text-red-700 mx-2 bx bxs-file-pdf"></i>
                  Constitucion Politica del Estado
                </td>
                <td className="text-center">26-11-2022</td>
                <td className=" flex items-center justify-center">
                  <a
                    className=" bg-green-600 rounded-3xl px-3 text-white"
                    href="../img/fondo1.jpg"
                    download=""
                  >
                    <button className="flex items-center">
                      <i className="text-2xl  mx-1  bx bxs-cloud-download "></i>
                      Descargar
                    </button>
                  </a>
                </td>
              </tr>
              <tr className="">
                <td className="py-2  flex items-center">
                  <i className="text-3xl text-red-700 mx-2 bx bxs-file-pdf"></i>
                  Constitucion Politica del Estado
                </td>
                <td className="text-center">26-11-2022</td>
                <td className=" flex items-center justify-center">
                  <a
                    className=" bg-green-600 rounded-3xl px-3 text-white"
                    href="../img/fondo1.jpg"
                    download=""
                  >
                    <button className="flex items-center">
                      <i className="text-2xl  mx-1  bx bxs-cloud-download "></i>
                      Descargar
                    </button>
                  </a>
                </td>
              </tr>
              <tr className="">
                <td className="py-2  flex items-center">
                  <i className="text-3xl text-red-700 mx-2 bx bxs-file-pdf"></i>
                  Constitucion Politica del Estado
                </td>
                <td className="text-center">26-11-2022</td>
                <td className=" flex items-center justify-center">
                  <a
                    className=" bg-green-600 rounded-3xl px-3 text-white"
                    href="../img/fondo1.jpg"
                    download=""
                  >
                    <button className="flex items-center">
                      <i className="text-2xl  mx-1  bx bxs-cloud-download "></i>
                      Descargar
                    </button>
                  </a>
                </td>
              </tr>
              <tr className="">
                <td className="py-2  flex items-center">
                  <i className="text-3xl text-red-700 mx-2 bx bxs-file-pdf"></i>
                  Constitucion Politica del Estado
                </td>
                <td className="text-center">26-11-2022</td>
                <td className=" flex items-center justify-center">
                  <a
                    className=" bg-green-600 rounded-3xl px-3 text-white"
                    href="../img/fondo1.jpg"
                    download=""
                  >
                    <button className="flex items-center">
                      <i className="text-2xl  mx-1  bx bxs-cloud-download "></i>
                      Descargar
                    </button>
                  </a>
                </td>
              </tr>
              <tr className="">
                <td className="py-2  flex items-center">
                  <i className="text-3xl text-red-700 mx-2 bx bxs-file-pdf"></i>
                  Constitucion Politica del Estado
                </td>
                <td className="text-center">26-11-2022</td>
                <td className=" flex items-center justify-center">
                  <a
                    className=" bg-green-600 rounded-3xl px-3 text-white"
                    href="../img/fondo1.jpg"
                    download=""
                  >
                    <button className="flex items-center">
                      <i className="text-2xl  mx-1  bx bxs-cloud-download "></i>
                      Descargar
                    </button>
                  </a>
                </td>
              </tr>
              <tr className="">
                <td className="py-2  flex items-center">
                  <i className="text-3xl text-red-700 mx-2 bx bxs-file-pdf"></i>
                  Constitucion Politica del Estado
                </td>
                <td className="text-center">26-11-2022</td>
                <td className=" flex items-center justify-center">
                  <a
                    className=" bg-green-600 rounded-3xl px-3 text-white"
                    href="../img/fondo1.jpg"
                    download=""
                  >
                    <button className="flex items-center">
                      <i className="text-2xl  mx-1  bx bxs-cloud-download "></i>
                      Descargar
                    </button>
                  </a>
                </td>
              </tr>
              <tr className="">
                <td className="py-2  flex items-center">
                  <i className="text-3xl text-red-700 mx-2 bx bxs-file-pdf"></i>
                  Constitucion Politica del Estado
                </td>
                <td className="text-center">26-11-2022</td>
                <td className=" flex items-center justify-center">
                  <a
                    className=" bg-green-600 rounded-3xl px-3 text-white"
                    href="../img/fondo1.jpg"
                    download=""
                  >
                    <button className="flex items-center">
                      <i className="text-2xl  mx-1  bx bxs-cloud-download "></i>
                      Descargar
                    </button>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <Foot />
    </>
  );
};
