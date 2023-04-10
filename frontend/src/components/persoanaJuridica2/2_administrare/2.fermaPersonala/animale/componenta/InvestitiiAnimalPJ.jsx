import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'
import { Button, TextField, Box } from '@mui/material'
import { useInsertInvestitieAnimalPJ } from '../../../../../../hooks/useInsertInvestitieAnimalPJ'
import ProdusFolositAnimalPJ from './ProdusFolositAnimalPJ'
import Axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

Modal.setAppElement('#root') // setează elementul principal al aplicației React

const defaultValues = {
  nume_investitie: '',
  pret_estimat: '',
  pret_final: '',
  data_investitie: '',
  detalii: '',
}

const InvestitiiAnimalPJ = (props) => {
  const [showhide, setShowhide] = useState('')
  const handleshowhide = (event) => {
    const getuser = event.target.value
    setShowhide(getuser)
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

  const [isShown, setIsShown] = useState(false)
  const selectClick = (event) => {
    // 👇️ toggle shown state
    setIsShown((current) => !current)
  }

  const [idInvestitieSelectata, setIdInvestitieSelectata] = useState(0)
  const [numeInvestitieSelectata, setNumeInvestitieSelectata] = useState('')
  const [pretEstimatInvestitieSelectata, setPretEstimatInvestitieSelectata] =
    useState('')
  const [pretFinalInvestitieSelectata, setPretFinalInvestitieSelectata] =
    useState('')
  const [dataInvestitieSelectata, setDataInvestitieSelectata] = useState('')
  const [detaliiInvestitieSelectata, setDetaliiInvestitieSelectata] =
    useState('')

  function handleClick(investitie) {
    setIdInvestitieSelectata(investitie.id_investitie)
    setNumeInvestitieSelectata(investitie.nume)
    setPretEstimatInvestitieSelectata(investitie.pret_estimat)
    setPretFinalInvestitieSelectata(investitie.pret_final)
    setDataInvestitieSelectata(investitie.data_investitie)
    setDetaliiInvestitieSelectata(investitie.detalii)
  }

  const [formValues, setFormValues] = useState(defaultValues)
  const responseI = useInsertInvestitieAnimalPJ({
    url: 'http://localhost:5000/api/animal/insertInvestitieAnimalPJ/',
    insertData: {
      id: props.id,
      nume_investitie: formValues.nume_investitie,
      domeniul: 'animal',
      pret_estimat: formValues.pret_estimat,
      pret_final: formValues.pret_final,
      data_investitie: formValues.data_investitie,
      detalii: formValues.detalii,
    },
  })
  const [refresh, setRefresh] = useState('')
  const [investitii, setInvestitii] = useState([])
  useEffect(() => {
    console.log('id-ul anumalului este= ', props.id)
    async function fetchData() {
      const response = await fetch(
        `http://localhost:5000/api/animal/getInvestitieAnimalePJ/${props.id}`
      )
      const data = await response.json()
      setInvestitii(data)
    }
    fetchData()
  }, [props.id])

  if (!investitii) {
    return <div>Loading...</div>
  }

  const deletHandle = async () => {
    try {
      Axios.delete(
        `http://localhost:5000/api/animal/deleteInvestitiePJ/${idInvestitieSelectata}`
      )
    } catch (error) {
      toast('Investitia nu a putut fi sters')
    } finally {
      //toast('Investitia a fost stearsa cu succes!')
      const response = await fetch(
        `http://localhost:5000/api/animal/getInvestitieAnimalePJ/${props.id}`
      )
      const investitiiActualizate = await response.json()
      setRefresh(investitiiActualizate)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  const updateinvestitie = () => {
    console.log('Id este : ', idInvestitieSelectata)
    window.location.reload(false)
    Axios.put('http://localhost:5000/api/animal/updateInvestitiePJ', {
      id: idInvestitieSelectata,
      nume_investitie: numeInvestitieSelectata,
      pret_estimat: pretEstimatInvestitieSelectata,
      pret_final: pretFinalInvestitieSelectata,
      data_investitie: dataInvestitieSelectata,
      detalii: detaliiInvestitieSelectata,
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
        <option value=''>--INVESTITII ANIMAL--</option>
        <option value='1'>ADAUGA INVESTITIE</option>
        <option value='2'>AFISARE INVESTITII</option>
      </select>
      <div>
        {showhide === '' && (
          <div>
            <div className='flex flex-col '>
              <div className='border-b-2 border-black mt-2'>
                <label className='font-bold'>Nume animal: </label>
                <h1 className='mt-2 text-lg mx-5'>{props.nume}</h1>
              </div>

              <div className='border-b-2 border-black mt-2'>
                <label className='font-bold'>Locatia: </label>
                <h1 className='mt-2 text-lg mx-5'>{props.locatie}</h1>
              </div>

              <div className='border-b-2 border-black mt-2'>
                <label className='font-bold'>Detalii: </label>
                <h1 className='mt-2 text-lg mx-5'>{props.detalii}</h1>
              </div>
            </div>
          </div>
        )}
      </div>

      <div>
        {showhide === '1' && showhide !== '2' && (
          <div>
            <div className='flex flex-col '>
              <div className='border-b-2 border-black mt-2'>
                <label className='font-bold'>Nume animal: </label>
                <h1 className='mt-2 text-lg mx-5'>{props.nume}</h1>
              </div>
            </div>
            <br />
            <div>
              <div>
                <Button variant='contained' color='success' onClick={openModal}>
                  + INVESTITIE
                </Button>
                <div>
                  <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel='Exemplu Pagină Modală'
                  >
                    <div>
                      <Box className='grid grid-cols-2 gap-4'>
                        <TextField
                          id='outlined-nume-input'
                          type='text'
                          label='Nume animal'
                          name='nume'
                          value={props.nume}
                        />
                        <TextField
                          id='outlined-numeI-input'
                          type='text'
                          label='Nume investitie'
                          name='nume_investitie'
                          value={formValues.nume_investitie}
                          onChange={handleInputChange}
                        />
                        <TextField
                          id='outlined-pretE-input'
                          type='text'
                          label='Pret estimat'
                          name='pret_estimat'
                          value={formValues.pret_estimat}
                          onChange={handleInputChange}
                        />
                        <TextField
                          id='outlined-pretF-input'
                          type='text'
                          label='Pret final'
                          name='pret_final'
                          value={formValues.pret_final}
                          onChange={handleInputChange}
                        />
                        <TextField
                          id='outlined-data-input'
                          type='text'
                          label='Data investitiei'
                          name='data_investitie'
                          value={formValues.data_investitie}
                          onChange={handleInputChange}
                        />
                        <TextField
                          id='outlined-detalii-input'
                          type='text'
                          label='Detalii'
                          name='detalii'
                          value={formValues.detalii}
                          onChange={handleInputChange}
                        />
                      </Box>
                    </div>
                    <div className='flex flex-col gap-8 my-7'>
                      <div>
                        <Button
                          variant='contained'
                          color='success'
                          onClick={() => responseI()}
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
          </div>
        )}
      </div>
      <div>
        {showhide === '2' && (
          <div>
            <div className='flex flex-col '>
              <div className='border-b-2 border-black mt-2'>
                <label className='font-bold'>Nume animal: </label>
                <h1 className='mt-2 text-lg mx-5'>{props.nume}</h1>
              </div>
              <div>
                {investitii.map((investitie) => (
                  <div
                    key={investitie.id_investitie}
                    onClick={() => handleClick(investitie)}
                  >
                    <br />
                    <div>
                      <div
                        className='border p-3 bg-red-100 hover:border-2 hover:border-black'
                        onClick={selectClick}
                      >
                        <p className='border-b-2 border-black mt-2'>
                          <strong className='font-bold'>
                            Nume investitie:
                          </strong>{' '}
                          {investitie.nume}
                        </p>
                        <p className='border-b-2 border-black mt-2'>
                          <strong className='font-bold'>Pret estimat:</strong>{' '}
                          {investitie.pret_estimat}
                        </p>
                        <p className='border-b-2 border-black mt-2'>
                          <strong className='font-bold'>Pret final:</strong>{' '}
                          {investitie.pret_final}
                        </p>
                        <p className='border-b-2 border-black mt-2'>
                          <strong className='font-bold'>
                            Data investitiei:
                          </strong>{' '}
                          {investitie.data_investitie}
                        </p>
                        <p className='border-b-2 border-black mt-2'>
                          <strong className='font-bold'>
                            Detalii investitie:
                          </strong>{' '}
                          {investitie.detalii}
                        </p>
                        <br />
                      </div>
                    </div>
                    <br />
                    {isShown &&
                      investitie.id_investitie === idInvestitieSelectata && (
                        <div>
                          <div>
                            <div className='flex flex-row gap-4'>
                              <div>
                                <Button
                                  variant='contained'
                                  color='error'
                                  onClick={() => {
                                    deletHandle(idInvestitieSelectata)
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
                                        name='nume_investitie'
                                        required='required'
                                        defaultValue={numeInvestitieSelectata}
                                        onChange={(event) => {
                                          setNumeInvestitieSelectata(
                                            event.target.value
                                          )
                                        }}
                                      />
                                      <TextField
                                        id='outlined-nume-input'
                                        label='Nume'
                                        type='text'
                                        name='pret_estimat'
                                        required='required'
                                        defaultValue={
                                          pretEstimatInvestitieSelectata
                                        }
                                        onChange={(event) => {
                                          setPretEstimatInvestitieSelectata(
                                            event.target.value
                                          )
                                        }}
                                      />
                                      <TextField
                                        id='outlined-nume-input'
                                        label='Nume'
                                        type='text'
                                        name='pret_final'
                                        required='required'
                                        defaultValue={
                                          pretFinalInvestitieSelectata
                                        }
                                        onChange={(event) => {
                                          setPretFinalInvestitieSelectata(
                                            event.target.value
                                          )
                                        }}
                                      />
                                      <TextField
                                        id='outlined-nume-input'
                                        label='Nume'
                                        type='text'
                                        name='data_investitie'
                                        required='required'
                                        defaultValue={dataInvestitieSelectata}
                                        onChange={(event) => {
                                          setDataInvestitieSelectata(
                                            event.target.value
                                          )
                                        }}
                                      />
                                      <TextField
                                        id='outlined-nume-input'
                                        label='Nume'
                                        type='text'
                                        name='detalii'
                                        required='required'
                                        defaultValue={
                                          detaliiInvestitieSelectata
                                        }
                                        onChange={(event) => {
                                          setDetaliiInvestitieSelectata(
                                            event.target.value
                                          )
                                        }}
                                      />
                                    </Box>
                                  </div>
                                  <div className='flex flex-col gap-8 my-7'>
                                    <div>
                                      <Button
                                        variant='contained'
                                        color='success'
                                        onClick={updateinvestitie}
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
                            <br />
                            <div>
                              <ProdusFolositAnimalPJ
                                numeAnimal={props.nume}
                                idInvestitie={idInvestitieSelectata}
                                numeInvestitie={numeInvestitieSelectata}
                              />
                            </div>
                          </div>
                        </div>
                      )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
export default InvestitiiAnimalPJ
