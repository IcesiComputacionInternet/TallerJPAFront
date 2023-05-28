import React, {useState} from "react";
import axios from "axios";
import {NavigateFunction,useNavigate} from "react-router-dom";

const baseUrl="http://localhost:8090";


function Logout(){
    
    const navigation:NavigateFunction= useNavigate();

    const userLogout=async(event:any)=>{
        event.preventDefault();

        localStorage.clear();
        navigation("/login");
    }
    

    return (
       
        <button type="button" className="btn btn-outline-primary" onClick={userLogout}>
            Logout
        </button>
    
    );
};
export default Logout;