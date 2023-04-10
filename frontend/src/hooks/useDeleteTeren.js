import { useCallback } from 'react'
import { toast } from 'react-toastify'

import Axios from 'axios'

Axios.defaults.baseURL = 'http://localhost:5000/api'

export const useDeleteTeren = ({ url, insertData }) =>
  useCallback(() =>
    Axios.delete(url, insertData).then((resp) => {
      console.log(resp.data)
    })
  )
