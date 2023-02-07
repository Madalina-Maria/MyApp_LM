import React from 'react'
import NavPrincipal from '../../components/navbar/NavPrincipal'
import CRegisterPJ from '../../components/register/CRegisterPJ'
import './StylePJ.css'

const RegisterPJ = () => {
  return (
    <div className='boxRegisterPJ'>
      <div>
        <NavPrincipal />
        <CRegisterPJ />
      </div>
    </div>
  )
}
export default RegisterPJ
