import React, { useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import EmailIcon from '@mui/icons-material/Email'
import InputAdornment from '@mui/material/InputAdornment'
import LockIcon from '@mui/icons-material/Lock'
import ShieldIcon from '@mui/icons-material/Shield'
import Stack from '@mui/material/Stack'
import GoogleIcon from '@mui/icons-material/Google'
import FacebookIcon from '@mui/icons-material/Facebook'
import Link from '@mui/material/Link'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import IconButton from '@mui/material/IconButton'

const CLoginPJ = () => {
  const [password, setPassword] = useState('')
  const [showPassword, setshowPassword] = useState(false)
  return (
    <div className='min-w-full min-w-fit'>
      <div className='flex justify-center my-20 '>
        <Box className='shadow-2xl shadow-blue-900/100 hover:shadow-violet-900/100 bg-gray-50 hover:bg-white p-10 rounded-xl mb-12'>
          <p className='text-center font-serif text-3xl'>CONECTARE</p>
          <p className='text-xl font-serif my-10'>
            Ne bucurăm să te avem alături! Te rugăm să iți introduci datele
            pentru a intra în cont:
          </p>
          <form className='flex flex-col max-w-full mx-20 my-2'>
            <TextField
              fontFamily='sans-serif'
              type={'email'}
              variant='outlined'
              placeholder='Email'
              autoComplete='email'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
            ></TextField>
            <TextField
              fontFamily='sans-serif'
              margin='normal'
              type={showPassword ? 'text' : 'password'}
              onChange={(e) => setPassword(e.target.value)}
              variant='outlined'
              placeholder='Parola'
              autoComplete='current-password'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <LockIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle password visibility'
                      onClick={() => setshowPassword(!showPassword)}
                      edge='end'
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            ></TextField>
            <TextField
              fontFamily='sans-serif'
              margin='normal'
              type={'password'}
              variant='outlined'
              placeholder='C.U.I.'
              autoComplete='cui'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <ShieldIcon />
                  </InputAdornment>
                ),
              }}
            ></TextField>
            <Stack className='my-5 mx-1' direction='row' spacing={5}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox value='remember' color='primary' />}
                  label='Ține-mă minte'
                />
              </FormGroup>
              <Link
                href='https://www.google.com/webhp?hl=ro&sa=X&ved=0ahUKEwjioNT7rMP3AhWZ7aQKHbeoDuMQPAgI'
                underline='always'
                component={'button'}
                variant={'body1'}
              >
                Ai uitat parola? Click aici
              </Link>
            </Stack>
            <Button
              type='submit'
              sx={{
                marginTop: 3,
                borderRadius: 2,
                marginRight: 10,
                marginLeft: 10,
              }}
              variant='contained'
              color='success'
              fontFamily='sans-serif'
              size='large'
            >
              INTRĂ ÎN CONT
            </Button>
            <p className='text-center font-serif text-xl my-8'>
              ______ sau ______
            </p>
            <Button
              href='https://accounts.google.com/v3/signin/identifier?dsh=S-1442622727%3A1675709476040033&authuser=0&continue=https%3A%2F%2Fwww.google.com%2Fwebhp%3Fhl%3Dro%26sa%3DX%26ved%3D0ahUKEwjioNT7rMP3AhWZ7aQKHbeoDuMQPAgI&ec=GAlAmgQ&hl=ro&flowName=GlifWebSignIn&flowEntry=AddSession'
              variant='outlined'
              startIcon={<GoogleIcon />}
              color={'error'}
              size='large'
            >
              Continuă cu Google
            </Button>

            <br />

            <Button
              href='https://www.facebook.com/'
              variant='outlined'
              startIcon={<FacebookIcon />}
              size='large'
            >
              Continuă cu Facebook
            </Button>
            <p className='text-center font-serif text-xl my-8'>
              Dacă nu ai cont, acum este momentul să îți faci:
            </p>
            <Button
              href='http://localhost:3000/registerPJ'
              target={'_self'}
              variant='outlined'
              color='warning'
              sx={{
                borderRadius: 2,
                marginRight: 10,
                marginLeft: 10,
              }}
              fontFamily='sans-serif'
              size='large'
            >
              CREARE CONT
            </Button>
          </form>
        </Box>
      </div>
    </div>
  )
}
export default CLoginPJ
