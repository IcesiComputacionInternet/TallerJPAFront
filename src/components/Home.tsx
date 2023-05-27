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
    const { data } = await axios.get(
      `${baseUrl}/accounts/allAccounts`,
      {
        headers: {
            "Access-Control-Allow-Origin": baseUrl,
            Authorization: "Bearer " + localStorage.getItem("jwt"),
        }
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
    <>
      <button onClick={getData}>Obtener cuentas</button>
      <h1>Lista de cuentas del usuario: {localStorage.getItem("emailUser")}</h1>
      <div>
        <ul>
          {accounts.map((account, index) => (
            <li key={index}>
              Cuenta {account.number}, Saldo: ${account.balance.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
      <button onClick={onSubmitLogOut}>Salir</button>
    </>
  );
};

export default Home;
