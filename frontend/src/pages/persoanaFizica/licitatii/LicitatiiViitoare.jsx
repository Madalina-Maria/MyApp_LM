import React from 'react'

import CLicitatiiviitoare from '../../../components/persoanaFizica/licitatii/CLicitatiiViitoare'
import './StyleLicitatiiViitoarePF.css'

const LicitatiiViitoare = () => {
  const userVal = localStorage.getItem('user_id')
  console.log('user este : ', userVal)
  return (
    <div className='LicitatiiViitoarePF-Bg'>
      <CLicitatiiviitoare />
    </div>
  )
}
export default LicitatiiViitoare
