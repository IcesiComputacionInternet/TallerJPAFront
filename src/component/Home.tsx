import { Navbar, Nav, Button } from 'react-bootstrap';
import {NavigateFunction, useNavigate} from "react-router-dom";
import Account from "./Account";
import axios from "axios";
import { useState, useEffect } from 'react';
const baseUrl = "http://localhost:8080";

function Home(){
  const [accounts, setAccounts] = useState<any[]>([]);
  const navigation : NavigateFunction = useNavigate();
  const getAccounts = async () => {
    try{
      const response = await axios.get(
        baseUrl + "/icesi_accounts",
        {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        }
      );
      return response.data
    }catch(error) {
      console.error("Error fetching accounts:", error);
      return null;
    }
  }

  useEffect(() => {
    getAccounts()
      .then((data) => {
        setAccounts(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const handleLogout = () => {
      localStorage.removeItem("jwt");
      localStorage.setItem("logged_user", JSON.stringify(false));
      navigation("/login");
    };

  return (
    <>
      <Navbar bg="light" expand="lg" style={{ padding: '10px' }}>
        <Navbar.Brand>TallerJPA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>Home</Nav.Link>
          </Nav>
          <Button variant="primary" onClick={handleLogout}>
            Logout
          </Button>
        </Navbar.Collapse>
      </Navbar>
    <div className="d-flex justify-content-center">
      <div className="d-flex flex-column justify-content-center">
      {accounts.map((item) => (
        <Account accountNumber={item.accountNumber} balance={item.balance} key={item.accountNumber}/>
      ))}
      </div>
    </div>
    </>
  );
}

export default Home;