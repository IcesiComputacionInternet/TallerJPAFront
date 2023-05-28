import React, {useState, useEffect} from "react";
import axios from "axios";
import {NavigateFunction,useNavigate} from "react-router-dom";
import Logout from "./Logout";

const baseUrl="http://localhost:8090";


function Home(){
    
    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
    const fetchItems = async () => {
        var token=localStorage.getItem("jwt");
        const response = await axios.get(
            baseUrl + "/accounts",
            { headers: { 
                "Access-Control-Allow-Origin":baseUrl,
                "MediaType":"application/json",
                Authorization: `Bearer ${token}` 
            } }
            );
        const responseData = response.data;
        setAccounts(responseData);
    };

    fetchItems();
    }, []);

    
    return (
        <div>
          <div
            className="p-3 navbar bg-body-tertiary"
            style={{ backgroundColor: "#e3f2fd" }}
          >
            <div className="col-1">
              <h4>Home</h4>
            </div>
            <div className="col-1">
              <Logout />
            </div>
          </div>
          <div className="m-3">
            <h2>My Accounts</h2>
          </div>
    
          <div className="m-3">
            {accounts.length === 0 ? (
              <h6>No accounts found</h6>
            ) : (
              accounts.map((account) => (
                <div key={account.accountNumber} className="card m-3">
                  <div className="card-body">
                    <h5 className="card-title">{account.accountNumber}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">
                      $ {account.balance}
                    </h6>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      );
}
export default Home;