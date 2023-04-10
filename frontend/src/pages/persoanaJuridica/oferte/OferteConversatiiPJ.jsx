import React from 'react'
import NavOferteConversatiiPJ from '../../../components/navbarPJ/oferte/NavOferteConversatiiPJ'
import COferteConversatiiPJ from '../../../components/persoanaJuridica/oferte/COferteConversatiiPJ'
import './StyleOferteConversatiiPJ.css'

export const OferteConversatiiPJ = () => {
  const userVal = localStorage.getItem('user_id')
  console.log('user este : ', userVal)
  return (
    <div className='ConversatiiOfertePJ-Bg'>
      <NavOferteConversatiiPJ />
      <COferteConversatiiPJ />
    </div>
  )
}
export default OferteConversatiiPJ
