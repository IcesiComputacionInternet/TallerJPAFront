import './App.css'
import Message from './Message'
import { useState, useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import NotFound from './NotFound';  

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    () => localStorage.getItem("jwt") !== null
  );
  
  useEffect(() => {
    localStorage.setItem("logged_user", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  const logIn = () => {
    setIsLoggedIn(true)
    // Redirect the user to /Accounts/getAccounts
    //window.location.href = '/Accounts/getAccounts';
  };


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login setLogin={logIn} />}></Route>
        <Route 
        path = "/"
        element = {isLoggedIn ? <Home/> : <Navigate to="/login" />}
        ></Route>
        <Route
        path = "/*"
        element = {isLoggedIn ? <NotFound/> : <Navigate to="/login" />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
