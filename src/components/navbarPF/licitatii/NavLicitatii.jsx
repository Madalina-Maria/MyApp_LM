import React from 'react'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import HomeIcon from '@mui/icons-material/Home'
import { Link } from 'react-router-dom'
import { Box } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from '@mui/material/styles'
import AgricultureIcon from '@mui/icons-material/Agriculture'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'
import UpdateIcon from '@mui/icons-material/Update'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import LocalOfferIcon from '@mui/icons-material/LocalOffer'
import { Cauta } from './Cauta'
import { AjutorModal } from './AjutorModal'

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
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            maxwidth: 1500,
            backgroundColor: 'primary',
          }}
        >
          <BottomNavigation
            className='text-xs font-bold '
            sx={{
              bgcolor: 'primary.main',
              justifyContent: 'space-between',
            }}
            showLabels
          >
            <BottomNavigationAction
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
              component={Link}
              to='/licitatiiPf'
              label='LICITAȚII'
              value='text'
              icon={<LocalOfferIcon />}
            />

            <BottomNavigationAction
              component={Link}
              to='/licitatiiincursPf'
              label='LICITAȚII ACTIVE'
              value='text'
              icon={<NotificationsActiveIcon />}
            />

            <BottomNavigationAction
              component={Link}
              to='/licitatiiviitoarePf'
              label='LICITAȚII VIITOARE'
              value='text'
              icon={<UpdateIcon />}
            />

            <BottomNavigationAction
              component={Link}
              to='/rezultatelicitatiiPf'
              label='REZULTATE '
              value='text'
              icon={<CheckCircleIcon />}
            />
            <Cauta />
            <AjutorModal />
          </BottomNavigation>
        </Box>
        <Box sx={{ width: 600, backgroundColor: 'primary.main' }}></Box>
      </ThemeProvider>
    </div>
  )
}
export default NavLicitatii
