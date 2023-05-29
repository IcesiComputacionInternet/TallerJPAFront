//import Message from "./Message"; //Import the message component
import { useState, useEffect } from "react";
import Login from "./components/Login.tsx";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home.tsx";
import NotFound from "./components/NotFound.tsx";


function App() {

    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
        () => localStorage.getItem("jwt") !== null
    );

    useEffect(() => {
        if (!isLoggedIn) {
            localStorage.removeItem("jwt")
            localStorage.removeItem("email")
        }
        localStorage.setItem("logged_user", JSON.stringify(isLoggedIn));
    }, [isLoggedIn]);

    const logIn = () => setIsLoggedIn(!isLoggedIn);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login setLogin={logIn} />}></Route>
                <Route
                    path="/"
                    element={isLoggedIn ? <Home setLogin={logIn} /> : <Navigate to="/login" />}
                ></Route>
                <Route
                    path="/*"
                    element={isLoggedIn ? <NotFound /> : <Navigate to="/login" />}
                ></Route>
            </Routes>
        </BrowserRouter>
    );
}
export default App;