import React from 'react'
import NavLicitatiiPJ from '../../../components/navbarPJ/licitatii/NavLicitatiiPJ'
import CLicitatiiPJ from '../../../components/persoanaJuridica/licitatii/CLicitatiiPJ'
import './StyleLicitatiiPJ.css'

const LicitatiiPJ = () => {
  const userVal = localStorage.getItem('user_id')
  console.log('user este : ', userVal)
  return (
    <div className='LicitatiiPJ-Bg '>
      <NavLicitatiiPJ />
      <CLicitatiiPJ />
    </div>
  )
}
export default LicitatiiPJ
