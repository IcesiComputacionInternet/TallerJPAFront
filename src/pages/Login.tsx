import React, { useState } from "react"; 
import axios from "axios"; 
import { NavigateFunction, useNavigate } from "react-router-dom"; 


const baseUrl = "http://localhost:5173";

interface Props { 
    setLogin: () => void; 
} 

const Login = ({ setLogin }: Props) => { 
    const [username, setUsername] = useState(""); 
    const [password, setPassword] = useState(""); 
    const navigation : NavigateFunction = useNavigate(); 


    const handleSubmit = async (e: any) => { 
        e.preventDefault();

        const { data } = await axios.post(
            baseUrl + "/token",
            {
                username,
                password,
            },
            {
                headers:{
                    "Access-Control-Allow-Origin": "baseUrl",
                },
            }
        );

        if(data.token){
            localStorage.setItem("jwt", data.token);
            setLogin();
            navigation("/");
        } else {
            alert("Invalid username or password");
        }
    };

    return( 
    <div className="login-container">
      <div className="login-card">
        <div className="login-card-body">
          <h2 className="login-card-title">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="login-form-group">
              <input
                type="text"
                className="login-form-control"
                placeholder="Username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>
            <div className="login-form-group">
              <input
                type="password"
                className="login-form-control"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <button type="submit" className="login-btn-primary">Login</button>
          </form>
        </div>
      </div>
    </div>
    );

};
export default Login;