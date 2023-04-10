import React from 'react'
import CHomePJ from '../../../components/persoanaJuridica2/1_home/CHomePJ'
import NavPJ from '../../../components/persoanaJuridica2/1_home/NavPJ'

export const HomePJ = () => {
  const userVal = localStorage.getItem('user_id')
  console.log('user este : ', userVal)
  return (
    <div>
      <NavPJ />
      <CHomePJ />
    </div>
  )
}
export default HomePJ
