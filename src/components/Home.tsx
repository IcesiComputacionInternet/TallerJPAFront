import { useEffect, useState} from "react";
import axios from "axios";
import { NavigateFunction, useNavigate } from "react-router-dom";

const baseUrl = "http://localhost:8080";

function Home (){

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [accounts, setAccounts] = useState([]);
    const navigation : NavigateFunction = useNavigate();

    const isSelected = function(index: number){
        return selectedIndex === index
        ? "list-group-item active" 
        : "list-group-item";
    };

    useEffect(() => {
        async function fetchData() {
            try{
                const result = await getData();
                setAccounts(result);

            }catch(error){
                console.log("Error")
            }
        }
        fetchData();
    }, []);  
    
    const handleClick = async (event: any) => {

        event.preventDefault();
        
        navigation("/login");

        localStorage.removeItem('jwt');
        localStorage.setItem('logged_user', "false");
        
    };

    return (
        <>
          <h2>Cuentas bancarias del usuario con su respectivo balance</h2>
          <br />
          <ul className="list-group">
            {accounts.map((item, index) => (
                <div 
                    key = {item}
                    onClick = {(e) => setSelectedIndex(index)}
                    className={isSelected(index)}>
                    <div className="card-header">
                    Cuenta #{index+1}
                    </div>
                    <div className="card-body">
                        <blockquote className="blockquote mb-0">
                        <p> {item} </p>
                        </blockquote>
                    </div>
                </div>
            ))}
          </ul>
          <br />
          <button onClick={handleClick} className="btn btn-primary">LogOut</button>
        </>
      );
      
}

async function getData() {

    const { data } = await axios.get(
            
        baseUrl + "/users/getAccounts/",
        {
            headers: {
                "Access-Control-Allow-Origin": baseUrl,
                "MediaType" : "application/json",
                "Authorization":"Bearer "+localStorage.getItem('jwt')
            }
        }
    )
    return data;

}
    
export default Home;


