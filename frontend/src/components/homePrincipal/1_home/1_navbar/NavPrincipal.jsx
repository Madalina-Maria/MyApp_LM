import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import MenuItem from '@mui/material/MenuItem'
import { Link } from 'react-router-dom'
import AgricultureIcon from '@mui/icons-material/Agriculture'
import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from '@mui/material/styles'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import HelpIcon from '@mui/icons-material/Help'
import LocalOfferIcon from '@mui/icons-material/LocalOffer'
import LoginIcon from '@mui/icons-material/Login'
import BottomNavigation from '@mui/material/BottomNavigation'
import PercentIcon from '@mui/icons-material/Percent'

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
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const [anchorElXs, setAnchorElXs] = React.useState(null)
  const openXs = Boolean(anchorElXs)
  const handleClickXs = (event) => {
    setAnchorElXs(event.currentTarget)
  }
  const handleCloseXs = () => {
    setAnchorElXs(null)
  }

  return (
    <ThemeProvider theme={theme}>
      <AppBar position='static'>
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            <AgricultureIcon
              sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
            />
            <Typography
              noWrap
              component='a'
              href='/'
              sx={{
                flexGrow: 1,
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                color: 'black',
                textDecoration: 'none',
              }}
            >
              S.I.G.L.A.
            </Typography>

            <IconButton
              sx={{ display: { xs: 'flex', md: 'none' } }}
              size='large'
              id='basic-button-xs'
              aria-controls={open ? 'basic-menu-xs' : undefined}
              aria-haspopup='true'
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClickXs}
            >
              <MenuIcon />
            </IconButton>

            {handleClickXs && (
              <Box
                sx={{
                  display: { xs: 'flex', md: 'none' },
                }}
              >
                <Menu
                  id='basic-menu-xs'
                  anchorEl={anchorElXs}
                  open={openXs}
                  onClose={handleCloseXs}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button-xs',
                  }}
                  sx={{ marginTop: 0.5 }}
                >
                  <MenuItem
                    onClick={handleCloseXs}
                    component={Link}
                    to='/licitatiihome'
                    sx={{ color: 'purple' }}
                  >
                    LICITATII
                  </MenuItem>

                  <MenuItem
                    onClick={handleCloseXs}
                    component={Link}
                    to='/cererihome'
                    sx={{ color: 'purple' }}
                  >
                    ANUNTURI
                  </MenuItem>

                  <MenuItem
                    onClick={handleCloseXs}
                    component={Link}
                    to='/login'
                    sx={{ color: 'green' }}
                  >
                    CONECTARE
                  </MenuItem>

                  <MenuItem
                    onClick={handleCloseXs}
                    component={Link}
                    to='/ajutor'
                  >
                    AJUTOR
                  </MenuItem>
                </Menu>
              </Box>
            )}

            <AgricultureIcon
              sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
            />
            <Typography
              variant='h5'
              noWrap
              component='a'
              href=''
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'black',
                textDecoration: 'none',
              }}
            >
              S.I.G.L.A.
            </Typography>

            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
              }}
            >
              <BottomNavigation
                sx={{
                  bgcolor: 'primary.main',
                }}
                showLabels
              >
                <BottomNavigationAction
                  sx={{ color: 'purple', marginLeft: 2, marginRight: 2 }}
                  component={Link}
                  to='/licitatiihome'
                  label='LICITATII'
                  value='licitatii'
                  icon={<LocalOfferIcon />}
                />

                <BottomNavigationAction
                  sx={{ color: 'purple', marginLeft: 2, marginRight: 2 }}
                  component={Link}
                  to='/cererihome'
                  label='ANUNTURI'
                  value='Anunturi'
                  icon={<PercentIcon />}
                />

                <BottomNavigationAction
                  sx={{ color: 'green', marginLeft: 2, marginRight: 2 }}
                  component={Link}
                  to='/login'
                  label='CONECTARE'
                  value='Login'
                  icon={<LoginIcon />}
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
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  )
}
