import React from 'react'
import NavLicitatiiInCurs from '../../../components/navbarPF/licitatii/NavLicitatiiInCurs'
import CLicitatiiInCurs from '../../../components/persoanaFizica/licitatii/CLicitatiiInCurs'
import './StyleLicitatiiInCursPF.css'

const LicitatiiInCurs = () => {
  return (
    <div className='LicitatiiInCursPF-Bg'>
      <NavLicitatiiInCurs />
      <CLicitatiiInCurs />
    </div>
  )
}
export default LicitatiiInCurs
