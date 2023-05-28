import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"

interface Props {
    setIsLoggedIn: (value: boolean) => void;
}

function Home( { setIsLoggedIn }: Props) {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("jwt");
        setIsLoggedIn(false);
        navigate("/login");
    };

    return (
        <>
            <h1>Home</h1>
            <button onClick={handleLogout}>Logout</button>
        </>
    );
    
}

export default Home;