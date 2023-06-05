import React from 'react'
import useUser from '../../hooks/useUser'
import { ContendoTable } from './ContendoTable'

export const Table = () => {

    const {noticias} = useUser()
 

  return (

    <>
    <div style={{ overflowX: 'auto' }}>

        <table  className="w-full scroll-x-1">
                <thead>
                    <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal ">
                         <th class="py-3 px-6  text-center">FECHA</th>
                         <th class="py-3 px-6 text-center">TITULO</th>
                         <th class="py-3 px-6 text-center">IMGEN</th>
                         <th class="py-3 px-6 text-center">DESCRIPCION</th>
                         <th class="py-3 px-6 text-center">ACCION</th>
                    </tr>
                </thead>

            <tbody class="w-full text-gray-600 text-sm font-light border-spacing-1 border-2  " >
                {
                   noticias.map(noticia => (
                    <ContendoTable
                        key={noticia.id}
                        noticia={noticia}
                    />
                   ))
                }
            </tbody>
        </table>
    </div>
    </>



  )
}




