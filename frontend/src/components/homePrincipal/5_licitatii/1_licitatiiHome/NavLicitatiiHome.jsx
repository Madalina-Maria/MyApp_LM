import React, { useState, useEffect } from 'react'
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
import UndoIcon from '@mui/icons-material/Undo'

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

const NavLicitatiiHome = () => {
  const userVal = localStorage.getItem('user_id')
  console.log('user este : ', userVal)

  const [gradAcces, setGradAcces] = useState(0)
  useEffect(() => {
    console.log('id-ul este= ', userVal)
    async function fetchData() {
      const response = await fetch(
        `http://localhost:5000/api/licitatie/getGradAcces/${userVal}`
      )
      const data = await response.json()
      setGradAcces(data)
    }
    fetchData()
  }, [userVal])

  if (!gradAcces) {
    return <div>Loading...</div>
  }
  console.log('gradAcces ', gradAcces[0].grad_acces)

  const user = gradAcces[0]
  const isPF = user && user.grad_acces === 1 // verifică dacă utilizatorul are gradul de acces "pf"
  const isPJ = user && user.grad_acces === 2 // verifică dacă utilizatorul are gradul de acces "pj"

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
              to={isPF ? '/homePf' : isPJ ? '/homePj' : '/'}
              label='INAPOI'
              value='Home'
              icon={<UndoIcon />}
            />

            <BottomNavigationAction
              component={Link}
              to='/licitatiiactivehome'
              label='LICITAȚII ACTIVE'
              value='text'
              icon={<NotificationsActiveIcon />}
            />

            <BottomNavigationAction
              component={Link}
              to='/licitatiiviitoarehome'
              label='LICITAȚII VIITOARE'
              value='text'
              icon={<UpdateIcon />}
            />

            <BottomNavigationAction
              component={Link}
              to='/rezultatelicitatiihome'
              label='REZULTATE '
              value='text'
              icon={<CheckCircleIcon />}
            />
          </BottomNavigation>
        </Box>
        <Box sx={{ width: 600, backgroundColor: 'primary.main' }}></Box>
      </ThemeProvider>
    </div>
  )
}
export default NavLicitatiiHome
