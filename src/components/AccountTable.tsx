import { useState, useEffect } from "react";
import axios from "axios";
const baseUrl = import.meta.env.VITE_URL_API;

interface accounts {
  accountNumber: String;
  balance: String;
}

export default function AccountTable() {
  const [items, setItems] = useState<(accounts | null)[]>([]);
  const token = localStorage.getItem("jwt");

//console.log(token)
  useEffect(() => {
    if(token){
        axios
      .get(baseUrl + "/account/getAccounts", {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` ,
          'Access-Control-Allow-Origin': baseUrl,
        },
      })
      .then((res) => {
        if (!(res.status === 200)) {
          //console.log(res.status)
          setItems([null]);
        }else{
          setItems(res.data);
        }
        
      });
    }else{
      //console.log("desde la tabla")
      alert("Something wen wrong")
    }
    
  }, []);
 
  return (
    
    <>
      {items ? (
        <>
          <h1 className="card-title">Your current Accounts</h1>
          <table className="table table-striped-columns">
            <thead>
              <tr>
                <th scope="col">Account Number</th>
                <th scope="col">Balance</th>
              </tr>
            </thead>
            <tbody>
                { items.map((item, index) =>(
                     <tr key={index}>
                        <td>{item?.accountNumber}</td>
                        <td>{item?.balance}</td>
                    </tr>
                ))}
            </tbody>
          </table>
        </>
      ) : null}
    </>
  );
}
