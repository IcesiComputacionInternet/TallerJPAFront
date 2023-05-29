import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavigateFunction, useNavigate, Navigate } from 'react-router-dom';
import NavbarComp from './NavbarComp';

interface User {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    role: string;
}

function Home() {

    const [user, setUser] = useState<User>({ firstName: '', lastName: '', phone: '', email: '', role: '' });
    const [Accounts, setAccounts] = useState([]);
    const navigation: NavigateFunction = useNavigate();
    const BaseUrl = "http://localhost:8080";

    useEffect(() => {
        getAccounts();
        getUser();
    }, []);

    async function getAccounts() {
        const accounts = await getAccountsData(BaseUrl);
        console.log(accounts.data);
        setAccounts(accounts.data);
    }

    async function getUser() {
        const user = await getUserData(BaseUrl);
        setUser(user.data);
    }

    if (localStorage.getItem('jwt') === null) {
        return (
            <>
                <h1>Home</h1>
                <h2>No has iniciado sesion</h2>
            </>
        );
    } else {
        return (
            <>
                <div>
                    <NavbarComp />
                </div>
                <div>
                    <div className="container border">
                    <h1>Usuario:</h1>
                    <div className="container">
                        <a >
                            Nombre: {JSON.stringify(user.firstName)}<br />
                            Apellido: {JSON.stringify(user.lastName)}<br />
                            Numero: {JSON.stringify(user.email)}<br />
                            email: {JSON.stringify(user.phone)}<br />
                            role: {JSON.stringify(user.role)}
                        </a>
                    </div>
                    </div>
                    <div className="container border">
                    <h1>Accounts:</h1>
                    <div className="container">
                        {Accounts.map((account: any, index) =>
                        (<a key={index}>
                            Account Number: {account.accountNumber}<br />
                            Balance: {account.balance}<br />
                            Type: {account.type}
                        </a>))}

                    </div>
                    </div>
                </div>
            </>
        );
    }
}


async function getUserData(baseUrl: string) {
    return axios.get(
        baseUrl + "/users/currentUser",
        {
            headers: {
                "Access-Control-Allow-Origin": baseUrl,
                "MediaType": "application/json",
                "Authorization": "Bearer " + localStorage.getItem('jwt')
            }

        }
    )
}

async function getAccountsData(baseUrl: string) {
    return axios.get(
        baseUrl + "/accounts/getUserAccounts/",
        {
            headers: {
                "Access-Control-Allow-Origin": baseUrl,
                "MediaType": "application/json",
                "Authorization": "Bearer " + localStorage.getItem('jwt')
            }
        }
    )
}

export default Home;
