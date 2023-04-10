import React from 'react'
import CLicitatii from '../../../components/persoanaFizica/licitatii/CLicitatii'
import NavLicitatii from '../../../components/navbarPF/licitatii/NavLicitatii'
import './StyleLicitatiiPF.css'

const Licitatii = () => {
  const userVal = localStorage.getItem('user_id')
  console.log('user este : ', userVal)
  return (
    <div className='LicitatiiPF-Bg'>
      <NavLicitatii />
      <CLicitatii />
    </div>
  )
}
export default Licitatii
