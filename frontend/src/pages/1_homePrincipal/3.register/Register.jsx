import { Button } from '@mui/material'
import React from 'react'
import NavPrincipal from '../../../components/homePrincipal/1_home/1_navbar/NavPrincipal'
import CRegisterPF from '../../../components/homePrincipal/3_register/CRegisterPF'
import './StyleR.css'

const Register = () => {
  return (
    <div>
      <NavPrincipal />
      <div class='bg1'></div>
      <div class='bg1 bg2'></div>
      <div class='bg1 bg3'></div>
      <div>
        <CRegisterPF />
      </div>
    </div>
  )
}

export default Register
