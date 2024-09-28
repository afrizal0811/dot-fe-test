const validateForm = (value) => {
  let errors = {}
  const invalidEmail = (data) => /^\S+@\S+$/.test(data)

  if (!value.email) {
    errors.email = 'This field is required'
  } else if (!invalidEmail(value.email)) {
    errors.email = 'Input correct email'
  }

  if (!value.password) {
    errors.password = 'This field is required'
  }

  return errors
}

export default validateForm
