import axios from "axios";

//TODO: Change this URL to the URL of your backend
const URL_API = "http://localhost:8080/";

interface Credentials {
  username: string;
  password: string;
}

const login = (credentials: Credentials) => {
  return axios.post(`${URL_API}token`, credentials);
};

const logout = () => {
  localStorage.removeItem("token");
  window.location.href = "/";
};

const authServices = {
  login,
  logout,
};

export default authServices;