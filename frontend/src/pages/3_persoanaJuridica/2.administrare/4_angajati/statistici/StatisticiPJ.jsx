import React from 'react'
import NavStatisticiPJ from '../../../../../components/persoanaJuridica2/2_administrare/4.angajati/statistici/NavStatisticiPJ'
import CStatisticiPJ from '../../../../../components/persoanaJuridica2/2_administrare/4.angajati/statistici/CStatisticiPJ'

const StatisticiPJ = () => {
  const userVal = localStorage.getItem('user_id')
  console.log('user este : ', userVal)
  return (
    <div>
      <NavStatisticiPJ />
      <CStatisticiPJ />
    </div>
  )
}
export default StatisticiPJ
