import React from 'react'
import NavTerenFermaPersonalaPJ from '../../../../../components/persoanaJuridica2/2_administrare/2.fermaPersonala/teren/navbar/NavTerenFermaPersonalaPJ'
import CTerenFermaPersonalaPJ from '../../../../../components/persoanaJuridica2/2_administrare/2.fermaPersonala/teren/componenta/CTerenFermaPersonalaPJ'

const TerenFermaPersonalaPJ = () => {
  const userVal = localStorage.getItem('user_id')
  console.log('user este : ', userVal)
  return (
    <div>
      <NavTerenFermaPersonalaPJ />
      <CTerenFermaPersonalaPJ />
    </div>
  )
}
export default TerenFermaPersonalaPJ
