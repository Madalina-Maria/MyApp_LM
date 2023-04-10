import React from 'react'
import NavUtilajeFermaPersonalaPJ from '../../../../../components/persoanaJuridica2/2_administrare/2.fermaPersonala/utilaje/navbar/NavUtilajeFermaPersonalaPJ'
import CUtilajeFermaPersonalaPJ from '../../../../../components/persoanaJuridica2/2_administrare/2.fermaPersonala/utilaje/componenta/CUtilajeFermaPersonalaPJ'

const UtilajeFermaPersonalaPJ = () => {
  const userVal = localStorage.getItem('user_id')
  console.log('user este : ', userVal)
  return (
    <div>
      <NavUtilajeFermaPersonalaPJ />
      <CUtilajeFermaPersonalaPJ />
    </div>
  )
}
export default UtilajeFermaPersonalaPJ
