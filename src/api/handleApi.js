import axios from 'axios'
import { setLocalStorage } from '../utilities/handleStorage'

export const getApi = async (URL) => {
  const url = await axios
    .get(URL)
    .then((response) => {
      return response
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
      return response.data
    })
    .catch((error) => {
      return error
    })
  return url
}

export const apiValidation = (result) => {
  if (result.status >= 400) {
    return result
  } else {
    setLocalStorage(result.token)
    return result
  }
}
