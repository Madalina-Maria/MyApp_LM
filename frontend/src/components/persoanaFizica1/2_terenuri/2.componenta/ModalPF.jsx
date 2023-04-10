import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { useInsertTeren } from '../../../../hooks/useInsertTeren'
import Modal from 'react-modal'
import { Button } from '@mui/material'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

Modal.setAppElement('#root') // setează elementul principal al aplicației React

const defaultValues = {
  nume: '',
  tip: '',
  categorie: '',
  suprafata: '',
  lungime: '',
  latime: '',
  localizare: '',
  vecin_dreapta: '',
  vecin_stanga: '',
  vecin_fata: '',
  vecin_spate: '',
  fermier: '',
  culturi_anterioare: '',
  detalii: '',
}

const ModalPF = () => {
  const userVal = localStorage.getItem('user_id')
  console.log('user este : ', userVal)
  const [modalIsOpen, setModalIsOpen] = useState(false) // creează o stare pentru a controla afișarea paginii modale

  const openModal = () => {
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  const [idTipSelectat, setIdTipSelectat] = useState(0)
  function handleClick(el) {
    setIdTipSelectat(el.id_tip_teren)
  }
  const [idCategorieSelectata, setIdCategorieSelectata] = useState(0)
  function handleClick1(el) {
    setIdCategorieSelectata(el.id_categorie_teren)
  }

  const [formValues, setFormValues] = useState(defaultValues)
  const response = useInsertTeren({
    url: 'http://localhost:5000/api/teren/insertTerenPJ',
    insertData: {
      id_persoana: userVal,
      domeniul: 'teren',
      nume: formValues.nume,
      tip: idTipSelectat,
      categorie: idCategorieSelectata,
      suprafata: formValues.suprafata,
      lungime: formValues.lungime,
      latime: formValues.latime,
      localizare: formValues.localizare,
      vecin_dreapta: formValues.vecin_dreapta,
      vecin_stanga: formValues.vecin_stanga,
      vecin_fata: formValues.vecin_fata,
      vecin_spate: formValues.vecin_spate,
      fermier: formValues.fermier,
      culturi_anterioare: formValues.culturi_anterioare,
      detalii: formValues.detalii,
    },
  })

  const [tip, setTip] = useState([])
  const [categorie, setCategorie] = useState([])
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        'http://localhost:5000/api/teren/getAllTipTerenPJ'
      )
      const json = await response.json()
      setTip(json)
      console.log(json)
    }
    fetchData()
    console.log('Datae este = ', tip[0])
  }, [])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        'http://localhost:5000/api/teren/getAllCategorieTerenPJ'
      )
      const json = await response.json()
      setCategorie(json)
      console.log(json)
    }
    fetchData()
    console.log('Datae este = ', categorie[0])
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  return (
    <div>
      <div className='mx-10 my-16'>
        <button onClick={openModal} className='btn-modal'>
          + ADAUGA TEREN
        </button>
      </div>
      <div>
        <div>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel='Exemplu Pagină Modală'
          >
            <Box className='grid grid-cols-2 gap-4'>
              <TextField
                id='outlined-nume-input'
                label='Nume teren'
                type='text'
                name='nume'
                value={formValues.nume}
                onChange={handleInputChange}
              />

              <FormControl fullWidth>
                <InputLabel id='demo-simple-select-label'>Tip</InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  label='Tip'
                >
                  {tip.map((el) => (
                    <MenuItem
                      key={el.id_tip_teren}
                      value={el.id_tip_teren}
                      onClick={() => handleClick(el)}
                    >
                      {el.nume_tip}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl fullWidth>
                <InputLabel id='demo-simple-select-label'>Categorie</InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  label='Categorie'
                >
                  {categorie.map((el) => (
                    <MenuItem
                      key={el.id_categorie_teren}
                      value={el.id_categorie_teren}
                      onClick={() => handleClick1(el)}
                    >
                      {el.nume_categorie}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <TextField
                id='outlined-sup-input'
                label='Suprafata'
                type='text'
                name='suprafata'
                value={formValues.suprafata}
                onChange={handleInputChange}
              />

              <TextField
                id='outlined-lung-input'
                label='Lungime'
                type='text'
                name='lungime'
                value={formValues.lungime}
                onChange={handleInputChange}
              />

              <TextField
                id='outlined-lat-input'
                label='Latime'
                type='text'
                name='latime'
                value={formValues.latime}
                onChange={handleInputChange}
              />

              <TextField
                id='outlined-loc-input'
                label='Localizare'
                type='text'
                name='localizare'
                value={formValues.localizare}
                onChange={handleInputChange}
              />

              <TextField
                id='outlined-vecD-input'
                label='Vecin dreapta'
                type='text'
                name='vecin_dreapta'
                value={formValues.vecin_dreapta}
                onChange={handleInputChange}
              />

              <TextField
                id='outlined-vecS-input'
                label='Vecin stanga'
                type='text'
                name='vecin_stanga'
                value={formValues.vecin_stanga}
                onChange={handleInputChange}
              />

              <TextField
                id='outlined-vecF-input'
                label='Vecin fata'
                type='text'
                name='vecin_fata'
                value={formValues.vecin_fata}
                onChange={handleInputChange}
              />

              <TextField
                id='outlined-vecSp-input'
                label='Vecin spate'
                type='text'
                name='vecin_spate'
                value={formValues.vecin_spate}
                onChange={handleInputChange}
              />

              <TextField
                id='outlined-fer-input'
                label='Fermierul '
                type='text'
                name='fermier'
                value={formValues.fermier}
                onChange={handleInputChange}
              />

              <TextField
                id='outlined-cul-input'
                label='Culturi anterioare '
                type='text'
                name='culturi_anterioare'
                value={formValues.culturi_anterioare}
                onChange={handleInputChange}
              />
              <TextField
                id='outlined-detalii-input'
                label='Detalii '
                type='text'
                name='detalii'
                value={formValues.detalii}
                onChange={handleInputChange}
              />
            </Box>
            <div className='flex flex-col gap-8 my-7'>
              <div>
                <Button
                  variant='contained'
                  color='success'
                  onClick={() => response()}
                >
                  ADAUGĂ
                </Button>
              </div>
              <div>
                <Button
                  variant='contained'
                  color='secondary'
                  onClick={closeModal}
                >
                  INCHIDE
                </Button>
              </div>
            </div>
          </Modal>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}
export default ModalPF
