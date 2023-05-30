import { useState, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import SignIn from "./components/SignIn";

function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    () => localStorage.getItem("jwt") !== null
  );

  useEffect(() => {
    localStorage.setItem("logged_user", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  const login = () => setIsLoggedIn(true);
  //const logout = () => setIsLoggedIn(false);

  return (
    <BrowserRouter>
        <Routes>
          <Route 
            path="/" element={isLoggedIn ? <Home welcome="Welcome Home"/> : <Navigate to="/login"/>}
          ></Route>
          <Route 
            path="/*" element={isLoggedIn ? <Navigate to="/notfound"/> : <Navigate to="/login"/>}
          ></Route>
          <Route path="/login" element={<Login setLogin={login}/>}></Route>
          <Route path="/home" element={<Home welcome="Welcome Home"/>}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
        </Routes>
    </BrowserRouter>
  );
}



export default App;