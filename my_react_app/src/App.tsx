//import Message from "./Message"; //Import the message component
import{useState, useEffect} from "react";
import Login from "./Login";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Home from "./components/Home.tsx";
import NotFound from "./components/NotFound.tsx";


//Same as the other component we will function based components
function App(){

    const[isLoggedIn, setIsLoggedIn] = useState<boolean>(
        () => localStorage.getItem("jwt") !== null
    );

    useEffect(() => {
        localStorage.setItem("logged_user", JSON.stringify(isLoggedIn));
    }, [isLoggedIn]);

    const logIn = () => setIsLoggedIn(true);

    const handleLogout = () => {
        localStorage.removeItem("jwt");
        setIsLoggedIn(false);
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login setLogin={logIn}/>}></Route>
                <Route
                    path="/"
                    element={
                        isLoggedIn ? (
                            <>
                              <Home />
                              <button type="button" className="btn btn-primary" onClick={handleLogout}> Log out </button>
                            </>
                          ) : (
                            <Navigate to="/login"/>
                          )
                        }  
                ></Route>
                <Route
                    path="/*"
                    element={isLoggedIn ? <NotFound/> : <Navigate to="/login"/>}
                ></Route>        
            </Routes>
        </BrowserRouter>
    );
}
export default App;