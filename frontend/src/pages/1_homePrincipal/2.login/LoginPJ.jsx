import React from 'react'
import NavPrincipal from '../../../components/homePrincipal/1_home/1_navbar/NavPrincipal'
import CLoginPJ from '../../../components/homePrincipal/2_login/CLoginPJ'
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
