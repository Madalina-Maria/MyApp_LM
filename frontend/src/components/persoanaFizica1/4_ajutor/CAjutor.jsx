import React from 'react'
import TextField from '@mui/material/TextField'
import EmailIcon from '@mui/icons-material/Email'
import InputAdornment from '@mui/material/InputAdornment'
import Button from '@mui/material/Button'

const CAjutor = () => {
  return (
    <div className='max-h-screen'>
      <div className='flex flex-col'>
        <p className='font-mono text-2xl mx-20 my-10'>
          Aveți alte întrebări? Noi suntem aici să vă ajutăm!
        </p>
        <form className='flex flex-col max-w-lg mx-36'>
          <TextField
            maxWidth={400}
            type={'email'}
            variant='outlined'
            placeholder='Emailul Tău'
            autoComplete='email'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
          ></TextField>
          <br />
          <TextField
            id='outlined-multiline-static'
            multiline
            rows={4}
            maxWidth={400}
            type={'text'}
            variant='outlined'
            placeholder='Mesajul'
            autoComplete='mesajul'
          ></TextField>
          <br />
        </form>
        <div className='mx-36'>
          <Button
            type='submit'
            sx={{ borderRadius: 1 }}
            variant='contained'
            color='secondary'
            fontFamily='sans-serif'
            size='large'
          >
            Trimite
          </Button>
        </div>
      </div>
    </div>
  )
}
export default CAjutor
