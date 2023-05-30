import React from 'react'
import useUser from '../../hooks/useUser'

export const ContendoTable = ({noticia}) => {

    const {eliminarNoticia} = useUser()
    const {titulo, fecha, descripcion, imagen, id} = noticia
  return (
  <>
  
         <tr class="sec2n__tr" data-cliente={id} >
           
           <td class="sec2n__td">
               <p class="sec2n__titulo">
                {fecha}
               </p>
           </td>
           <td class="sec2n__td">
               <p class="sec2n__titulo">
                    {titulo}
               </p>
           </td>
           <td class="sec2n__td">
               <div class="sec2n__img">
               <img className=' w-10 bg-cover bg-center justify-center items-center' src={imagen}  alt=""/>
               </div>
           </td>
           <td class="sec2n__td">
               <p class="sec2n__descript">
               {descripcion}
               </p>
           </td>
           <td class="sec2n__td">
               <div class="sec2n__note">
               <button class="btne" onclick="editarUrse()">
                   <i class='bx bxs-edit'></i>
               </button>
               </div>
           </td>
           <td class="sec2n__td">
               <div class="sec2n__delete">
               <button
                onClick={() => eliminarNoticia(id)}
               >
                   <i class='bx bxs-coffee-togo eliminar'></i>
               </button>
               </div>
           </td>
       
       </tr>
  
  </>
    
  )
}
