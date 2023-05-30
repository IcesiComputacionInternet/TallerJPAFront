import { NavigateFunction, useNavigate } from "react-router-dom";
import AccountsList from "./AccountsList";

interface HomeProps {
    setLogOut: () => void;
    welcome: string;
}

function Home ({setLogOut, welcome}: HomeProps) {
    const navigation : NavigateFunction = useNavigate();
    const handleLogOut = () => {
        localStorage.removeItem("jwt");
        localStorage.removeItem("username");
        setLogOut();
        navigation("/login");
    };
    
    return (
        <>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h3>{welcome}</h3>
                            
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={handleLogOut}
                                >
                                    Log Out
                                </button>
                            </div>
                            {<AccountsList /> ? (
                                <AccountsList />
                            ) : (
                                <h3>No accounts found</h3>
                            )}
                            <small className="text-muted">Developed by Santiago Arevalo</small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;