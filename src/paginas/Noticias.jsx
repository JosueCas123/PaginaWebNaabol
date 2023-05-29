import React from 'react'

export const Noticias = () => {
  return (
    <>
        <div className=' w-9/12 md:w-10/12 mt-5 mx-auto'>
                <h2>Noticias destacadas</h2>
            <div className=" md:flex md:space-x-5 box-border w-full mx-auto h-1/2 hidden:space-y-5" id='Noticias_descatadas'>
                    <div className='w-full h-96 shadow-md rounded-lg ' >
                        <div className="w-full h-1/2 bg-Noticia bg-cover bg-center rounded-lg"></div>
                        <div className="p-3  h-auto">
                            <h2 className="font-semibold text-lg">¡Feliz día del Niño, la mejor tripulación del mundo!</h2>
                            <span className="text-sx font-thin">22 de marzo, 2023</span>
                            
                            
                            <section className="flex flex-row-reverse mt-3">    
                                <button className="bg-blue-900 p-1 rounded-sm text-white text-sm">
                                    Leer mas..
                                </button>
                            </section>
                        </div>
                        

                    </div>
                    <div className='w-full h-96 shadow-md rounded-lg ' >
                        <div className="w-full h-1/2 bg-Noticia bg-cover bg-center rounded-lg"></div>
                        <div className="p-3  h-auto">
                            <h2 className="font-semibold text-lg">¡Feliz día del Niño, la mejor tripulación del mundo!</h2>
                            <span className="text-sx font-thin">22 de marzo, 2023</span>
                            
                            
                            <section className="flex flex-row-reverse mt-3">    
                                <button className="bg-blue-900 p-1 rounded-sm text-white text-sm">
                                    Leer mas..
                                </button>
                            </section>
                        </div>
                        

                    </div>
                    <div className='w-full h-96 shadow-md rounded-lg ' >
                        <div className="w-full h-1/2 bg-Noticia bg-cover bg-center rounded-lg"></div>
                        <div className="p-3  h-auto">
                            <h2 className="font-semibold text-lg">¡Feliz día del Niño, la mejor tripulación del mundo!</h2>
                            <span className="text-sx font-thin">22 de marzo, 2023</span>
                            
                            
                            <section className="flex flex-row-reverse mt-3">    
                                <button className="bg-blue-900 p-1 rounded-sm text-white text-sm">
                                    Leer mas..
                                </button>
                            </section>
                        </div>
                        

                    </div>
                   
            </div>


            <div className="bg-gray-700 w" >
                  
            </div>
        </div>
    </>
  )
}
