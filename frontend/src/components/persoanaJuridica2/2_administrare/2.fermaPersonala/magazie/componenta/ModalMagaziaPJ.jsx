import React, { useState } from 'react'
import '../../animale/componenta/ModalAnimalePJ'
import TextField from '@mui/material/TextField'

const ModalMagaziaPJ = () => {
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
        + ADAUGA PRODUS
      </button>
      {modal && (
        <div className='modal'>
          <div onClick={toggleModal} className='overlay'></div>
          <div className='modal-content'>
            <div className='grid grid-cols-2 gap-3 max-w-xl'>
              <TextField
                id='outlined-nume-input'
                label='Nume produs'
                type='text'
              />

              <TextField
                id='outlined-tip-input'
                label='Tipul produsului'
                type='text'
              />

              <TextField
                id='outlined-initial-input'
                label='Cantitatea initiala'
                type='text'
              />

              <TextField
                id='outlined-vanduta-input'
                label='Cantitatea vanduta'
                type='text'
              />

              <TextField
                id='outlined-folosita-input'
                label='Cantitatea folosita'
                type='text'
              />

              <TextField
                id='outlined-prezent-input'
                label='Cantitatea actuala'
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
export default ModalMagaziaPJ
