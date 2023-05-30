import React from 'react'
import { Header } from '../components/Header'
import useUser from '../hooks/useUser'

export const Noticias = () => {
    const {noticias} = useUser()
    console.log(noticias)
  return (
    <>
        <Header/>
        <div className='w-11/12 md:w-11/12 mt-5 mx-auto'>
                <h2>Noticias destacadas</h2>
            <div className="w-auto h-96 items-center my-10 overflow-x-auto overscroll-x-contain  space-x-6  flex justify-center md:flex md:space-x-5 box-border mx-auto hidden:space-y-5 overflow-hidden" id='Noticias_descatadas'>
            {
                        noticias.map(noticia  => (
                            <div className="CardNoticias">
                                <div className="w-full h-3/5 bg-Noticia bg-cover bg-center rounded-t-xl">
                                    <img src={noticia.imagen} alt="" />
                                </div>
                                <div className="w-full h-2/5  rounded-b-lg bg-sky-950 flex flex-col justify-evenly p-2">
                                  <h2 className="text-white text-bold text-xl px-4 text-center">
                                        {noticia.titulo}
                                  </h2>
                                  <p>{noticia.fecha }</p>
                                  <p className="text-white text-md px-4">{noticia.descripcion}</p>
                               
                                </div>
                             </div>
                        ))
                    }
            </div>


            <div className="bg-gray-700 w" >
                  
            </div>
        </div>
    </>
  );
};
