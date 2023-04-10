import React from 'react'
import NavAnimaleFermaPersonalaPJ from '../../../../../components/persoanaJuridica2/2_administrare/2.fermaPersonala/animale/navbar/NavAnimaleFermaPersonalaPJ'
import CAnimaleFermaPersonalaPJ from '../../../../../components/persoanaJuridica2/2_administrare/2.fermaPersonala/animale/componenta/CAnimaleFermaPersonalaPJ'

const AnimaleFermaPersonalaPJ = () => {
  const userVal = localStorage.getItem('user_id')
  console.log('user este : ', userVal)
  return (
    <div>
      <NavAnimaleFermaPersonalaPJ />
      <CAnimaleFermaPersonalaPJ />
    </div>
  )
}
export default AnimaleFermaPersonalaPJ
