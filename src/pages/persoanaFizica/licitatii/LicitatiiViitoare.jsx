import React from 'react'
import NavLicitatiiViitoare from '../../../components/navbarPF/licitatii/NavLicitatiiViitoare'
import CLicitatiiviitoare from '../../../components/persoanaFizica/licitatii/CLicitatiiViitoare'
import './StyleLicitatiiViitoarePF.css'

const LicitatiiViitoare = () => {
  return (
    <div className='LicitatiiViitoarePF-Bg'>
      <NavLicitatiiViitoare />
      <CLicitatiiviitoare />
    </div>
  )
}
export default LicitatiiViitoare
