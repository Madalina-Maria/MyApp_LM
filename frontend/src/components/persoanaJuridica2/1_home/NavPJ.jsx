import React from 'react'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import HomeIcon from '@mui/icons-material/Home'
import { Link } from 'react-router-dom'
import { Box } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from '@mui/material/styles'
import AgricultureIcon from '@mui/icons-material/Agriculture'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import PercentIcon from '@mui/icons-material/Percent'
import RequestPageIcon from '@mui/icons-material/RequestPage'
import LocalOfferIcon from '@mui/icons-material/LocalOffer'
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount'
import HelpIcon from '@mui/icons-material/Help'
import LogoutIcon from '@mui/icons-material/Logout'

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

const NavPJ = () => {
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
            className='text-xl font-bold'
            sx={{
              bgcolor: 'primary.main',
              justifyContent: 'left',
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
              to='/homePj'
              label='ACASĂ'
              value='Home'
              icon={<HomeIcon />}
            />

            <BottomNavigationAction
              component={Link}
              to='/administrarePj'
              label='ADMINISTRARE'
              value='text'
              icon={<SupervisorAccountIcon />}
            />
            <BottomNavigationAction
              component={Link}
              to='/licitatiilemelePj'
              label='LICITAȚIILE MELE'
              value='text'
              icon={<LocalOfferIcon />}
            />

            <BottomNavigationAction
              component={Link}
              to='/licitatiihome'
              label='LICITAȚii'
              value='text'
              icon={<LocalOfferIcon />}
            />

            <BottomNavigationAction
              component={Link}
              to='/ofertePj'
              label='OFERTE'
              value='text'
              icon={<PercentIcon />}
            />
            <BottomNavigationAction
              component={Link}
              to='/cereriPj'
              label='CERERI'
              value='text'
              icon={<RequestPageIcon />}
            />
            <BottomNavigationAction
              component={Link}
              to='/achizitiiPj'
              label='ACHIZIȚII'
              value='text'
              icon={<ShoppingCartIcon />}
            />
            <BottomNavigationAction
              component={Link}
              to='/ajutorPj'
              label='AJUTOR'
              value='text'
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
    </div>
  )
}

export default NavPJ
