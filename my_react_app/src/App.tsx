import {useState, useEffect} from "react";
import Login from "./component/Login";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom"


//Same as the other component we will function based components 
function App(){
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    ()=> localStorage.getItem("jwt") !== null
  );

  useEffect(() => {
    localStorage.setItem("logged_user", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  const logIn = () => setIsLoggedIn(true);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login setLogin = {logIn}/>}></Route>

      </Routes>
    </BrowserRouter>
  );
  

}

export default App;