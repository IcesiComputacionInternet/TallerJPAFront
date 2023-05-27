import { useState, useEffect } from 'react';
import Login from './Login';
import { BrowserRouter,Navigate,Route,Routes } from 'react-router-dom';


import Message from "./Message";
import ListGroup from './ListGroup';

function App(){
  const [isLoggedIn, setIsLoggedIn] = useState<Boolean>(
    () => localStorage.getItem("jwt") !==null
  )

  useEffect(() =>{
    localStorage.setItem("logged_user",JSON.stringify(isLoggedIn))
  },[isLoggedIn])

  const login = () => setIsLoggedIn(true)

  return(
   <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login setLogin={login}/>}/>
      <Route path='/' element={isLoggedIn ? <Message message={'welcome'}/>: <Navigate to={"/login"}/>}/>
      <Route path='/list ' element={isLoggedIn ? <ListGroup/>: <Navigate to={"/login"}/>}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App;