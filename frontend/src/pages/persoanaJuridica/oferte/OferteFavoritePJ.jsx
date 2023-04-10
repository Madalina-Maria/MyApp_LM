import React from 'react'
import NavOferteFavoritePJ from '../../../components/navbarPJ/oferte/NavOferteFavoritePJ'
import COferteFavoritePJ from '../../../components/persoanaJuridica/oferte/COferteFavoritePJ'
import './StyleOferteFavoritePJ.css'

export const OferteConversatiiPJ = () => {
  const userVal = localStorage.getItem('user_id')
  console.log('user este : ', userVal)
  return (
    <div className='FavoriteOfertePJ-Bg '>
      <NavOferteFavoritePJ />
      <COferteFavoritePJ />
    </div>
  )
}
export default OferteConversatiiPJ
