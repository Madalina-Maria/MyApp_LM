import React from 'react'
import NavOferteleMelePJ from '../../../components/navbarPJ/oferte/NavOferteleMelePJ'
import COferteleMelePJ from '../../../components/persoanaJuridica/oferte/COferteleMelePJ'
import './StyleOferteleMelePJ.css'

const OferteleMelePJ = () => {
  const userVal = localStorage.getItem('user_id')
  console.log('user este : ', userVal)
  return (
    <div className='OferteleMelePJ-Bg '>
      <NavOferteleMelePJ />
      <COferteleMelePJ />
    </div>
  )
}
export default OferteleMelePJ
