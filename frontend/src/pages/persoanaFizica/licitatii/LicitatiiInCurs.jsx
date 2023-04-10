import React from 'react'
import CLicitatiiInCurs from '../../../components/persoanaFizica/licitatii/CLicitatiiInCurs'
import './StyleLicitatiiInCursPF.css'

const LicitatiiInCurs = () => {
  const userVal = localStorage.getItem('user_id')
  console.log('user este : ', userVal)
  return (
    <div className='LicitatiiInCursPF-Bg'>
      <CLicitatiiInCurs />
    </div>
  )
}
export default LicitatiiInCurs
