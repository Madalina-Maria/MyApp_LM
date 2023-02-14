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
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'
import UpdateIcon from '@mui/icons-material/Update'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import SearchIcon from '@mui/icons-material/Search'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'

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

const NavLicitatii = () => {
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }

  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  const [value, setValue] = useState('')
  const onChange = (event) => {
    setValue(event.target.value)
  }
  const onSearch = (searchTerm) => {
    console.log('search ', searchTerm)
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
            <div>
              <TextField
                label='Caută licitații...'
                type={'text'}
                onChange={onChange}
                variant='outlined'
                value={value}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton
                        aria-label='search'
                        onClick={() => onSearch(value)}
                        edge='end'
                      >
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              ></TextField>
            </div>

            <BottomNavigationAction
              component={Link}
              to='/homePf'
              label='LICITAȚII ÎN CURS'
              value='text'
              icon={<NotificationsActiveIcon />}
            />

            <BottomNavigationAction
              component={Link}
              to='/homePf'
              label='LICITAȚII VIITOARE'
              value='text'
              icon={<UpdateIcon />}
            />

            <BottomNavigationAction
              component={Link}
              to='/homePf'
              label='REZULTATE LICITAȚII'
              value='text'
              icon={<CheckCircleIcon />}
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
                  butonul "ADAUGĂ TEREN" de pe pagina principală.
                </p>
                <p>
                  După ce ați dat click pe buton se va deschide o pagină unde va
                  trebui să adăugați câteva date despre acel teren și să apasți
                  pe butonul de "TRIMITE".
                </p>
                <p>
                  Dacă datele introduse sunt corecte terenul va fi adugat pe
                  pagină. În cazul în care nu ați introdus ceva corect veți
                  primi un mesaj cu privire la datele introduse greșit pentru a
                  le pute corecta.
                </p>
                <p>
                  Pe pagina "TERENURILE MELE" sunt terenurile adăugate de
                  dumneavoastră.
                </p>
                <p>
                  Pentru a vedea detalii despre fiecare teren trebuie doar să
                  dați click pe numele terenului.
                </p>
                <p>
                  După ce ați apăsat click pe numele terenului, în partea
                  dreaptă vor apărea detaliile despre acel teren.
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
export default NavLicitatii
