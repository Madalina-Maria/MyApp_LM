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
import PostAddIcon from '@mui/icons-material/PostAdd'
import { CautaLicitatiiPJ } from './CautaLicitatiiPJ'
import { AjutorModalLicitatiiPJ } from './AjutorModalLicitatiiPJ'

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

const NavLicitatiiPJ = () => {
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
              to='/homePj'
              label='ACASĂ'
              value='Home'
              icon={<HomeIcon />}
            />

            <BottomNavigationAction
              component={Link}
              to='/licitatiilemelePj'
              label='LICITAȚIILE MELE'
              value='text'
              icon={<PostAddIcon />}
            />

            <BottomNavigationAction
              component={Link}
              to='/licitatiiincursPj'
              label='LICITAȚII ACTIVE'
              value='text'
              icon={<NotificationsActiveIcon />}
            />

            <BottomNavigationAction
              component={Link}
              to='/licitatiiviitoarePj'
              label='LICITAȚII VIITOARE'
              value='text'
              icon={<UpdateIcon />}
            />

            <BottomNavigationAction
              component={Link}
              to='/rezultatelicitatiiPj'
              label='REZULTATE '
              value='text'
              icon={<CheckCircleIcon />}
            />
            <CautaLicitatiiPJ />
            <AjutorModalLicitatiiPJ />
          </BottomNavigation>
        </Box>
        <Box sx={{ width: 600, backgroundColor: 'primary.main' }}></Box>
      </ThemeProvider>
    </div>
  )
}
export default NavLicitatiiPJ
