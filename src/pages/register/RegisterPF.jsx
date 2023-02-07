import React from 'react'
import NavPrincipal from '../../components/navbar/NavPrincipal'
import CRegisterPF from '../../components/register/CRegisterPF'
import './StylePF.css'

const RegisterPF = () => {
  return (
    <div className='boxRegisterPF'>
      <div>
        <NavPrincipal />
        <CRegisterPF />
      </div>
    </div>
  )
}
export default RegisterPF
