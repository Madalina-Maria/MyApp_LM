import React from 'react'
import NavCereriPJ from '../../../components/navbarPJ/cereri/NavCereriPJ'
import CCereriPJ from '../../../components/persoanaJuridica/cereri/CCereriPJ'
import './StyleCereriPJ.css'

const CereriPJ = () => {
  const userVal = localStorage.getItem('user_id')
  console.log('user este : ', userVal)
  return (
    <div className='CereriPJ-Bg'>
      <NavCereriPJ />
      <CCereriPJ />
    </div>
  )
}
export default CereriPJ
