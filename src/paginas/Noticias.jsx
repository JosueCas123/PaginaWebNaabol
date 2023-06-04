
import React from "react";
import { Header } from "../components/Header";
import useUser from "../hooks/useUser";
import { NoticiaVer } from "../components/NoticiaVer";
import { Foot } from "../components/Foot";
import { Link } from "react-router-dom";
import { formatearFecha } from "../helpers/fechaFormateada";

export const Noticias = () => {
  const { noticias } = useUser();
  
  console.log(noticias)

  const {id} = noticias
  
  console.log(id)
  
  return (
    <>
        <Header/>
        {/* */}
        <div className='w-auto md:w-11/12 mt-5 mx-auto'>
                <h2 className="text-xl font-semibold">Noticias destacadas</h2>
            <div className=" w-auto h-80 items-center my-10 overflow-x-auto overscroll-x-contain  space-x-6  flex justify-center md:flex md:space-x-5 box-border mx-auto hidden:space-y-5 overflow-hidden" id='Noticias_descatadas'>
            {
                        noticias.map(noticia  => (
                            <div className="CardNoticias ">
                                <div className="w-full h-3/5 bg-cover bg-center ">
                                    <img className="rounded-lg w-full h-full" src={noticia.imagen} alt="" />
                                </div>
                                <div className="w-full h-2/5   flex flex-col justify-evenly  relative p-1">
                                  <h2 className="top-0 text-justify text-xs font-semibold sabsolute tracking-tighter">
                                        {noticia.titulo}
                                  </h2>
                                  <p className="relative text-xs m-0"> {formatearFecha(noticia.fecha)}</p>

                                <div className="absolute right-0">
                                  <Link
                                    to={`/PageNoticia/${noticia.id}`}
                                  >
                                    <button className="text-xs mt-9 mr-3 bg-blue-700 p-1 text-white rounded-sm" >Leer mas...</button>
                                  </Link>
                                </div>
                                </div>
                             </div>
                        ))
                    }
            </div>


            
    
        </div>

        <NoticiaVer/>


      
      <NoticiaVer />
      <Foot />

    </>
  );
};
