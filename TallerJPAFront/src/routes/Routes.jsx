import React from 'react'
import Home from '../pages/home/Home'
import Login from '../pages/login/Login'
import {Navigate, Route, Routes} from 'react-router-dom'

export const FrontRouter = () => {

  const ProtectedRoute = ({ children }) => {
    if (localStorage.getItem('jwt') === null) {
        return <Navigate to="/login" />
    } else {
        return children
    }
}

  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute>
        <Home/>
      </ProtectedRoute>}>
      </Route>
      <Route path="/login">
        <Route index element={<Login />} />
      </Route>
    </Routes>
  )
}
