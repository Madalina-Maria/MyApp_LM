import React from 'react'
import NavRezultateCereri from '../../../components/navbarPF/cereri/NavRezultateCereri'
import CRezultateCereri from '../../../components/persoanaFizica/cereri/CRezultateCereri'
import './StyleRezultateCereriPF.css'

export const RezultateCereriPF = () => {
  return (
    <div className='RezultateCereriPF-Bg'>
      <NavRezultateCereri />
      <CRezultateCereri />
    </div>
  )
}
export default RezultateCereriPF
