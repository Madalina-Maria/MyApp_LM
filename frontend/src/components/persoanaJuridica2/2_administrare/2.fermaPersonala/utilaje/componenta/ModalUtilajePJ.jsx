import React, { useState } from 'react'
import '../../animale/componenta/ModalAnimalePJ'
import TextField from '@mui/material/TextField'

const ModalUtilajePJ = () => {
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
        + ADAUGA UTILAJ
      </button>
      {modal && (
        <div className='modal'>
          <div onClick={toggleModal} className='overlay'></div>
          <div className='modal-content'>
            <div className='grid grid-cols-2 gap-3 max-w-xl'>
              <TextField
                id='outlined-nume-input'
                label='Nume utilaj'
                type='text'
              />

              <TextField
                id='outlined-tip-input'
                label='Tipul utilajului'
                type='text'
              />

              <TextField
                id='outlined-nr-input'
                label='Numarul de utilaje'
                type='text'
              />
              <br />
              <label>Date:</label>
              <br />
              <TextField
                id='outlined-inmatriculare-input'
                label='Numarul de inmatriculare'
                type='text'
              />
              <TextField
                id='outlined-talon-input'
                label='Numar talon'
                type='text'
              />
              <TextField
                id='outlined-consum-input'
                label='Consum'
                type='text'
              />
              <TextField
                id='outlined-km-input'
                label='Numarul de km'
                type='text'
              />
              <TextField
                id='outlined-combustibil-input'
                label='Tip combustibil'
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
export default ModalUtilajePJ
