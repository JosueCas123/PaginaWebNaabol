import React, { useContext } from 'react'
import { RecursosHContext } from '../context/RecursosHContext'


const useRecHumanos = () => {
  return useContext(RecursosHContext)
}

export default useRecHumanos