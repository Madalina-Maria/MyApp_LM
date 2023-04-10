import React from 'react'
import NavLucrariPJ from '../../../../../components/persoanaJuridica2/2_administrare/3.lucrari/home/navbar/NavLucrariPJ'
import CLucrariPJ from '../../../../../components/persoanaJuridica2/2_administrare/3.lucrari/home/componenta/CLucrariPJ'

const LucrariPJ = () => {
  const userVal = localStorage.getItem('user_id')
  console.log('user este : ', userVal)
  return (
    <div>
      <NavLucrariPJ />
      <CLucrariPJ />
    </div>
  )
}
export default LucrariPJ
