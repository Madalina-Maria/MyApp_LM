import React from 'react'
import NavPrincipal from '../../../components/homePrincipal/1_home/1_navbar/NavPrincipal'
import CLoginPF from '../../../components/homePrincipal/2_login/CLoginPF'
import './StylePF.css'

const LoginPF = () => {
  return (
    <div className='boxLoginPF'>
      <div>
        <NavPrincipal />
        <CLoginPF />
      </div>
    </div>
  )
}
export default LoginPF
