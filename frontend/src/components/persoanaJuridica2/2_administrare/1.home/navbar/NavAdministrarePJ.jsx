import React from 'react'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import HomeIcon from '@mui/icons-material/Home'
import { Link } from 'react-router-dom'
import { Box } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from '@mui/material/styles'
import AgricultureIcon from '@mui/icons-material/Agriculture'
import PetsIcon from '@mui/icons-material/Pets'
import AjutorModalAdministrarePJ from './AjutorModalAdministrarePJ'
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount'
import WorkIcon from '@mui/icons-material/Work'
import FolderSharedIcon from '@mui/icons-material/FolderShared'

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

const NavAdministrarePJ = () => {
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
              to='/administrarePj'
              label='ADMINISTRARE'
              value='text'
              icon={<SupervisorAccountIcon />}
            />

            <BottomNavigationAction
              component={Link}
              to='/fermapersonalaPj'
              label='FERMA PERSONALA'
              value='text'
              icon={<PetsIcon />}
            />

            <BottomNavigationAction
              component={Link}
              to='/lucrariPj'
              label='LUCRARI'
              value='text'
              icon={<WorkIcon />}
            />

            <BottomNavigationAction
              component={Link}
              to='/angajatiPj'
              label='ANGAJATI'
              value='text'
              icon={<FolderSharedIcon />}
            />

            <AjutorModalAdministrarePJ />
          </BottomNavigation>
        </Box>
        <Box sx={{ width: 600, backgroundColor: 'primary.main' }}></Box>
      </ThemeProvider>
    </div>
  )
}
export default NavAdministrarePJ
