import React from 'react'
import NavAngajatiPJ from '../../../../../components/persoanaJuridica2/2_administrare/4.angajati/home/NavAngajatiPJ'
import CAngajatiPJ from '../../../../../components/persoanaJuridica2/2_administrare/4.angajati/home/CAngajatiPJ'

const AngajatiPJ = () => {
  const userVal = localStorage.getItem('user_id')
  console.log('user este : ', userVal)
  return (
    <div>
      <NavAngajatiPJ />
      <CAngajatiPJ />
    </div>
  )
}
export default AngajatiPJ
