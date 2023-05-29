import React from 'react'

export const CardNoticias = () => {
  return (
    <div className="p-6" id="Noticias">
            <p className="text-xl font-semibold text-slate-700 ">Noticias Destcadas</p>
            <div className="w-auto h-72 items-center mt-6 overflow-x-auto overscroll-x-contain flex space-x-6 overflow-hidden ">
                <div className='Card'>
                    <div className="w-full h-3/5 bg-Noticia bg-cover bg-center rounded-t-xl"></div>
                    <div className="w-full h-2/5 bg-secondary rounded-b-lg dark:bg-gray-700">
                            <p className="text-white text-bold text-xl px-4">Norway</p>
                            <p className="text-white text-md px-4">Paisajes incheibles</p>
                        </div>
                </div>
                <div className='Card'>
                    <div className="w-full h-3/5 bg-Noticia bg-cover bg-center rounded-t-xl"></div>
                    <div className="w-full h-2/5 bg-secondary rounded-b-lg dark:bg-gray-700">
                            <p className="text-white text-bold text-xl px-4">Norway</p>
                            <p className="text-white text-md px-4">Paisajes incheibles</p>
                        </div>
                </div>
                <div className='Card'>
                    <div className="w-full h-3/5 bg-Noticia bg-cover bg-center rounded-t-xl"></div>
                    <div className="w-full h-2/5 bg-secondary rounded-b-lg dark:bg-gray-700">
                            <p className="text-white text-bold text-xl px-4">Norway</p>
                            <p className="text-white text-md px-4">Paisajes incheibles</p>
                        </div>
                </div>
                <div className='Card'>
                    <div className="w-full h-3/5 bg-Noticia bg-cover bg-center rounded-t-xl"></div>
                    <div className="w-full h-2/5 bg-secondary rounded-b-lg dark:bg-gray-700">
                            <p className="text-white text-bold text-xl px-4">Norway</p>
                            <p className="text-white text-md px-4">Paisajes incheibles</p>
                        </div>
                </div>
                <div className='Card'>
                    <div className="w-full h-3/5 bg-Noticia bg-cover bg-center rounded-t-xl"></div>
                    <div className="w-full h-2/5 bg-secondary rounded-b-lg dark:bg-gray-700">
                            <p className="text-white text-bold text-xl px-4">Norway</p>
                            <p className="text-white text-md px-4">Paisajes incheibles</p>
                        </div>
                </div>
            </div>
    </div>
  )
}
