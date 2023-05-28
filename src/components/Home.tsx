import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavigateFunction, useNavigate } from "react-router-dom";

const baseUrl = "http://localhost:8080";

function Home(){
    const [accounts, setAccounts] = useState([]);
    const navigation : NavigateFunction = useNavigate();


    useEffect(() => {
        localStorage.setItem("logged_user", JSON.stringify(true));
        getAccountData();
    }, []);

    async function getAccountData() {
        const result = await userData();
        setAccounts(result);
    }


    const handleLogOut = () => {
        localStorage.removeItem("jwt");
        localStorage.removeItem("userEmail");
        localStorage.setItem("logged_user", JSON.stringify(false));
        navigation("/login");
    }

    return (
        <div className="container">
            <div className="container border">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <h1 className="navbar-brand">Home</h1>
                        <button className="btn btn-outline-danger" type="button" onClick={handleLogOut}>Log out</button>
                    </div>
                </nav>
            </div>
            <div className="container mt-4">
                <div className="row justify-content-center">
                    <h2>
                        Accounts of {localStorage.getItem("userEmail")}
                    </h2>
                    {accounts.length > 0 ? (
                        <div className="table-responsive">
                            <table className="table table-bordered mx-auto mt-3 table-hover" style={{ width: "80%" }}>
                                <thead >
                                <tr>
                                    <th>Account</th>
                                    <th>Balance</th>
                                </tr>
                                </thead>
                                <tbody>
                                {accounts && accounts.map((account: any, index) => (
                                    <tr key={index}>
                                        <td>{account.accountNumber}</td>
                                        <td>{account.balance}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <p>This user does not have any accounts</p>
                    )}
                </div>
            </div>
        </div>
    );
}


async function userData() {
    const data = await axios.get(
        baseUrl + "/users/getAccounts",
        {
            headers: {
                "Access-Control-Allow-Origin": baseUrl,
                "MediaType": "application/json",
                "Authorization": "Bearer " + localStorage.getItem('jwt')
            }
        }
    );
    console.log(data);
    return data.data;
}

export default Home;