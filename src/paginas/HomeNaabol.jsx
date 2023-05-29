import React from 'react'

import { TabVar } from '../components/TabVar'
import { CardGerencia } from '../components/CardGerencia'
import { CardNoticias } from '../components/CardNoticias'
import { Footer } from '../components/Footer'

export const HomeNaabol = () => {
  return (
    <>
        <section className='w-full h-screen'>
            <div className='w-full h-4/6 lg:h-screen'>
                <div className="w-full flex flex-col justify-center h-full bg-HomeImg bg-cover bg-center lg:bg-HomeImg lg:bg-cover lg:bg-center lg:bg-no-repet">
                    <div className="mx-52">
                        <p className='text-sm lg:text-xl text-white'>Bien venidos a</p>
                        <h1 className="text-base text-white" >Naavegacion Aerea de Aeropuertos Bolivianos</h1>
                    </div>

                    <div className="w-3/5 h-20
                     items-center mx-auto overflow-x-auto overscroll-x-contain flex space-x-6 overflow-hidden">
                        <div className="Card_Areas flex flex-row  justify-center items-center">
                            <a className="flex flex-col items-center" href="">
                                <img className="w-15 text-center rounded-full border-2  bg-gris-800 " src='../src/img/icon5.png' alt="" />
                                <p className="p-1 text-xs bg-secondary rounded-lg text-white">
                                    Aeronaurica
                                </p>
                            </a>
                        </div>
                        <div className="flex flex-row  justify-center items-center">
                            <a className="flex flex-col items-center" href="">
                                <img className="w-8 text-center rounded-full border-2 bg-secondary " src='../src/img/icon5.png' alt="" />
                                <p className="p-1 text-xs bg-secondary rounded-lg text-white">
                                    Aeronaurica
                                </p>
                            </a>
                        </div>
                        <div className="flex flex-row  justify-center items-center">
                            <a className="flex flex-col items-center" href="">
                                <img className="w-8 text-center rounded-full border-2 bg-secondary " src='../src/img/icon5.png' alt="" />
                                <p className="p-1 text-xs bg-secondary rounded-lg text-white">
                                    Aeronaurica
                                </p>
                            </a>
                        </div>
                        <div className="flex flex-row  justify-center items-center">
                            <a className="flex flex-col items-center" href="">
                                <img className="w-8 text-center rounded-full border-2 bg-secondary " src='../src/img/icon5.png' alt="" />
                                <p className="p-1 text-xs bg-secondary rounded-lg text-white">
                                    Aeronaurica
                                </p>
                            </a>
                        </div>
                        <div className="flex flex-row  justify-center items-center">
                            <a className="flex flex-col items-center" href="">
                                <img className="w-8 text-center rounded-full border-2 bg-secondary " src='../src/img/icon5.png' alt="" />
                                <p className="p-1 text-xs bg-secondary rounded-lg text-white">
                                    Aeronaurica
                                </p>
                            </a>
                        </div>
                        
                    </div>

                </div>
            </div>
            <section className="lg:w-4/5 lg:mx-auto">
                <CardGerencia/>
                <CardNoticias/>
                
            </section>

        <Footer/>
        </section>
        
        
    </>
    )
}
