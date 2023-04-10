import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'

export const CautaLicitatiiPJ = () => {
  const [value, setValue] = useState('')
  const onChange = (event) => {
    setValue(event.target.value)
  }
  const onSearch = (searchTerm) => {
    console.log('search ', searchTerm)
  }
  return (
    <div>
      <div>
        <TextField
          placeholder='Caută licitație...'
          type={'text'}
          onChange={onChange}
          variant='outlined'
          value={value}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton
                  aria-label='search'
                  onClick={() => onSearch(value)}
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
