import {useState} from "react";
import axios from "axios";
import {NavigateFunction, useNavigate} from "react-router-dom";
const baseUrl = "http://localhost:8080";

interface Props {
    setLogin: (logged: boolean) => void;
}

const Login = ({setLogin}:Props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigation : NavigateFunction = useNavigate();

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        const {data} = await axios.post(
            baseUrl + "/token",
            {
                username,
                password
            }
        );

        if (data.token) {
            localStorage.setItem("jwt", data.token);
            setLogin(true);
            navigation("/");
        } else {
            alert("Invalid username or password");
        }
    };

    return (
        <div className="container" style={{ padding: '10px' }}>
            <div className="row justify-content-center" style={{ padding: '10px' }}>
                <div className="col-md-6" style={{ padding: '10px' }}>
                    <div className="card" style={{ padding: '10px' }}>
                        <div className="card-body" style={{ padding: '10px' }}>
                            <h3 className="card-title" style={{ paddingBottom: '10px' }}>Login</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group" style={{ paddingBottom: '10px' }}>
                                    <input 
                                        type="text" 
                                        className="form-control"
                                        placeholder="Username"
                                        value={username}
                                        onChange={(event) => setUsername(event.target.value)}/>
                                </div>
                                <div className="form-group" style={{ paddingBottom: '10px' }}>
                                    <input 
                                        type="password" 
                                        className="form-control"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(event) => setPassword(event.target.value)}/>
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
}

export default Login;