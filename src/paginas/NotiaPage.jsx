import React, { useMemo } from 'react'
import { Header } from '../components/Header'
import { RedesSociales } from '../components/RedesSociales'
import { Link, useNavigate, useParams,Navigate } from 'react-router-dom'


export const NotiaPage = () => {

  const {id} = useParams()
  const navigate = useNavigate()

  const onNavigateRegresar = () => {
    navigate(-1);
  }

  const noticia = useMemo(() => getIdNoticia(id), [id]) 

  if(!noticia){
    return <Navigate to="/marvel"/>
  }

  return (
   <>

    <Header/>
    <div className=' xl:flex xl:flex-row gap-28 flex justify-center flex-col-reverse w-10/12 mx-auto'>
       
        <RedesSociales/>
        <div className="xl:w-2/4 shadow-md  my-5 p-2  ">
            <div>
              <img
                src={noticia.imagen}
                alt=""
                className="w-full xl:h-96 rounded-lg object-cover object-center "
              />
            </div>
              <di className="p-2 pt-4">
                <h5 className=" text-lg font-semibold md:text-xl">
                  {noticia.titulo}
                </h5>
                <div className="mt-2">
                  <p className="text-sm font-normal">12 de abril, 2023</p>
                </div>
                <p className="pt-4 text-justify text-base font-mediumpy-2 ">
                  Naabol celebra este día con mucho amor y cariño para todos los
                  niños y niñas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur vel neque fugiat consectetur odio. Officia, similique dignissimos dolore quae quos sapiente iusto alias, omnis voluptatibus ipsa quasi nobis cupiditate perspiciatis? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat accusantium voluptate impedit officia dolores fugit, deleniti fugiat ab nisi enim veritatis nemo ut facere sequi commodi officiis natus adipisci. Fugiat?
                </p>

              </di>
            </div>
      <div>
        <button onClick={onNavigateRegresar}>
          Volver atras
        </button>
      </div>
    </div>
   </>
  )
}
