import React from 'react'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import HomeIcon from '@mui/icons-material/Home'
import { Link } from 'react-router-dom'
import { Box } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from '@mui/material/styles'
import AgricultureIcon from '@mui/icons-material/Agriculture'
import AddIcon from '@mui/icons-material/Add'
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

const NavTerenuri = () => {
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
              justifyContent: 'space-evenly',
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
              component={Link}
              to='/terenuriPf'
              label='ADAUGĂ'
              value='text'
              icon={<AddIcon />}
            />
            <BottomNavigationAction
              component={Link}
              to='/ajutorPf'
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
export default NavTerenuri
