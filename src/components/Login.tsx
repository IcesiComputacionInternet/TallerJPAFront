import { useForm } from "react-hook-form";
import axios from "axios";
import { NavigateFunction, useNavigate } from "react-router-dom";
const baseUrl = "http://localhost:8090";


interface Props {
  setLogin: (value: boolean) => void;
}
const Login = ({ setLogin }: Props) => {

    const { register, handleSubmit } = useForm({
        defaultValues: {
            username: "",
            password: "",
        }
    });

    const navigation: NavigateFunction = useNavigate();

    const onSubmit = async (event: any) =>{

        //console.log(event)

        const { data } = await axios.post(
            `${baseUrl}/token`,

            {
                username: event.username,
                password: event.password,
            },

            {
                headers: {
                    "Access-Control-Allow-Origin": baseUrl
                }
            }
        )
        
        //console.log(data)

        if (data.token) {
            //console.log("Creando variables en local storage")
            localStorage.setItem("jwt", data.token);
            localStorage.setItem("emailUser",event.username);
            setLogin(true);
            navigation("/");
            
        }else{
            alert("Usuario o contraseña incorrectos")
        }
    }
    

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6" style={{marginTop:"20px"}}>
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Login</h3>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <input
                        {...register("username")}
                        type="text"
                        className="form-control"
                        placeholder="Username"
                    />
                </div>
                <div className="form-group">
                    <input
                        {...register("password")}
                        type="password"
                        className="form-control"
                        placeholder="Password"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

