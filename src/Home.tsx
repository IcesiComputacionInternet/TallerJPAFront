import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [userAccounts, setUserAccounts] = useState<any[]>([]);
  var listAccounts = [];

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    navigate("/login");
  };


  useEffect(() => {
    const fetchUserAccounts = async () => {
      try {

        const token = localStorage.getItem("jwt"); // Retrieve the token from storage

        const response = await axios.get('http://localhost:9090/Accounts/getAccounts', {
          headers: {
            Authorization: "Bearer " +  token, // Include the token in the authorization header
          },
        });
        setUserAccounts(response.data.userAccounts || []); // Handle empty response
        /*const response = await axios.get('http://localhost:9090/Accounts/getAccounts');
        setUserAccounts(response.data.userAccounts || []); // Handle empty response*/
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserAccounts(); 

  }, []);

  return (
    <div>
    <h1>Your accounts:</h1>
    {/* Display the user accounts */}
    {userAccounts.map((account) => (
      <div key={account.accountId} className='card text-bg-light p-3 mt-3'>
        <p className='h5 text-primary '>Account Number: {account.accountNumber}</p>
        <p className='h7 text-secondary'>Balance: {account.balance}</p>
      </div>
    ))}
    <button onClick={handleLogout} className='btn btn-primary mt-3'>Logout</button>
  </div>
  );
}

export default Home;