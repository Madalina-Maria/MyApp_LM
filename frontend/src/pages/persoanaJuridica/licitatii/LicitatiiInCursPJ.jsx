import React from 'react'
import NavLicitatiiInCursPJ from '../../../components/navbarPJ/licitatii/NavLicitatiiInCursPJ'
import CLicitatiiInCursPJ from '../../../components/persoanaJuridica/licitatii/CLicitatiiInCursPJ'
import './StyleLicitatiiInCursPJ.css'

const LicitatiiInCursPJ = () => {
  const userVal = localStorage.getItem('user_id')
  console.log('user este : ', userVal)
  return (
    <div className='LicitatiiInCursPJ-Bg '>
      <NavLicitatiiInCursPJ />
      <CLicitatiiInCursPJ />
    </div>
  )
}
export default LicitatiiInCursPJ
