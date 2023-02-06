import { Button } from '@mui/material'
import React from 'react'
import NavPrincipal from '../../components/navbar/NavPrincipal'
import './StyleR.css'

const Register = () => {
  return (
    <div>
      <NavPrincipal />
      <div class='bg1'></div>
      <div class='bg1 bg2'></div>
      <div class='bg1 bg3'></div>
      <div className='content'>
        <div className='flex justify-center font-serif text-5xl my-6'>
          <p> CREARE CONT </p>
        </div>
        <div className=' font-serif text-3xl my-10 mx-10'>
          <p>Vă rugăm să selectați o opțiune pentru a vă crea un cont</p>
        </div>
        <div className=' mx-20 '>
          <Button
            href='http://localhost:3000/registerPF'
            variant='contained'
            color='secondary'
            size='large'
          >
            PERSOANĂ FIZICĂ
          </Button>
          <br />
          <br />
          <Button
            href='http://localhost:3000/registerPJ'
            variant='contained'
            color='success'
            size='large'
          >
            FERMIER / PERSOANĂ JURIDICĂ
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Register
