import React from 'react'
import NavMagaziaFermaPersonalaPJ from '../../../../../components/persoanaJuridica2/2_administrare/2.fermaPersonala/magazie/navbar/NavMagaziaFermaPersonalaPJ'
import CMagaziaFermaPersonalaPJ from '../../../../../components/persoanaJuridica2/2_administrare/2.fermaPersonala/magazie/componenta/CMagaziaFermaPersonalaPJ'

const MagaziaFermaPersonalaPJ = () => {
  const userVal = localStorage.getItem('user_id')
  console.log('user este : ', userVal)
  return (
    <div>
      <NavMagaziaFermaPersonalaPJ />
      <CMagaziaFermaPersonalaPJ />
    </div>
  )
}
export default MagaziaFermaPersonalaPJ
