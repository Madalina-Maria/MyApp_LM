import React, { useState } from 'react'
import './StyleCereriModal.css'
import TextField from '@mui/material/TextField'
import FormHelperText from '@mui/material/FormHelperText'
import { FormControl } from '@mui/material'
import OutlinedInput from '@mui/material/OutlinedInput'

const CereriModal = () => {
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
        + ADAUGA CERERE
      </button>
      {modal && (
        <div className='modal'>
          <div onClick={toggleModal} className='overlay'></div>
          <div className='modal-content'>
            <div className='grid grid-cols-2 gap-4'>
              <TextField
                id='outlined-numec-input'
                label='Nume cerere'
                type='text'
              />
              <br />

              <label>Date personale:</label>
              <label></label>
              <TextField id='outlined-nume-input' label='Nume' type='text' />
              <TextField
                id='outlined-prenume-input'
                label='Prenume'
                type='text'
              />
              <TextField
                id='outlined-adresa-input'
                label='Adresa'
                type='text'
              />
              <TextField
                id='outlined-telefon-input'
                label='Număr de telefon'
                type='tel'
              />
              <TextField
                id='outlined-email-input'
                label='Email'
                type='email'
                autoComplete='email'
              />
              <label></label>
              <label>Date despre cerere:</label>
              <label></label>
              <TextField
                id='outlined-denumire-input'
                label='Denumire produs'
                type='text'
              />
              <TextField
                id='outlined-categoria-input'
                label='Categoria'
                type='text'
              />
              <TextField
                id='outlined-cantitatea-input'
                label='Cantitatea'
                type='text'
              />
              <TextField id='outlined-tip-input' label='Tipul' type='text' />
              <TextField
                id='outlined-detalii-input'
                label='Detalii'
                type='text'
              />
              <TextField
                id='outlined-buget-input'
                label='Bugetul alocat'
                type='text'
              />
              <FormControl>
                <OutlinedInput
                  id='outlined-dataA-input'
                  placeholder='Data'
                  type='date'
                />
                <FormHelperText id='component-helper-text'>
                  Data postarii
                </FormHelperText>
              </FormControl>
            </div>
            <button
              className='text-white bg-black px-14 py-3 my-5 mx-36 '
              onClick={toggleModal}
            >
              ADAUGĂ
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
export default CereriModal
