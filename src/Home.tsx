import { NavigateFunction, useNavigate } from "react-router-dom"; 

export default function(){

    const navigation : NavigateFunction = useNavigate();
    const logout = () => {
        localStorage.removeItem("jwt");
        navigation("/login");
    }
    return(
        <div>
            <h1>Home</h1>
            <button className="btn btn-primary" onClick={logout}>Logout</button>
        </div>
    )
}