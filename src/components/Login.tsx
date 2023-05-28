import { useState } from 'react'
import { NavigateFunction, useNavigate} from "react-router-dom";
import { login } from '../services/Login';
interface Props {
    setLogin: () => void;
}

const Login = ({setLogin}: Props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigation: NavigateFunction = useNavigate();

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        login(username, password).then((result) => {
            if (result) {
                setLogin();
                navigation("/");
            }else {
                alert("Invalid username or password");
            }
        });
    };

    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-md-6'>
                    <div className='card'>
                        <div className='card-body'>
                            <h3 className='card-title'>Login</h3>
                            <form onSubmit={handleSubmit}>
                                <div className='form-group'>
                                    <input 
                                        type="text"
                                        className='form-control'
                                        placeholder='Username'
                                        value={username}
                                        onChange={(event) => setUsername(event.target.value)} 
                                    />
                                </div>
                                <div className='form-group'>
                                    <input
                                        type="password"
                                        className='form-control'
                                        placeholder='Password'
                                        value={password}
                                        onChange={(event) => setPassword(event.target.value)}
                                    />
                                </div>
                                <button 
                                    type='submit'
                                    className='btn btn-primary btn-block'
                                >
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