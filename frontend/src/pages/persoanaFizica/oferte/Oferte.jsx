import React from 'react'
import NavOferte from '../../../components/navbarPF/oferte/NavOferte'
import COferte from '../../../components/persoanaFizica/oferte/COferte'
import './StyleOfertePF.css'

const Oferte = () => {
  const userVal = localStorage.getItem('user_id')
  console.log('user este : ', userVal)
  return (
    <div className='OfertePF-bg'>
      <NavOferte />
      <COferte />
    </div>
  )
}
export default Oferte
