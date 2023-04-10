import React from 'react'
import NavConversatiiCereri from '../../../components/navbarPF/cereri/NavConversatiiCereri'
import CConversatiiCereri from '../../../components/persoanaFizica/cereri/CConversatiiCereri'
import './StyleConversatiiCereriPF.css'

const ConversatiiCereriPF = () => {
  const userVal = localStorage.getItem('user_id')
  console.log('user este : ', userVal)
  return (
    <div className='ConversatiicereriPF-Bg'>
      <NavConversatiiCereri />
      <CConversatiiCereri />
    </div>
  )
}
export default ConversatiiCereriPF
