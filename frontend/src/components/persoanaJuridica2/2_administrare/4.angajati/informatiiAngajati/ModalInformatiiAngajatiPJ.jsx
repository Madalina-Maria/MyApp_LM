import React, { useState } from 'react'
import './StyleModalInformatiiAngajati.css'
import TextField from '@mui/material/TextField'
import FormHelperText from '@mui/material/FormHelperText'
import { FormControl } from '@mui/material'
import OutlinedInput from '@mui/material/OutlinedInput'

const ModalInformatiiAngajatiPJ = () => {
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
        + ADAUGA ANGAJAT
      </button>
      {modal && (
        <div className='modal'>
          <div onClick={toggleModal} className='overlay'></div>
          <div className='modal-content'>
            <div className='grid grid-cols-2 gap-3 max-w-xl'>
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

              <FormControl>
                <OutlinedInput
                  id='outlined-dataA-input'
                  placeholder='Data nasterii'
                  type='date'
                />
                <FormHelperText id='component-helper-text'>
                  Data nasterii
                </FormHelperText>
              </FormControl>

              <TextField id='outlined-cnp-input' label='CNP' type='text' />

              <TextField
                id='outlined-varsta-input'
                label='Varsta'
                type='text'
              />

              <TextField
                id='outlined-studii-input'
                label='Studii'
                type='text'
              />

              <TextField
                id='outlined-postul-input'
                label='Postul ocupat'
                type='text'
              />

              <TextField
                id='outlined-programul-input'
                label='Programul de lucru'
                type='text'
              />
              <FormControl>
                <OutlinedInput
                  id='outlined-dataA-input'
                  placeholder='Data angajarii'
                  type='date'
                />
                <FormHelperText id='component-helper-text'>
                  Data angajarii
                </FormHelperText>
              </FormControl>

              <TextField
                id='outlined-detalii-input'
                label='Alte detalii'
                type='text'
              />
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
export default ModalInformatiiAngajatiPJ
