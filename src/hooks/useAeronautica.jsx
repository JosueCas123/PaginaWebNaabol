import React, { useContext } from 'react'
import { AeronauticaContex } from '../context/AeronauticaContex'

const useAeronautica = () => {
  return useContext(AeronauticaContex)
}
 export default useAeronautica;