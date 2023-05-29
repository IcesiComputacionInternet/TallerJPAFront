import axios from "axios";
import { useEffect, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
const baseUrl = "http://localhost:8081";

interface Props {
    setLogin: () => void;
}

const Home = ({ setLogin }: Props) => {
    const [accounts, setAccounts] = useState([]);
    useEffect(() => {
        const load = async () => {
            const { data } = await axios.get(
                baseUrl + `/users/${localStorage.getItem("email")}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + localStorage.getItem("jwt")
                    }
                }
            ).then(async response => {
                return await axios.get(
                    baseUrl + `/accounts/${response.data.userId}`,
                    {
                        headers: {
                            "MediaType": "application/json",
                            "Authorization": "Bearer " + localStorage.getItem("jwt")
                        }
                    }
                )
            });
            setAccounts(data)
        }
        load();
    }, [])
    const navigation: NavigateFunction = useNavigate();
    const logout = async () => {
        setLogin();
        navigation("/");
    };

    return (
        <div style={{display: "flex", flexDirection: "column", justifyContent:"center", height:'100vh'}}>
            <div style={{ display: "flex", alignSelf: "center", justifyContent:"center", marginBottom:"2%", width:'100%'}}>
                <h2 style={{marginRight:'2%'}}>Your accounts</h2>
                <button className="btn btn-dark" onClick={logout}>Logout</button>
            </div>
            <div style={{ display: "flex", justifyContent: "space-evenly"}}>
                {accounts.map((account) => (
                    <div
                        key={account.accountNumber}
                        className="card"
                        style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">Account #{account.accountNumber}</h5>
                            <p className="card-text">Balance: {account.balance}<br />Type: {account.type}</p>
                        </div>
                    </div>
                ))
                }
            </div >
        </div >);
}
export default Home;