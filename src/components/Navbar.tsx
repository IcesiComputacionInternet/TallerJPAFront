import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
    return (
        <nav className="navbar navbar-expand navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <FontAwesomeIcon icon={faUserCircle} className="mr-2" />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <button className="btn btn-outline-danger" onClick={handleLogout}>
                                Logout
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
  }
  
  const handleLogout = () => {
    localStorage.removeItem("jwt");
    window.location.href = "/";
  }
  
  export default Navbar;