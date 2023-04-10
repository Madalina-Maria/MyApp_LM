import React, { useState } from 'react'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import HelpIcon from '@mui/icons-material/Help'
import './StyleAjutorModalAngajatiPJ.css'

const AjutorModalAngajatiPJ = () => {
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
                Pentru a vedea contractele active apăsați butonul "CONTRACTE".
              </p>
              <br />
              <p>
                Pentru a vedea informații despre angajati apăsați butonul
                "INFORMAȚII ANGAJAȚI".
              </p>
              <br />
              <p>
                Pentru a vedea sau a crea diverse statistici apăsați butonul
                "STATISTICI ".
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
export default AjutorModalAngajatiPJ
