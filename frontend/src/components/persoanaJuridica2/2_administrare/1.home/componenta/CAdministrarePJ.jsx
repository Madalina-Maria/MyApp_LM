import React from 'react'
import './StyleCAdministrarePJ.css'

const CAdministrarePJ = () => {
  return (
    <div>
      <div>
        {' '}
        <p className='flex justify-center text-4xl font-bold my-5'>
          Administrare
        </p>
      </div>
      <div className='flex flex-row gap-x-3 mt-32'>
        <div className='place-self-auto'>
          <p className='text-7xl font-bold mt-7 mx-10'>
            Fii mereu la curent cu se întâmplă în ferma ta!
          </p>
          <p className='text-2xl mt-5 mx-10'>
            Aplicația S.I.G.L.A. îmbunătațește activitatea agricolă oferind
            informații precise, ajutând fermierii să iși gestioneze ferma mult
            mai usor, susținând complexitatea muncii lor.
          </p>
        </div>
        <div className='place-self-auto'>
          <img
            className=' w-screen '
            src='https://www.bursa.ro/_img/articole/mare/436975.jpg'
            alt='poza1'
          />
        </div>
      </div>
      <div>
        <div className='text-3xl font-bold my-20 mx-10'>
          <p>O altfel de abordare a agriculturii!</p>
        </div>
      </div>
      <div className='flex flex-row gap-x-8 mx-10'>
        <div className='box'>
          <div className='cerc'>
            <p className='simbol'>📋</p>
          </div>
          <div>
            <p className='text-2xl font-bold mx-3 mt-10 text-orange-400'>
              Administrare completă
            </p>
            <p className='text-lg font-bold mx-3'>la doar un click distanță.</p>
          </div>
        </div>
        <div className='box'>
          <div className='cerc'>
            <p className='simbol'>🐾</p>
          </div>
          <div>
            <p className='text-xl font-bold mx-3 mt-10 text-violet-900'>
              Informații precise
            </p>
            <p className='text-lg font-bold mx-3'>
              despre starea fermei, culturilor și prognoze agrometeorologice
              detaliate.
            </p>
          </div>
        </div>
        <div className='box'>
          <div className='cerc'>
            <p className='simbol'>💼</p>
          </div>
          <div>
            <p className='text-xl font-bold mx-3 mt-10 text-amber-700'>
              Maximizarea producției
            </p>
            <p className='text-lg font-bold mx-3'>
              prin decizii inteligente bazate pe date actualizate continuu.
            </p>
          </div>
        </div>
        <div className='box'>
          <div className='cerc'>
            <p className='simbol'>👤</p>
          </div>
          <div>
            <p className='text-xl font-bold mx-3 mt-10 text-purple-700'>
              Control total
            </p>
            <p className='text-lg font-bold mx-3'>
              printr-o imagine de ansamblu a tuturor activităților din fermă.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CAdministrarePJ
