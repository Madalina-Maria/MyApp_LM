import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import Axios from 'axios'


export const Cauta = (props) => {
  const [nume, setNume] = useState('')

  function fetchData() {
    console.log('34')
    Axios.post('http://localhost:5000/api/teren/getOneTerenPJ', {
      nume: nume,
    }).then((response) => {
      props.setDatae(response.data)
    })
  }

  function handleInputChange(event) {
    setNume(event.target.value)
  }

  return (
    <div>
      <div>
        <TextField
          placeholder='Caută teren...'
          type={'text'}
          name='nume'
          value={nume}
          onChange={handleInputChange}
          variant='outlined'
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton
                  aria-label='search'
                  onClick={() => fetchData()}
                  edge='end'
                >
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        ></TextField>
      </div>
    </div>
  )
}
