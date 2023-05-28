import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";

import LoginService from "../../services/loginService";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (event: any) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const user = await LoginService.login({ username, password });
      localStorage.setItem("token", user.data);
      navigate("/home");
    } catch (e) {
      Swal.fire({
        icon: "error",
        title:
          '<span style="font-family: Arial, sans-serif;">Error al autenticar</span>',
        html: '<div style="font-family: Arial, sans-serif;">Usuario o contraseña incorrectos</div>',
      });
    }
  };
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="email"
          placeholder="username"
          onChange={handleUsernameChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={handlePasswordChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
};
export default Login;