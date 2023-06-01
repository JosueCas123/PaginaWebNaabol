import React from 'react'
import useUser from '../../hooks/useUser'
import { ContendoTable } from './ContendoTable'

export const Table = () => {

    const {noticias} = useUser()
    
    // const data = noticias.map(noticia => noticia)
    // console.log(data)

  return (

    <>
    <div style={{ overflowX: 'auto' }}>

        <table  className="w-full scroll-x-1">
                <thead>
                    <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                         <th class="py-3 px-6 text-left">FECHA</th>
                         <th class="py-3 px-6 text-left">TITULO</th>
                         <th class="py-3 px-6 text-center">IMGEN</th>
                         <th class="py-3 px-6 text-center">DESCRIPCION</th>
                         <th class="py-3 px-6 text-center">ACCION</th>
                    </tr>
                </thead>

            <tbody class="text-gray-600 text-sm font-light border-spacing-1" >
                {
                    noticias.map(noticia => {
                        return(
                            
                            <ContendoTable
                                key={noticia.id}
                                noticia={noticia}
                            />
                        )
                    })
                }
            </tbody>
        </table>
    </div>
    </>



  )
}




