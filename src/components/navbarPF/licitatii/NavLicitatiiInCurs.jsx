import React from 'react'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import HomeIcon from '@mui/icons-material/Home'
import { Link } from 'react-router-dom'
import { Box } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from '@mui/material/styles'
import AgricultureIcon from '@mui/icons-material/Agriculture'
import LocalOfferIcon from '@mui/icons-material/LocalOffer'

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

const NavLicitatiiInCurs = () => {
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
            className='text-xs font-bold '
            sx={{
              bgcolor: 'primary.main',
              justifyContent: 'left',
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
          </BottomNavigation>
        </Box>
        <Box sx={{ width: 600, backgroundColor: 'primary.main' }}></Box>
      </ThemeProvider>
    </div>
  )
}
export default NavLicitatiiInCurs
