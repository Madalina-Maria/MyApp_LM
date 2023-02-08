import React from 'react'
import CHomePF from '../../components/homeLogat/CHomePF'
import NavPF from '../../components/navbar/NavPF'
import './StyleHPF.css'

const HomePF = () => {
  return (
    <div className='HPF'>
      <NavPF />
      <CHomePF />
    </div>
  )
}

export default HomePF
