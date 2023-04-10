import React from 'react'
import NavAjutor from '../../../components/persoanaFizica1/4_ajutor/NavAjutor'
import CAjutor from '../../../components/persoanaFizica1/4_ajutor/CAjutor'
import './StyleAjutorPF.css'

const AjutorPF = () => {
  const userVal = localStorage.getItem('user_id')
  console.log('user este : ', userVal)
  return (
    <div className='AjutorPF-Bg'>
      <NavAjutor />
      <CAjutor />
    </div>
  )
}
export default AjutorPF
