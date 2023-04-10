import React from 'react'
import NavPrincipal from '../../../components/homePrincipal/1_home/1_navbar/NavPrincipal'
import CRegisterPF from '../../../components/homePrincipal/3_register/CRegisterPF'
import './StylePF.css'

const RegisterPF = () => {
  const userVal = localStorage.getItem('user_id')
  console.log('user este : ', userVal)
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
