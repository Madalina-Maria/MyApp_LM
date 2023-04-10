import React, { useState } from 'react'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import HelpIcon from '@mui/icons-material/Help'

export const AjutorModalCereriPJ = () => {
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
                Pe pagina "Cereri" se vor afișa în ordine cererile disponibile.
              </p>
              <br />
              <p>
                Pe pagina "Cererile mele" se vor afișa în ordine cererile
                adăugate de dumneavoastră.
              </p>
              <br />
              <p>
                Pentru a adăuga o cerere nouă trebuie să apăsați butonul "ADAUGĂ
                CERERE".
              </p>
              <br />
              <p>
                După ce butonul a fost apăsat, se va deschide un formular, în
                care trebuie trecute câteva date despre dumneavoastră și despre
                cererea pe care doriți să o faceți.{' '}
              </p>
              <br />
              <p>
                Odată completate câmpurile formularului apăsați pe butonul
                "ADAUGĂ".
              </p>
              <br />
              <p>
                Dacă datele introduse sunt corecte, cererea se va adăuga pe
                pagina "Cererile mele". Dacă datele introduse sunt greșite se va
                trimite un mesaj de informare asupra datelor necorespunzătoare,
                în vederea corectării acestora.
              </p>
              <br />

              <p>
                Înainte de a rezolva o cerere puteți conversa cu persoana care
                vă acceptă cererea pentru mai multe detalii. Conversațiile le
                găsiți salvate la secțiunea "CONVERSAȚII".
              </p>
              <br />
              <p>
                Ați făcut o cerere? Vreți să vedeți rezultatul cererii? Nicio
                problemă, găsiți totul pe pagina "REZULTATE".
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
