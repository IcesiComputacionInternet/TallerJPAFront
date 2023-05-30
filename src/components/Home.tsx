import { NavigateFunction, useNavigate } from "react-router-dom";

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
                            <h3>{welcome}</h3>
                            <small className="text-muted">By Santiago Arevalo</small>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={handleLogOut}
                            >
                                Log Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;