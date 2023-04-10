import React, { useState } from 'react'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import HelpIcon from '@mui/icons-material/Help'
import SearchIcon from '@mui/icons-material/Search'

export const AjutorModalOfertePJ = () => {
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
                Pe pagina "OFERTELE MELE" puteti adauga oferte despre diverse
                categorii.
              </p>
              <br />
              <p>
                Pe pagina "OFERTE" se vor afișa oferte despre diverse categorii.
              </p>
              <br />
              <p>
                Pentru a afișa oferte dintr-o anumită categorie trebuie
                selectată categoria dorită de la secțiunea "Alege categoria".
              </p>
              <br />
              <p>
                Dacă ați văzut o ofertă care v-a stârnit interesul o puteți
                adăuga la "FAVORITE", unde va rămâne salvată până cand vă veți
                hotărî în privința ei.
              </p>
              <br />
              <p>
                Dacă doriți detalii despre ofertă sau să achiziționați
                bunul/serviciul aflat la ofertă, puteți să vorbiți cu
                proprietarul ofertei. Conversațiile le găsiți salvate la
                secțiunea "CONVERSAȚII".
              </p>
              <br />
              <p>
                Pentru a căuta o ofertă anume puteți folosi bara de căutare.
                Trebuie doar să faceți click in bara de cautare, scrieți numele
                ofertei si apăsați butonul <SearchIcon />
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
