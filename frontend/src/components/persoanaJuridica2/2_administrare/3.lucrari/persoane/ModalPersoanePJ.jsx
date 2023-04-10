import React, { useState } from 'react'
import './StyleModalPersoanePJ.css'
import TextField from '@mui/material/TextField'

const ModalPersoanePJ = () => {
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
        + ADAUGA PERSOANA
      </button>
      {modal && (
        <div className='modal'>
          <div onClick={toggleModal} className='overlay'></div>
          <div className='modal-content'>
            <div className='grid grid-cols-2 gap-3 max-w-xl'>
              <label>Date persoane:</label>
              <br />
              <TextField id='outlined-nume-input' label='Nume' type='text' />

              <TextField
                id='outlined-prenume-input'
                label='Prenume'
                type='text'
              />

              <TextField
                id='outlined-nr-input'
                label='Numar de telefon'
                type='text'
              />

              <TextField id='outlined-email-input' label='Email' type='email' />

              <TextField
                id='outlined-adresa-input'
                label='Adresa'
                type='text'
              />
              <br />
              <label>Lucrări:</label>
              <br />
              <TextField
                id='outlined-tip-input'
                label='Tip teren'
                type='text'
              />

              <TextField
                id='outlined-sup-input'
                label='Suprafata'
                type='text'
              />

              <TextField
                id='outlined-localizare-input'
                label='Localizare'
                type='text'
              />

              <TextField
                id='outlined-lucrare-input'
                label='Tip lucrare'
                type='text'
              />

              <TextField
                id='outlined-produs-input'
                label='Produsul folosit'
                type='text'
              />
              <TextField
                id='outlined-incepere-input'
                label='Data de incepere a lucrarii'
                type='text'
              />
              <TextField
                id='outlined-finalizare-input'
                label='Data de finalizare a lucrarii'
                type='text'
              />
              <TextField
                id='outlined-status-input'
                label='Status lucrare'
                type='text'
              />
              <TextField
                id='outlined-plata-input'
                label='Total de plata'
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
export default ModalPersoanePJ
