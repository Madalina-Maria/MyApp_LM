import React from 'react'
import NavAjutor from '../../../components/navbarPF/ajutor/NavAjutor'
import CAjutor from '../../../components/persoanaFizica/ajutor/CAjutor'
import './StyleAjutorPF.css'

const AjutorPF = () => {
  return (
    <div className='AjutorPF-Bg'>
      <NavAjutor />
      <CAjutor />
    </div>
  )
}
export default AjutorPF
