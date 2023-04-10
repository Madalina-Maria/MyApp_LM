import React from 'react'
import CLoginPF from '../../../components/homePrincipal/2_login/CLoginPF'
import NavPrincipal from '../../../components/homePrincipal/1_home/1_navbar/NavPrincipal'
import './StyleL.css'

const Login = () => {
  return (
    <div>
      <NavPrincipal />
      <div class='bg'></div>
      <div class='bg bg2'></div>
      <div class='bg bg3'></div>
      <div>
        <CLoginPF />
      </div>
    </div>
  )
}

export default Login
