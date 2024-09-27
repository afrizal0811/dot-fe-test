import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Login from './pages/login/Login'
import Users from './pages/users/Users'
import ViewUser from './pages/users/ViewUser'
const RouteHandler = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          path='/'
          element={<Login />}
        />
        <Route
          path='/users'
          element={<Users />}
        />
        <Route
          path='/users:id'
          element={<ViewUser />}
        />
        {/* <Route
          element={<NotFound />}
          path='404'
        />
        <Route
          element={
            <Navigate
              replace
              to='404'
            />
          }
          path='*'
        /> */}
      </Route>
    </Routes>
  )
}

export default RouteHandler
