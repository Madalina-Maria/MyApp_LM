import React from 'react'
import CHomePF from '../../../components/persoanaFizica1/1_home/2.CHomePF'
import NavPF from '../../../components/persoanaFizica1/1_home/1.NavPF'

const HomePF = () => {
  const userVal = localStorage.getItem('user_id')
  console.log('user este : ', userVal)
  return (
    <div className='HPF'>
      <NavPF />
      <CHomePF />
    </div>
  )
}

export default HomePF
