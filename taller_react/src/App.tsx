//import Message from "./Message";
import {useState, useEffect} from "react";
import Login from "./module/Login";
import { BrowserRouter, Navigate, Route,Routes} from "react-router-dom";
import Home from "./module/Home";
import NotFound from "./module/NotFound";
import { redirect } from "react-router-dom";



function App(){
  const [isLogged, setIsLogged] = useState<boolean>(
    () => localStorage.getItem("jwt") !== null
  );

  useEffect(() => {
    localStorage.setItem("logged_user", JSON.stringify(isLogged));
  }, [isLogged]);

  const logIn = () => setIsLogged(true);

  return (
   <BrowserRouter>
    <Routes>
      <Route  path="/login" element={<Login setLogin={setIsLogged}/>} />
      <Route path="/" element={isLogged ? <Home/> : <Navigate to="/login"/>} />
      <Route path="*" element={isLogged ? <NotFound/> : <Navigate to="/login"/>} />
    </Routes>
   </BrowserRouter>
  );
}

export default App; 