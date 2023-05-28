import axios from "axios";
const baseURL = "http://localhost:8080";

function Home(){
   
    let token = localStorage.getItem('jwt');
    if(token==null){
        console.log(token);
       
        return(
        <>
            <h1>home</h1>
            <h2>No has iniciado sesion</h2>
        </>)
    }else{
        console.log(token);

        getData();
        return(<h1>home</h1>)
    }
    
}

async function getData(){
   
    const {data} =await axios.get(
        baseURL+"/users/currentUser",
        {
            headers: {
                "Access-Control-Allow-Origin": baseURL,
                "MediaType": "application/json",
                "Authorization": "Bearer "+localStorage.getItem('jwt')
            }
            
        }
    );
    console.log(data);
}

export default Home;