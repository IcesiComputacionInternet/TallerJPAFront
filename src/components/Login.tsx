import { useState } from "react";
import axios from "axios";
import { NavigateFunction, useNavigate } from "react-router-dom";

const baseUrl = "http://localhost:8081";

interface Props {
    setLogin: (value: boolean) => void;
}

const Login = ({ setLogin }: Props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigation : NavigateFunction = useNavigate();
    var token: string

    const handleSubmit = (event: any) => {
        event.preventDefault();

        axios.post(
            baseUrl + "/token",
            {
                username,
                password
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": baseUrl
                }
            }
        ).then((response) => {
            token = response.data;
            console.log("Token obtained: ",token);
            verifyToken()
        }).catch((error) => {
            console.log(error);
            verifyToken()
        })


        console.log({ username, password })
    }

    const verifyToken =  () => {
        if(token) {
            //Redirect to the home page
            localStorage.setItem("jwt", token);
            localStorage.setItem("username", username);
            setLogin(true);
            navigation("/");
        }else {
            //Show error message
            alert("Invalid credentials");
        }
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title text-center">Login</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Username"
                                        value={username}
                                        onChange={(event) => setUsername(event.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(event) => setPassword(event.target.value)}
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary">
                                    Login
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;