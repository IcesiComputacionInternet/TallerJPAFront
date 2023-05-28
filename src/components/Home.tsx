import { useState, useEffect } from "react";
import { getAccountsByUserLoged } from "../services/GetAccounts";

function Home() {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    getAccountsByUserLoged().then((result) => {
      console.log(result);
      setAccounts(result);
    });
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          {accounts.map((account: any) => (
            <div className="card my-2" key={account.accountNumber}>
              <div className="card-body">
                <h3 className="card-title">{account.accountNumber}</h3>
                <p className="card-text">{account.balance}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;