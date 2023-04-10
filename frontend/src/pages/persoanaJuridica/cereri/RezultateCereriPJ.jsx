import React from 'react'
import NavRezultateCereriPJ from '../../../components/navbarPJ/cereri/NavRezultateCereriPJ'
import CRezultateCereriPJ from '../../../components/persoanaJuridica/cereri/CRezultateCereriPJ'
import './StyleRezultateCereriPJ.css'

const RezultateCereriPJ = () => {
  const userVal = localStorage.getItem('user_id')
  console.log('user este : ', userVal)
  return (
    <div className='RezultateCereriPJ-Bg'>
      <NavRezultateCereriPJ />
      <CRezultateCereriPJ />
    </div>
  )
}
export default RezultateCereriPJ
