import { useCallback } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

import Axios from 'axios'

Axios.defaults.baseURL = 'http://localhost:5000/api'

const useLoginUser = ({ url, insertData }) => {
  const navigate = useNavigate()
  return useCallback(
    () =>
      Axios.post(url, insertData)
        .then((res) => {
          const { user } = res.data

          console.log('Asta primesc: ', user)
          toast('Datele de logare sunt corecte')
          localStorage.setItem('user_id', user.id)
          navigate('/homePf')
          console.log(user)
          toast('Date adaugate cu succes in db')
          // localStorage.setItem("user_id", res.data.user)
        })
        .catch((err) => err),

    [url, insertData, navigate]
  )
}
export default useLoginUser
