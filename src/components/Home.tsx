import React, { useState } from "react";
import axios from "axios";
import { NavigateFunction, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'

const baseUrl = "http://localhost:8080";

function Home() {
    const navigation : NavigateFunction = useNavigate();

    const handleLogOut = () => {
        localStorage.removeItem("jwt");
        navigation("/login");
    }

    return (
        <div className="container border">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand">Home</a>
                    <button className="btn btn-outline-danger" type="button" onClick={handleLogOut}>Log out</button>
                </div>
            </nav>
        </div>
    );
}


async function userData() {
    const {data} = await axios.get(
        baseUrl + "/users/{userEmail}",
        {
            headers: {
                "Access-Control-Allow-Origin": baseUrl,
                "MediaType": "application/json",
                "Authorization": "Bearer " + localStorage.getItem('jwt')
            }
        }
    );
    return (data);
}

export default Home;