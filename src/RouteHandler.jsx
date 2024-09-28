import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Login from './pages/login/Login'
import NotFound from './pages/not_found/NotFound'
import Users from './pages/users/Users'
import ViewUser from './pages/users/ViewUser'

const RouteHandler = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<Login />}
      />
      <Route
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
      />
      <Route element={<Layout />}>
        <Route
          path='/users'
          element={<Users />}
        />
        <Route
          path='/users/:id'
          element={<ViewUser />}
        />
      </Route>
    </Routes>
  )
}

export default RouteHandler
