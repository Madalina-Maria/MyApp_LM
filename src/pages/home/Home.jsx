import React from 'react'
import './Style.css'
import HomeCarousel from '../../components/home/HomeCarousel'
import NavPrincipal from '../../components/navbar/NavPrincipal'

const Home = () => {
  return (
    <div>
      <NavPrincipal />
      <div className='flex justify-center font-serif text-6xl my-3'>
        <p className='titlulHome'> ACASĂ </p>
      </div>
      <HomeCarousel />
    </div>
  )
}

export default Home
