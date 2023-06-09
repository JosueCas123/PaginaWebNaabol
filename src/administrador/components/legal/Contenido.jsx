import React from 'react'
import { Link } from 'react-router-dom'
import { Table } from './Table'


export const Contenido = () => {
  return (
    <div className = "content ml-12 transform ease-in-out duration-500 pt-20 px-2 md:px-5 pb-4 ">
        <nav className = "flex px-5 py-3 text-gray-700  rounded-lg bg-gray-50 dark:bg-[#1C2563] " aria-label="Breadcrumb">
            <ol className = "inline-flex items-center space-x-1 md:space-x-3">
                <li className = "inline-flex items-center">
                    <Link to="/LegalAdmin" className = "inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                        <svg className = "w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                        Administrador de Contenido
                    </Link>
                </li>
                <div>

      
    </div>
                <li>
                    
                <Link to="/Formulario" className = "inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                        <svg className = "w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                        Subir Contenido
                    </Link>
                </li>
            </ol>
        </nav>
        <div className = "w-full flex flex-wrap my-5 -mx-2">
            <Table/>     
        </div>

    </div>
  )
}
