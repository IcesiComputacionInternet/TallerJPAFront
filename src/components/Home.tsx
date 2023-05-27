import { useState } from "react";
import axios from "axios";
const baseUrl = "http://localhost:8090";

interface Props {
  setLogin: (value: boolean) => void;
}

interface AccountsDTO {
  number: string;
  balance: number;
}

const Home = ({ setLogin }: Props) => {
  const [accounts, setAccounts] = useState<AccountsDTO[]>([]);

  const getData = async () => {
    const { data } = await axios.get(`${baseUrl}/accounts/allAccounts`, {
      headers: {
        "Access-Control-Allow-Origin": baseUrl,
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    });
    console.log("Cuentas");
    console.log(data);
    setAccounts(data);
  };

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
          style={{ marginTop: "10px" }}
        >
          Salir
        </button>
      </div>

      <div className="text-left">
        <button
          type="button"
          className="btn btn-primary rounded"
          onClick={getData}
          style={{ marginTop: "10px",marginBottom:"10px" }}
        >
          Obtener cuentas
        </button>
      </div>

      <div>
        <ul className="list-group">
          {accounts.map((account, index) => (
            <li key={index} className="list-group-item">
              Cuenta {account.number}, Saldo: ${account.balance.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
