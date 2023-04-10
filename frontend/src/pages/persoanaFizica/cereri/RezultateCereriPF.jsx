import React from 'react'
import NavRezultateCereri from '../../../components/navbarPF/cereri/NavRezultateCereri'
import CRezultateCereri from '../../../components/persoanaFizica/cereri/CRezultateCereri'
import './StyleRezultateCereriPF.css'

export const RezultateCereriPF = () => {
  const userVal = localStorage.getItem('user_id')
  console.log('user este : ', userVal)
  return (
    <div className='RezultateCereriPF-Bg'>
      <NavRezultateCereri />
      <CRezultateCereri />
    </div>
  )
}
export default RezultateCereriPF
