import React from 'react'
import NavCererileMelePJ from '../../../components/navbarPJ/cereri/NavCererileMelePJ'
import CCererileMelePJ from '../../../components/persoanaJuridica/cereri/CCererileMelePJ'
import './StyleCererileMelePJ.css'

const CererileMelePJ = () => {
  const userVal = localStorage.getItem('user_id')
  console.log('user este : ', userVal)
  return (
    <div className='CererileMelePJ-Bg'>
      <NavCererileMelePJ />
      <CCererileMelePJ />
    </div>
  )
}
export default CererileMelePJ
