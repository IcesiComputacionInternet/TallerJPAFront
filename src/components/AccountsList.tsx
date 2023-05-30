import { useState, useEffect } from "react";
import axios from "axios";
const baseUrl = "http://localhost:8081";

interface Account {
    accountNumber: string;
    balance: number;
}

export default function AccountsList(){
    const [accounts, setAccounts] = useState<(Account)[]>([]);
    const token = localStorage.getItem("jwt");


    useEffect(() => {
        fetchAccounts();
    }, []);

    const fetchAccounts = async () => {
        try {
            const response = await axios.get(baseUrl + "/accounts/all", 
            { 
                headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + token,
                "Access-Control-Allow-Origin": baseUrl
                }
            }
            );
            console.log("Accounts fetched: ", response.data)
            const mappedAccounts = response.data.map(({ accountNumber, balance }: { accountNumber: string, balance: number }) => ({
                accountNumber,
                balance,
              }));
              setAccounts(mappedAccounts);
        } catch (error) {
            console.log('Error fetching account data:', error);
        }
    };

    return (
        <table className="table">
            <thead>
            <tr>
                <th>Account Number</th>
                <th>Balance</th>
            </tr>
            </thead>
            <tbody>
            {accounts?.map((account) => (
            <tr key={account.accountNumber}>
              <td>{account.accountNumber}</td>
              <td>{account.balance}</td>
            </tr>
          ))}
            </tbody>
        </table>
    );
};

    