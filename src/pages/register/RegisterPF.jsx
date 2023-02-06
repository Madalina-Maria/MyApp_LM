import React from 'react'
import NavPrincipal from '../../components/navbar/NavPrincipal'
import CRegisterPF from '../../components/register/CRegisterPF'

const RegisterPF = () => {
  return (
    <div className='boxRegisterPF'>
      <div className='pb-20'>
        <NavPrincipal />
        <CRegisterPF />
      </div>
    </div>
  )
}
export default RegisterPF
