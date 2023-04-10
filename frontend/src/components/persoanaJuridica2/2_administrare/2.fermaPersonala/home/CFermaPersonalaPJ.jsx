import React from 'react'

const CFermaPersonalaPJ = () => {
  return (
    <div>
      <div>
        {' '}
        <p className='flex justify-center text-4xl font-bold my-5'>
          Ferma personală
        </p>
      </div>
      <div className='flex flex-row  mt-20'>
        <div className=' basis-2/3 ml-10 mt-10 '>
          <p className='text-5xl font-bold mb-3'>
            Pentru a avea o evidență detaliată a fermei tale zi de zi, noi venim
            cu soluția.
          </p>
          <p className='text-2xl font-bold mb-4'>
            Gata cu teancul de agende, gata cu notițele pierdute, ai totul
            într-un singur loc.
          </p>
          <p className='text-2xl '>
            Întocmirea planului anual de producție al fermei, în sensul
            stabilirii nivelului de profit, nu a fost niciodata mai ușor.
          </p>
        </div>
        <div className='basis-1/3'>
          <img
            src='https://sarghydesign.ro/wp-content/uploads/Administrare-website.png'
            alt='poza'
          />
        </div>
      </div>
    </div>
  )
}
export default CFermaPersonalaPJ
