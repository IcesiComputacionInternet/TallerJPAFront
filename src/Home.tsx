import { NavigateFunction, useNavigate } from "react-router-dom"; 
import axios from "axios"; 
const baseUrl = "http://localhost:9090";
import { useEffect,useState} from "react";
import AccountItem from "./AccountItem";

export default function(){    
    const navigation : NavigateFunction = useNavigate();
    const logout = () => {
        localStorage.removeItem("jwt");
        navigation("/login");
    }
    const fetc = async () => {
        const data = await axios.get(
            baseUrl + "/accounts/getAccounts",
            {
                headers:{
                    "Authorization": "Bearer " + localStorage.getItem("jwt"),
                    "Content-Type": "application/json"
                }
            }
        );
        console.log(data);
    }
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(
            baseUrl + "/accounts/getAccounts",
            {
                headers:{
                    "Authorization": "Bearer " + localStorage.getItem("jwt"),
                    "Content-Type": "application/json"
                }
            }
        ).then(response => {
            if(response.status === 200){
                return response.data;
            }else{
                console.log("F");
            }}).then(data => {
                setData(data.accounts);
            }).catch(error => {
                console.log("error");
            });
        },[]);
    return(
        <div>
            <h1>Home</h1>
            <button className="btn btn-primary" onClick={logout}>Logout</button>
            {data.length === 0 && <h2>No accounts</h2>}
            {data.map((item:any) => (
                <div style={{padding:10}}>
                    <AccountItem accountNumber={item.accountNumber} balance={item.balance}/>
                </div>
            ))
            }
        </div>
    )
}


