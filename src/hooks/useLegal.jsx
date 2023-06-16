import React, { useContext } from 'react'
import { LegalAdimnContext } from '../context/LegalAdimn'

const useLegal = () => {
  return  useContext(LegalAdimnContext)
}
export default useLegal