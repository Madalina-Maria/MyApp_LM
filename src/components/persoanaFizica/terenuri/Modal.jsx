import React, { useState } from 'react'
import './Modal.css'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

const Modal = () => {
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }

  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <div>
      {' '}
      <button onClick={toggleModal} className='btn-modal'>
        + ADAUGA TEREN
      </button>
      {modal && (
        <div className='modal'>
          <div onClick={toggleModal} className='overlay'></div>
          <div className='modal-content my-10'>
            <Box className='flex flex-col w-96'>
              <TextField
                id='outlined-nume-input'
                label='Nume teren'
                type='text'
              />
              <br />
              <TextField
                id='outlined-tip-input'
                label='Tipul terenului'
                type='text'
              />
              <br />
              <TextField
                id='outlined-sup-input'
                label='Suprafata'
                type='text'
              />
              <br />
              <TextField
                id='outlined-loc-input'
                label='Localizare pe harta'
                type='text'
              />
              <br />
              <TextField
                id='outlined-fer-input'
                label='Fermierul care se ocupa de teren'
                type='text'
              />
              <br />
              <TextField
                id='outlined-luc-input'
                label='Stadiul lucrarii'
                type='text'
              />
              <br />
              <TextField id='outlined-fac-input' label='Facturi' type='text' />
              <button className='close-modal' onClick={toggleModal}>
                ADAUGĂ
              </button>
            </Box>
          </div>
        </div>
      )}
    </div>
  )
}
export default Modal
