import React from 'react'
import NavPrincipal from '../../components/navbar/NavPrincipal'
import CLoginPJ from '../../components/login/CLoginPJ'
import './StylePJ.css'

const LoginPJ = () => {
  return (
    <div className='boxLoginPJ'>
      <NavPrincipal />
      <CLoginPJ />
    </div>
  )
}
export default LoginPJ
