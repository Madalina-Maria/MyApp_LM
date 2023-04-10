import React from 'react'
import NavOfertePJ from '../../../components/navbarPJ/oferte/NavOfertePJ'
import COfertePJ from '../../../components/persoanaJuridica/oferte/COfertePJ'
import './StyleOfertePJ.css'

const OfertePJ = () => {
  const userVal = localStorage.getItem('user_id')
  console.log('user este : ', userVal)
  return (
    <div className='OfertePJ-bg '>
      <NavOfertePJ />
      <COfertePJ />
    </div>
  )
}
export default OfertePJ
