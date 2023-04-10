import { useCallback } from 'react'
import { toast } from 'react-toastify'

import Axios from 'axios'

Axios.defaults.baseURL = 'http://localhost:5000/api'

export const useUpdateTeren = ({ url, insertData }) =>
  useCallback(
    () =>
      Axios.put(url, insertData)
        .then((res) => toast('Date adaugate cu succes in db'))
        .catch((err) => err),

    [url, insertData]
  )
