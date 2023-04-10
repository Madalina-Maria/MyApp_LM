import React from 'react'
import NavAdministrarePJ from '../../../../components/persoanaJuridica2/2_administrare/1.home/navbar/NavAdministrarePJ'
import CAdministrarePJ from '../../../../components/persoanaJuridica2/2_administrare/1.home/componenta/CAdministrarePJ'

const AdministrarePJ = () => {
  const userVal = localStorage.getItem('user_id')
  console.log('user este : ', userVal)
  return (
    <div>
      <NavAdministrarePJ />
      <CAdministrarePJ />
    </div>
  )
}
export default AdministrarePJ
