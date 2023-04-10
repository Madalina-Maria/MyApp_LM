import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import EmailIcon from '@mui/icons-material/Email'
import InputAdornment from '@mui/material/InputAdornment'
import LockIcon from '@mui/icons-material/Lock'
import GoogleIcon from '@mui/icons-material/Google'
import FacebookIcon from '@mui/icons-material/Facebook'
import ShieldIcon from '@mui/icons-material/Shield'
import PersonIcon from '@mui/icons-material/Person'
import CakeIcon from '@mui/icons-material/Cake'
import PlaceIcon from '@mui/icons-material/Place'
import SignpostIcon from '@mui/icons-material/Signpost'
import HomeIcon from '@mui/icons-material/Home'
import LocationCityIcon from '@mui/icons-material/LocationCity'
import PhoneIcon from '@mui/icons-material/Phone'
import PublicIcon from '@mui/icons-material/Public'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import IconButton from '@mui/material/IconButton'
import { useInsertUser } from '../../../hooks/useInsertUser'
import { ToastContainer } from 'react-toastify'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import BusinessIcon from '@mui/icons-material/Business'
import DomainVerificationIcon from '@mui/icons-material/DomainVerification'

const defaultValues = {
  nume: '',
  prenume: '',
  data_nasterii: '',
  cnp: '',
  nr_telefon: '',
  numar_locuinta: '',
  strada: '',
  localitate: '',
  cod_postal: '',
  judet: '',
  tara: '',
  email: '',
}

const CRegisterPF = () => {
  const [password, setPassword] = useState('')
  const [showPassword, setshowPassword] = useState(false)
  const [idTara, setIdTara] = useState(0)
  const [numeTara, setNumeTara] = useState('')
  const [idJudet, setIdJudet] = useState(0)
  const [idLocalitate, setIdLocalitate] = useState(0)
  const [tara, setTara] = useState([])
  const [judet, setJudet] = useState([])
  const [localitate, setlocalitate] = useState([])
  const [formValues, setFormValues] = useState(defaultValues)
  const [tipPersoana, setTipPersoana] = useState('')
  const [gradAcces, setGradAcces] = useState(0)
  const [showhide, setShowhide] = useState('')
  const handleshowhide = (event) => {
    const getuser = event.target.value
    setShowhide(getuser)

    switch (getuser) {
      case '1':
        setTipPersoana('Persoana Fizica')
        setGradAcces(1)
        break
      case '2':
        setTipPersoana('Persoana Juridica')
        setGradAcces(2)
        break
      default:
        setTipPersoana('')
        setGradAcces(0)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  function handleClick(el) {
    setIdTara(el.id_tara)
    setNumeTara(el.nume_tara)
    setIdJudet(el.id_judet)
  }

  function handleClick1(element) {
    setIdLocalitate(element.id_localitate)
  }

  const response = useInsertUser({
    url: 'http://localhost:5000/api/insertUser',
    insertData: {
      localitate: idLocalitate,
      judet: idJudet,
      tara: idTara,
      gradAcces: gradAcces,
      tipPersoana: tipPersoana,
      nume: formValues.nume,
      prenume: formValues.prenume,
      data_nasterii: formValues.data_nasterii,
      cnp: formValues.cnp,
      nr_telefon: formValues.nr_telefon,
      numar_locuinta: formValues.numar_locuinta,
      strada: formValues.strada,
      cod_postal: formValues.cod_postal,
      email: formValues.email,
      parola: password,
    },
  })

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:5000/api/register/getTara')
      const json = await response.json()
      setTara(json)
      console.log(json)
    }
    fetchData()
  }, [])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        'http://localhost:5000/api/register/getJudet'
      )
      const json = await response.json()
      setJudet(json)
      console.log(json)
    }
    fetchData()
  }, [])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        'http://localhost:5000/api/register/getLocalitate'
      )
      const json = await response.json()
      setlocalitate(json)
      console.log(json)
    }
    fetchData()
  }, [])

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
            <form className='flex flex-col justify-items-center align-center  my-2'>
              

              <div className='flex flex-row gap-3 justify-center my-5'>
                <div className='align-item-center'>
                  <label className='text-center'>
                    Selecteaza tipul de cont:{' '}
                  </label>
                </div>
              
                <select
                  name='usertype'
                  className='rounded p-1.5 text-black border-2 border-gray'
                  onChange={(e) => handleshowhide(e)}
                >
                  <option value=''>--TIP PERSOANĂ--</option>
                  <option value='1'>PERSOANĂ FIZICĂ</option>
                  <option value='2'>PERSOANĂ JURIDICĂ</option>
                </select>
              </div>
              {showhide === '1' && (
                <div className='grid gap-6 grid-cols-2'>
                  <label>Date personale: </label>
                  <br />
                  <TextField
                    id='name-input'
                    name='nume'
                    label='Name'
                    type='text'
                    value={formValues.nume}
                    onChange={handleInputChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>
                          <PersonIcon />
                        </InputAdornment>
                      ),
                    }}
                  ></TextField>
                  <TextField
                    id='prenume-input'
                    name='prenume'
                    label='Prenume'
                    type='text'
                    value={formValues.prenume}
                    onChange={handleInputChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>
                          <PersonIcon />
                        </InputAdornment>
                      ),
                    }}
                  ></TextField>

                  <TextField
                    id='dataN-input'
                    name='data_nasterii'
                    label='Data nasterii'
                    type='text'
                    value={formValues.data_nasterii}
                    onChange={handleInputChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>
                          <CakeIcon />
                        </InputAdornment>
                      ),
                    }}
                  ></TextField>

                  <TextField
                    id='cnp-input'
                    name='cnp'
                    label='CNP'
                    type='text'
                    value={formValues.cnp}
                    onChange={handleInputChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>
                          <ShieldIcon />
                        </InputAdornment>
                      ),
                    }}
                  ></TextField>

                  <label>Adresa: </label>
                  <br />

                  <FormControl fullWidth>
                    <InputLabel id='demo-simple-select-label'>Tara</InputLabel>
                    <Select
                      labelId='demo-simple-select-label'
                      id='demo-simple-select'
                      label='Tara'
                    >
                      {tara.map((el) => (
                        <MenuItem
                          key={el.id_tara}
                          value={el.id_tara}
                          onClick={() => handleClick(el)}
                          onChange={handleInputChange}
                        >
                          {el.nume_tara}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  <FormControl fullWidth>
                    <InputLabel id='demo-simple-select-label'>Judet</InputLabel>
                    <Select
                      labelId='demo-simple-select-label'
                      id='demo-simple-select'
                      label='Judet'
                    >
                      {judet.map((el) => (
                        <MenuItem
                          key={el.id_judet}
                          value={el.id_judet}
                          onClick={() => handleClick(el)}
                          onChange={handleInputChange}
                        >
                          {el.nume_judet}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  <FormControl fullWidth>
                    <InputLabel id='demo-simple-select-label'>
                      Localitate
                    </InputLabel>
                    <Select
                      labelId='demo-simple-select-label'
                      id='demo-simple-select'
                      label='Localitate'
                    >
                      {localitate
                        .filter((element) => element.id_judet === idJudet)
                        .map((element) => (
                          <MenuItem
                            key={element.id_localitate}
                            value={element.id_localitate}
                            onClick={() => handleClick1(element)}
                            onChange={handleInputChange}
                          >
                            {element.nume_localitate}
                          </MenuItem>
                        ))}
                    </Select>
                  </FormControl>

                  <TextField
                    id='codP-input'
                    name='cod_postal'
                    label='Cod postal'
                    type='text'
                    value={formValues.cod_postal}
                    onChange={handleInputChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>
                          <PlaceIcon />
                        </InputAdornment>
                      ),
                    }}
                  ></TextField>

                  <TextField
                    id='strada-input'
                    name='strada'
                    label='Strada'
                    type='text'
                    value={formValues.strada}
                    onChange={handleInputChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>
                          <SignpostIcon />
                        </InputAdornment>
                      ),
                    }}
                  ></TextField>

                  <TextField
                    id='numarL-input'
                    name='numar_locuinta'
                    label='Numar locuinta'
                    type='text'
                    value={formValues.numar_locuinta}
                    onChange={handleInputChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>
                          <HomeIcon />
                        </InputAdornment>
                      ),
                    }}
                  ></TextField>

                  <label>Date de conectare: </label>
                  <br />

                  <TextField
                    id='numarT-input'
                    name='nr_telefon'
                    label='Numar de telefon'
                    type='text'
                    value={formValues.nr_telefon}
                    onChange={handleInputChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>
                          <PhoneIcon />
                        </InputAdornment>
                      ),
                    }}
                  ></TextField>

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
              )}

              {showhide === '2' && (
                <div className='grid gap-6 grid-cols-2'>
                  <label>Date despre firma: </label>
                  <br />
                  <TextField
                    id='name-input'
                    name='nume'
                    label='Denumire firma'
                    type='text'
                    value={formValues.nume}
                    onChange={handleInputChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>
                          <BusinessIcon />
                        </InputAdornment>
                      ),
                    }}
                  ></TextField>
                  <TextField
                    id='prenume-input'
                    name='prenume'
                    label='Domeniul de activitate'
                    type='text'
                    value={formValues.prenume}
                    onChange={handleInputChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>
                          <DomainVerificationIcon />
                        </InputAdornment>
                      ),
                    }}
                  ></TextField>

                  <TextField
                    id='dataN-input'
                    name='data_nasterii'
                    label='Data infintarii'
                    type='text'
                    value={formValues.data_nasterii}
                    onChange={handleInputChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>
                          <CakeIcon />
                        </InputAdornment>
                      ),
                    }}
                  ></TextField>

                  <TextField
                    id='cnp-input'
                    name='cnp'
                    label='CUI'
                    type='text'
                    value={formValues.cnp}
                    onChange={handleInputChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>
                          <ShieldIcon />
                        </InputAdornment>
                      ),
                    }}
                  ></TextField>

                  <label>Adresa: </label>
                  <br />

                  <FormControl fullWidth>
                    <InputLabel id='demo-simple-select-label'>Tara</InputLabel>
                    <Select
                      labelId='demo-simple-select-label'
                      id='demo-simple-select'
                      label='Tara'
                    >
                      {tara.map((el) => (
                        <MenuItem
                          key={el.id_tara}
                          value={el.id_tara}
                          onClick={() => handleClick(el)}
                          onChange={handleInputChange}
                        >
                          {el.nume_tara}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  <FormControl fullWidth>
                    <InputLabel id='demo-simple-select-label'>Judet</InputLabel>
                    <Select
                      labelId='demo-simple-select-label'
                      id='demo-simple-select'
                      label='Judet'
                    >
                      {judet.map((el) => (
                        <MenuItem
                          key={el.id_judet}
                          value={el.id_judet}
                          onClick={() => handleClick(el)}
                          onChange={handleInputChange}
                        >
                          {el.nume_judet}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  <FormControl fullWidth>
                    <InputLabel id='demo-simple-select-label'>
                      Localitate
                    </InputLabel>
                    <Select
                      labelId='demo-simple-select-label'
                      id='demo-simple-select'
                      label='Localitate'
                    >
                      {localitate
                        .filter((element) => element.id_judet === idJudet)
                        .map((element) => (
                          <MenuItem
                            key={element.id_localitate}
                            value={element.id_localitate}
                            onClick={() => handleClick1(element)}
                            onChange={handleInputChange}
                          >
                            {element.nume_localitate}
                          </MenuItem>
                        ))}
                    </Select>
                  </FormControl>

                  <TextField
                    id='codP-input'
                    name='cod_postal'
                    label='Cod postal'
                    type='text'
                    value={formValues.cod_postal}
                    onChange={handleInputChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>
                          <PlaceIcon />
                        </InputAdornment>
                      ),
                    }}
                  ></TextField>

                  <TextField
                    id='strada-input'
                    name='strada'
                    label='Strada'
                    type='text'
                    value={formValues.strada}
                    onChange={handleInputChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>
                          <SignpostIcon />
                        </InputAdornment>
                      ),
                    }}
                  ></TextField>

                  <TextField
                    id='numarL-input'
                    name='numar_locuinta'
                    label='Numar locuinta'
                    type='text'
                    value={formValues.numar_locuinta}
                    onChange={handleInputChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>
                          <HomeIcon />
                        </InputAdornment>
                      ),
                    }}
                  ></TextField>

                  <label>Date de conectare: </label>
                  <br />

                  <TextField
                    id='numarT-input'
                    name='nr_telefon'
                    label='Numar de telefon'
                    type='text'
                    value={formValues.nr_telefon}
                    onChange={handleInputChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>
                          <PhoneIcon />
                        </InputAdornment>
                      ),
                    }}
                  ></TextField>

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
              )}

              <Button
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
                onClick={() => response()}
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
                href='http://localhost:3000/loginPF'
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
      <ToastContainer />
    </div>
  )
}
export default CRegisterPF
