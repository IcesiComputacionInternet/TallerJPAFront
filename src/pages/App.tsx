import { useEffect, useState } from 'react'
import '../styles/App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Home from './Home';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    () => localStorage.getItem("jwt") !== null
  );
  
  var token = localStorage.getItem("jwt")
  console.log(token)
  useEffect(() => {
    localStorage.setItem("logged_user", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  const logIn = () => setIsLoggedIn(true);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login setLogin={logIn}/>}></Route>
        <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/"/>}/>
      </Routes>
    </BrowserRouter>
  );
}
    

export default App;
