import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Modal from 'react-modal'
import Box from '@mui/material/Box'
import { Button } from '@mui/material'
import { useInsertAnimalPJ } from '../../../../../../hooks/useInsertAnimalPJ'

Modal.setAppElement('#root') // setează elementul principal al aplicației React

const defaultValues = {
  nume: '',
  tip: '',
  categorie: '',
  locatia: '',
  detalii: '',
}

const ModalAnimalePJ = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false) // creează o stare pentru a controla afișarea paginii modale

  const openModal = () => {
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  const [formValues, setFormValues] = useState(defaultValues)
  const response = useInsertAnimalPJ({
    url: 'http://localhost:5000/api/animal/insertAnimalPJ',
    insertData: {
      domeniul: 'animal',
      nume: formValues.nume,
      tip: formValues.tip,
      categorie: formValues.categorie,
      locatia: formValues.locatia,
      detalii: formValues.detalii,
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
      <div className='mx-10 my-16'>
        <button onClick={openModal} className='btn-modal'>
          + ADAUGA ANIMAL
        </button>
      </div>
      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel='Exemplu Pagină Modală'
        >
          <Box className='grid grid-cols-2 gap-4'>
            <TextField
              id='outlined-nume-input'
              label='Nume animal'
              type='text'
              name='nume'
              value={formValues.nume}
              onChange={handleInputChange}
            />

            <TextField
              id='outlined-tip-input'
              label='Tipul animalului'
              type='text'
              name='tip'
              value={formValues.tip}
              onChange={handleInputChange}
            />

            <TextField
              id='outlined-cat-input'
              label='Categorie animal'
              type='text'
              name='categorie'
              value={formValues.categorie}
              onChange={handleInputChange}
            />

            <TextField
              id='outlined-loc-input'
              label='Locatia'
              type='text'
              name='locatia'
              value={formValues.locatia}
              onChange={handleInputChange}
            />

            <TextField
              id='outlined-detalii-input'
              label='Detalii despre animal'
              type='text'
              name='detalii'
              value={formValues.detalii}
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
  )
}
export default ModalAnimalePJ
