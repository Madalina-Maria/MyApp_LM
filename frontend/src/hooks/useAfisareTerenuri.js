import { useCallback } from 'react'


import Axios from 'axios'

Axios.defaults.baseURL = 'http://localhost:5000/api'

export const useAfisareTerenuri = ({ url}) =>
  useCallback(
    () =>
      Axios.get({url}).then(resp => {

    console.log(resp.data);
})
  ) 
