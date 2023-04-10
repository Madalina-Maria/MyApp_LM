import React from 'react'
import NavFavorite from '../../../components/navbarPF/oferte/NavFavorite'
import CFavorite from '../../../components/persoanaFizica/oferte/CFavorite'
import './StyleFavoriteOfertePF.css'

const Favorite = () => {
  const userVal = localStorage.getItem('user_id')
  console.log('user este : ', userVal)
  return (
    <div className='FavoriteOfertePF-Bg'>
      <NavFavorite />
      <CFavorite />
    </div>
  )
}
export default Favorite
