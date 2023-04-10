import React from 'react'
import NavPrincipal from '../../../components/homePrincipal/1_home/1_navbar/NavPrincipal'
import CRegisterPJ from '../../../components/homePrincipal/3_register/CRegisterPJ'
import './StylePJ.css'

const RegisterPJ = () => {
  const userVal = localStorage.getItem('user_id')
  console.log('user este : ', userVal)
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
