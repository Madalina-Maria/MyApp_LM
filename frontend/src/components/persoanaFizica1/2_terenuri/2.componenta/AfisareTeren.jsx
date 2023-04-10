import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'
import { Button, TextField, Box } from '@mui/material'
import Axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

Modal.setAppElement('#root') // setează elementul principal al aplicației React

const AfisareTeren = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false) // creează o stare pentru a controla afișarea paginii modale

  const openModal = () => {
    setModalIsOpen(true)
  }
  const closeModal = () => {
    setModalIsOpen(false)
  }
  const [id, setId] = useState(0)
  const [nume, setNume] = useState('')
  const [tipDefault, setTipDefault] = useState('')
  const [categorieDefault, setCategorieDefault] = useState('')
  const [suprafata, setSuprafata] = useState(0)
  const [lungime, setLungime] = useState(0)
  const [latime, setLatime] = useState(0)
  const [localizare, setLocalizare] = useState('')
  const [vecin_dreapta, setVecin_dreapta] = useState('')
  const [vecin_stanga, setVecin_stanga] = useState('')
  const [vecin_fata, setVecin_fata] = useState('')
  const [vecin_spate, setVecin_spate] = useState('')
  const [fermier, setFermier] = useState('')
  const [culturi_anterioare, setCulturi_anterioare] = useState('')
  const [detalii, setDetalii] = useState('')
  const [refresh, setRefresh] = useState('')

  useEffect(() => {
    console.log('PRops.id =' + props.teren.id_teren)
    setId(props.teren.id_teren)
    setNume(props.teren.nume_teren)
    setTipDefault(props.teren.nume_tip)
    setCategorieDefault(props.teren.nume_categorie)
    console.log('CategorieDefault: ', props.teren)
    setSuprafata(props.teren.suprafata)
    setLungime(props.teren.lungime)
    setLatime(props.teren.latime)
    setLocalizare(props.teren.localizare)
    setVecin_dreapta(props.teren.vecin_dreapta)
    setVecin_stanga(props.teren.vecin_stanga)
    setVecin_fata(props.teren.vecin_fata)
    setVecin_spate(props.teren.vecin_spate)
    setFermier(props.teren.fermier)
    setCulturi_anterioare(props.teren.culturi_anterioare)
    setDetalii(props.teren.detalii)
  }, [
    props.teren.id_teren,
    props.teren.nume_teren,
    props.teren.nume_tip,
    props.teren.nume_categorie,
    props.teren.suprafata,
    props.teren.lungime,
    props.teren.latime,
    props.teren.localizare,
    props.teren.vecin_dreapta,
    props.teren.vecin_stanga,
    props.teren.vecin_fata,
    props.teren.vecin_spate,
    props.teren.fermier,
    props.teren.culturi_anterioare,
    props.teren.detalii,
  ])

  const updateTeren = () => {
    console.log('Id este : ', id)
    window.location.reload(false)
    Axios.put('http://localhost:5000/api/teren/updateTerenPJ', {
      id: id,
      nume: nume,
      suprafata: suprafata,
      lungime: lungime,
      latime: latime,
      localizare: localizare,
      vecin_dreapta: vecin_dreapta,
      vecin_stanga: vecin_stanga,
      vecin_fata: vecin_fata,
      vecin_spate: vecin_spate,
      fermier: fermier,
      culturi_anterioare: culturi_anterioare,
      detalii: detalii,
    }).then((response) => {
      alert('update')
    })
  }

  const deleteTeren = (event) => {
    event.preventDefault()
    console.log('id-ul din functia delete la trimitere este: ', id)
    Axios.delete(`http://localhost:5000/api/teren/deleteTerenPJ/${id}`).then(
      (response) => {
        alert('delete')
      }
    )
  }

  const deletHandle = async (altId) => {
    try {
      Axios.delete(`http://localhost:5000/api/teren/deleteTerenPJ/${altId}`)
    } catch (error) {
      toast('Terenul nu a putut fi sters')
    } finally {
      toast('Terenul a fost sters cu succes!')
      const response = await fetch(
        'http://localhost:5000/api/teren/getAllTerenuriPJ'
      )
      const terenuriActualizate = await response.json()
      props.setDatae(terenuriActualizate)
      setRefresh('d')
    }
  }

  const [idTipSelectat, setIdTipSelectat] = useState(0)
  function handleClick(el) {
    setIdTipSelectat(el.id_tip_teren)
  }
  const [idCategorieSelectata, setIdCategorieSelectata] = useState(0)
  function handleClick1(el) {
    setIdCategorieSelectata(el.id_categorie_teren)
  }

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

  return (
    <div>
      <div className='flex flex-row flex-grow gap-8'>
        <div className='flex flex-row'>
          <div>
            <h1 className='font-bold text-lg text-blue-700'>AfisareTeren</h1>
          </div>
        </div>

        <div className='flex flex-row gap-5'>
          <div>
            <Button variant='contained' color='secondary' onClick={openModal}>
              EDITEAZĂ
            </Button>
          </div>
          <div>
            <Button variant='contained' color='success'>
              LUCRĂRI
            </Button>
          </div>
          <div>
            <Button
              variant='contained'
              color='error'
              onClick={() => {
                deletHandle(id)
              }}
            >
              ȘTERGE
            </Button>
          </div>
        </div>
      </div>

      <div className='flex flex-col '>
        <div className='border-b-2 border-black mt-2'>
          <label className='font-bold'>Nume: </label>
          <h1 className='mt-2 text-lg mx-5'>{props.teren.nume_teren}</h1>
        </div>

        <div className='border-b-2 border-black mt-2'>
          <label className='font-bold'>Tip: </label>
          <h1 className='mt-2 text-lg mx-5'>{props.teren.nume_tip}</h1>
        </div>

        <div className='border-b-2 border-black mt-2'>
          <label className='font-bold'>Categorie: </label>
          <h1 className='mt-2 text-lg mx-5'>{props.teren.nume_categorie}</h1>
        </div>

        <div className='border-b-2 border-black mt-2'>
          <label className='font-bold'>Suprafata: </label>
          <h1 className='mt-2 text-lg mx-5'>{props.teren.suprafata}</h1>
        </div>

        <div className='border-b-2 border-black mt-2'>
          <label className='font-bold'>Lungime: </label>
          <h1 className='mt-2 text-lg mx-5'>{props.teren.lungime}</h1>
        </div>

        <div className='border-b-2 border-black mt-2'>
          <label className='font-bold'>Latime: </label>
          <h1 className='mt-2 text-lg mx-5'>{props.teren.latime}</h1>
        </div>

        <div className='border-b-2 border-black mt-2'>
          <label className='font-bold'>Localizare: </label>
          <h1 className='mt-2 text-lg mx-5'>{props.teren.localizare}</h1>
        </div>

        <div className='border-b-2 border-black mt-2'>
          <label className='font-bold'>Vecin dreapta: </label>
          <h1 className='mt-2 text-lg mx-5'>{props.teren.vecin_dreapta}</h1>
        </div>

        <div className='border-b-2 border-black mt-2'>
          <label className='font-bold'>Vecin stanga: </label>
          <h1 className='mt-2 text-lg mx-5'>{props.teren.vecin_stanga}</h1>
        </div>

        <div className='border-b-2 border-black mt-2'>
          <label className='font-bold'>Vecin fata: </label>
          <h1 className='mt-2 text-lg mx-5'>{props.teren.vecin_fata}</h1>
        </div>

        <div className='border-b-2 border-black mt-2'>
          <label className='font-bold'>Vecin spate: </label>
          <h1 className='mt-2 text-lg mx-5'>{props.teren.vecin_spate}</h1>
        </div>

        <div className='border-b-2 border-black mt-2'>
          <label className='font-bold'>Fermier: </label>
          <h1 className='mt-2 text-lg mx-5'>{props.teren.fermier}</h1>
        </div>

        <div className='border-b-2 border-black mt-2'>
          <label className='font-bold'>Culturi anterioare: </label>
          <h1 className='mt-2 text-lg mx-5'>
            {props.teren.culturi_anterioare}
          </h1>
        </div>

        <div className='border-b-2 border-black mt-2'>
          <label className='font-bold'>Detalii: </label>
          <h1 className='mt-2 text-lg mx-5'>{props.teren.detalii}</h1>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel='Exemplu Pagină Modală'
      >
        <Box className='grid grid-cols-2 gap-4'>
          <TextField
            id='outlined-nume-input'
            label='nume'
            type='text'
            name='nume'
            required='required'
            defaultValue={nume}
            onChange={(event) => {
              setNume(event.target.value)
            }}
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
            name='suprafata'
            required='required'
            defaultValue={suprafata}
            onChange={(event) => {
              setSuprafata(event.target.value)
            }}
          />
          <TextField
            id='outlined-lung-input'
            label='Lungime'
            name='lungime'
            required='required'
            defaultValue={lungime}
            onChange={(event) => {
              setLungime(event.target.value)
            }}
          />
          <TextField
            id='outlined-lat-input'
            label='Latime'
            name='latime'
            required='required'
            defaultValue={latime}
            onChange={(event) => {
              setLatime(event.target.value)
            }}
          />
          <TextField
            id='outlined-loc-input'
            label='Localizare'
            name='localizare'
            required='required'
            defaultValue={localizare}
            onChange={(event) => {
              setLocalizare(event.target.value)
            }}
          />
          <TextField
            id='outlined-vecD-input'
            label='Vecin dreapta'
            name='vecin_dreapta'
            required='required'
            defaultValue={vecin_dreapta}
            onChange={(event) => {
              setVecin_dreapta(event.target.value)
            }}
          />
          <TextField
            id='outlined-vecS-input'
            label='Vecin stanga'
            name='vecin_stanga'
            required='required'
            defaultValue={vecin_stanga}
            onChange={(event) => {
              setVecin_stanga(event.target.value)
            }}
          />
          <TextField
            id='outlined-vecF-input'
            label='Vecin fata'
            name='vecin_fata'
            required='required'
            defaultValue={vecin_fata}
            onChange={(event) => {
              setVecin_fata(event.target.value)
            }}
          />
          <TextField
            id='outlined-vecSp-input'
            label='Vecin spate'
            name='vecin_spate'
            required='required'
            defaultValue={vecin_spate}
            onChange={(event) => {
              setVecin_spate(event.target.value)
            }}
          />
          <TextField
            id='outlined-fer-input'
            label='Fermier'
            name='fermier'
            required='required'
            defaultValue={fermier}
            onChange={(event) => {
              setFermier(event.target.value)
            }}
          />
          <TextField
            id='outlined-cul-input'
            label='Culturi anterioare'
            name='culturi_anterioare'
            required='required'
            defaultValue={culturi_anterioare}
            onChange={(event) => {
              setCulturi_anterioare(event.target.value)
            }}
          />
          <TextField
            id='outlined-detalii-input'
            label='Detalii'
            name='detalii'
            required='required'
            defaultValue={detalii}
            onChange={(event) => {
              setDetalii(event.target.value)
            }}
          />
        </Box>
        <div className='flex flex-col gap-8 my-7'>
          <div>
            <Button variant='contained' color='success' onClick={updateTeren}>
              SALVEAZĂ
            </Button>
          </div>
          <div>
            <Button variant='contained' color='secondary' onClick={closeModal}>
              INCHIDE
            </Button>
          </div>
        </div>
      </Modal>
      <ToastContainer />
    </div>
  )
}
export default AfisareTeren
