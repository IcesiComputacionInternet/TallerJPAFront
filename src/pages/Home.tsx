import axios from "axios";
import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";
import TableAccounts from "../components/TableAccounts";
const baseUrl = "http://localhost:8080";

const Home = () => {
  const [accounts, setAccounts] = useState([]) as any;
  useEffect(() => {
    const fectchData = async () => {
      const { data } = await axios.get(
        `${baseUrl}/accounts/${sessionStorage.getItem("username")}`,
        {
          headers: {
            "Access-Control-Allow-Origin": baseUrl,
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        }
      );
      if (data) {
        setAccounts(data);
      } else {
        alert("The user has no accounts");
      }
    };
    fectchData();
  }, []);

  return (
    <div>
      <header className="dark">
        <NavBar />
      </header>
      <main>
        {accounts.length === 0 ? (
          `No existen cuentas asociadas para el usuario ${sessionStorage.getItem(
            "username"
          )}`
        ) : (
          <TableAccounts accounts={accounts} />
        )}
      </main>
      <footer>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <p className="text-center">
                <small>
                  <a
                    href="https://github.com/JunaiCode"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none text-secondary"
                  >
                    @ByJunaicode
                  </a>
                </small>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;