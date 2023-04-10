import React from 'react'
import NavFermaPersonalaPJ from '../../../../../components/persoanaJuridica2/2_administrare/2.fermaPersonala/home/NavFermaPersonalaPJ'
import CFermaPersonalaPJ from '../../../../../components/persoanaJuridica2/2_administrare/2.fermaPersonala/home/CFermaPersonalaPJ'

const FermaPersonalaPJ = () => {
  const userVal = localStorage.getItem('user_id')
  console.log('user este : ', userVal)
  return (
    <div>
      <NavFermaPersonalaPJ />
      <CFermaPersonalaPJ />
    </div>
  )
}
export default FermaPersonalaPJ
