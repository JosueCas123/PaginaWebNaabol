
import React from "react";
import { Header } from "../components/Header";
import useUser from "../hooks/useUser";
import { NoticiaVer } from "../components/NoticiaVer";
import { Foot } from "../components/Foot";
import { Link } from "react-router-dom";
import { formatearFecha } from "../helpers/fechaFormateada";
import { NoticiaDestacada } from "../components/NoticiaDestacada";

export const Noticias = () => {
  const { dataNoticia } = useUser();
  
  console.log(dataNoticia)

  const {id} = dataNoticia
  
  console.log(id)
  
  return (
    <>
        <Header/>
        {/* */}
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

        <NoticiaVer noticia={dataNoticia }/>

      <Foot />

    </>
  );
};
