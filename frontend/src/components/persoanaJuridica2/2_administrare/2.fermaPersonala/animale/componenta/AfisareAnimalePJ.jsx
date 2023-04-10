import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'
import { Button, TextField, Box } from '@mui/material'
import Axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useInsertInvestitieAnimalPJ } from '../../../../../../hooks/useInsertInvestitieAnimalPJ'
import { useInsertProdusAnimalPJ } from '../../../../../../hooks/useInsertProdusAnimalPJ'
import InvestitiiAnimalPJ from './InvestitiiAnimalPJ'
import { useNavigate } from 'react-router-dom'

Modal.setAppElement('#root') // setează elementul principal al aplicației React

const AfisareAnimalePJ = (props) => {
  const navigate = useNavigate()
  const [id, setId] = useState(0)
  const [nume, setNume] = useState('')
  const [locatie, setLocatie] = useState('')
  const [detalii, setDetalii] = useState('')

  useEffect(() => {
    console.log('PRops.id =' + props.animal.id_animal)
    setId(props.animal.id_animal)
    setNume(props.animal.nume)
    setLocatie(props.animal.adresa_locatia)
    setDetalii(props.animal.detalii)
  }, [
    props.animal.id_animal,
    props.animal.nume,
    props.animal.adresa_locatia,
    props.animal.detalii,
  ])

  const [modalIsOpen, setModalIsOpen] = useState(false) // creează o stare pentru a controla afișarea paginii modale
  const openModal = () => {
    setModalIsOpen(true)
  }
  const closeModal = () => {
    setModalIsOpen(false)
  }

  const updateAnimal = () => {
    console.log('Id este : ', id)
    window.location.reload(false)
    Axios.put('http://localhost:5000/api/animal/updateAnimalPJ', {
      id: id,
      nume: nume,
      locatie: locatie,
      detalii: detalii,
    }).then((response) => {
      alert('update')
    })
  }
  const [refresh, setRefresh] = useState('')
  const deletHandle = async (altId) => {
    try {
      Axios.delete(`http://localhost:5000/api/animal/deleteAnimalPJ/${altId}`)
    } catch (error) {
      toast('Animalul nu a putut fi sters')
    } finally {
      //toast('Animalul a fost sters cu succes!')
      const response = await fetch(
        'http://localhost:5000/api/animal/getAllAnimalePJ'
      )
      const animaleActualizate = await response.json()
      props.setDatae(animaleActualizate)
      setRefresh('d')
    }
  }

  return (
    <div>
      <div>
        <div>
          <h1 className='font-bold text-lg text-blue-700 mb-5'>
            Afisare animal
          </h1>
        </div>

        <div className='flex flex-row gap-2'>
          <div>
            <InvestitiiAnimalPJ
              id={id}
              nume={nume}
              locatie={locatie}
              detalii={detalii}
            />
          </div>
          <div>
            <Button variant='contained' color='secondary' onClick={openModal}>
              EDITEAZĂ
            </Button>
            <div>
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel='Exemplu Pagină Modală'
              >
                <Box className='grid grid-cols-2 gap-4'>
                  <TextField
                    id='outlined-nume-input'
                    type='text'
                    name='nume'
                    required='required'
                    defaultValue={nume}
                    onChange={(event) => {
                      setNume(event.target.value)
                    }}
                  />
                  <TextField
                    id='outlined-sup-input'
                    name='locatie'
                    required='required'
                    defaultValue={locatie}
                    onChange={(event) => {
                      setLocatie(event.target.value)
                    }}
                  />
                  <TextField
                    id='outlined-lung-input'
                    name='detalii'
                    required='required'
                    defaultValue={detalii}
                    onChange={(event) => {
                      setDetalii(event.target.value)
                    }}
                  />
                </Box>
                <div className='flex flex-col gap-8 my-7'>
                  <div>
                    <Button
                      variant='contained'
                      color='success'
                      onClick={updateAnimal}
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
          <div>
            <Button
              variant='contained'
              color='error'
              onClick={() => {
                deletHandle(id)
              }}
            >
              ȘTERGE
            </Button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}
export default AfisareAnimalePJ
