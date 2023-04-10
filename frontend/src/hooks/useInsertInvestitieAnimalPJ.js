import { useCallback } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Axios from 'axios'

Axios.defaults.baseURL = 'http://localhost:5000/api'

export const useInsertInvestitieAnimalPJ = ({ url, insertData }) =>
  useCallback(
    () =>
      Axios.post(url, insertData)
        .then((res) => toast('Date adaugate cu succes in db'))
        .catch((err) => {
          toast('Datele nu au fost adaugate cu succes!')
        }),

    [url, insertData]
  )
