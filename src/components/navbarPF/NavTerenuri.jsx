import React, { useState } from 'react'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import HomeIcon from '@mui/icons-material/Home'
import { Link } from 'react-router-dom'
import { Box } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from '@mui/material/styles'
import AgricultureIcon from '@mui/icons-material/Agriculture'
import HelpIcon from '@mui/icons-material/Help'
import LogoutIcon from '@mui/icons-material/Logout'
import './StyleNavTerenuri.css'

const theme = createTheme({
  palette: {
    primary: {
      main: '#e8eaf6',
    },
    secondary: {
      main: '#e8eaf6',
    },
  },
})

const NavTerenuri = () => {
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
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            maxwidth: 1500,
            backgroundColor: 'primary',
          }}
        >
          <BottomNavigation
            className='text-xl font-bold'
            sx={{
              bgcolor: 'primary.main',
              justifyContent: 'space-between',
            }}
            showLabels
          >
            <BottomNavigationAction
              className='font-bold text-black'
              component={Link}
              to='/'
              label='S.I.G.L.A.'
              value='Home'
              icon={<AgricultureIcon />}
            />

            <BottomNavigationAction
              component={Link}
              to='/homePf'
              label='ACASĂ'
              value='Home'
              icon={<HomeIcon />}
            />

            <BottomNavigationAction
              label='AJUTOR'
              value='text'
              onClick={toggleModal}
              icon={<HelpIcon />}
            />
            <BottomNavigationAction
              component={Link}
              to='/'
              label='DECONECTARE'
              value='text'
              icon={<LogoutIcon />}
            />
          </BottomNavigation>
        </Box>
        <Box sx={{ width: 700, backgroundColor: 'primary.main' }}></Box>
      </ThemeProvider>
      {modal && (
        <div className='modal'>
          <div onClick={toggleModal} className='overlay'></div>
          <div className='content'>
            <Box>
              <div className='text-justify'>
                <p>
                  Pentru a adăuga un teren nou trebuie doar să dați click pe
                  butonul{' '}
                  <b>
                    <em>"ADAUGĂ TEREN"</em>
                  </b>{' '}
                  de pe pagina principală.
                </p>
                <br />
                <p>
                  <u>După ce ați dat click pe buton</u> se va deschide o pagină
                  unde va trebui să adăugați câteva date despre acel teren și să
                  apasți pe butonul de{' '}
                  <b>
                    <em> "TRIMITE".</em>
                  </b>{' '}
                </p>
                <br />
                <p>
                  Dacă datele introduse sunt corecte terenul va fi adugat pe
                  pagină.
                  <br />
                  <strong>
                    În cazul în care nu ați introdus ceva corect veți primi un
                    mesaj cu privire la datele introduse greșit pentru a le pute
                    corecta.
                  </strong>
                </p>
                <br />
                <p>
                  Pe pagina{' '}
                  <b>
                    <em> "TERENURILE MELE"</em>
                  </b>{' '}
                  sunt terenurile adăugate de dumneavoastră.
                </p>
                <br />
                <p>
                  <u>Pentru a vedea detalii despre fiecare teren </u> trebuie
                  doar să dați <strong>click pe numele terenului.</strong>
                </p>
                <br />
                <p>
                  <u>După ce ați apăsat click pe numele terenului</u>, în partea
                  <em> dreaptă</em>, pe pagină, vor apărea{' '}
                  <strong>detaliile despre acel teren.</strong>
                </p>
              </div>

              <button className='close-btn' onClick={toggleModal}>
                ÎNCHIDE
              </button>
            </Box>
          </div>
        </div>
      )}
    </div>
  )
}
export default NavTerenuri
