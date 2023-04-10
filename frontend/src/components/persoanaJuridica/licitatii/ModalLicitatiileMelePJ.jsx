import React, { useState } from 'react'
import Modal from 'react-modal'
import Box from '@mui/material/Box'
import { Button } from '@mui/material'
import TextField from '@mui/material/TextField'
import { useInsertLicitatie } from '../../../hooks/useInsertLicitatie'

Modal.setAppElement('#root') // setează elementul principal al aplicației React

const defaultValues = {
  nume: '',
  descriere: '',
  pret_pornire: '',
  data_incepere: '',
  data_finalizare: '',
}

const ModalLicitatiileMelePJ = () => {
  const userVal = localStorage.getItem('user_id')
  console.log('user este : ', userVal)
  const [modalIsOpen, setModalIsOpen] = useState(false) // creează o stare pentru a controla afișarea paginii modale

  const openModal = () => {
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  const [formValues, setFormValues] = useState(defaultValues)
  const response = useInsertLicitatie({
    url: 'http://localhost:5000/api/licitatie/insertlicitatii',
    insertData: {
      id: userVal,
      nume: formValues.nume,
      descriere: formValues.descriere,
      pret_pornire: formValues.pret_pornire,
      data_incepere: formValues.data_incepere,
      data_finalizare: formValues.data_finalizare,
    },
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  return (
    <div>
      <Button onClick={openModal} className='btn-modal'>
        + ADAUGA LICITATIE
      </Button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel='Exemplu Pagină Modală'
      >
        <Box className='grid grid-cols-2 gap-4'>
          <TextField
            id='outlined-nume-input'
            placeholder='Nume licitatie'
            type='text'
            name='nume'
            value={formValues.nume}
            onChange={handleInputChange}
          />

          <TextField
            id='outlined-tip-input'
            placeholder='Descriere'
            type='text'
            name='descriere'
            value={formValues.descriere}
            onChange={handleInputChange}
          />

          <TextField
            id='outlined-cat-input'
            placeholder='Pret de pornire'
            type='text'
            name='pret_pornire'
            value={formValues.pret_pornire}
            onChange={handleInputChange}
          />

          <TextField
            id='outlined-loc-input'
            placeholder='Data de incepere'
            type='text'
            name='data_incepere'
            value={formValues.data_incepere}
            onChange={handleInputChange}
          />

          <TextField
            id='outlined-detalii-input'
            placeholder='Data de finalizare'
            type='text'
            name='data_finalizare'
            value={formValues.data_finalizare}
            onChange={handleInputChange}
          />
        </Box>
        <div className='flex flex-col gap-8 my-7'>
          <div>
            <Button
              variant='contained'
              color='success'
              onClick={() => response()}
            >
              ADAUGĂ
            </Button>
          </div>
          <div>
            <Button variant='contained' color='secondary' onClick={closeModal}>
              INCHIDE
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
export default ModalLicitatiileMelePJ
