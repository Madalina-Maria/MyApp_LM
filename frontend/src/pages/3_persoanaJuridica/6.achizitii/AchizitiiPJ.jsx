import React from 'react'
import NavAchizitiiPJ from '../../../components/persoanaJuridica2/3_achizitii/NavAchizitiiPJ'
import CAchizitiiPJ from '../../../components/persoanaJuridica2/3_achizitii/CAchizitiiPJ'
import './StyleAchizitiiPJ.css'

const AchizitiiPJ = () => {
  const userVal = localStorage.getItem('user_id')
  console.log('user este : ', userVal)
  return (
    <div className='AchizitiiPJ-Bg'>
      <NavAchizitiiPJ />
      <CAchizitiiPJ />
    </div>
  )
}
export default AchizitiiPJ
