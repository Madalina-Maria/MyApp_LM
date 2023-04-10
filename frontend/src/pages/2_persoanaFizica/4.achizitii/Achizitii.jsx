import React from 'react'
import NavAchizitii from '../../../components/persoanaFizica1/3_achizitii/1.navbar/NavAchizitii'
import CAchizitii from '../../../components/persoanaFizica1/3_achizitii/2.componenta/CAchizitii'
import './StyleAchizitiiPF.css'

const Achizitii = () => {
  const userVal = localStorage.getItem('user_id')
  console.log('user este : ', userVal)
  return (
    <div className='AchizitiiPF-Bg'>
      <NavAchizitii />
      <CAchizitii />
    </div>
  )
}
export default Achizitii
