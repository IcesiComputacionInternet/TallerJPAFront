import Table from "react-bootstrap/Table";
import homeServices from "../../services/homeService";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import React from "react";

const Home = () => {
  const [accounts, setAccounts] = useState([]);
  useEffect(() => {
    homeServices.getAccounts().then((res) => {
      if (res) {
        setAccounts(res.data);
      }
    });
  }, []);
  const onLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };
  return (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Numero de cuenta</th>
            <th>Balance</th>
            <th>Tipo</th>
            <th>Estado</th>
            <th>Usuario</th>
          </tr>
        </thead>
        <tbody>
          {accounts &&
            accounts.map((account: any) => (
              <React.Fragment key={account.accountId}>
                <tr>
                  <td>{account.accountNumber}</td>
                  <td>{account.balance}</td>
                  <td>{account.type}</td>
                  <td>{account.active ? "Activa" : "Inactiva"}</td>
                  <td>{account.icesiUser.firstName}</td>
                </tr>
              </React.Fragment>
            ))}
        </tbody>
      </Table>
      <Button variant="secondary" onClick={onLogout}>
        Log out
      </Button>{" "}
    </>
  );
};
export default Home;