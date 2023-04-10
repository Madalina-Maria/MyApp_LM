import React from 'react'
import NavConversatii from '../../../components/navbarPF/oferte/NavConversatii'
import CConversatii from '../../../components/persoanaFizica/oferte/CConversatii'
import './StyleConversatiiOfertePF.css'

const Conversatii = () => {
  const userVal = localStorage.getItem('user_id')
  console.log('user este : ', userVal)
  return (
    <div className='ConversatiiOfertePF-Bg'>
      <NavConversatii />
      <CConversatii />
    </div>
  )
}
export default Conversatii
