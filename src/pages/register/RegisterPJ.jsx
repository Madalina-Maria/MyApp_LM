import React from 'react'
import NavPrincipal from '../../components/navbar/NavPrincipal'
import CRegisterPJ from '../../components/register/CRegisterPJ'

const RegisterPJ = () => {
  return (
    <div className='boxRegisterPF'>
      <div className='pb-20'>
        <NavPrincipal />
        <CRegisterPJ />
      </div>
    </div>
  )
}
export default RegisterPJ
