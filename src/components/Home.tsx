import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios"; 
import Account from "./Account.tsx";


function Home() {
    const [accounts, setAccounts] = useState<any[]>([]);


    useEffect(() => {
        const fetchAccounts = async () => {
            try {
              const token = localStorage.getItem("jwt"); // Retrieve the token from storage
              const response = await axios.get("http://localhost:9090/accounts/all", {
                headers: {
                  Authorization: "Bearer " +  token, // Include the token in the authorization header
                },
              });
              setAccounts(response.data);
            } catch (error) {
              console.error("Error fetching accounts:", error);
            }
          };
    
        fetchAccounts();
      }, []);

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
                </li>
            </ul>
        </nav>
    );
};

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    navigate("/login");
  };

  return (
    <>
    <div className="container">
        <h3 className="mt-4">Home</h3>
        <Navbar />
    </div>
    <div className="container-fluid mt-4">
        <div className="row">
            <div className="col-8 offset-2">
            {accounts.map((account) => (
        <Account key={account.accountId} number={account.accountNumber} balance={account.balance} />
        ))}
        <button onClick={handleLogout} className="btn btn-primary">Log out</button>
            </div>
        </div>
    </div>
    </>
  );

}

export default Home;
