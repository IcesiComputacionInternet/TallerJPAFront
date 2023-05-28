import { useEffect, useState} from "react";
import axios from "axios";
import Logout from "./Logout"

const baseUrl = "http://localhost:8080";

function Home (){

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [accounts, setAccounts] = useState([]);

    const isSelected = function(index: number){
        return selectedIndex === index
        ? "list-group-item active" 
        : "list-group-item";
    };

    useEffect(() => {
        async function fetchData() {
            const result = await getData();
            setAccounts(result);
        }

        fetchData();
    }, []);  

    return (
        <>
          <h2>Your accounts</h2>
          <br />
          <ul className="list-group">
            {accounts.map((account, index) => (
                <div 
                    key = {account.accountNumber}
                    onClick = {(e) => setSelectedIndex(index)}
                    className={isSelected(index)}>
                    <div className="card-header">
                    Account #{index+1}
                    </div>
                    <div className="card-body">
                        <blockquote className="blockquote mb-0">
                        <p>Account number: {account.accountNumber}</p>
                        <p>Balance: ${account.balance}</p>
                        </blockquote>
                    </div>
                </div>
            ))}
          </ul>
          <br />
          <Logout />
          <br />
        </>
      );
      
}

async function getData() {

    const data = await axios.get(
            
        baseUrl + "/users/getAccounts/",
        {
            headers: {
                "Access-Control-Allow-Origin": baseUrl,
                "MediaType" : "application/json",
                "Authorization":"Bearer "+localStorage.getItem('jwt')
            }
        }
    )
    return data.data;

}
    
export default Home;


