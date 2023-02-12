import React, { useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import EmailIcon from '@mui/icons-material/Email'
import InputAdornment from '@mui/material/InputAdornment'
import LockIcon from '@mui/icons-material/Lock'
import GoogleIcon from '@mui/icons-material/Google'
import FacebookIcon from '@mui/icons-material/Facebook'
import ShieldIcon from '@mui/icons-material/Shield'
import PlaceIcon from '@mui/icons-material/Place'
import SignpostIcon from '@mui/icons-material/Signpost'
import HomeIcon from '@mui/icons-material/Home'
import LocationCityIcon from '@mui/icons-material/LocationCity'
import PhoneIcon from '@mui/icons-material/Phone'
import PublicIcon from '@mui/icons-material/Public'
import BusinessIcon from '@mui/icons-material/Business'
import DomainVerificationIcon from '@mui/icons-material/DomainVerification'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import IconButton from '@mui/material/IconButton'

const CRegisterPJ = () => {
  const [password, setPassword] = useState('')
  const [showPassword, setshowPassword] = useState(false)
  return (
    <div>
      <div className='grid justify-items-center '>
        <div className='flex justify-center my-20 '>
          <Box className='shadow-xl shadow-blue-900/100 hover:shadow-violet-900/100 bg-gray-50 hover:bg-white p-10 rounded-xl max-w-4xl'>
            <p className='text-center font-serif text-3xl'>CREARE CONT</p>
            <p className='text-xl text-center font-serif my-10'>
              Ne bucurăm că ai ales să îți creezi un cont! Odată creat contul,
              te poți bucura de toate beneficiile platformei. Te rugăm să-ți
              introduci datele mai jos:
            </p>
            <form className='flex flex-col justify-items-center  my-2'>
              <div className='grid gap-4 grid-cols-2'>
                <TextField
                  maxWidth={10}
                  fontFamily='sans-serif'
                  margin='normal'
                  type={'text'}
                  variant='outlined'
                  placeholder='Denumire Firmă'
                  autoComplete='denumire firmă'
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <BusinessIcon />
                      </InputAdornment>
                    ),
                  }}
                ></TextField>
                <TextField
                  maxWidth={50}
                  fontFamily='sans-serif'
                  margin='normal'
                  type={'text'}
                  variant='outlined'
                  placeholder='Domeniul de Activitate'
                  autoComplete='domeniul de activitate'
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <DomainVerificationIcon />
                      </InputAdornment>
                    ),
                  }}
                ></TextField>
                <TextField
                  maxWidth={50}
                  fontFamily='sans-serif'
                  margin='normal'
                  type={'number'}
                  variant='outlined'
                  placeholder='Număr'
                  autoComplete='numar'
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <HomeIcon />
                      </InputAdornment>
                    ),
                  }}
                ></TextField>
                <TextField
                  maxWidth={50}
                  fontFamily='sans-serif'
                  margin='normal'
                  type={'text'}
                  variant='outlined'
                  placeholder='Stradă'
                  autoComplete='strada'
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <SignpostIcon />
                      </InputAdornment>
                    ),
                  }}
                ></TextField>
                <TextField
                  maxWidth={50}
                  fontFamily='sans-serif'
                  margin='normal'
                  type={'text'}
                  variant='outlined'
                  placeholder='Localitate'
                  autoComplete='localitate'
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <PlaceIcon />
                      </InputAdornment>
                    ),
                  }}
                ></TextField>
                <TextField
                  maxWidth={50}
                  fontFamily='sans-serif'
                  margin='normal'
                  type={'text'}
                  variant='outlined'
                  placeholder='Județ'
                  autoComplete='judet'
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <LocationCityIcon />
                      </InputAdornment>
                    ),
                  }}
                ></TextField>

                <TextField
                  maxWidth={50}
                  fontFamily='sans-serif'
                  margin='normal'
                  type={'text'}
                  variant='outlined'
                  placeholder='Țara'
                  autoComplete='tara'
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <PublicIcon />
                      </InputAdornment>
                    ),
                  }}
                ></TextField>
                <TextField
                  maxWidth={50}
                  fontFamily='sans-serif'
                  margin='normal'
                  type={'text'}
                  variant='outlined'
                  placeholder='C.U.I.'
                  autoComplete='CUI'
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <ShieldIcon />
                      </InputAdornment>
                    ),
                  }}
                ></TextField>

                <TextField
                  maxWidth={50}
                  fontFamily='sans-serif'
                  margin='normal'
                  type={'tel'}
                  variant='outlined'
                  placeholder='Număr de telefon'
                  autoComplete='nr telefon'
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <PhoneIcon />
                      </InputAdornment>
                    ),
                  }}
                ></TextField>
                <TextField
                  maxWidth={50}
                  fontFamily='sans-serif'
                  margin='normal'
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
                  type={showPassword ? 'text' : 'password'}
                  onChange={(e) => setPassword(e.target.value)}
                  variant='outlined'
                  placeholder='Confirmare parola'
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
              </div>
              <Button
                type='submit'
                sx={{
                  marginTop: 3,
                  borderRadius: 2,
                  marginRight: 25,
                  marginLeft: 25,
                }}
                variant='contained'
                color='success'
                fontFamily='sans-serif'
                size='large'
              >
                CREAZĂ
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
                Dacă ai cont, doar conectează-te:
              </p>
              <Button
                href='http://localhost:3000/loginPJ'
                target={'_self'}
                variant='outlined'
                color='warning'
                sx={{
                  borderRadius: 2,
                  marginRight: 25,
                  marginLeft: 25,
                }}
                fontFamily='sans-serif'
                size='large'
              >
                CONECTARE
              </Button>
            </form>
          </Box>
        </div>
      </div>
    </div>
  )
}

export default CRegisterPJ
