import React from "react";
import { Link } from "react-router-dom";


export const NoticiaVer = ({ultimaNoticia}) => {

  console.log(ultimaNoticia)

 
  return (
    <>
       <section className=" py-8 w-11/12 mx-auto  max-w-screen-2xl ">
        <div className=" gap-10 md:flex justify-between">
          <div className="xl:w-6/12 sm:my-7 md:w-2/4 md:my-0 ">
            <h2 className="text-center sm:text-center font-bold my-6 text-2xl md:my-0 md:text-3xl">
              NAABOL inicia operación de limpieza, mantenimiento e inspección
            </h2>
            <p className="sm text-base py-6 text-justify">
              #Naabol, liderado por su Director General Ejecutivo, el Lic. Elmer
              Pozo, llevó a cabo una operación de limpieza, mantenimiento e
              inspección en el cerco perimetral en el Aeropuerto Capitán Oriel
              Lea Plaza en la ciudad de Tarija. #Naabol, liderado por su
              Director General Ejecutivo, el Lic. Elmer Pozo, llevó a cabo una
              operación de limpieza, mantenimiento e inspección en el cerco
              perimetral en el Aeropuerto Capitán Oriel Lea Plaza en la ciudad
              de Tarija. #Naabol, liderado por su Director General Ejecutivo, el
             
            </p>
            <img src="../src/img/nn1.png" alt="" className="sm: w-full" />
          </div>

          <div className="lx:w-5/12   ">
            <h4 className="text-center font-bold text-2xl my-2 ">
              Últimas noticias
            </h4>
           
            {Array.isArray(ultimaNoticia) && ultimaNoticia.length > 0 ? (
              ultimaNoticia.map((noticia) => (
                <div
                  key={noticia.id} // Agrega una clave única para cada noticia
                  className="w-full my-5 p-2 flex flex-col items-center justify-center md:flex md:flex-col md:items-center lg:flex-row"
                >
                  <img
                    src={noticia.imagen}
                    alt=""
                    className="w-full xl:w-32 mr-0 sm:w-40 sm:h-36 sm:mr-9 md:mr-0 md:w-52 lg:w-32 lg:h-32 lg:mx-3 lg:bg-cover"
                  />
                  <div className="w-full lg:p-1">
                    <h5 className="sm:text-center font-bold sm:my-2">
                      {noticia.titulo}
                    </h5>
                    
                    <div className="w-full flex justify-between items-center">
                      <p className="text-slate-400">{noticia.fecha}</p>
                      <Link to={`/PageNoticia/${noticia.id}`}>
                        <button className="text-white bg-blue-700 p-2 text-sm rounded-lg">
                          Leer más...
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No hay noticias disponibles.</p>
            )}
          
          </div>
        </div>
      </section>
      
    </>
   
  );
};
