const baseUrl = "http://localhost:9090";
import React, { useEffect, useState } from "react";
import axios from "axios";
function Home(){
    //This is something called JSX: JavaScript XML this is read by babel js and be converted to JavaScript
   
    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        getUserAccounts();
    }, []);

    async function getUserAccounts() {

        const{data} = await axios.get(
            baseUrl + "/accounts/getList",
            {
                headers:{
                    "Access-Control-Allow-Origin":baseUrl,
                    "MediaType":"application/json",
                    "Authorization":"Bearer "+localStorage.getItem('jwt')
                },
            }
        );
        setAccounts(data);
    }

    return(
        <>
            <h1>Bienvenido</h1>
            <div>
                <p>Estas son tus cuentas:</p>
                {accounts.length > 0 ? (
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Número de cuenta</th>
                            <th>Balance</th>
                            </tr>
                        </thead>
                        <tbody>
                            {accounts.map((acc,index) => (
                            <tr key={acc.accountNumber}>
                                <td>{index + 1}</td>
                                <td>{acc.accountNumber}</td>
                                <td>{acc.balance}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                ):(
                    <p>No tienes cuentas disponibles.</p>
                )}    
            </div>
        </>
    );

}

export default Home
