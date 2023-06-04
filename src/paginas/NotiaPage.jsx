import React, { useMemo } from 'react'
import { Header } from '../components/Header'
import { RedesSociales } from '../components/RedesSociales'
import { Link, useNavigate, useParams, Navigate } from 'react-router-dom'
import useUser from '../hooks/useUser'
import { Foot } from '../components/Foot'

export const NotiaPage = () => {
  const params = useParams()
  const id = parseInt(params.id)
  
  const navigate = useNavigate()

  const { noticias } = useUser()

  const noticia = useMemo(() => noticias.find(noticia => noticia.id === id), [id, noticias])

  const onNavigateRegresar = () => {
    navigate(-1);
  }

  console.log(noticia)

  if (!noticia) {
    // Si no se encuentra la noticia con el ID especificado, puedes mostrar un mensaje de error o redireccionar al usuario a otra página.
    return <Navigate to="/"/>
  }
 


  return (
    <>
      <Header />
      <div className=' xl:flex xl:flex-row gap-28 flex justify-center flex-col-reverse w-10/12 mx-auto'>
        <RedesSociales />
        <div className="xl:w-2/4 shadow-md  my-5 p-2  ">
          <div>
            <img
              src={noticia.imagen}
              alt=""
              className="w-full xl:h-96 rounded-lg object-cover object-center "
            />
          </div>
          <div className="p-2 pt-4">
            <h5 className=" text-lg font-semibold md:text-xl">
              {noticia.titulo}
            </h5>
            <div className="mt-2">
              <p className="text-sm font-normal">{noticia.fecha}</p>
            </div>
            <p className="pt-4 text-justify text-base font-mediumpy-2 ">
              {noticia.descripcion}
            </p>
          </div>
        <div>
          <button onClick={() => {onNavigateRegresar}}>
            Volver atrás
          </button>
        </div>
        </div>
      </div>
      <Foot/>
    </>
  )
}