export const setLocalStorage = (data) => {
  localStorage.setItem('token', data)
}

export const getLocalStorage = (name) => {
  return localStorage.getItem(name)
}

export const deleteLocalStorage = () => {
  localStorage.clear()
}
