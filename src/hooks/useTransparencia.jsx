import React, { useContext } from 'react'
import { TransparenciaContex } from '../context/TransparenciaContex'

const useTransparencia = () => {
  return useContext(TransparenciaContex)
}
export default useTransparencia;