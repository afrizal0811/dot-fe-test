import React from 'react'
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'
// import NavigationBar from './components/navigation_bar/NavigationBar'
import { getLocalStorage } from './utilities/handleStorage'

const Layout = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const isLoggin = getLocalStorage('token')
  const params = useParams()
  const context = {
    navigate,
    pathname,
    params,
    isLoggin,
  }
  return (
    <div>
      {/* <NavigationBar context={context} /> */}
      <Outlet context={context} />
    </div>
  )
}

export default Layout
