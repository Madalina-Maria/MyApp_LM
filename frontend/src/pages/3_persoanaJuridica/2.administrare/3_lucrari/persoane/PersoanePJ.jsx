import React from 'react'
import NavPersoanePJ from '../../../../../components/persoanaJuridica2/2_administrare/3.lucrari/persoane/NavPersoanePJ'
import CPersoanePJ from '../../../../../components/persoanaJuridica2/2_administrare/3.lucrari/persoane/CPersoanePJ'

const PersoanePJ = () => {
  const userVal = localStorage.getItem('user_id')
  console.log('user este : ', userVal)
  return (
    <div>
      <NavPersoanePJ />
      <CPersoanePJ />
    </div>
  )
}
export default PersoanePJ
