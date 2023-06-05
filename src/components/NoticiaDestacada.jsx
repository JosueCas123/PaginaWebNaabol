import React from 'react'
import {Link} from 'react-router-dom'
import { formatearFecha } from '../helpers/fechaFormateada'

export const NoticiaDestacada = ({noticia}) => {


   
     
  return (
    <>
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
            
    </>
  )
}
