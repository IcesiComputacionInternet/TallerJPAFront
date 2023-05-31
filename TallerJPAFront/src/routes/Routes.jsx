import React from 'react'
import Home from '../pages/home/Home'
import Login from '../pages/login/Login'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'

export const FrontRouter = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    localStorage.setItem("jwt", "")
    localStorage.setItem("email", "")
    return false
  })

  useEffect(() => {
    localStorage.setItem("logged_user", JSON.stringify(isLoggedIn))
  }, [isLoggedIn])

  const ProtectedRoute = ({ children }) => {
    if (localStorage.getItem('jwt') === null || !isLoggedIn) {
      return <Navigate to="/login" />
    } else {
      return children
    }
  }

  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute>
        <Home />
      </ProtectedRoute>}>
      </Route>
      <Route path="/login">
        <Route index element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
      </Route>
    </Routes>
  )
}
