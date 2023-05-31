import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"
import "../styles/Home.css";

interface Props {
    setIsLoggedIn: (value: boolean) => void;
}

function Home( { setIsLoggedIn }: Props) {

    const navigate = useNavigate();
    const [userAccountsData, setAccountsData] = useState<any[]>([]);

    const handleLogout = () => {
        localStorage.removeItem("jwt");
        setIsLoggedIn(false);
        navigate("/login");
    };

    const fetchUserData = async () => {
        const token = localStorage.getItem("jwt");
        if (token) {
            try {
                const response = await axios.get("http://localhost:8080" + "/accounts", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setAccountsData(response.data);
                return response.data;
            } catch (error) {
                console.log(error);
                return null;
            }
        }
    }

    useEffect (() => {
        fetchUserData()
        .then((data) => {
            setAccountsData(data);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
    }, []);

    return (
        <div className="container">
          <h1>Home</h1>
          <h2>User Accounts:</h2>
          <ul className="list-group">
            {userAccountsData.map((account, index) => (
              <li key={index} className="list-group-item account-item">
                <span className="account-label">Account Number:</span>{" "}
                {account.accountNumber}
                <br />
                <span className="account-label">Balance:</span> {account.balance}
              </li>
            ))}
          </ul>
          <button onClick={handleLogout} className="btn btn-primary btn-logout">
            Logout
          </button>
        </div>
    );
    
}

export default Home;