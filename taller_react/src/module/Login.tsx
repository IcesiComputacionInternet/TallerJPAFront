import React,{useState} from "react";
import axios from "axios";
import {NavigateFunction,useNavigate} from "react-router-dom";

const baseURL = "http://localhost:8080";

interface Props {
    setLogin: (accepted:boolean) => void;
}

const login =({setLogin}: Props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigation : NavigateFunction = useNavigate();
   
    const handleSumbit = async (e: any) => {
        event?.preventDefault();
        const {data} = await axios.post(
            baseURL+"/token", 
            {
                username, password
            },
            {
                headers: {
                    "Access-Control-Allow-Origin": baseURL,
                }
            }
        );
        if(data.token){
            localStorage.setItem("jwt", data.token);
            
            setLogin(true);
            navigation("/");
        }else{
            console.log(data);
            alert("invalid credentials");
        }
    };

   


    return(
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title">
                                    login
                                </h3>
                                <form onSubmit={handleSumbit}>
                                    <div className="form-group">
                                        <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="username" 
                                        value={username} 
                                        onChange={(e) => setUsername(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <input 
                                        type="password"
                                        className="form-control"
                                        placeholder="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                    <button type="submit" className="btn btn-primary">
                                        login
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default login;
