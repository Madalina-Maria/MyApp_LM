import React from 'react'
import NavAjutorPJ from '../../../components/persoanaJuridica2/4_ajutor/NavAjutorPJ'
import CAjutorPJ from '../../../components/persoanaJuridica2/4_ajutor/CAjutorPJ'
import './StyleAjutorPJ.css'

const AjutorPJ = () => {
  const userVal = localStorage.getItem('user_id')
  console.log('user este : ', userVal)
  return (
    <div className='AjutorPJ-Bg'>
      <NavAjutorPJ />
      <CAjutorPJ />
    </div>
  )
}
export default AjutorPJ
