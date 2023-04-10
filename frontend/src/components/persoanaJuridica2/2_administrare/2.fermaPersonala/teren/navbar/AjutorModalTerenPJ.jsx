import React, { useState } from 'react'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import HelpIcon from '@mui/icons-material/Help'
import './StyleAjutorModalTerenPJ.css'

export const AjutorModalTerenPJ = () => {
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
      <BottomNavigation
        className='text-xs font-bold '
        sx={{
          bgcolor: 'primary.main',
          justifyContent: 'space-between',
        }}
        showLabels
      >
        <BottomNavigationAction
          label='AJUTOR'
          value='text'
          onClick={toggleModal}
          icon={<HelpIcon />}
        />
      </BottomNavigation>
      {''}
      {modal && (
        <div className='modal'>
          <div onClick={toggleModal} className='overlay'></div>
          <div className='content1'>
            <div className='paragraf'>
              <br />
              <p>
                Pentru a adăuga un teren nou trebuie să apăsați butonul "ADAUGA
                TEREN". Odata apasat acest buton se va deschide un formular in
                care trebuie introduse unele date pentru a adauga un teren nou.
              </p>
              <br />
              <p>
                Dupa ce ati completat formularul apăsați pe butonul "ADAUGĂ".
              </p>
              <br />
              <p>
                Dacă datele introduse sunt corecte, terenul se va adăuga pe
                pagina "Terenuri". Dacă datele introduse sunt greșite se va
                trimite un mesaj de informare asupra datelor necorespunzătoare,
                în vederea corectării acestora.
              </p>
              <br />
              <p>
                În cazul în care aveți alte întrebări sau nelămuriri ne puteți
                lăsa un mesaj, apăsând pe butonul "ACASĂ" și accesând secțiunea
                "AJUTOR".
              </p>
              <br />
            </div>
            <button className='close-btn1' onClick={toggleModal}>
              ÎNCHIDE
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
