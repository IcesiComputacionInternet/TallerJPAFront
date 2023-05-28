import { useState, useEffect } from "react";
import { getAccountsByUserLoged } from "../services/GetAccounts";
import Navbar from "./Navbar";

function Home() {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    getAccountsByUserLoged().then((result) => {
      setAccounts(result);
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            {accounts.map((account: any) => (
              <div className="card my-2" key={account.accountNumber}>
                <div className="card-body">
                  <h3 className="card-title">Cuenta: {account.accountNumber}</h3>
                  <p className="card-text">Balance: {account.balance}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;