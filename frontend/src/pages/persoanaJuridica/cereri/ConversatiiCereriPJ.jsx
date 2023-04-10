import React from 'react'
import NavConversatiiCereriPJ from '../../../components/navbarPJ/cereri/NavConversatiiCereriPJ'
import CConversatiiCereriPJ from '../../../components/persoanaJuridica/cereri/CConversatiiCereriPJ'
import './StyleConversatiiCereriPJ.css'

const ConversatiiCereriPJ = () => {
  const userVal = localStorage.getItem('user_id')
  console.log('user este : ', userVal)
  return (
    <div className='ConversatiicereriPJ-Bg'>
      <NavConversatiiCereriPJ />
      <CConversatiiCereriPJ />
    </div>
  )
}
export default ConversatiiCereriPJ
