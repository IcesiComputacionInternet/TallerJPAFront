import React, {useEffect, useState} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import { Home } from "../pages/home/Home";
import { Login } from "../pages/login/Login";
import { RouterLayout } from "../common/RouterLayout";

export const AppRouter: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>( () => {
        localStorage.setItem("jwt","")
        localStorage.setItem("emailUser","")
        return false
    })

    useEffect(() => {
        localStorage.setItem("logged_user", JSON.stringify(isLoggedIn))
        console.log("isLoggedIn", isLoggedIn)
    }, [isLoggedIn])

    return (
        <Routes>
            <Route path="/" element={<RouterLayout />}>
                <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
            </Route>
            <Route path="/login" element={<Login setLogin={setIsLoggedIn}/>} />
        </Routes>
    );
};