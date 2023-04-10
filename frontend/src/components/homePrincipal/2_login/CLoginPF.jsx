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
import Stack from '@mui/material/Stack'
import GoogleIcon from '@mui/icons-material/Google'
import FacebookIcon from '@mui/icons-material/Facebook'
import Link from '@mui/material/Link'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import IconButton from '@mui/material/IconButton'
import Axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const defaultValues = {
  email: '',
}

const CLoginPF = () => {
  const [password, setPassword] = useState('')
  const [showPassword, setshowPassword] = useState(false)

  const [formValues, setFormValues] = useState(defaultValues)

  const navigate = useNavigate()
  const adauga = () => {
    Axios.post('http://localhost:5000/api/loginUser', {
      email: formValues.email,
      parola: password,
    })
      .then((res) => {
        const { user } = res.data
        console.log('Asta primesc: ', user)
        toast('Datele de logare sunt corecte')
        localStorage.setItem('user_id', user.id)
        if (user.grad_acces === 1) {
          navigate('/homePf')
        } else if (user.grad_acces === 2) {
          navigate('/homePj')
        }
        console.log(user)
        toast('Date adaugate cu succes in db')
      })
      .catch((err) => console.log(err))
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  return (
    <div className='min-w-full min-w-fit'>
      <div className='flex justify-center my-20'>
        <Box className='shadow-2xl shadow-blue-900/100 hover:shadow-violet-900/100 bg-gray-50 hover:bg-white p-10 rounded-xl mb-12'>
          <p className='text-center font-serif text-3xl'>CONECTARE</p>
          <p className='text-xl font-serif my-10'>
            Ne bucurăm să te avem alături! Te rugăm să iți introduci datele
            pentru a intra în cont:
          </p>
          <form className='flex flex-col max-w-full mx-20 my-2'>
            <TextField
              id='email-input'
              name='email'
              label='Email'
              type='email'
              value={formValues.email}
              onChange={handleInputChange}
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
              label='Parola'
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
              onClick={() => adauga()}
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
              href='http://localhost:3000/registerPF'
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
      <ToastContainer />
    </div>
  )
}
export default CLoginPF
