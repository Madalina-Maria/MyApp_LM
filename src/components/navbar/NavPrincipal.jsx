import BottomNavigation from '@mui/material/BottomNavigation'
import React from 'react'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import HomeIcon from '@mui/icons-material/Home'
import { Link } from 'react-router-dom'
import { Box } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from '@mui/material/styles'
import AgricultureIcon from '@mui/icons-material/Agriculture'
import HelpIcon from '@mui/icons-material/Help'
import HowToRegIcon from '@mui/icons-material/HowToReg'
import LoginIcon from '@mui/icons-material/Login'

const theme = createTheme({
  palette: {
    primary: {
      main: '#c8e4fb',
    },
    secondary: {
      main: '#c8e4fb',
    },
  },
})

export default function Navbar() {
  return (
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
            to='/'
            label='ACASĂ'
            value='Home'
            icon={<HomeIcon />}
          />

          <BottomNavigationAction
            component={Link}
            to='/login'
            label='CONECTARE'
            value='Login'
            icon={<LoginIcon />}
          />

          <BottomNavigationAction
            component={Link}
            to='/register'
            label='CREARE CONT'
            value='Register'
            icon={<HowToRegIcon />}
          />

          <BottomNavigationAction
            component={Link}
            to='/ajutor'
            label='AJUTOR'
            value='Ajutor'
            icon={<HelpIcon />}
          />
        </BottomNavigation>
      </Box>
      <Box sx={{ width: 700, backgroundColor: 'primary.main' }}></Box>
    </ThemeProvider>
  )
}
