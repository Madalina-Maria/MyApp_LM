import React from 'react'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import HomeIcon from '@mui/icons-material/Home'
import { Link } from 'react-router-dom'
import { Box } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from '@mui/material/styles'
import AgricultureIcon from '@mui/icons-material/Agriculture'
import PercentIcon from '@mui/icons-material/Percent'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble'
import AlegeCategoriaOfertePJ from './AlegeCategoriaOfertePJ'
import { CautaOfertePJ } from './CautaOfertePJ'
import { AjutorModalOfertePJ } from './AjutorModalOfertePJ'

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

const NavOfertePJ = () => {
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
              to='/homePj'
              label='ACASĂ'
              value='Home'
              icon={<HomeIcon />}
            />
            <BottomNavigationAction
              component={Link}
              to='/ofertelemelePj'
              label='OFERTELE MELE'
              value='text'
              icon={<PercentIcon />}
            />

            <AlegeCategoriaOfertePJ />

            <BottomNavigationAction
              component={Link}
              to='/ofertefavoritePj'
              label='FAVORITE'
              value='text'
              icon={<FavoriteIcon />}
            />

            <BottomNavigationAction
              component={Link}
              to='/oferteconversatiiPj'
              label='CONVERSATII'
              value='text'
              icon={<ChatBubbleIcon />}
            />
            <CautaOfertePJ />
            <AjutorModalOfertePJ />
          </BottomNavigation>
        </Box>
        <Box sx={{ width: 600, backgroundColor: 'primary.main' }}></Box>
      </ThemeProvider>
    </div>
  )
}
export default NavOfertePJ
