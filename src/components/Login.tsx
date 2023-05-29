import { useState } from "react";
import axios from "axios";
import sweetalert from 'sweetalert2'
import { NavigateFunction, useNavigate } from "react-router-dom";
const baseUrl = "http://localhost:8081";

interface Props {
    setLogin: () => void;
}

const Login = ({ setLogin }: Props) => {
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigation: NavigateFunction = useNavigate();

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const response = await axios.post(
            baseUrl + "/token",
            {
                userName,
                password,
            }
        ).catch(err => { return err.response });
        if (response === undefined) {
            await sweetalert.fire({
                icon: 'error',
                text: 'Server is down!',
                showConfirmButton: false,
                timer: 1000
            });
        } else if (response.status === 200) {
            const { data } = response
            localStorage.setItem("jwt", data.token);
            localStorage.setItem("email", userName)
            setLogin();
            navigation("/");
        } else if (response.status === 500) {
            await sweetalert.fire({
                icon: 'warning',
                text: 'Username or password incorrect!',
                showConfirmButton: false,
                timer: 1000
            });
        }
    };

    return (
        <div className="container" style={{ display: "flex", justifyContent: "center", alignItems: 'center', height: '100vh' }}>
            <div className="row justify-content-center">
                <div className="col-md-6" style={{ width: '100%' }}>
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title">Login</h3>
                            <form onSubmit={handleSubmit} style={{ display: 'inline-block' }}>
                                <div className="form-group" style={{ marginBottom: '2%' }}>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Username"
                                        value={userName}
                                        onChange={(event) => setUsername(event.target.value)}
                                    />
                                </div>
                                <div className="form-group" style={{ marginBottom: '2%' }}>
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(event) => setPassword(event.target.value)}
                                    />
                                </div>
                                <button type="submit" className="btn btn-dark">
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