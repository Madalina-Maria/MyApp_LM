import React, { useState, useEffect } from 'react'
import ModalPF from './ModalPF'
import { Button } from '@mui/material'
import AfisareTeren from './AfisareTeren'
import { Cauta } from '../1.navbar/Cauta'

const CTerenuri = () => {
  const [openButton, setOpenButton] = useState({})
  const [datae, setDatae] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        'http://localhost:5000/api/teren/getAllTerenuriPJ'
      )
      const json = await response.json()
      setDatae(json)
      console.log(json)
    }
    fetchData()
    console.log('Datae este = ', datae[0])
  }, [])
  if (!datae) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <div className='flex flex-row justify-between my-5'>
        <div></div>
        <div></div>
        <p className='self-center font-bold text-2xl'>TERENURILE MELE</p>
        <Cauta setDatae={setDatae} />
      </div>
      <ModalPF />
      <div className='flex flex-row justify-between mx-10 w-full gap-20 pl-5 pr-5'>
        <div className='px-5 py-16 w-1/5 flex-grow bg-gray-100 border border-gray-300 rounded-lg'>
          <div className='flex flex-col gap-8 px-5 min-h-screen'>
            {datae.map((element) => (
              <Button
                variant='contained'
                key={element.id_teren}
                onClick={() => {
                  setOpenButton(element)
                  console.log('openButton:', openButton)
                }}
              >
                {element.nume_teren}
              </Button>
            ))}
          </div>
        </div>
        <div className='bg-gray-100 border border-gray-300 rounded-lg w-4/5 mr-10 px-5 py-5 min-h-screen'>
          <div>
            <AfisareTeren teren={openButton} setDatae={setDatae} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default CTerenuri
