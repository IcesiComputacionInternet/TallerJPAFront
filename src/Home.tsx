import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [userAccounts, setUserAccounts] = useState([]);
  var listAccounts = [];

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
        console.log(response);
        console.log(userAccounts);
        /*const response = await axios.get('http://localhost:9090/Accounts/getAccounts');
        setUserAccounts(response.data.userAccounts || []); // Handle empty response*/
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserAccounts(); 

  }, []);

  console.log(Response);
  return (
    <div>
    <h1>Your accounts:</h1>
    {/* Display the user accounts */}
    {userAccounts.map((account) => (
      <div key={account.accountId}>
        <p>Account Number: {account.accountNumber}</p>
        <p>Balance: {account.balance}</p>
      </div>
    ))}
  </div>
  );
}

export default Home;