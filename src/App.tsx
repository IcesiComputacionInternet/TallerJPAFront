import { useState, useEffect } from 'react';
import Login from './components/Login';
import { BrowserRouter,Navigate,Route,Routes } from 'react-router-dom';
import Home from './components/Home';

function App(){
  const [isLoggedIn, setIsLoggedIn] = useState<Boolean>(
    () => localStorage.getItem("jwt") !==null
  )

  const [isLoggedOut, setIsLoggedOut] = useState<Boolean>(
    () => localStorage.getItem("jwt") === null 
  )

  useEffect(() =>{
    localStorage.setItem("logged_user",JSON.stringify(isLoggedIn))
  },[isLoggedIn])

  const login = () => setIsLoggedIn(true)
  const logout = () => setIsLoggedOut(true)

  //console.log("estado de login: ",isLoggedIn)
  //console.log("estado de logout: ",isLoggedOut  )
  //console.log("estado del token: ",localStorage.getItem("jwt"))
  return(
   <BrowserRouter>
    <Routes>
      <Route path='/login' element={isLoggedOut ? <Login setLogin={login}/> :<Navigate to={"/"}/> }/>
      <Route path='/' element={isLoggedIn ? <Home setLogOut={logout}/>: <Navigate to={"/login"}/>}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App;