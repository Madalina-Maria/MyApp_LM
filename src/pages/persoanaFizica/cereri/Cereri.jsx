import React from 'react'
import NavCereri from '../../../components/navbarPF/cereri/NavCereri'
import CCereri from '../../../components/persoanaFizica/cereri/CCereri'
import './StyleCereriPF.css'

const Cereri = () => {
  return (
    <div className='CereriPF-Bg'>
      <NavCereri />
      <CCereri />
    </div>
  )
}
export default Cereri
