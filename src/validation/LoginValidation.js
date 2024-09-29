import { useEffect, useState } from 'react'
import { apiValidation, postApi } from '../api/handleApi'
import { loginUrl } from '../constants/constants'
import isObjectEmpty from '../utilities/isObjectEmpty'
import validateForm from './error_validation/login'

const LoginValidation = (navigate, emailField, passwordField) => {
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [value, setValue] = useState({
    email: '',
    password: '',
  })

  const isEmailTouched = emailField?.touched
  const isPasswordTouched = passwordField?.touched
  const isFieldsTouched = isEmailTouched || isPasswordTouched

  useEffect(() => {
    if (isSubmitted) setErrors(validateForm(value))
  }, [value, isSubmitted])

  const handleFinish = async () => {
    setIsLoading(true)
    setIsSubmitted(true)
    setErrors(validateForm(value))
    const url = process.env.REACT_APP_BASE_URL + loginUrl
    console.log('url :', url);
    if (isObjectEmpty(errors) && isFieldsTouched) {
      const result = await postApi(url, value)
      console.log('result :', result);
      const isError = apiValidation(result)
      console.log('isError :', isError);
      if (isError === '') {
        navigate('/users')
      } else {
        setErrors((prev) => ({
          ...prev,
          failedAlert: isError,
        }))
      }
    }
    setIsLoading(false)
  }

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    })
  }
  return {
    errors,
    handleChange,
    handleFinish,
    isLoading,
  }
}

export default LoginValidation
