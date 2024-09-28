import axios from 'axios'
import { setLocalStorage } from '../utilities/handleStorage'

export const getApi = async (URL) => {
  const url = await axios
    .get(URL)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      return error
    })
  return url
}

export const postApi = async (URL, params) => {
  const url = await axios
    .post(URL, params)
    .then((response) => {
      return response.data.token
    })
    .catch((error) => {
      return error
    })
  return url
}

export const apiValidation = (result) => {
  let data = ''
  if (result.status >= 400) {
    data = result.response.data.error
  } else {
    setLocalStorage(result)
  }
  return data
}
