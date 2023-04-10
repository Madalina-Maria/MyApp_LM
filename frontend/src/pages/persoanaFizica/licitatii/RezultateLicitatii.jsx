import React from 'react'

import CRezultateLicitatii from '../../../components/persoanaFizica/licitatii/CRezultateLicitatii'
import './StyleRezultateLicitatiiPF.css'

const RezultateLicitatii = () => {
  const userVal = localStorage.getItem('user_id')
  console.log('user este : ', userVal)
  return (
    <div className='RezultateLicitatiiPF-Bg'>
      <CRezultateLicitatii />
    </div>
  )
}
export default RezultateLicitatii
