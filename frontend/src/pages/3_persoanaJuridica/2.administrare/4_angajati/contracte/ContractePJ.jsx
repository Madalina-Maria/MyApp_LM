import React from 'react'
import NavContractePJ from '../../../../../components/persoanaJuridica2/2_administrare/4.angajati/contracte/NavContractePJ'
import CContractePJ from '../../../../../components/persoanaJuridica2/2_administrare/4.angajati/contracte/CContractePJ'

const ContractePJ = () => {
  const userVal = localStorage.getItem('user_id')
  console.log('user este : ', userVal)
  return (
    <div>
      <NavContractePJ />
      <CContractePJ />
    </div>
  )
}
export default ContractePJ
