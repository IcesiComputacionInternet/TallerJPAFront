import { useState, useEffect } from "react";
import Login from "./components/Login";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
// import NotFound from "./components/NotFound";

function App(){

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>( () => {
    localStorage.setItem("jwt","")
    localStorage.setItem("emailUser","")    
    return false
  })
  
  useEffect(() => {
    //console.log("use effect: "+ isLoggedIn)
    localStorage.setItem("logged_user", JSON.stringify(isLoggedIn))
  }, [isLoggedIn])

  //const logIn = () => setIsLoggedIn(true);

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login setLogin={setIsLoggedIn} />} />
        <Route
          path="/"
          element={isLoggedIn ? <Home setLogin={setIsLoggedIn}/> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App;