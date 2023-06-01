import React, { useState } from 'react'
import { useClimaApp } from '../hooks/useClimaApp'

export const ClimaHora = () => {
  const {climaCiudades} = useClimaApp()

    const {name} = climaCiudades[0]
   const {name:CB} = climaCiudades[1]
   const {name:SC} = climaCiudades[2]
   const {name:BN} = climaCiudades[3]

   
    
   //console.log(name)

  console.log(climaCiudades)


  return (
  <>

    <div className="w-52  h-16 bg-neutral-800  rounded-3xl flex justify-around items-center text-xl   shadow-inner m-3 sm:w-72  sm:h-20 sm:text-2xl lg:">
        <div className="flex items-center">
          <p className='text-sm'>{name}</p>
        </div>
        <div className="flex justify-between items-center ">
          <p className="mx-3 sm:mx-5">13 c</p>
          <img
            className="mx-4 sm:mx-5"
            src="../src/img/icon8.png"
            alt=""
          />
        </div>
    </div>
    <div className="w-52  h-16 bg-neutral-800  rounded-3xl flex justify-around items-center text-xl   shadow-inner m-3 sm:w-72  sm:h-20 sm:text-2xl lg:">
        <div className="flex items-center">
          <p className='text-sm'>{CB}</p>
        </div>
        <div className="flex justify-between items-center ">
          <p className="mx-3 sm:mx-5">13 c</p>
          <img
            className="mx-4 sm:mx-5"
            src="../src/img/icon8.png"
            alt=""
          />
        </div>
    </div>
    <div className="w-52  h-16 bg-neutral-800  rounded-3xl flex justify-around items-center text-xl   shadow-inner m-3 sm:w-72  sm:h-20 sm:text-2xl lg:">
        <div className="flex items-center">
          <p className='text-sm'>{SC}</p>
        </div>
        <div className="flex justify-between items-center ">
          <p className="mx-3 sm:mx-5">13 c</p>
          <img
            className="mx-4 sm:mx-5"
            src="../src/img/icon8.png"
            alt=""
          />
        </div>
    </div>
    <div className="w-52  h-16 bg-neutral-800  rounded-3xl flex justify-around items-center text-xl   shadow-inner m-3 sm:w-72  sm:h-20 sm:text-2xl lg:">
        <div className="flex items-center">
          <p className='text-sm'>{BN}</p>
        </div>
        <div className="flex justify-between items-center ">
          <p className="mx-3 sm:mx-5">13 c</p>
          <img
            className="mx-4 sm:mx-5"
            src="../src/img/icon8.png"
            alt=""
          />
        </div>
    </div>
  </>
  )
}
