import React from 'react'
import NavTerenuri from '../../../components/persoanaFizica1/2_terenuri/1.navbar/NavTerenuri'
import CTerenuri from '../../../components/persoanaFizica1/2_terenuri/2.componenta/CTerenuri'
import './StyleTerenuriPF.css'

const Terenuri = () => {
  const userVal = localStorage.getItem('user_id')
  console.log('user este : ', userVal)
  return (
    <div className='TerenuriPF-Bg'>
      <NavTerenuri />
      <CTerenuri />
    </div>
  )
}
export default Terenuri
