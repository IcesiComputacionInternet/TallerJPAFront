import { useEffect, useState } from "react";
import axios from "axios";
import Login from "./components/Login";

const baseUrl = "http://localhost:8080";

function Message() {
  const [information, setInformation] = useState([]);
  let number = 1;

  useEffect(() => {
    getAccountInformation();
  }, []);

  async function getAccountInformation() {
    const { data } = await axios.get(baseUrl + "/accounts/getAccounts", {
      headers: {
        "Access-Control-Allow-Origin": baseUrl,
        MediaType: "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    });
    setInformation(data);
  }

  return (
    <div>
      <h1>Bienvenido</h1>
      <p>Estas son tus cuentas</p>
      <br />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Número de cuenta</th>
            <th scope="col">balance</th>
          </tr>
        </thead>
        <tbody>
          {information.map((value) => (
            <tr>
              <th scope="row">{number++}</th>
              <td>{value.accountNumber}</td>
              <td>$ {value.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
}

export default Message;
