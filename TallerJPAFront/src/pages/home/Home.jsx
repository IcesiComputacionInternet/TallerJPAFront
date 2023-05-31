import React, { useEffect, useState } from "react";
import { Container, TextField, Table,TableRow, TableBody, TableCell,TableHead, Button } from "@mui/material";
import AccountService from "../../services/AccountService";
import { useNavigate } from "react-router-dom";
import AuthenticationService from "../../services/AuthenticationService";

const Home = () => {
  const [accounts, setAccounts] = useState([]);
  const navigation = useNavigate()

  useEffect(() => {
    AccountService.getAllUser().then((response) => {
      setAccounts(response)
    });
  }, [])

  const handleLogout = () => {
    AuthenticationService.logout()
    navigation("/login")

  }

  return (
    <Container sx={{ mt: 9 }} maxWidth="xl">
      Home - Accounts List
      <Button onClick={handleLogout}>
        Logout
      </Button>
      <Table>
        <TableHead>
          <TableRow>
            {accounts[0] && Object.keys(accounts[0]).map((key) => (
              <TableCell key={key}>{key}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody> 
          {accounts.map((account, index) => (
            <TableRow key={index}>
              {Object.values(account).map((value, index) => (
                <TableCell key={index}>
                  {typeof value === 'boolean' ? (value ? 'Yes' : 'No') : value}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default Home