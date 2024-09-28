import React from 'react'
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'
import NavigationBar from './components/navigation_bar/NavigationBar'

const Layout = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const params = useParams()
  const context = {
    navigate,
    pathname,
    params,
  }
  return (
    <div>
      <NavigationBar context={context} />
      <Outlet context={context} />
    </div>
  )
}

export default Layout
