import React from 'react'
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'

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
      <Navbar context={context} />
      <Outlet context={context} />
    </div>
  )
}

export default Layout
