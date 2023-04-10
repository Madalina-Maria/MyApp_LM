import { useCallback } from 'react'
import { toast } from 'react-toastify'

import Axios from 'axios'

Axios.defaults.baseURL = 'http://localhost:5000/api'

export const useAfiseazaUnTeren = ({ url, insertData }) =>
  useCallback(() =>
    Axios.get(url, insertData).then((resp) => {
      console.log(resp.data)
    })
  )
