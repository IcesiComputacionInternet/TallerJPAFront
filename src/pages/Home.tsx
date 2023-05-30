import React, { useEffect, useState } from 'react';
import {NavigateFunction, useNavigate} from "react-router-dom";
import { Account } from "../interfaces/Account";
import Table from '../components/Table';
import axios from 'axios';


const baseUrl = "http://localhost:8080";

const HomePage = () => {

  const token = localStorage.getItem("jwt");

  const navigation : NavigateFunction = useNavigate();

  const handleLogout =()=>{
    localStorage.clear
    navigation('/')
  }

  const[accounts, setAccounts] = React.useState<Account[]>([]);

  const columns = [
    {heading: 'Account Number', value: 'accountNumber'},
    {heading: 'Balance', value: 'balance'},
  ];
  
  
  
  useEffect(() => {
    axios.get(baseUrl+ '/accounts/all/user', {
        headers: {
          'Authorization': `Bearer ${token}`,          
        }
    })
    .then(response => {
      setAccounts(response.data)
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
  },[])
  

  return (
    <div className="Table">
      <h1>Accounts</h1>
      <Table data={accounts} column={columns}></Table>
      <button className='LogoutBtn' onClick={handleLogout}>Log Out</button>

    </div>
  )
    
};

export default HomePage;
