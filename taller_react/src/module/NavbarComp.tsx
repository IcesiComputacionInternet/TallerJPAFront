import { NavigateFunction, useNavigate, Navigate, BrowserRouter as Router } from 'react-router-dom';

function navbar() {
  const navigation: NavigateFunction = useNavigate();

  function handleLogout() {
    localStorage.removeItem('jwt');
    navigation("/login");
  }

  return (
    <div className="container">
      <div className="container border">
        <nav className="navbar navbar" >
          <a className="navbar-brand">Bienvenido</a>
          <div className="d-flex">
            <button className="btn btn-outline-danger" type="button" onClick={handleLogout}>Log out</button>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default navbar;