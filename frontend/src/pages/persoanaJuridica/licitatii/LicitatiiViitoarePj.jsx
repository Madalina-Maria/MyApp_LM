import React from 'react'
import NavLicitatiiViitoarePJ from '../../../components/navbarPJ/licitatii/NavLicitatiiViitoarePJ'
import CLicitatiiViitoarePJ from '../../../components/persoanaJuridica/licitatii/CLicitatiiViitoarePJ'
import './StyleLicitatiiViitoarePJ.css'

const LicitatiiViitoarePJ = () => {
  const userVal = localStorage.getItem('user_id')
  console.log('user este : ', userVal)
  return (
    <div className='LicitatiiViitoarePJ-Bg'>
      <NavLicitatiiViitoarePJ />
      <CLicitatiiViitoarePJ />
    </div>
  )
}
export default LicitatiiViitoarePJ
