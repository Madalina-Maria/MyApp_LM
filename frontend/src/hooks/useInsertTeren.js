import { useCallback } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Axios from 'axios'

Axios.defaults.baseURL = 'http://localhost:5000/api'

export const useInsertTeren = ({ url, insertData }) =>
  useCallback(
    () =>
      Axios.post(url, insertData)
        .then((res) => toast('Date SUNT adaugate cu succes in baza de date'))
        .catch((err) => {
          toast('Datele NU au fost adaugate cu succes!')
        }),

    [url, insertData]
  )
