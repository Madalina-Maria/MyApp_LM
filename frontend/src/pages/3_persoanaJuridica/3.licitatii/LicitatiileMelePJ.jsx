import React from 'react'
import NavLicitatiileMelePJ from '../../../components/navbarPJ/licitatii/NavLicitatiileMelePJ'
import CLicitatiileMelePJ from '../../../components/persoanaJuridica/licitatii/CLicitatiileMelePJ'
import './StyleLicitatiileMelePJ.css'

const LicitatiileMelePJ = () => {
  const userVal = localStorage.getItem('user_id')
  console.log('user este : ', userVal)
  return (
    <div className='LicitatiileMelePJ-Bg'>
      <NavLicitatiileMelePJ />
      <CLicitatiileMelePJ />
    </div>
  )
}
export default LicitatiileMelePJ
