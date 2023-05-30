import { useState, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    () => localStorage.getItem("jwt") !== null
  );

  const [isLoggedOut, setIsLoggedOut] = useState<boolean>(
    () => localStorage.getItem("jwt") === null
  );

  useEffect(() => {
    localStorage.setItem("logged_user", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(true);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Home setLogOut={logout}welcome="Welcome Home"/> : <Navigate to="/login"/>}/>
        <Route path="/login" element={isLoggedOut ? <Login setLogin={login}/> : <Navigate to={"/"}/>}/>
      </Routes>
    </BrowserRouter>
  );
}



export default App;