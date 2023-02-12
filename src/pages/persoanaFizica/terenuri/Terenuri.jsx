import React from 'react'
import Modal from '../../../components/modal/Modal'
import NavTerenuri from '../../../components/navbarPF/NavTerenuri'
import CTerenuri from '../../../components/persoanaFizica/CTerenuri'
import './StyleTPF.css'

const Terenuri = () => {
  return (
    <div>
      <NavTerenuri />
      <CTerenuri />
      <Modal />
    </div>
  )
}
export default Terenuri