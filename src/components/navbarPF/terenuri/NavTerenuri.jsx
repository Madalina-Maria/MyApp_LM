import React from 'react'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import HomeIcon from '@mui/icons-material/Home'
import { Link } from 'react-router-dom'
import { Box } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from '@mui/material/styles'
import AgricultureIcon from '@mui/icons-material/Agriculture'
import './StyleNavTerenuri.css'
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

const NavTerenuri = () => {
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
            <Cauta />
            <AjutorModal />
          </BottomNavigation>
        </Box>
        <Box sx={{ width: 700, backgroundColor: 'primary.main' }}></Box>
      </ThemeProvider>
    </div>
  )
}
export default NavTerenuri
