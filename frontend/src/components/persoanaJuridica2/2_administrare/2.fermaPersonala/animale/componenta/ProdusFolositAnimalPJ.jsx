import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'
import { Button, TextField, Box } from '@mui/material'
import { useInsertProdusAnimalPJ } from '../../../../../../hooks/useInsertProdusAnimalPJ'
import Axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

Modal.setAppElement('#root') // setează elementul principal al aplicației React

const defaultValues = {
  nume_produs: '',
  pret_produs: '',
  producator: '',
  cantitate: '',
}

const ProdusFolositAnimalPJ = (props) => {
  const [showhide, setShowhide] = useState('')
  const handleshowhide = (event) => {
    const getuser = event.target.value
    setShowhide(getuser)
  }

  const [isShown, setIsShown] = useState(false)
  const selectClick = (event) => {
    // 👇️ toggle shown state
    setIsShown((current) => !current)
  }

  const [modalIsOpen, setModalIsOpen] = useState(false) // creează o stare pentru a controla afișarea paginii modale
  const openModal = () => {
    setModalIsOpen(true)
  }
  const closeModal = () => {
    setModalIsOpen(false)
  }

  const [modalIsOpenEdit, setModalIsOpenEdit] = useState(false) // creează o stare pentru a controla afișarea paginii modale
  const openModalEdit = () => {
    setModalIsOpenEdit(true)
  }
  const closeModalEdit = () => {
    setModalIsOpenEdit(false)
  }

  const [idProdusSelectat, setIdProdusSelectat] = useState(0)
  const [numeProdusSelectat, setNumeProdusSelectat] = useState('')
  const [pretProdusSelectat, setPretProdusSelectat] = useState('')
  const [producatorProdusSelectat, setProducatorProdusSelectat] = useState('')
  const [cantitateProdusSelectat, setCantitateProdusSelectat] = useState('')
  function handleClick(produseFolosite) {
    setIdProdusSelectat(produseFolosite.id_produs_folosit)
    setNumeProdusSelectat(produseFolosite.nume)
    setPretProdusSelectat(produseFolosite.pret)
    setProducatorProdusSelectat(produseFolosite.producator)
    setCantitateProdusSelectat(produseFolosite.cantitate)
  }

  const [formValues, setFormValues] = useState(defaultValues)
  const responseP = useInsertProdusAnimalPJ({
    url: 'http://localhost:5000/api/animal/insertProdusAnimalPJ',
    insertData: {
      id_investitie: props.idInvestitie,
      nume_produs: formValues.nume_produs,
      pret_produs: formValues.pret_produs,
      producator: formValues.producator,
      cantitate: formValues.cantitate,
    },
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  const [refresh, setRefresh] = useState('')
  const [produsFolosit, setProdusFolosit] = useState([])
  useEffect(() => {
    console.log('id-ul investitiei este= ', props.idInvestitie)
    async function fetchData() {
      const response = await fetch(
        `http://localhost:5000/api/animal/getProdusAnimalePJ/${props.idInvestitie}`
      )
      const data = await response.json()
      setProdusFolosit(data)
    }
    fetchData()
  }, [props.idInvestitie])

  if (!produsFolosit) {
    return <div>Loading...</div>
  }

  const deletHandle = async (idProdus) => {
    window.location.reload(false)
    console.log('id-ul produsului din functia delete este: ', idProdus)
    try {
      Axios.delete(
        `http://localhost:5000/api/animal/deleteProdusPJ/${idProdus}`
      )
    } catch (error) {
      toast('Investitia nu a putut fi sters')
    } finally {
      //toast('Investitia a fost stearsa cu succes!')
      const response = await fetch(
        `http://localhost:5000/api/animal/getProdusAnimalePJ/${props.idInvestitie}`
      )

      const investitiiActualizate = await response.json()
      setRefresh(investitiiActualizate)
    }
  }

  const updateProdus = () => {
    console.log('Id este : ', props.idInvestitie)
    window.location.reload(false)
    Axios.put('http://localhost:5000/api/animal/updateProdusPJ', {
      id: idProdusSelectat,
      nume: numeProdusSelectat,
      pret: pretProdusSelectat,
      producator: producatorProdusSelectat,
      cantitate: cantitateProdusSelectat,
    }).then((response) => {
      alert('update')
    })
  }

  return (
    <div>
      <select
        name='usertype'
        className='rounded w-52 p-1.5 text-white bg-green-700'
        onChange={(e) => handleshowhide(e)}
      >
        <option value=''>--PRODUS FOLOSIT--</option>
        <option value='1'>ADAUGA PRODUS</option>
        <option value='2'>AFISARE PRODUSE</option>
      </select>
      <div>
        {showhide === '1' && (
          <div>
            <div>
              <div className='flex flex-col '>
                <br />
                <div>
                  <Button
                    variant='contained'
                    color='success'
                    onClick={openModal}
                  >
                    + PRODUS
                  </Button>
                </div>
                <br />

                <Modal
                  isOpen={modalIsOpen}
                  onRequestClose={closeModal}
                  contentLabel='Exemplu Pagină Modală'
                >
                  <Box className='grid grid-cols-2 gap-4'>
                    <TextField
                      id='outlined-nume-input'
                      type='text'
                      label='Nume animal'
                      name='nume'
                      value={props.numeAnimal}
                    />
                    <TextField
                      id='outlined-nume-input'
                      type='text'
                      label='Nume investitie'
                      value={props.numeInvestitie}
                    />
                    <TextField
                      id='outlined-numeP-input'
                      type='text'
                      label='Nume produs'
                      name='nume_produs'
                      value={formValues.nume_produs}
                      onChange={handleInputChange}
                    />
                    <TextField
                      id='outlined-pretP-input'
                      type='text'
                      label='Pret produs'
                      name='pret_produs'
                      value={formValues.pret_produs}
                      onChange={handleInputChange}
                    />
                    <TextField
                      id='outlined-prod-input'
                      type='text'
                      label='Producator'
                      name='producator'
                      value={formValues.producator}
                      onChange={handleInputChange}
                    />
                    <TextField
                      id='outlined-cant-input'
                      type='text'
                      label='Cantitate'
                      name='cantitate'
                      value={formValues.cantitate}
                      onChange={handleInputChange}
                    />
                  </Box>

                  <div className='flex flex-col gap-8 my-7'>
                    <div>
                      <Button
                        variant='contained'
                        color='success'
                        onClick={() => responseP()}
                      >
                        SALVEAZĂ
                      </Button>
                    </div>
                    <div>
                      <Button
                        variant='contained'
                        color='secondary'
                        onClick={closeModal}
                      >
                        INCHIDE
                      </Button>
                    </div>
                  </div>
                </Modal>
              </div>
            </div>
          </div>
        )}
      </div>
      <div>
        {showhide === '2' && (
          <div>
            <div className='flex flex-col '>
              <br />
              <div>
                {produsFolosit.map((produseFolosite) => (
                  <div
                    key={produseFolosite.id_produs_folosit}
                    onClick={() => handleClick(produseFolosite)}
                  >
                    <div
                      className='border p-3 bg-orange-100 hover:border-2 hover:border-black'
                      onClick={selectClick}
                    >
                      <p className='border-b-2 border-black mt-2'>
                        <strong className='font-bold'>Nume produs:</strong>{' '}
                        {produseFolosite.nume}
                      </p>
                      <p className='border-b-2 border-black mt-2'>
                        <strong className='font-bold'>Pret produs:</strong>{' '}
                        {produseFolosite.pret}
                      </p>
                      <p className='border-b-2 border-black mt-2'>
                        <strong className='font-bold'>Producator:</strong>{' '}
                        {produseFolosite.producator}
                      </p>
                      <p className='border-b-2 border-black mt-2'>
                        <strong className='font-bold'>Cantitate:</strong>{' '}
                        {produseFolosite.cantitate}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <br />

      <div>
        {isShown && showhide === '2' && (
          <div className='flex flex-row gap-4'>
            <div>
              <Button
                variant='contained'
                color='error'
                onClick={() => {
                  console.log('Id', idProdusSelectat)
                  deletHandle(idProdusSelectat)
                }}
              >
                STERGE
              </Button>
            </div>
            <div>
              <Button
                variant='contained'
                color='secondary'
                onClick={openModalEdit}
              >
                EDITEAZA
              </Button>
              <Modal
                isOpen={modalIsOpenEdit}
                onRequestClose={closeModalEdit}
                contentLabel='Exemplu Pagină Modală'
              >
                <div>
                  <Box className='flex flex-row gap-5 mt-14'>
                    <TextField
                      id='outlined-nume-input'
                      label='Nume'
                      type='text'
                      name='nume'
                      required='required'
                      defaultValue={numeProdusSelectat}
                      onChange={(event) => {
                        setNumeProdusSelectat(event.target.value)
                      }}
                    />
                    <TextField
                      id='outlined-pret-input'
                      label='Pret'
                      type='text'
                      name='pret'
                      required='required'
                      defaultValue={pretProdusSelectat}
                      onChange={(event) => {
                        setPretProdusSelectat(event.target.value)
                      }}
                    />
                    <TextField
                      id='outlined-producator-input'
                      label='Producator'
                      type='text'
                      name='producator'
                      required='required'
                      defaultValue={producatorProdusSelectat}
                      onChange={(event) => {
                        setProducatorProdusSelectat(event.target.value)
                      }}
                    />
                    <TextField
                      id='outlined-cantitate-input'
                      label='Cantitate'
                      type='text'
                      name='cantitate'
                      required='required'
                      defaultValue={cantitateProdusSelectat}
                      onChange={(event) => {
                        setCantitateProdusSelectat(event.target.value)
                      }}
                    />
                  </Box>
                </div>
                <div className='flex flex-col gap-8 my-7'>
                  <div>
                    <Button
                      variant='contained'
                      color='success'
                      onClick={updateProdus}
                    >
                      SALVEAZĂ
                    </Button>
                  </div>
                  <div>
                    <Button
                      variant='contained'
                      color='secondary'
                      onClick={closeModalEdit}
                    >
                      INCHIDE
                    </Button>
                  </div>
                </div>
              </Modal>
            </div>
          </div>
        )}
        <br />
      </div>
      <ToastContainer />
    </div>
  )
}
export default ProdusFolositAnimalPJ
