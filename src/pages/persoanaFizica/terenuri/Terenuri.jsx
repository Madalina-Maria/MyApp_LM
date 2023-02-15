import React from 'react'
import NavTerenuri from '../../../components/navbarPF/terenuri/NavTerenuri'
import CTerenuri from '../../../components/persoanaFizica/terenuri/CTerenuri'
import './StyleTerenuriPF.css'

const Terenuri = () => {
  return (
    <div className='TerenuriPF-Bg'>
      <NavTerenuri />
      <CTerenuri />
    </div>
  )
}
export default Terenuri
