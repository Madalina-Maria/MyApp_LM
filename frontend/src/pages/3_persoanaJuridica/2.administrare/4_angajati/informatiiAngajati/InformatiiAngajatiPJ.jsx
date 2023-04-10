import React from 'react'
import NavInformatiiAngajatiPJ from '../../../../../components/persoanaJuridica2/2_administrare/4.angajati/informatiiAngajati/NavInformatiiAngajatiPJ'
import CInformatiiAngajatiPJ from '../../../../../components/persoanaJuridica2/2_administrare/4.angajati/informatiiAngajati/CInformatiiAngajatiPJ'

const InformatiiAngajatiPJ = () => {
  const userVal = localStorage.getItem('user_id')
  console.log('user este : ', userVal)
  return (
    <div>
      <NavInformatiiAngajatiPJ />
      <CInformatiiAngajatiPJ />
    </div>
  )
}
export default InformatiiAngajatiPJ
