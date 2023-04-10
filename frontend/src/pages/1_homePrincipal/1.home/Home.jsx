import React from 'react'
import './Style.css'
import HomeCarousel from '../../../components/homePrincipal/1_home/2_carusel/HomeCarousel'
import NavPrincipal from '../../../components/homePrincipal/1_home/1_navbar/NavPrincipal'
import FooterHome from '../../../components/homePrincipal/1_home/3_footer/FooterHome'

const Home = () => {
  return (
    <div className='flex flex-col'>
      <div>
        <NavPrincipal />
      </div>
      <div className='flex flex-col '>
        <p className='flex justify-center font-serif text-6xl mt-20'>
          S.I.G.L.A.
        </p>
        <p className='flex justify-center font-mono text-3xl my-6'>
          Sistem Integrat de Gestiune a Lucrarilor Agricole
        </p>
      </div>

      <div className='py-40'>
        <HomeCarousel />
      </div>
      <div className='absolut bottom-0 w-full '>
        <FooterHome />
      </div>
    </div>
  )
}

export default Home
