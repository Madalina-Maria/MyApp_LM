import React from 'react'
import NavRezultateLicitatii from '../../../components/navbarPF/licitatii/NavRezultateLicitatii'
import CRezultateLicitatii from '../../../components/persoanaFizica/licitatii/CRezultateLicitatii'
import './StyleRezultateLicitatiiPF.css'

const RezultateLicitatii = () => {
  return (
    <div className='RezultateLicitatiiPF-Bg'>
      <NavRezultateLicitatii />
      <CRezultateLicitatii />
    </div>
  )
}
export default RezultateLicitatii
