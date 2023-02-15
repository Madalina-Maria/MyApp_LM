import React from 'react'
import NavConversatii from '../../../components/navbarPF/oferte/NavConversatii'
import CConversatii from '../../../components/persoanaFizica/oferte/CConversatii'
import './StyleConversatiiOfertePF.css'

const Conversatii = () => {
  return (
    <div className='ConversatiiOfertePF-Bg'>
      <NavConversatii />
      <CConversatii />
    </div>
  )
}
export default Conversatii
