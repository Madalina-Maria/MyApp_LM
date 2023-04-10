import React, { useState, useEffect } from 'react'
import { Button } from '@mui/material'

const CLicitatiiHome = () => {
  const [datae, setDatae] = useState([])
  const [idLicitatie, setIdLicitatie] = useState(0)
  const [descriereLicitatie, setDescriereLicitatie] = useState('')
  const [pretPornire, setPretPornire] = useState('')
  const [dataIncepere, setDataIncepere] = useState('')
  const [dataFinalizare, setDataFinalizare] = useState('')
  const [numeDenumire, setNumeDenumire] = useState('')
  const [prenumeDomeniul, setPrenumeDomeniul] = useState('')
  const [tipPersoana, setTipPersoana] = useState('')
  const [numarTelefon, setNumarTelefon] = useState('')
  const [emailPersoana, setEmailPersoana] = useState('')
  const [isShown, setIsShown] = useState(false)
  const [isShownClick, setIsShownClick] = useState(false)

  const showClick = (event) => {
    // 👇️ toggle shown state
    setIsShownClick((current) => !current)
  }

  const selectClick = (event) => {
    // 👇️ toggle shown state
    setIsShown((current) => !current)
  }

  function handleClick(element) {
    setIdLicitatie(element.id_licitatie)
    setDescriereLicitatie(element.descriere)
    setPretPornire(element.pret_pornire)
    setDataIncepere(element.data_incepere)
    setDataFinalizare(element.data_finalizare)
    setNumeDenumire(element.nume_denumire)
    setPrenumeDomeniul(element.prenume_domeniul)
    setTipPersoana(element.tip_persoana)
    setNumarTelefon(element.numar_telefon)
    setEmailPersoana(element.email)
  }

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        'http://localhost:5000/api/licitatie/getAllLicitatii'
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
      <p className='flex justify-center text-4xl font-bold my-5'>Licitații</p>
      <div className='flex flex-row justify-between mx-10 w-full gap-20 pl-5 pr-5'>
        <div className='px-5 py-16 w-1/5 flex-grow bg-gray-100 border border-gray-300 rounded-lg mr-10'>
          <div className='flex flex-col gap-8 px-5 min-h-screen'>
            {datae.map((element) => (
              <div
                variant='contained'
                key={element.id_licitatie}
                onClick={() => handleClick(element)}
              >
                <div>
                  <div
                    className='border-b-2 border-black mt-2 hover:text-blue-500 hover:border-blue-500'
                    onClick={selectClick}
                  >
                    <strong className='font-bold'>Nume licitatie:</strong>{' '}
                    {element.nume}
                  </div>
                  {isShown && element.id_licitatie === idLicitatie && (
                    <div>
                      <p className=' mt-2'>
                        <strong className='font-bold'>Descriere:</strong>{' '}
                        {element.descriere}
                      </p>
                      <p className=' mt-2'>
                        <strong className='font-bold'>Pret de pornire:</strong>{' '}
                        {element.pret_pornire}
                      </p>
                      <p className='mt-2'>
                        <strong className='font-bold'>Data de incepere:</strong>{' '}
                        {element.data_incepere}
                      </p>
                      <p className='mt-2'>
                        <strong className='font-bold'>
                          Data de finalizare:
                        </strong>{' '}
                        {element.data_finalizare}
                      </p>
                      <div className='flex flex-row mt-5 gap-5'>
                        <div>
                          <Button variant='contained' color='secondary'>
                            MESAJ
                          </Button>
                        </div>

                        <div>
                          <Button
                            variant='contained'
                            color='success'
                            onClick={showClick}
                          >
                            CONTACT
                          </Button>
                          {isShownClick &&
                            element.id_licitatie === idLicitatie && (
                              <div>
                                <label>Date despre proprietar:</label>
                                <br />
                                <p className='border-b-2 border-black mt-2'>
                                  <strong className='font-bold'>
                                    Nume proprietar:
                                  </strong>{' '}
                                  {element.nume_denumire}
                                </p>
                                <p className='border-b-2 border-black mt-2'>
                                  <strong className='font-bold'>
                                    Prenume/domeniul:
                                  </strong>{' '}
                                  {element.prenume_domeniul}
                                </p>
                                <p className='border-b-2 border-black mt-2'>
                                  <strong className='font-bold'>
                                    Tip de persoana:
                                  </strong>{' '}
                                  {element.tip_persoana}
                                </p>
                                <p className='border-b-2 border-black mt-2'>
                                  <strong className='font-bold'>
                                    Numar de telefon:
                                  </strong>{' '}
                                  {element.numar_telefon}
                                </p>
                                <p className='border-b-2 border-black mt-2'>
                                  <strong className='font-bold'>Email:</strong>{' '}
                                  {element.email}
                                </p>
                              </div>
                            )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
export default CLicitatiiHome
