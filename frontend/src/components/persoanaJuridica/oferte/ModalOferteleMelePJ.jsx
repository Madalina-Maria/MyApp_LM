import React, { useState } from 'react'
import './StyleModalOferteleMelePJ.css'
import TextField from '@mui/material/TextField'
import FormHelperText from '@mui/material/FormHelperText'
import { FormControl } from '@mui/material'
import OutlinedInput from '@mui/material/OutlinedInput'

const ModalOferteleMelePJ = () => {
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
        + ADAUGA OFERTA
      </button>
      {modal && (
        <div className='modal'>
          <div onClick={toggleModal} className='overlay'></div>
          <div className='modal-content'>
            <div className='grid grid-cols-2 gap-3 max-w-xl'>
              <TextField
                id='outlined-nume-input'
                label='Nume oferta'
                type='text'
              />
              <TextField
                id='outlined-categorie-input'
                label='Categorie oferta'
                type='text'
              />
              <TextField
                id='outlined-cantitatea-input'
                label='Cantitatea'
                type='text'
              />
              <TextField id='outlined-pret-input' label='Pret  ' type='text' />
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

              <TextField
                id='outlined-descriere-input'
                label='Descriere '
                type='text'
              />
              <label>Detalii despre vanzator:</label>
              <br />
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
                label='Numar de telefon'
                type='text'
              />
              <TextField id='outlined-email-input' label='Email' type='email' />
            </div>
            <button
              className='text-white bg-black mx-52 mt-5 py-3 px-10'
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
export default ModalOferteleMelePJ
