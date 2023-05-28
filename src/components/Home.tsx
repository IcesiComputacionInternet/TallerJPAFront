import { useEffect, useState } from "react";
import axios from "axios";
const baseUrl = "http://localhost:8090";

interface Props {
  setLogin: (value: boolean) => void;
}
const Home = ({ setLogin }: Props) => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseUrl}/accounts/allAccounts`, {
        headers: {
          "Access-Control-Allow-Origin": baseUrl,
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
      })
      .then((response) => {
        if (response) {
          setAccounts(response.data);
        }
      })
      .catch((error) => {
        console.error("Failed to fetch account data", error);
      });

    console.log(accounts);
  }, []);

  const onSubmitLogOut = () => {
    setLogin(false);
    localStorage.setItem("jwt", "");
    localStorage.setItem("emailUser", "");
  };

  return (
    <div className="container">
      <div className="text-center">
        <h3 className="font-family" style={{ marginTop: "50px" }}>
          Lista de cuentas del usuario: {localStorage.getItem("emailUser")}
        </h3>
      </div>

      <div className="text-right">
        <button
          type="button"
          className="btn btn-primary"
          onClick={onSubmitLogOut}
          style={{ marginTop: "10px", marginBottom: "10px" }}
        >
          Salir
        </button>
      </div>

      <div className="table-responsive">
        <table
          className="table table-bordered table-striped mx-auto"
          style={{ width: "80%" }}
        >
          <thead>
            <tr>
              <th>Account Number</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {accounts &&
              accounts.map((account: any, index) => (
                <tr key={index}>
                  <td>{account.accountNumber}</td>
                  <td>{account.balance}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      
    </div>
  );
};

export default Home;
