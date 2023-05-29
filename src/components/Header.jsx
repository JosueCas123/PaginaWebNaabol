import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <>
        <header className="  bg-blue-950 w-full h-10">
            <nav className="flex justify-between items-center  w-11/12 h-full mx-auto" >

                <div>
                  <Link 
                    to='/HomeNaabol'
                  >
                    <img className='w-10'  src="../src/img/logoA.png" alt="" />
                  </Link>
                </div>

                <div className='space-x-4'>
                    <Link 
                      className='Link'
                      to='/SobreNosotros'
                    >
                        Sobre nosotros
                    </Link>
                    <Link
                    className='Link'
                    to='/Noticias'

                    >
                        Noticias
                    </Link>
                    <Link
                      className='Link'
                      to='/Login'
                    >
                        Iniciar Secion
                    </Link>
                </div>
            </nav>
        </header>
    </>
  )
}
