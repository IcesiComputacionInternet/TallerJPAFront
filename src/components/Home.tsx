import AccountTable from "./AccountTable";
import { NavigateFunction, useNavigate } from "react-router-dom";


interface Props{
  setLogOut: () => void;
    
}
export default function Home({setLogOut}:Props) {
  const navigation: NavigateFunction = useNavigate();
  const handleSingout = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("logged_user");
    setLogOut()
    navigation("/login");
  };

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              {<AccountTable /> ? (
                <AccountTable />
              ) : (
                <h1>Something went wrong!!</h1>
              )}
              <button
                type="button"
                className="btn btn-outline-danger"
                onClick={handleSingout}
              >
                Sing out
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
