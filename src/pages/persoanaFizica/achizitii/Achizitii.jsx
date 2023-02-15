import React from 'react'
import NavAchizitii from '../../../components/navbarPF/achizitii/NavAchizitii'
import CAchizitii from '../../../components/persoanaFizica/achizitii/CAchizitii'
import './StyleAchizitiiPF.css'

const Achizitii = () => {
  return (
    <div className='AchizitiiPF-Bg'>
      <NavAchizitii />
      <CAchizitii />
    </div>
  )
}
export default Achizitii
