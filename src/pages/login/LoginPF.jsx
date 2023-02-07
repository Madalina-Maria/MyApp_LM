import React from 'react'
import NavPrincipal from '../../components/navbar/NavPrincipal'
import CLoginPF from '../../components/login/CLoginPF'
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
