import {useState} from "react";
import {NavigateFunction, useNavigate} from "react-router-dom";
const baseUrl = "http://localhost:8080";
import axios from "axios";

interface Props{
    setLogin: (isLogged: boolean) => void;
}

const Login = ({setLogin}: Props) => {
    localStorage.clear()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigation : NavigateFunction = useNavigate();

    const handleSubmit = async (event: any) => {
        console.log(username, password)
      event.preventDefault();

      const {data} = await axios.post (
        baseUrl + "/login",
        {
            username,
            password,
        },
        {
            headers:{
                "Access-Control-Allow-Origin": baseUrl,
            },
        }
      );

      if(data.token){
        localStorage.setItem("jwt", data.token);
        setLogin(true);
        navigation("/home"); 
      }else{
        alert("Invalid username or password");
      }
    };
    return(
            <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">Login</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                      />
                    </div>
                    <div className="form-group mb-3">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                      />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                      Login
                    </button>
                  </form>
                </div>
              </div>
            </div>
          );
          
    
}

export default Login;