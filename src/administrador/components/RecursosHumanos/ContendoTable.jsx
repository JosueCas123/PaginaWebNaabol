import React, { useMemo } from 'react'
import useUser from '../../../hooks/useUser'
import { Link } from 'react-router-dom'
import { formatearFecha } from '../../../helpers/fechaFormateada'
import useRecHumanos from '../../../hooks/useRecHumanos'

export const ContendoTable = ({noticia}) => {
    console.log(noticia)
    const {eliminarNoticia, setEdicion} = useRecHumanos()
    const {titulo, fecha, descripcion, imagen, id} = noticia

    const newDescripcion = useMemo(() => {
        return descripcion.length > 30
            ? descripcion.substring(0,30) + '......'
            :descripcion
    },[descripcion])

  return (
  <>
  
         <tr class="border-b-2" data-cliente={id} >
           
           <td class="flex justify-center items-center">
               <p class="sec2n__titulo">
                {formatearFecha(fecha)}
               </p>
           </td>
           <td class="">
               <p class="text-center font-medium">
                    {titulo}
               </p>
           </td>
           <td class="flex justify-center items-center">
               <div class="">
               <object
                    data={imagen}
                    type="application/pdf"
                    width="100%"
                    height="100px"
      >
        <p>
          No se puede mostrar el PDF.{" "}
          <a href={imagen} target="_blank" rel="noopener noreferrer">
            Haz clic aquí para descargarlo.
          </a>
        </p>
      </object>
               </div>
           </td>
           <td class="">
               <p class=" font-medium">
               {newDescripcion}
               </p>
           </td>
           <td class="w-10 text-center space-y-1">
               <div class="">
                <Link
                    to='/formulario'
                >
                    <button class=" bg-blue-700 pr-3 pl-3 pt-1 pb-1 text-white rounded-sm font-medium" onClick={() => setEdicion(noticia)}>
                        Editar
                    </button>
                </Link>
               </div>
               <div class="">
               <button
               className=' bg-red-500 p-1 text-white rounded-sm font-medium'
                onClick={() => eliminarNoticia(noticia)}
               > 
                   Eliminar
               </button>
               </div>
           </td>
           
       
       </tr>
  
  </>
    
  )
}
