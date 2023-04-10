import React from 'react'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import HomeIcon from '@mui/icons-material/Home'
import { Link } from 'react-router-dom'
import { Box } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from '@mui/material/styles'
import AgricultureIcon from '@mui/icons-material/Agriculture'
import HiveIcon from '@mui/icons-material/Hive'
import { AjutorModalFermaPersonalaPJ } from './AjutorModalFermaPersonalaPJ'
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount'
import BuildRoundedIcon from '@mui/icons-material/BuildRounded'
import TerrainRoundedIcon from '@mui/icons-material/TerrainRounded'
import StoreRoundedIcon from '@mui/icons-material/StoreRounded'

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

const NavFermaPersonalaPJ = () => {
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
              to='/animalefermapersonalaPj'
              label='ANIMALE'
              value='text'
              icon={<HiveIcon />}
            />
            <BottomNavigationAction
              component={Link}
              to='/utilajefermapersonalaPj'
              label='UTILAJE'
              value='text'
              icon={<BuildRoundedIcon />}
            />
            <BottomNavigationAction
              component={Link}
              to='/terenfermapersonalaPj'
              label='TEREN'
              value='text'
              icon={<TerrainRoundedIcon />}
            />
            <BottomNavigationAction
              component={Link}
              to='/magaziafermapersonalaPj'
              label='MAGAZIA'
              value='text'
              icon={<StoreRoundedIcon />}
            />
            <AjutorModalFermaPersonalaPJ />
          </BottomNavigation>
        </Box>
        <Box sx={{ width: 600, backgroundColor: 'primary.main' }}></Box>
      </ThemeProvider>
    </div>
  )
}
export default NavFermaPersonalaPJ
