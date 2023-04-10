import React from 'react'
import NavRezultateLicitatiiPJ from '../../../components/navbarPJ/licitatii/NavRezultateLicitatiiPJ'
import CRezultateLicitatiiPJ from '../../../components/persoanaJuridica/licitatii/CRezultateLicitatiiPJ'
import './StyleRezultateLicitatiiPJ.css'

const RezultateLicitatiiPJ = () => {
  const userVal = localStorage.getItem('user_id')
  console.log('user este : ', userVal)
  return (
    <div className='RezultateLicitatiiPJ-Bg'>
      <NavRezultateLicitatiiPJ />
      <CRezultateLicitatiiPJ />
    </div>
  )
}
export default RezultateLicitatiiPJ
