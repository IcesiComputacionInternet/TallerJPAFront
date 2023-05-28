import { useState } from 'react'
import { NavigateFunction, useNavigate} from "react-router-dom";
import { login } from '../services/Login';
import ToastAlert from './ToastAlert';

interface Props {
    setLogin: () => void;
}

const Login = ({setLogin}: Props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showToast, setShowToast] = useState(false);
    const [response, setResponse] = useState("");

    const navigation: NavigateFunction = useNavigate();
    
    const handleShowToast = () => {
      setShowToast(true);
    };
    const handleCloseToast = () => {
      setShowToast(false);
    };

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        login(username, password).then((result) => {
            if (result) {
                setLogin();
                navigation("/");
            }
        }).catch((error) => {
            handleShowToast();
            if(error.response.status === 400) {
                console.log(error.response.status);
                setResponse("El correo o la contraseña no cumplen con las condiciones");
            }else if(error.response.status === 401) {
                console.log(error.response.status);
                setResponse("El correo o la contraseña son incorrectos");
            }
        });
    };

    return (
        <div className='container d-flex align-items-center' style={{ height: "80vh"}}>
            <div className='row justify-content-center w-100'>
                <div className='col-md-6'>
                    <h1 className="display-4 text-center mb-4" 
                        style={{ fontWeight: "bold", 
                                background: "linear-gradient(to right, #ffff00, #e52e71)", 
                                WebkitBackgroundClip: "text", 
                                WebkitTextFillColor: "transparent" }}>Icesi Accounts</h1>
                    <div className='card'>
                        <div className='card-body text-center'>
                            <h3 className='card-title'>Login</h3>
                            <form onSubmit={handleSubmit}>
                                <div className='form-group my-2'>
                                    <input 
                                        type="text"
                                        className='form-control'
                                        placeholder='Username'
                                        value={username}
                                        onChange={(event) => setUsername(event.target.value)} 
                                    />
                                </div>
                                <div className='form-group my-2'>
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
                                    className='btn btn-primary btn-block my-2'
                                >
                                    Login
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {showToast && (
            <div className="position-fixed top-50 start-50 translate-middle">
                <ToastAlert message={response} onClose={handleCloseToast} />
            </div>
            )}
        </div>
    );
};

export default Login;