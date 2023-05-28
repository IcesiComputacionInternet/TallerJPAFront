import { useState} from 'react';
import axios from 'axios';
import { NavigateFunction,useNavigate } from 'react-router-dom';
const baseUrl =import.meta.env.VITE_URL_API;

interface Props{
    setLogin: () => void;
    
}

interface Data{
    token: string | undefined
}

const Login = ({setLogin} : Props) =>{
    const [userName,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const navigation : NavigateFunction = useNavigate()
    var data : Data = {token: undefined}
    

    const handleSubmit = (event:any) => {
       event.preventDefault()
       axios.post(
        baseUrl+ "/auth/login",
        {
            userName,
            password
        },
        {
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin":baseUrl
            }
        }
        
       ).then((res) =>{
            //console.log("this is the res ",res.data)
            data = res.data
            checkLogin()
       }).catch((err) =>{
           // console.log(err)
            checkLogin()
       })

      
        
    }


    const checkLogin = () =>{
        //console.log(data)
        if(data.token){
             localStorage.setItem("jwt", data.token)
             setLogin()
             navigation("/")
        }else{
         alert("Invalid username or password")
 
        }
    }
    return(
        <>
            <div className="container">
               <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title">Login</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder='Username'
                                    value={userName}
                                    onChange={(event) => setUsername(event.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <input 
                                    type="password" 
                                    className="form-control" 
                                    placeholder='Password'
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}
                                    />
                                </div>
                                <button type='submit' className='btn btn-primary'>
                                    Login
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
               </div>
            </div>
        
        </>
    )
}


export default Login




