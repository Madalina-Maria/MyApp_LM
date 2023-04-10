import React, { useState } from 'react'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import HelpIcon from '@mui/icons-material/Help'
import SearchIcon from '@mui/icons-material/Search'

export const AjutorModalLicitatiiPJ = () => {
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
              <p>
                Pe pagina "LICITAȚIILE MELE" se vor afișa în ordinea apariției
                lor, licitațiile postate/create de dumneavoastră.
              </p>
              <br />
              <p>
                Pe pagina "LICITAȚII" se vor afișa în ordinea apariției lor,
                licitațiile existente.
              </p>
              <br />
              <p>
                Pentru a vedea doar licitațiile active sau în curs mergeți la
                secțiunea "LICITAȚII ACTIVE".
              </p>
              <br />
              <p>
                Dacă doriți să vedeți ce licitații vor fi disponibile puteți
                accesa secțiunea "LICITAȚII VIITOARE". Odată pornită o licitație
                din această secțiune o veți găsi pe pagina "LICITAȚII ACTIVE".
              </p>
              <br />
              <p>
                Ați licitat? Vreți să vedeți rezultatul licitației? Nicio
                problemă, găsiți totul pe pagina "REZULTATE".
              </p>
              <br />

              <p>
                Pentru a căuta o licitație anume puteți folosi bara de căutare.
                Trebuie doar să faceți click in bara de cautare, scrieți numele
                licitației si apăsați butonul <SearchIcon />
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
