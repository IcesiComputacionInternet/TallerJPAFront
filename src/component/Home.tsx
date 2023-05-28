import { Navbar, Nav, Button } from 'react-bootstrap';
import {NavigateFunction, useNavigate} from "react-router-dom";

function Home(){
    const navigation : NavigateFunction = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("jwt");
        localStorage.setItem("logged_user", JSON.stringify(false));
        navigation("/login");
      };

    return (
        <Navbar bg="light" expand="lg" style={{ padding: '10px' }}>
        <Navbar.Brand href="#">TallerJPA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
          </Nav>
          <Button variant="primary" onClick={handleLogout}>
            Logout
          </Button>
        </Navbar.Collapse>
      </Navbar>
    );
}

export default Home;